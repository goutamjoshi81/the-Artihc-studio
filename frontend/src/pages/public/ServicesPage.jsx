import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ArrowRight, ArrowUpRight, Check, Compass, Sparkles } from 'lucide-react';

export default function ServicesPage() {
  const [activeDiscipline, setActiveDiscipline] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const disciplines = [
    {
      id: '01',
      tag: 'CIVIL • STRUCTURAL • BIOCLIMATIC',
      title: 'Monolithic Architecture & Structural Sanctuaries',
      spec: 'SPEC: TIRUPATI RED RIDGE GRANITE • 1:50 STRUCTURAL DOSSIER',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDKxCC3-NzlEwqMpQDmG-omVZBDLLtkzgtD1O0Dvg22gTU5PnGP2JpJXO7keKczsy-1ah8rZAvNyRlYjBBUTNghCdF7AsKa4guGccEjjznwfXT2yYLeE3tZArEdpU3i6iI50oGk8WV-7Oa-ZeusitGnOmXtPY-0TnlgpYMhIgKaOLflVsdJ75oKqQlz3vOjx3EdXjc-R7oRWjYeTmmlhEcHOPlwWhpHAjJiGvn_zg',
      localFallback: '/images/service_residential.jpg',
      lead: 'We sculpt private residences from the bedrock upwards, interrogating solar trajectories, seasonal wind vectors, and volumetric thermal masses.',
      deliverables: [
        'Topographical Site Interrogation & Solar Angle Modeling',
        'Volumetric Massing, Elevation Framing & 3D Spatial Visualizations',
        'Structural Engineering & Reinforced Concrete Framework Design',
        'Sanction Documentation, Municipal Permits & COA Compliance'
      ]
    },
    {
      id: '02',
      tag: 'SPATIAL FLOW • ACOUSTIC ENVELOPES • ILLUMINATION',
      title: 'Bespoke Interior Architecture & Volumetric Flow',
      spec: 'SPEC: NAVONA LIMESTONE & ACOUSTIC LIME WASH • ZERO SYNTHETIC POLYMERS',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAs_fb6UamXl_FLFohlRoubiWM29eAYuCDN5Bc5HnDutsmkteJkTed2bCOY2S1neic_juAjH_-sWOApxFfiSHVvZOOKCy-BtBwKfuda_4E0_Pd3vB1uDGdR3sy35L_PRIFef6dJaolbG-jG_XFRHFv7FeHVPbZdDflE1xt2hSur4stVVYaj2MRfpqI4HNfrYwYl2mc8uHJkw-dP8Ni1pt9jkIYfAHMI9W6U4kUe5w',
      localFallback: '/images/service_commercial.jpg',
      lead: 'Interiors conceived not as applied dressing, but as structural continuation. Double-height voids, flush ceiling plenums, and concealed illumination channels.',
      deliverables: [
        'Internal Elevation Drawings & Floorplate Spatial Sequences',
        'Concealed Architectural Lighting & 2700K Warm Nocturnal Schedules',
        'Monolithic Wet Area Architecture & Custom Carved Stone Vanities',
        'Curated Haute Furnishing & Rare European/Indian Art Placement'
      ]
    },
    {
      id: '03',
      tag: 'FINE TIMBER JOINERY • CAST BRONZE • STONE HEARTHS',
      title: 'Living Materiality & Micro-Joinery Engineering',
      spec: 'SPEC: QUARTER-SAWN FUMED OAK • ±0.5MM TOLERANCE',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBkSsvUpnvRzvrJehXPOzOEp0nvUPgCd3Ag9rWjnKPtnxRUzQvyxpcO9SzNBVxrvWQ6pmps-5eWIyOgOq5ONXy3wrFR7aeJSnKxrQbAqBnbYsC8u03vM1gcxEFvY4CaV2bWgdAMwr67O_nz2hTgHXF53rvJax6jtTHvQ_Jc_URE6K2_ZMAK46mUO2ekgowa3jQ8pFZ3Cj-mzF-qvi8nvXglFMy9B4V1wsdeQfzX5A',
      localFallback: '/images/service_millwork.jpg',
      lead: 'Every cabinet, pivot door, and credenza is engineered in our proprietary atelier workshop. No laminate veneers or prefabricated carcasses—only authentic joinery.',
      deliverables: [
        '1:1 Joinery Prototyping & Millwork Fabrication Blueprints',
        'Hand-Patinated Architectural Bronze Handles & Flush Pivot Hardware',
        'Vein-Matched Italian Marble & Granite Monolithic Countertops',
        'Traditional Cane Weave Screens & Acoustic Wood Slat Enclosures'
      ]
    },
    {
      id: '04',
      tag: 'SITE STEWARDSHIP • QA/QC GOVERNANCE • CLIENT HANDOVER',
      title: 'Turnkey Stewardship & White-Glove Handover',
      spec: 'SPEC: 48-POINT QA/QC TOLERANCE AUDIT • PRINCIPAL PARTNER SIGN-OFF',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDYH_dGvZpJnpqUZVm-_ha2KSLnZ9C6bHfSazIoT1SklgQGNVs3j763t9WPSVoVEp92kNML5uV9xZLWFaJSYe7IWsR8JciiPpFyQB3b7pIQQbJQF3zgBaeOn5MZPtNlE4yacPkiuI_AsLQEAy3pZl7Gd7hMqUQMw3RV5E7cxX5FiwedC-cbZ2B0VsQtMdyf_Gy-NiFTMZWXy6hJLtDDFBaqcpsGopxIYJJpNWqajQ',
      localFallback: '/images/service_turnkey.jpg',
      lead: 'Uncompromising execution oversight. A designated TAS resident architect manages contractors, verifies material batches, and conducts laser alignment audits.',
      deliverables: [
        'Full-Time On-Site Architectural Project Management & QA/QC',
        'Material Provenance & Quarry Authenticity Verification',
        'Contractor Milestone Auditing & Transparent Cost Ledger Control',
        'White-Glove Sanitization, Commissioning & Handover Ceremony'
      ]
    }
  ];

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

      {/* Interactive Four Master Disciplines (Accordions) */}
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
          {disciplines.map((item, idx) => {
            const isOpen = activeDiscipline === idx;
            return (
              <article key={item.id} className="bg-travertine border border-stoneBorder transition-all duration-300">
                <button
                  type="button"
                  onClick={() => setActiveDiscipline(isOpen ? -1 : idx)}
                  className="w-full text-left p-6 lg:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6 hover:bg-atelierCream/60 transition-colors"
                >
                  <div className="flex items-center gap-6">
                    <span className="font-sans text-[10px] tracking-[0.24em] text-bronze font-semibold uppercase">
                      SERVICE {item.id}
                    </span>
                    <h3 className="font-serif text-2xl lg:text-3xl text-monolithNoir font-normal">
                      {item.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-4 shrink-0">
                    <span className="font-sans text-[9px] tracking-[0.2em] text-monolithNoir/50 uppercase hidden sm:inline">
                      {item.tag}
                    </span>
                    <ChevronDown className={`w-5 h-5 text-bronze transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 lg:px-8 pb-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center hairline-t pt-6">
                    <div className="lg:col-span-6 relative aspect-[16/10] overflow-hidden bg-atelierCream border border-stoneBorder">
                      <img
                        className="w-full h-full object-cover"
                        alt={item.title}
                        src={item.image}
                        onError={(e) => { e.currentTarget.src = item.localFallback; }}
                      />
                      <div className="absolute bottom-3 left-3 bg-travertine/90 backdrop-blur-xs px-3 py-1 font-sans text-[8px] text-monolithNoir uppercase tracking-[0.22em] border border-stoneBorder">
                        {item.spec}
                      </div>
                    </div>

                    <div className="lg:col-span-6 space-y-6">
                      <p className="font-sans text-sm text-monolithNoir/80 leading-relaxed font-light">
                        {item.lead}
                      </p>

                      <div className="space-y-3">
                        <div className="text-[10px] tracking-[0.2em] uppercase text-bronze font-sans font-semibold">
                          HAUTE DELIVERABLES &amp; SCOPE
                        </div>
                        <ul className="space-y-2 font-sans text-xs text-monolithNoir/70">
                          {item.deliverables.map((del, dIdx) => (
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

      {/* 4-Stage Execution Methodology */}
      <section className="w-full px-6 lg:px-12 max-w-[1720px] mx-auto py-24 hairline-t">
        <div className="mb-14">
          <div className="text-[10px] tracking-[0.26em] uppercase text-bronze font-sans mb-2">RIGOROUS PROTOCOL</div>
          <h2 className="font-serif text-4xl font-light text-monolithNoir">Architectural Stewardship Roadmap</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {workflow.map((st) => (
            <div key={st.num} className="p-8 border border-stoneBorder bg-atelierCream/30 flex flex-col justify-between space-y-6">
              <div>
                <div className="font-mono text-xs text-bronze tracking-widest uppercase mb-4">{st.num}</div>
                <h3 className="font-serif text-xl text-monolithNoir font-normal mb-2">{st.title}</h3>
                <p className="font-sans text-xs text-monolithNoir/70 font-light leading-relaxed">{st.desc}</p>
              </div>
              <div className="pt-4 hairline-t text-[9px] tracking-widest uppercase text-monolithNoir/40 font-sans">
                PHASE MILESTONE
              </div>
            </div>
          ))}
        </div>

        {/* CTA to Commission */}
        <div className="mt-16 p-8 border border-monolithNoir bg-monolithNoir text-travertine flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-serif text-2xl">Engage Our Spatial Practice</h3>
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
