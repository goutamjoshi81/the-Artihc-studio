import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ArrowRight, ArrowUpRight, Check } from 'lucide-react';
import { studioStore } from '../../data/store';

export default function ServicesPage() {
  const [activeDiscipline, setActiveDiscipline] = useState(0);
  const [services, setServices] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const update = () => {
      setServices(studioStore.getServices());
    };
    update();
    return studioStore.subscribe(update);
  }, []);

  const workflow = [
    {
      num: 'STAGE 01',
      title: 'Site Interrogation & Topography',
      desc: 'Topographical surveying, solar zenith analysis, geothermal soil study, and patron brief synthesis.'
    },
    {
      num: 'STAGE 02',
      title: 'Volumetric Spatial Modeling',
      desc: 'Drafting structural axes, light apertures, 1:50 scale models, and internal elevation choreography.'
    },
    {
      num: 'STAGE 03',
      title: 'Tactile Material Engineering',
      desc: 'Specifying raw quarried stone blocks, fumed timber schedules, custom bronze casting, and joinery drawings.'
    },
    {
      num: 'STAGE 04',
      title: 'White-Glove On-Site Stewardship',
      desc: 'Daily resident architect audits, ±0.5mm tolerance QA/QC enforcement, and private keys handover.'
    }
  ];

  return (
    <main className="w-full pt-28 bg-travertine">
      {/* Top Subtle Datum Strip */}
      <section className="w-full px-6 lg:px-12 max-w-[1720px] mx-auto pt-6 pb-4">
        <div className="w-full flex flex-col md:flex-row md:items-center justify-between gap-4 py-2 hairline-b">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 bg-bronze rounded-full"></span>
            <span className="font-sans text-[10px] text-bronze uppercase tracking-[0.22em] font-semibold">
              02 / SERVICES — ARCHITECTURAL &amp; INTERIOR DESIGN
            </span>
          </div>
          <div className="flex items-center gap-6 text-[10px] tracking-[0.22em] uppercase font-sans text-monolithNoir/60">
            <span>END-TO-END ARCHITECTURAL AUTHORSHIP</span>
            <span className="hidden md:inline text-monolithNoir/30">•</span>
            <span className="hidden md:inline">TIRUPATI • BLR • HYD</span>
          </div>
        </div>
      </section>

      {/* Editorial Hero Section */}
      <section className="w-full px-6 lg:px-12 max-w-[1720px] mx-auto py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-baseline">
          <div className="lg:col-span-8 flex flex-col space-y-4">
            <span className="font-sans text-[10px] text-bronze uppercase tracking-[0.2em] font-semibold">
              OUR SERVICES &amp; EXPERTISE
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-[4.75rem] font-light leading-[1.05] tracking-tight text-monolithNoir max-w-4xl">
              Bespoke Architectural Conception to Micro-Crafted Millwork.
            </h1>
          </div>
          <div className="lg:col-span-4 flex flex-col space-y-4 border-t lg:border-t-0 lg:border-l border-stoneBorder pt-6 lg:pt-0 lg:pl-8">
            <p className="font-sans text-sm text-monolithNoir/70 font-light leading-relaxed">
              Operating at the intersection of structural engineering, tactile ergonomics, and bespoke interior craftsmanship. We author private sanctuaries of enduring stillness.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-bronze"></div>
              <span className="font-sans text-[9px] text-monolithNoir/60 uppercase tracking-[0.22em] font-medium">
                ISO 9001:2015 HAUTE SPECIFICATION
              </span>
            </div>
          </div>
        </div>

        {/* Architectural Metrics Band */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-stoneBorder">
          <div className="space-y-1">
            <div className="font-sans text-[9px] text-monolithNoir/50 uppercase tracking-[0.22em]">MATERIAL PURITY</div>
            <div className="font-serif text-2xl text-monolithNoir">100% Unlacquered</div>
            <div className="font-sans text-xs text-monolithNoir/60">Travertine, French Oak, Cast Bronze</div>
          </div>
          <div className="space-y-1">
            <div className="font-sans text-[9px] text-monolithNoir/50 uppercase tracking-[0.22em]">SCALE BAND</div>
            <div className="font-serif text-2xl text-monolithNoir">6,500 – 42,000 sq ft</div>
            <div className="font-sans text-xs text-monolithNoir/60">Palatial Res Publica &amp; Estates</div>
          </div>
          <div className="space-y-1">
            <div className="font-sans text-[9px] text-monolithNoir/50 uppercase tracking-[0.22em]">TOLERANCE SPEC</div>
            <div className="font-serif text-2xl text-monolithNoir">± 0.5 Millimeter</div>
            <div className="font-sans text-xs text-monolithNoir/60">Micro-calibrated joinery reveals</div>
          </div>
          <div className="space-y-1">
            <div className="font-sans text-[9px] text-monolithNoir/50 uppercase tracking-[0.22em]">GUILD PRESENCE</div>
            <div className="font-serif text-2xl text-monolithNoir">In-House Woodshop</div>
            <div className="font-sans text-xs text-monolithNoir/60">Master carvers &amp; stone masons</div>
          </div>
        </div>
      </section>

      {/* Interactive Master Disciplines (Accordions) */}
      <section className="w-full px-6 lg:px-12 max-w-[1720px] mx-auto py-20 hairline-t bg-atelierCream/40">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-2">
            <span className="font-sans text-[10px] text-bronze uppercase tracking-[0.2em] font-semibold">WHAT WE DO</span>
            <h2 className="font-serif text-4xl lg:text-5xl font-light text-monolithNoir">Our Core Services</h2>
          </div>
          <span className="font-sans text-[10px] text-monolithNoir/50 uppercase tracking-[0.22em]">
            CLICK ACCORDIONS TO INSPECT BLUEPRINTS &amp; DELIVERABLES
          </span>
        </div>

        <div className="space-y-4">
          {services.map((item, idx) => {
            const isOpen = activeDiscipline === idx;
            return (
              <article
                key={item.id}
                className="border border-stoneBorder bg-travertine transition-colors duration-300"
              >
                <button
                  onClick={() => setActiveDiscipline(isOpen ? -1 : idx)}
                  className="w-full text-left p-6 lg:p-8 flex items-center justify-between gap-4 focus:outline-hidden"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-baseline gap-6 lg:gap-12 flex-1">
                    <span className="font-serif text-2xl lg:text-3xl text-bronze/80 font-light">
                      {item.number || `0${idx + 1}`}
                    </span>
                    <div className="space-y-1 flex-1">
                      <div className="font-sans text-[9px] tracking-[0.24em] uppercase text-bronze font-semibold">
                        DISCIPLINE {item.number || `0${idx + 1}`}
                      </div>
                      <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl text-monolithNoir font-normal">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  <div className={`w-8 h-8 rounded-full border border-stoneBorder flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-monolithNoir text-travertine' : 'text-monolithNoir'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 lg:px-8 pb-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center hairline-t pt-6">
                    <div className="lg:col-span-6 relative aspect-[16/10] overflow-hidden bg-atelierCream border border-stoneBorder">
                      <img
                        className="w-full h-full object-cover"
                        alt={item.title}
                        src={item.image || '/images/service_residential.jpg'}
                        loading="lazy"
                      />
                      <div className="absolute bottom-3 left-3 bg-travertine/90 backdrop-blur-xs px-3 py-1 font-sans text-[8px] text-monolithNoir uppercase tracking-[0.22em] border border-stoneBorder">
                        SPEC: ARCHITECTURAL DOSSIER • 1:50
                      </div>
                    </div>

                    <div className="lg:col-span-6 space-y-6">
                      <p className="font-sans text-sm text-monolithNoir/80 leading-relaxed font-light">
                        {item.full_desc || item.short_desc}
                      </p>

                      <div className="space-y-3">
                        <div className="text-[10px] tracking-[0.2em] uppercase text-bronze font-sans font-semibold">
                          HAUTE DELIVERABLES &amp; SCOPE
                        </div>
                        <ul className="space-y-2 font-sans text-xs text-monolithNoir/70">
                          {(item.deliverables || []).map((del, dIdx) => (
                            <li key={dIdx} className="flex items-start gap-2.5">
                              <Check className="w-3.5 h-3.5 text-bronze mt-0.5 shrink-0" />
                              <span>{del}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </section>

      {/* The 4-Stage Architectural Methodology */}
      <section className="w-full px-6 lg:px-12 max-w-[1720px] mx-auto py-24 hairline-t">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-4">
          <div className="space-y-3">
            <span className="font-sans text-[10px] text-bronze uppercase tracking-[0.2em] font-semibold">
              THE METHODOLOGY
            </span>
            <h2 className="font-serif text-4xl lg:text-5xl font-light text-monolithNoir">
              Four Stages of Volumetric Conception.
            </h2>
          </div>
          <p className="font-sans text-xs text-monolithNoir/70 max-w-md font-light leading-relaxed">
            Every commission undergoes strict phase gates ensuring structural equilibrium, bioclimatic compliance, and uncompromising craft.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {workflow.map((st) => (
            <div key={st.num} className="p-8 bg-atelierCream border border-stoneBorder flex flex-col justify-between space-y-8">
              <span className="font-serif text-3xl text-bronze/70 font-light">{st.num}</span>
              <div className="space-y-3">
                <h3 className="font-serif text-xl text-monolithNoir font-normal">{st.title}</h3>
                <p className="font-sans text-xs text-monolithNoir/70 font-light leading-relaxed">
                  {st.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Inquiry CTA Banner */}
      <section className="w-full px-6 lg:px-12 max-w-[1720px] mx-auto pb-24">
        <div className="p-8 bg-monolithNoir text-travertine flex flex-col md:flex-row items-center justify-between gap-6 border border-stoneBorder">
          <div>
            <h3 className="font-serif text-2xl">Initiate a Spatial Commission</h3>
            <p className="text-xs text-travertine/60 font-sans mt-1">Accepting a restricted allocation of 12 commissions annually across South India.</p>
          </div>
          <Link
            to="/contact"
            className="px-8 py-3.5 bg-bronze text-travertine text-[10px] tracking-[0.24em] uppercase font-sans hover:bg-warmOchre hover:text-monolithNoir transition-colors shrink-0"
          >
            Schedule Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
