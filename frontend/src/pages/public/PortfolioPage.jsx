import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Grid, List, Sparkles } from 'lucide-react';
import { studioStore } from '../../data/store';

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('editorial'); // 'editorial' | 'technical'

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const monographs = [
    {
      id: 'TAS-01',
      plate: 'PLATE 01 • MONOLITHIC RESIDENCE',
      title: 'The Tirupati Ridge Sanctuary',
      slug: 'the-house-of-allay',
      category: 'residential',
      categoryName: 'Private Residential Estates',
      location: '13.6288° N • TIRUPATI',
      footprint: '9,200 SQ.FT • 2024',
      scale: '9,200 SQ.FT',
      year: '2024',
      materials: ['Honed Navona Travertine', 'Artisanal Cane Weave Screens', 'Basalt Flagstone'],
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDYH_dGvZpJnpqUZVm-_ha2KSLnZ9C6bHfSazIoT1SklgQGNVs3j763t9WPSVoVEp92kNML5uV9xZLWFaJSYe7IWsR8JciiPpFyQB3b7pIQQbJQF3zgBaeOn5MZPtNlE4yacPkiuI_AsLQEAy3pZl7Gd7hMqUQMw3RV5E7cxX5FiwedC-cbZ2B0VsQtMdyf_Gy-NiFTMZWXy6hJLtDDFBaqcpsGopxIYJJpNWqajQ',
      localFallback: '/images/allay_cover.jpg',
      aspect: 'lg:col-span-8 aspect-[16/10]',
      desc: 'Deep cantilevered travertine planes casting sculptural shadows across tranquil reflective water pools, framed against the dry granite peaks of Seshachalam.'
    },
    {
      id: 'TAS-02',
      plate: 'PLATE 02 • HIGH-ALTITUDE MONOGRAPH',
      title: 'Indiranagar Sky Sanctuary',
      slug: 'montique-residence',
      category: 'penthouse',
      categoryName: 'Duplex Penthouses',
      location: '12.9716° N • BANGALORE',
      footprint: '4,800 SQ.FT • 2024',
      scale: '4,800 SQ.FT',
      year: '2024',
      materials: ['Quarter-Sawn Fumed Oak', 'Honed Calacatta Marble', 'Patinated Bronze'],
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCC42JzAAH4u-Oe1ZUKqp1ghlTb0k8AqNyLVrR191fwt_cGpOLQBF-M7wwD7Ur0WPnsQDs-_gDiPlooxWwYVbJGwxz9CYSQKPZp9WxaEz6ZjEeTXo0toxvbBnanaP_SGcH-ZftEh4-L8zDyVcCPAM8DF_k3qVZBdlp9bN-UFExRxwgsHajDeEpqc5WXJd82dToIao54vz5Ehrd5r5T1G2F5EPuFIRjwcBtBsu5ldA',
      localFallback: '/images/montique_cover.jpg',
      aspect: 'lg:col-span-4 aspect-[4/5]',
      desc: 'Two-level sky duplex featuring continuous acoustic lime plaster ceilings and custom French oak millwork with concealed flush reveals.'
    },
    {
      id: 'TAS-03',
      plate: 'PLATE 03 • MONUMENTAL DUPLEX',
      title: 'The Alwal Duplex Residence',
      slug: 'azure-estate',
      category: 'penthouse',
      categoryName: 'Duplex Penthouses',
      location: '17.3850° N • HYDERABAD',
      footprint: '8,600 SQ.FT • 2024',
      scale: '8,600 SQ.FT',
      year: '2024',
      materials: ['Vein-Cut Travertine', 'Cast Antique Brass', 'Fumed Oak'],
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAs_fb6UamXl_FLFohlRoubiWM29eAYuCDN5Bc5HnDutsmkteJkTed2bCOY2S1neic_juAjH_-sWOApxFfiSHVvZOOKCy-BtBwKfuda_4E0_Pd3vB1uDGdR3sy35L_PRIFef6dJaolbG-jG_XFRHFv7FeHVPbZdDflE1xt2hSur4stVVYaj2MRfpqI4HNfrYwYl2mc8uHJkw-dP8Ni1pt9jkIYfAHMI9W6U4kUe5w',
      localFallback: '/images/azure_cover.jpg',
      aspect: 'lg:col-span-4 aspect-[4/5]',
      desc: 'Monumental limestone colonnades dividing formal entertaining halls from private family cloistered corridors.'
    },
    {
      id: 'TAS-04',
      plate: 'PLATE 04 • EXECUTIVE MONOGRAPH',
      title: 'The Atelier & Boardroom Gallery',
      slug: 'cerulean-retreat',
      category: 'workplace',
      categoryName: 'Executive Workplaces',
      location: '17.4325° N • JUBILEE HILLS',
      footprint: '6,500 SQ.FT • 2024',
      scale: '6,500 SQ.FT',
      year: '2024',
      materials: ['Solid Teak Lathed Portals', 'Raw Fluted Plaster', 'Acoustic Felt'],
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAS6bkmyeySbGVXM-RmXB8L439KNxa8vSvHmgsRmLLZE6zWPgJdt_1HB6fv_4lui9DEh5-uR20mm5EkIkTZv0MTEh_MuyYNv7mASghxYFl3SM4NdlvOhZgyws7382OW8o8yG_ywuXoVPMhmyxCZfrtdOAWQaCMI2uW6DcomGgQExwlNCAQUIfV8ses63LLlLUDarPxzxWbkdA1Wh1X5NngFAcEwmUtUlfdAI3kamA',
      localFallback: '/images/office_cover.jpg',
      aspect: 'lg:col-span-8 aspect-[16/10]',
      desc: 'Bespoke corporate sanctuary balancing boardroom gravitas with contemplative natural light wells and raw stone hearth.'
    },
    {
      id: 'TAS-05',
      plate: 'PLATE 05 • RESIDENTIAL RETREAT',
      title: 'Sesha Hills Villa Estate',
      slug: 'the-house-of-allay',
      category: 'residential',
      categoryName: 'Private Residential Estates',
      location: '13.6288° N • TIRUPATI',
      footprint: '11,200 SQ.FT • 2023',
      scale: '11,200 SQ.FT',
      year: '2023',
      materials: ['Granite Ashlar', 'Cane Weave', 'Honed Travertine'],
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCdWpBDYPDkKE4MCA2VBN8AGaNU9gkXcMzd3vAXjIQ8dAC-lmF4W6w7n9ywy4TmplGrhqelseCyEq_1Sjp2XvyytroDgUs0miDP7rPjGtZXeD6tHtJBf1N4wyuB70ubedbrWhzO1A8n_Q2M7LRYzQpl1pp7zzMldwJFEI-FX5TIo0j5SNNCLXU20omUvssH8l9uFUiW7RQBBKJ2gw1CXfBzwBSmF1r4XYIoh_3qUw',
      localFallback: '/images/hero_dusk_mansion.jpg',
      aspect: 'lg:col-span-6 aspect-[16/10]',
      desc: 'Courtyard architecture framing views of sacred granite peaks with sunken stone seating pavilions and private cloister corridors.'
    },
    {
      id: 'TAS-06',
      plate: 'PLATE 06 • BOUTIQUE HOSPITALITY',
      title: 'Karakambadi Pavilion Retreat',
      slug: 'bijou-residence',
      category: 'hospitality',
      categoryName: 'Bespoke Hospitality',
      location: '13.6500° N • TIRUPATI',
      footprint: '14,500 SQ.FT • 2024',
      scale: '14,500 SQ.FT',
      year: '2024',
      materials: ['Local Charnockite Stone', 'Teak Pillars', 'Clay Tile Roofs'],
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCbjuMY85fVzzhlgrYV15loL8falIOKtApGxCjcymqS_wy4lUTbYeeHYMgwp3Kg91EHp2NgKIyIjSZ9GUhz-jQqRcakO89DcgGdfRgNIJfbQagM__IgsHV-9JcQv7Im2I6_Gc-4lkeXpPeyXrsb5FE8KWgJ3rIMa0-9T2OlXIUQGprd5MSODK-2hicZGMmJEZbAP1ZnFJYdaKltk1p2b4zyW9vt3l_dE_VwHsIHMQ',
      localFallback: '/images/bijou_cover.jpg',
      aspect: 'lg:col-span-6 aspect-[16/10]',
      desc: 'Monolithic guest pavilions surrounding a central lotus court, engineered with bioclimatic wind chimneys.'
    }
  ];

  const filteredMonographs = selectedCategory === 'all'
    ? monographs
    : monographs.filter(m => m.category === selectedCategory);

  return (
    <main className="w-full pt-28 bg-travertine">
      {/* Top Editorial Header & Datum Matrix */}
      <section className="w-full px-6 lg:px-12 max-w-[1720px] mx-auto pt-6 pb-4">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-6 hairline-b">
          <div className="space-y-3 max-w-4xl">
            <div className="flex items-center gap-3">
              <span className="px-2 py-0.5 bg-atelierCream text-monolithNoir font-sans text-[10px] tracking-[0.22em] uppercase rounded-xs">
                PORTFOLIO
              </span>
              <span className="text-monolithNoir/60 font-sans text-[10px] tracking-[0.22em] uppercase">
                REGIONAL MODERNISM • S. INDIA
              </span>
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-[4.75rem] font-light leading-[1.05] tracking-tight text-monolithNoir">
              03 / PORTFOLIO — Selected Architectural &amp; Interior Projects
            </h1>
            <p className="font-serif text-xl sm:text-2xl text-bronze italic pt-1">
              Selected Projects &amp; Built Works
            </p>
          </div>

          <div className="flex flex-col items-start lg:items-end text-left lg:text-right space-y-1">
            <div className="font-sans text-[10px] text-monolithNoir/50 tracking-[0.22em] uppercase">
              CHRONOLOGICAL SCOPE
            </div>
            <div className="font-serif text-xl text-monolithNoir">
              MMXXI — MMXXV
            </div>
            <div className="font-sans text-[10px] text-bronze uppercase tracking-[0.18em]">
              13.6288° N • 12.9716° N • 17.3850° N
            </div>
          </div>
        </div>

        {/* Editorial Preface Strip */}
        <div className="py-6 bg-atelierCream px-8 mt-6 flex flex-col md:flex-row md:items-center justify-between gap-6 border border-stoneBorder">
          <p className="font-sans text-base text-monolithNoir max-w-2xl font-light italic">
            “Each plate represents an uncompromising dialogue between geographic memory, light, and tactile stone.”
          </p>
          <div className="flex items-center gap-3 text-monolithNoir/70 font-sans text-[10px] uppercase tracking-[0.18em]">
            <span className="w-2 h-2 rounded-full bg-bronze"></span>
            <span>ACCREDITED COA &amp; HAUTE SPECIFICATIONS</span>
          </div>
        </div>
      </section>

      {/* Filter & View Mode Controls */}
      <section className="sticky top-20 z-40 bg-travertine/95 backdrop-blur-md px-6 lg:px-12 max-w-[1720px] mx-auto py-4 hairline-b">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          {/* Typology Selector */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
            {[
              { id: 'all', label: 'ALL TYPOLOGIES' },
              { id: 'residential', label: 'PRIVATE RESIDENTIAL ESTATES' },
              { id: 'penthouse', label: 'DUPLEX PENTHOUSES' },
              { id: 'workplace', label: 'EXECUTIVE WORKPLACES' },
              { id: 'hospitality', label: 'BESPOKE HOSPITALITY' }
            ].map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 font-sans text-[10px] tracking-[0.18em] uppercase transition-colors whitespace-nowrap ${
                  selectedCategory === cat.id
                    ? 'bg-monolithNoir text-travertine font-medium'
                    : 'bg-atelierCream text-monolithNoir/70 hover:text-monolithNoir'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Mode Toggle Switch */}
          <div className="flex items-center self-end lg:self-auto bg-atelierCream p-1 border border-stoneBorder">
            <button
              onClick={() => setViewMode('editorial')}
              className={`flex items-center gap-2 px-3 py-1.5 font-sans text-[10px] uppercase tracking-[0.2em] transition-all ${
                viewMode === 'editorial'
                  ? 'bg-monolithNoir text-travertine shadow-xs'
                  : 'text-monolithNoir/70 hover:text-monolithNoir'
              }`}
            >
              <Grid className="w-3.5 h-3.5" />
              <span>EDITORIAL EXHIBITION</span>
            </button>
            <button
              onClick={() => setViewMode('technical')}
              className={`flex items-center gap-2 px-3 py-1.5 font-sans text-[10px] uppercase tracking-[0.2em] transition-all ${
                viewMode === 'technical'
                  ? 'bg-monolithNoir text-travertine shadow-xs'
                  : 'text-monolithNoir/70 hover:text-monolithNoir'
              }`}
            >
              <List className="w-3.5 h-3.5" />
              <span>TECHNICAL DOSSIER</span>
            </button>
          </div>
        </div>
      </section>

      {/* 1. EDITORIAL EXHIBITION GRID MODE */}
      {viewMode === 'editorial' && (
        <section className="w-full px-6 lg:px-12 max-w-[1720px] mx-auto py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
            {filteredMonographs.map((item) => (
              <article key={item.id} className={`${item.aspect} flex flex-col group border border-stoneBorder bg-atelierCream`}>
                <div className="relative w-full h-[340px] lg:h-[460px] overflow-hidden bg-atelierCream">
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    alt={item.title}
                    src={item.image}
                    onError={(e) => { e.currentTarget.src = item.localFallback; }}
                  />
                  <div className="absolute top-4 left-4 bg-monolithNoir/90 backdrop-blur-xs px-3 py-1 text-travertine font-sans text-[9px] tracking-[0.22em] uppercase">
                    {item.plate}
                  </div>
                  <div className="absolute bottom-4 right-4 bg-monolithNoir/85 backdrop-blur-xs px-3 py-1 text-warmOchre font-sans text-[9px] tracking-[0.22em] uppercase">
                    {item.location}
                  </div>
                </div>

                <div className="p-8 bg-travertine flex flex-col justify-between flex-1 hairline-t">
                  <div className="space-y-2">
                    <div className="flex flex-col lg:flex-row lg:items-baseline justify-between gap-2">
                      <h2 className="font-serif text-2xl lg:text-3xl text-monolithNoir font-normal">
                        {item.title}
                      </h2>
                      <div className="font-sans text-[10px] text-bronze tracking-[0.22em] uppercase">
                        {item.footprint}
                      </div>
                    </div>
                    <p className="font-sans text-xs text-monolithNoir/70 font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-6 hairline-t flex items-center justify-between">
                    <div className="flex flex-wrap items-center gap-2 text-[9px] uppercase tracking-wider text-monolithNoir/60 font-sans">
                      <span className="text-monolithNoir font-semibold">Materials:</span>
                      {item.materials.map((mat, i) => (
                        <span key={i}>
                          {mat} {i < item.materials.length - 1 && '• '}
                        </span>
                      ))}
                    </div>

                    <Link
                      to={`/portfolio/${item.slug}`}
                      className="inline-flex items-center gap-2 text-bronze text-[10px] tracking-[0.2em] uppercase font-sans font-medium hover:text-monolithNoir transition-colors shrink-0"
                    >
                      <span>View Monograph</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* 2. TECHNICAL DOSSIER MODE (Tabular High-Density View) */}
      {viewMode === 'technical' && (
        <section className="w-full px-6 lg:px-12 max-w-[1720px] mx-auto py-16">
          <div className="overflow-x-auto border border-stoneBorder bg-atelierCream">
            <table className="w-full text-left font-sans text-xs border-collapse">
              <thead>
                <tr className="hairline-b bg-monolithNoir text-travertine text-[10px] tracking-[0.22em] uppercase font-medium">
                  <th className="py-4 px-6">Dossier ID</th>
                  <th className="py-4 px-6">Monograph Title</th>
                  <th className="py-4 px-6">Typology Classification</th>
                  <th className="py-4 px-6">Geographic Locale</th>
                  <th className="py-4 px-6">Volumetric Footprint</th>
                  <th className="py-4 px-6">Primary Material Composition</th>
                  <th className="py-4 px-6 text-right">Technical Spec</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stoneBorder text-monolithNoir/80">
                {filteredMonographs.map((m) => (
                  <tr key={m.id} className="hover:bg-travertine transition-colors">
                    <td className="py-5 px-6 font-mono text-[11px] text-bronze">{m.id}</td>
                    <td className="py-5 px-6 font-serif text-base font-normal text-monolithNoir">{m.title}</td>
                    <td className="py-5 px-6 uppercase text-[10px] tracking-wider">{m.categoryName}</td>
                    <td className="py-5 px-6">{m.location}</td>
                    <td className="py-5 px-6 font-mono">{m.scale}</td>
                    <td className="py-5 px-6 text-monolithNoir/60">{m.materials.join(' • ')}</td>
                    <td className="py-5 px-6 text-right">
                      <Link to={`/portfolio/${m.slug}`} className="text-[10px] uppercase tracking-wider text-bronze underline">
                        Open Dossier
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* Inquire Bottom Bar */}
      <section className="w-full px-6 lg:px-12 max-w-[1720px] mx-auto pb-24">
        <div className="p-8 bg-monolithNoir text-travertine flex flex-col md:flex-row items-center justify-between gap-6 border border-stoneBorder">
          <div>
            <h3 className="font-serif text-2xl">Commission An Architectural Monograph</h3>
            <p className="text-xs text-travertine/60 font-sans mt-1">Accepting a restricted allocation of 12 commissions annually across South India.</p>
          </div>
          <Link
            to="/contact"
            className="px-8 py-3.5 bg-bronze text-travertine text-[10px] tracking-[0.24em] uppercase font-sans hover:bg-warmOchre hover:text-monolithNoir transition-colors shrink-0"
          >
            Start Commission Inquiry
          </Link>
        </div>
      </section>
    </main>
  );
}
