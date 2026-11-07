import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Compass, Sparkles } from 'lucide-react';

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const axioms = [
    {
      num: 'AXIOM 01',
      title: 'Volumetric Sincerity',
      subtitle: 'STRUCTURAL TRUTH',
      desc: 'We reject decorative cladding and artificial falsification. Every column, cantilever, and reveal exists as an unapologetic testament to structural equilibrium, thermal inertia, and the sheer poetic weight of geometry.'
    },
    {
      num: 'AXIOM 02',
      title: 'Lithic Permanence',
      subtitle: 'MATERIAL HONESTY',
      desc: 'Architecture must age with dignity. By selecting unlacquered navona stone, ancient granite ashlar, and hand-patinated living alloys, our built spaces deepen in tactile richness across decades of human inhabitation.'
    },
    {
      num: 'AXIOM 03',
      title: 'Climatic Resonance',
      subtitle: 'REGIONAL BIOCLIMATICS',
      desc: 'Rooted in the Deccan Plateau and Eastern Ghats microclimates, our envelopes breathe. Sunken courts, deep shading colonnades, and cross-ventilation plenums harvest breezes without reliance on synthetic mechanical loads.'
    }
  ];

  const timeline = [
    {
      year: '2018',
      title: 'The Seshachalam Foothills Inception',
      location: 'Tirupati Atelier',
      desc: 'Founded as an architectural laboratory exploring raw stone masonry, regional vernacular cooling, and unadorned residential sanctuaries.'
    },
    {
      year: '2020',
      title: 'Expansion to the Deccan High Plain',
      location: 'Bangalore Studio',
      desc: 'Established the Indiranagar atelier, integrating high-tolerance millwork workshops, acoustic timber fabrication, and sky duplex penthouses.'
    },
    {
      year: '2022',
      title: 'Monumental Commissions & Jubilee Hills',
      location: 'Hyderabad Atelier',
      desc: 'Inaugurated the Jubilee Hills seat to direct large-scale monolithic private villa estates and executive corporate sanctuaries.'
    },
    {
      year: '2024–2025',
      title: 'Codex Archivum: 180+ Completed Works',
      location: 'South India Practice',
      desc: 'Crossing ₹450 Cr+ in commissioned architectural assets while maintaining a strictly capped annual intake of 12 commissions.'
    }
  ];

  return (
    <main className="w-full pt-28 bg-travertine">
      {/* Top Dossier Meta Marker */}
      <section className="w-full px-6 lg:px-12 max-w-[1720px] mx-auto pt-6 pb-4">
        <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 hairline-b pb-4">
          <div className="flex items-center gap-3">
            <span className="font-sans text-[10px] tracking-[0.22em] uppercase text-bronze font-semibold">CODEX ARCHIVUM · VOL. VII</span>
            <span className="inline-block w-1.5 h-1.5 bg-bronze rounded-full"></span>
            <span className="font-sans text-[10px] tracking-[0.22em] uppercase text-monolithNoir/60">ATELIER CHRONICLE 2018–2025</span>
          </div>
          <div className="font-sans text-[10px] tracking-[0.22em] uppercase text-monolithNoir/60 flex items-center gap-4">
            <span>LOCATIONS: TIRUPATI · BANGALORE · HYDERABAD</span>
            <span className="hidden sm:inline text-bronze">●</span>
            <span className="hidden sm:inline font-medium text-monolithNoir">AUTEUR GRADE</span>
          </div>
        </div>
      </section>

      {/* Title & Manifesto Editorial Spread */}
      <section className="w-full px-6 lg:px-12 max-w-[1720px] mx-auto py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-baseline">
          <div className="lg:col-span-8 space-y-4">
            <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-bronze font-semibold block">01 / ABOUT</span>
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-[4.75rem] font-light leading-[1.05] tracking-tight text-monolithNoir text-balance">
              The Architecture of Quietude &amp; Volumetric Truth.
            </h1>
          </div>
          <div className="lg:col-span-4 flex flex-col justify-end space-y-3 lg:pl-8 border-l-0 lg:border-l border-stoneBorder pt-6 lg:pt-0">
            <div className="font-sans text-[10px] tracking-[0.22em] uppercase text-monolithNoir/60">THE AUSTERE DOCTRINE</div>
            <p className="font-serif text-xl sm:text-2xl text-monolithNoir italic leading-relaxed">
              “We do not decorate voids; we sculpt sanctuaries where geological stillness converges with tectonic light.”
            </p>
          </div>
        </div>
      </section>

      {/* Hero Portrait & Studio Narrative Split */}
      <section className="w-full px-6 lg:px-12 max-w-[1720px] mx-auto pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Image Spread (Principals in Spatial Atelier) */}
          <div className="lg:col-span-7 flex flex-col space-y-2">
            <div className="relative w-full aspect-[4/5] overflow-hidden bg-atelierCream border border-stoneBorder">
              <img
                className="w-full h-full object-cover object-center filter grayscale contrast-105"
                alt="Founders V. Rao & A. Som in the Atelier"
                src="/images/about_atelier.jpg"
                onError={(e) => { e.currentTarget.src = '/images/about_atelier.jpg'; }}
              />
              <div className="absolute bottom-4 left-4 bg-travertine/90 backdrop-blur-md px-3.5 py-1.5 flex items-center gap-3 border border-stoneBorder">
                <span className="w-1.5 h-1.5 rounded-full bg-bronze"></span>
                <span className="font-sans text-[9px] tracking-[0.22em] uppercase text-monolithNoir font-medium">
                  V. RAO &amp; A. SOM · FOUNDING ATELIER PRINCIPALS
                </span>
              </div>
            </div>
            <div className="flex justify-between items-center pt-2 text-[9px] tracking-[0.2em] uppercase font-sans">
              <span className="text-monolithNoir/50">PLATE REF 01-A / ATELIER FOUNDERS</span>
              <span className="text-bronze">NATURAL DAYLIGHT CAPTURE</span>
            </div>
          </div>

          {/* Studio Narrative & Metric Ledger */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 lg:pl-8 border-t lg:border-t-0 lg:border-l border-stoneBorder pt-8 lg:pt-0">
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="font-sans text-[10px] tracking-[0.22em] uppercase text-bronze">PROVENANCE &amp; TERRITORY</span>
                <h2 className="font-serif text-3xl sm:text-4xl text-monolithNoir font-normal">
                  Carved from the Deccan Traps to the Eastern Ghats.
                </h2>
              </div>
              <div className="space-y-4 font-sans text-sm text-monolithNoir/70 font-light leading-relaxed">
                <p>
                  Incepted in the shadow of the Seshachalam hills in 2018, The Artihc Studio was founded as an intentional rebellion against rapid commercial pastiche. We treat architecture as an act of non-violence against the earth: deep volumetric massing, locally quarried porphyry and stone, and courtyards that inhale the south Indian monsoon wind.
                </p>
                <p>
                  Over seven continuous years, the atelier has expanded into three distinct geographic seats—Tirupati, Bangalore, and Hyderabad—each functioning as an experimental laboratory for stone carving, lime-pozzolana chemistry, and artisanal brass casting.
                </p>
              </div>
            </div>

            {/* Metric Ledger Cards */}
            <div className="grid grid-cols-3 gap-3 pt-8 border-t border-stoneBorder">
              <div className="p-4 bg-atelierCream/80 border border-stoneBorder flex flex-col justify-between">
                <span className="font-sans text-[9px] tracking-[0.2em] uppercase text-monolithNoir/50">FOUNDED</span>
                <span className="font-serif text-xl sm:text-2xl text-monolithNoir mt-2">EST. 2018</span>
                <span className="font-sans text-[9px] text-bronze tracking-widest mt-1">7 YRS RIGOR</span>
              </div>
              <div className="p-4 bg-atelierCream/80 border border-stoneBorder flex flex-col justify-between">
                <span className="font-sans text-[9px] tracking-[0.2em] uppercase text-monolithNoir/50">PHYSICAL HUBS</span>
                <span className="font-serif text-xl sm:text-2xl text-monolithNoir mt-2">03 SEATS</span>
                <span className="font-sans text-[9px] text-bronze tracking-widest mt-1">TIR • BLR • HYD</span>
              </div>
              <div className="p-4 bg-atelierCream/80 border border-stoneBorder flex flex-col justify-between">
                <span className="font-sans text-[9px] tracking-[0.2em] uppercase text-monolithNoir/50">BUILT MASS</span>
                <span className="font-serif text-xl sm:text-2xl text-monolithNoir mt-2">₹450 Cr+</span>
                <span className="font-sans text-[9px] text-bronze tracking-widest mt-1">COMMISSIONED</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Tectonic Trinity (Core Principles) */}
      <section className="w-full px-6 lg:px-12 max-w-[1720px] mx-auto py-24 hairline-t bg-atelierCream/40">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between pb-12 hairline-b gap-4">
          <div className="space-y-2">
            <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-bronze">FOUNDATIONAL AXIOMS</span>
            <h2 className="font-serif text-4xl lg:text-5xl font-light text-monolithNoir">The Tectonic Trinity</h2>
          </div>
          <p className="font-sans text-xs text-monolithNoir/70 max-w-md font-light leading-relaxed">
            Three non-negotiable architectural mandates governing every contour line, sill height, and joint junction drawn within the studio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
          {axioms.map((ax) => (
            <div key={ax.num} className="p-8 bg-travertine border border-stoneBorder flex flex-col justify-between space-y-6 hover:border-monolithNoir transition-colors">
              <div>
                <div className="flex items-center justify-between text-[10px] tracking-[0.24em] uppercase text-bronze font-sans mb-4">
                  <span>{ax.num}</span>
                  <span className="text-monolithNoir/40">{ax.subtitle}</span>
                </div>
                <h3 className="font-serif text-2xl text-monolithNoir font-normal mb-3">
                  {ax.title}
                </h3>
                <p className="font-sans text-xs text-monolithNoir/70 font-light leading-relaxed">
                  {ax.desc}
                </p>
              </div>
              <div className="pt-4 hairline-t text-[9px] tracking-widest uppercase text-bronze font-sans">
                MANDATE VERIFIED • AUTEUR RIGOR
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Chronology & Milestones */}
      <section className="w-full px-6 lg:px-12 max-w-[1720px] mx-auto py-24 hairline-t">
        <div className="mb-12">
          <div className="text-[10px] tracking-[0.26em] uppercase text-bronze font-sans mb-2">PROVENANCE TIMELINE</div>
          <h2 className="font-serif text-4xl font-light text-monolithNoir">Chronicle of Practice</h2>
        </div>

        <div className="space-y-6">
          {timeline.map((item, idx) => (
            <div key={item.year} className="p-8 border border-stoneBorder bg-atelierCream/30 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-2 font-mono text-2xl text-bronze font-light">
                {item.year}
              </div>
              <div className="md:col-span-4">
                <div className="text-[9px] tracking-widest uppercase text-monolithNoir/50 font-sans">{item.location}</div>
                <h3 className="font-serif text-xl text-monolithNoir mt-0.5">{item.title}</h3>
              </div>
              <div className="md:col-span-6 font-sans text-xs text-monolithNoir/70 font-light leading-relaxed">
                {item.desc}
              </div>
            </div>
          ))}
        </div>

        {/* CTA to Commission */}
        <div className="mt-16 p-8 border border-monolithNoir bg-monolithNoir text-travertine flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-serif text-2xl">Commission an Architectural Sanctuary</h3>
            <p className="text-xs text-travertine/60 font-sans mt-1">Direct consultation with Principal Architects V. Rao and A. Som.</p>
          </div>
          <Link
            to="/contact"
            className="px-8 py-3.5 bg-bronze text-travertine text-[10px] tracking-[0.22em] uppercase font-sans hover:bg-warmOchre hover:text-monolithNoir transition-colors shrink-0"
          >
            Start Project Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
