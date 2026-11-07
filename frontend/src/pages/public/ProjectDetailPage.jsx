import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ArrowUpRight, FileText, MoveHorizontal, Compass, Sparkles } from 'lucide-react';
import { studioStore } from '../../data/store';

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [nextProject, setNextProject] = useState(null);
  const [sliderPos, setSliderPos] = useState(50);

  useEffect(() => {
    window.scrollTo(0, 0);
    const proj = studioStore.getProjectBySlug(slug);
    setProject(proj);

    if (proj) {
      const all = studioStore.getProjects('all');
      const currentIndex = all.findIndex(p => p.slug === slug);
      const nextIndex = (currentIndex + 1) % all.length;
      setNextProject(all[nextIndex]);
    }
  }, [slug]);

  if (!project) {
    return (
      <main className="w-full pt-36 pb-24 bg-travertine min-h-screen">
        <div className="max-w-2xl mx-auto text-center px-6">
          <span className="font-sans text-[10px] tracking-[0.24em] uppercase text-bronze font-semibold block mb-4">
            PROJECT NOT FOUND
          </span>
          <h1 className="font-serif text-4xl text-monolithNoir mb-4">
            Monograph Record Unavailable
          </h1>
          <p className="font-sans text-xs text-monolithNoir/70 mb-8">
            The requested monograph could not be located in the current studio archives.
          </p>
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 px-6 py-3 bg-monolithNoir text-travertine text-[10px] tracking-[0.2em] uppercase font-sans hover:bg-bronze transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Portfolio</span>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="w-full pt-28 bg-travertine">
      {/* Top Dossier Breadcrumb Strip */}
      <section className="w-full px-6 lg:px-12 max-w-[1720px] mx-auto pt-6 pb-4 hairline-b">
        <div className="flex items-center justify-between">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 font-sans text-[10px] tracking-[0.2em] uppercase text-monolithNoir/70 hover:text-bronze transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Studio Archives</span>
          </Link>
          <div className="font-sans text-[10px] tracking-[0.22em] uppercase text-bronze">
            MONOGRAPH DOSSIER • {project.id ? `TAS-0${project.id}` : 'TAS-ARCH'}
          </div>
          {nextProject && (
            <Link
              to={`/portfolio/${nextProject.slug}`}
              className="inline-flex items-center gap-2 font-sans text-[10px] tracking-[0.2em] uppercase text-monolithNoir/70 hover:text-bronze transition-colors"
            >
              <span>Next Monograph</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          )}
        </div>
      </section>

      {/* Hero Header */}
      <section className="w-full px-6 lg:px-12 max-w-[1720px] mx-auto py-12">
        <div className="space-y-3 max-w-4xl">
          <div className="flex items-center gap-3">
            <span className="font-sans text-[10px] tracking-[0.26em] uppercase text-bronze font-semibold">
              PLATE 0{project.id || '1'} • {project.type || 'ARCHITECTURAL SANCTUARY'}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-bronze"></span>
            <span className="font-sans text-[10px] tracking-[0.22em] uppercase text-monolithNoir/60">
              {project.location}
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-[4.75rem] font-light leading-[1.05] tracking-tight text-monolithNoir">
            {project.title}
          </h1>
          <p className="font-sans text-sm text-monolithNoir/70 max-w-2xl font-light leading-relaxed pt-2">
            {project.short_desc || project.full_desc}
          </p>
        </div>
      </section>

      {/* Case Study Core Section */}
      <section className="w-full px-6 lg:px-12 max-w-[1720px] mx-auto pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Sticky Left Sidebar: Specifications */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-8 bg-atelierCream p-8 border border-stoneBorder">
            <div className="space-y-4">
              <div className="text-[9px] tracking-[0.24em] uppercase text-bronze font-sans font-semibold">
                Project Technical Dossier
              </div>
              <h3 className="font-serif text-2xl text-monolithNoir font-normal">{project.title}</h3>
              <p className="font-sans text-xs text-monolithNoir/70 font-light leading-relaxed">
                {project.full_desc || project.short_desc}
              </p>
            </div>

            <div className="space-y-3 font-sans text-xs divide-y divide-stoneBorder pt-2">
              <div className="flex justify-between py-2.5">
                <span className="text-monolithNoir/50 uppercase text-[10px] tracking-wider">Footprint</span>
                <span className="font-mono text-monolithNoir font-semibold">{project.area || '8,500 SQ.FT'}</span>
              </div>
              <div className="flex justify-between py-2.5">
                <span className="text-monolithNoir/50 uppercase text-[10px] tracking-wider">Completed</span>
                <span className="font-mono text-monolithNoir">{project.year || '2024'}</span>
              </div>
              <div className="flex justify-between py-2.5">
                <span className="text-monolithNoir/50 uppercase text-[10px] tracking-wider">Typology</span>
                <span className="text-monolithNoir">{project.type || 'Private Residence'}</span>
              </div>
              <div className="flex justify-between py-2.5">
                <span className="text-monolithNoir/50 uppercase text-[10px] tracking-wider">Scope</span>
                <span className="text-monolithNoir text-right">{project.scope || 'Comprehensive Architecture & Turnkey'}</span>
              </div>
              <div className="flex justify-between py-2.5">
                <span className="text-monolithNoir/50 uppercase text-[10px] tracking-wider">Commission Lead</span>
                <span className="text-monolithNoir font-medium">Principal Architect V. Rao</span>
              </div>
            </div>

            {/* Material Key Pills */}
            <div className="space-y-2 pt-2">
              <div className="text-[9px] tracking-[0.2em] uppercase text-bronze font-sans font-semibold">
                Curated Materials
              </div>
              <div className="flex flex-wrap gap-2">
                {(project.materials || ['Honed Navona Travertine', 'Fumed Oak', 'Cast Bronze']).map((m, i) => (
                  <span key={i} className="px-2.5 py-1 bg-travertine border border-stoneBorder text-[10px] text-monolithNoir/80 font-sans">
                    {m}
                  </span>
                ))}
              </div>
            </div>

            {/* Action */}
            <a
              href="/THE_ARTIHC_STUDIO_Client_Presentation.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 border border-monolithNoir bg-monolithNoir text-travertine text-[10px] tracking-[0.22em] uppercase font-sans hover:bg-bronze hover:border-bronze transition-colors flex items-center justify-center gap-2"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Download Dossier (PDF)</span>
            </a>
          </div>

          {/* Right Column: Visual Narrative & Gallery */}
          <div className="lg:col-span-8 space-y-12">
            {/* Main Featured Photo */}
            <div className="relative w-full aspect-[16/10] overflow-hidden border border-stoneBorder bg-atelierCream">
              <img
                src={project.cover_image || '/images/allay_cover.jpg'}
                alt={project.title}
                className="w-full h-full object-cover"
                onError={(e) => { e.currentTarget.src = '/images/allay_cover.jpg'; }}
              />
              <div className="absolute top-4 left-4 bg-monolithNoir/85 backdrop-blur-xs px-3 py-1 text-travertine font-sans text-[9px] tracking-[0.22em] uppercase">
                Primary Elevation Perspective
              </div>
            </div>

            {/* Interactive Blueprint-to-Reality Comparison Slider */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-[10px] tracking-[0.2em] uppercase font-sans text-monolithNoir/60">
                <span>Spatial Realization: Architectural Blueprint vs Built Reality</span>
                <span className="text-bronze font-medium">Drag slider to reveal built finish</span>
              </div>

              <div className="relative w-full aspect-[16/10] overflow-hidden border border-stoneBorder select-none group shadow-lg">
                <img
                  alt="Built Reality Finish"
                  className="absolute inset-0 w-full h-full object-cover"
                  src={project.gallery?.[0]?.image || project.cover_image || '/images/allay_gal1.jpg'}
                  onError={(e) => { e.currentTarget.src = '/images/allay_gal1.jpg'; }}
                />

                <div
                  className="absolute inset-y-0 left-0 overflow-hidden border-r-2 border-bronze bg-[#141412]"
                  style={{ width: `${sliderPos}%` }}
                >
                  <img
                    alt="CAD Blueprint Stage"
                    className="absolute inset-y-0 left-0 h-full max-w-none filter grayscale contrast-125 brightness-90 mix-blend-luminosity"
                    src="/images/allay_gal4.jpg"
                    style={{ width: '1200px' }}
                    onError={(e) => { e.currentTarget.src = '/images/allay_gal4.jpg'; }}
                  />
                  <div className="absolute inset-0 bg-[#0E0E0C]/80 mix-blend-multiply flex items-center justify-center">
                    <div className="text-center space-y-2 p-6 border border-white/20 bg-monolithNoir/70 backdrop-blur-xs">
                      <div className="text-travertine font-mono text-xs tracking-widest uppercase">CAD BLUEPRINT STAGE 03</div>
                      <div className="text-[9px] text-warmOchre tracking-[0.25em] uppercase font-sans">Volumetric Massing &amp; Structural Axes</div>
                    </div>
                  </div>
                </div>

                <div
                  className="absolute inset-y-0 -ml-4 flex items-center justify-center pointer-events-none"
                  style={{ left: `${sliderPos}%` }}
                >
                  <div className="w-8 h-8 rounded-full bg-monolithNoir border-2 border-warmOchre flex items-center justify-center text-travertine shadow-xl">
                    <MoveHorizontal className="w-3.5 h-3.5" />
                  </div>
                </div>

                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sliderPos}
                  onChange={(e) => setSliderPos(Number(e.target.value))}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
                  aria-label="Comparison slider"
                />
              </div>
            </div>

            {/* Gallery Plates */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {(project.gallery || [
                { title: 'Volumetric Living Colonnade', image: '/images/allay_gal1.jpg' },
                { title: 'Bespoke Joinery & Dining Console', image: '/images/allay_gal2.jpg' }
              ]).map((gal, idx) => (
                <div key={idx} className="relative aspect-[4/3] border border-stoneBorder overflow-hidden bg-atelierCream group">
                  <img
                    src={gal.image}
                    alt={gal.title || 'Architectural Plate'}
                    className="editorial-zoom w-full h-full object-cover"
                    onError={(e) => { e.currentTarget.src = '/images/allay_gal1.jpg'; }}
                  />
                  <div className="absolute bottom-3 left-3 bg-monolithNoir/85 backdrop-blur-xs px-3.5 py-1.5 text-travertine text-[9px] uppercase font-sans tracking-widest border border-white/10">
                    {gal.title || `Detail Plate 0${idx + 1}`}
                  </div>
                </div>
              ))}
            </div>

            {/* Commission CTA Bar */}
            <div className="p-8 border border-monolithNoir bg-monolithNoir text-travertine flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h4 className="font-serif text-2xl font-light">Commission A Similar Sanctuary</h4>
                <p className="font-sans text-xs text-travertine/60 mt-1">Discuss prospective land or penthouse footprints with our principal studio.</p>
              </div>
              <Link
                to={`/contact?project=${encodeURIComponent(project.title)}`}
                className="px-6 py-3 bg-bronze text-travertine text-[10px] tracking-[0.22em] uppercase font-sans hover:bg-warmOchre hover:text-monolithNoir transition-colors shrink-0"
              >
                Inquire Regarding This Project
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
