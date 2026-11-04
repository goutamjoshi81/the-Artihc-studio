import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ArrowUpRight, 
  Sparkles, 
  ChevronRight, 
  FileText, 
  MoveHorizontal, 
  Check, 
  MessageSquare,
  Shield,
  Layers,
  Compass
} from 'lucide-react';
import { studioStore } from '../../data/store';

export default function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 1. Portfolio View & Filter State
  const [viewMode, setViewMode] = useState('editorial'); // 'editorial' | 'blueprint'
  const [portfolioCategory, setPortfolioCategory] = useState('all');

  // 2. Material Lab State
  const materials = [
    {
      title: "Honed Navona Travertine",
      origin: "Quarried in Tivoli, Italy • Matte Finish",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBYX3_S5evT0FRnSLkxAPlF_JYgpyaHbf7dmoYVu2LVEf3HkG_tDLZQsrhph_frPyzWJ2LG9ygh_cnaw9dxjonLZIHqOEOX53P90RoLddP9vShOI0R0S8NJ4k5_GLoix8rptPpfB3633-PuzRH1R7yFT210y3MgreVSJ54Ru4Yj2FZnIng4r3-juTj7FNnz6ImxyxSAZCgbqpgZygt1UeXmHX99usEdD-i39hteeA",
      localFallback: "/images/allay_gal1.jpg",
      porosity: "2,480 kg/m³",
      lrv: "62% Diffuse",
      acoustic: "NRC 0.05 (Rigid)",
      patina: "High Tactility"
    },
    {
      title: "Quarter-Sawn Fumed Oak",
      origin: "Sustainable European Oak • Ammonia Fumed",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBkSsvUpnvRzvrJehXPOzOEp0nvUPgCd3Ag9rWjnKPtnxRUzQvyxpcO9SzNBVxrvWQ6pmps-5eWIyOgOq5ONXy3wrFR7aeJSnKxrQbAqBnbYsC8u03vM1gcxEFvY4CaV2bWgdAMwr67O_nz2hTgHXF53rvJax6jtTHvQ_Jc_URE6K2_ZMAK46mUO2ekgowa3jQ8pFZ3Cj-mzF-qvi8nvXglFMy9B4V1wsdeQfzX5A",
      localFallback: "/images/montique_gal1.jpg",
      porosity: "720 kg/m³",
      lrv: "28% Matte",
      acoustic: "NRC 0.12 (Warm)",
      patina: "Deep Amber Aging"
    },
    {
      title: "Hand-Patinated Bronze",
      origin: "Crafted in Hyderabad • Wax Buffed Finish",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuChJDewOFDC81LVTYvNtg3066vx5jIgHZhvug_TEyEkLRismUtQ70Gh0T29Xj7fklZKEhRl1L9n51RZzfzI2D6C-Pa-eo3d5jtpP9-ZdlAQGmUMfJ9kdFTw4p5NdnDf8Hi3pGaorlnno_ld6fTiiAY1vadZFfz9pEfI17ayuVa2BehgHlYkOa67p8_vxPrp8D3yCsNxRqhUjNUtGwjufaDs9nwpDrfjLUINGdquTw",
      localFallback: "/images/allay_gal2.jpg",
      porosity: "8,800 kg/m³",
      lrv: "44% Specular",
      acoustic: "Resonant",
      patina: "Natural Wax Finish"
    },
    {
      title: "Acoustic Lime Plaster",
      origin: "Slaked Italian Lime • Monolithic Troweled",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAPNNGcMy1VymsAKRRqfG6xUCAmIK7DY7cJHn2cvYonmcokyB8_gHkUXTcU4vroMzBmxR9hsftT3GS_jfDOLS0ZeZbhPRksIigiI2rQntkkgco0tgf6Icn2iDuMCD1IdAFaDOFyO2NIlhpLZEv1oQW9ZYPWPoT3uPffSsIDseigQhy8yAo41SGmQKAJTSNuYJ53zuAOdRYY0oo_QpSWjFwavPV6cAs5aaTtUU3Xkw",
      localFallback: "/images/allay_gal3.jpg",
      porosity: "1,650 kg/m³",
      lrv: "74% Velvet",
      acoustic: "NRC 0.45 (Absorptive)",
      patina: "Mineral Crystallization"
    }
  ];

  const [activeMaterialIdx, setActiveMaterialIdx] = useState(0);
  const [lighting, setLighting] = useState('morning'); // 'morning' | 'noon' | 'night'

  // 3. Comparison Slider State
  const [sliderPos, setSliderPos] = useState(50);

  // 4. Commission Form State
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedTypology, setSelectedTypology] = useState('Private Residential Villa');
  const [selectedCity, setSelectedCity] = useState('Hyderabad');
  const [sqft, setSqft] = useState('7,500 SQ.FT');
  const [selectedBudget, setSelectedBudget] = useState('₹3.5 Crore — ₹7.0 Crore');
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [clientNotes, setClientNotes] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleCommissionSubmit = (e) => {
    e.preventDefault();
    studioStore.submitEnquiry({
      name: clientName || 'Private Patron',
      phone: clientPhone || '+91 90000 00000',
      email: 'client@commission.com',
      project_type: selectedTypology,
      location: selectedCity,
      area: sqft,
      budget: selectedBudget,
      message: clientNotes || 'Inquiry initiated via Tectonic Atelier Concierge'
    });
    setFormSubmitted(true);
  };

  const activeMaterial = materials[activeMaterialIdx];

  const lightingStyles = {
    morning: {
      label: 'Morning East Light (4500K)',
      overlay: 'bg-amber-100/10 mix-blend-soft-light',
      filter: 'brightness-105 contrast-95'
    },
    noon: {
      label: 'Noon Solar Zenith (6500K)',
      overlay: 'bg-blue-50/10 mix-blend-color-dodge',
      filter: 'brightness-110 contrast-105'
    },
    night: {
      label: 'Nocturnal Ambient (2700K)',
      overlay: 'bg-amber-600/20 mix-blend-multiply',
      filter: 'brightness-90 contrast-110'
    }
  };

  const projects = [
    {
      id: 'TAS-01',
      title: 'The Alwal Duplex Residence',
      slug: 'the-house-of-allay',
      category: 'residential',
      categoryLabel: 'Duplex Penthouse',
      location: 'Hyderabad, TS',
      sqft: '8,600',
      year: '2024',
      materials: 'Navona Travertine • Fumed Oak',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAs_fb6UamXl_FLFohlRoubiWM29eAYuCDN5Bc5HnDutsmkteJkTed2bCOY2S1neic_juAjH_-sWOApxFfiSHVvZOOKCy-BtBwKfuda_4E0_Pd3vB1uDGdR3sy35L_PRIFef6dJaolbG-jG_XFRHFv7FeHVPbZdDflE1xt2hSur4stVVYaj2MRfpqI4HNfrYwYl2mc8uHJkw-dP8Ni1pt9jkIYfAHMI9W6U4kUe5w',
      localFallback: '/images/allay_cover.jpg',
      aspect: 'md:col-span-8 aspect-[16/10]',
      desc: 'Sculpted cantilevered staircase encased in fluted acoustic limestone plaster, monolithic basalt slabs, and bronze balustrades.'
    },
    {
      id: 'TAS-02',
      title: 'Indiranagar Sky Sanctuary',
      slug: 'montique-residence',
      category: 'penthouse',
      categoryLabel: 'Penthouse',
      location: 'Bangalore, KA',
      sqft: '4,800',
      year: '2024',
      materials: 'French Oak • Patinated Bronze',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCC42JzAAH4u-Oe1ZUKqp1ghlTb0k8AqNyLVrR191fwt_cGpOLQBF-M7wwD7Ur0WPnsQDs-_gDiPlooxWwYVbJGwxz9CYSQKPZp9WxaEz6ZjEeTXo0toxvbBnanaP_SGcH-ZftEh4-L8zDyVcCPAM8DF_k3qVZBdlp9bN-UFExRxwgsHajDeEpqc5WXJd82dToIao54vz5Ehrd5r5T1G2F5EPuFIRjwcBtBsu5ldA',
      localFallback: '/images/montique_cover.jpg',
      aspect: 'md:col-span-4 aspect-[4/5]',
      desc: 'Continuous fumed French oak floors balanced with polished Navona travertine kitchen island and warm diffuse perimeter clerestory light.'
    },
    {
      id: 'TAS-03',
      title: 'Sesha Hills Villa Estate',
      slug: 'azure-estate',
      category: 'residential',
      categoryLabel: 'Private Villa',
      location: 'Tirupati, AP',
      sqft: '11,200',
      year: '2023',
      materials: 'Granite Ashlar • Cane Weave',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCdWpBDYPDkKE4MCA2VBN8AGaNU9gkXcMzd3vAXjIQ8dAC-lmF4W6w7n9ywy4TmplGrhqelseCyEq_1Sjp2XvyytroDgUs0miDP7rPjGtZXeD6tHtJBf1N4wyuB70ubedbrWhzO1A8n_Q2M7LRYzQpl1pp7zzMldwJFEI-FX5TIo0j5SNNCLXU20omUvssH8l9uFUiW7RQBBKJ2gw1CXfBzwBSmF1r4XYIoh_3qUw',
      localFallback: '/images/azure_cover.jpg',
      aspect: 'md:col-span-4 aspect-[4/5]',
      desc: 'Courtyard architecture framing views of sacred granite peaks with sunken stone seating pavilions and private cloister corridors.'
    },
    {
      id: 'TAS-04',
      title: 'The Atelier & Boardroom Gallery',
      slug: 'cerulean-retreat',
      category: 'commercial',
      categoryLabel: 'Corporate Studio',
      location: 'Hyderabad, TS',
      sqft: '6,500',
      year: '2024',
      materials: 'Calacatta Oro • Antique Brass',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAS6bkmyeySbGVXM-RmXB8L439KNxa8vSvHmgsRmLLZE6zWPgJdt_1HB6fv_4lui9DEh5-uR20mm5EkIkTZv0MTEh_MuyYNv7mASghxYFl3SM4NdlvOhZgyws7382OW8o8yG_ywuXoVPMhmyxCZfrtdOAWQaCMI2uW6DcomGgQExwlNCAQUIfV8ses63LLlLUDarPxzxWbkdA1Wh1X5NngFAcEwmUtUlfdAI3kamA',
      localFallback: '/images/office_cover.jpg',
      aspect: 'md:col-span-8 aspect-[16/10]',
      desc: 'Bespoke timber millwork with concealed micro-perforated acoustic panels and hand-patinated bronze lighting portals.'
    }
  ];

  const filteredProjects = portfolioCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === portfolioCategory);

  return (
    <main className="w-full bg-travertine">
      {/* ========================================================================= */}
      {/* HERO SECTION (MONOLITHIC SPATIAL ENTRY)                                  */}
      {/* ========================================================================= */}
      <section className="relative pt-32 lg:pt-40 pb-20 px-6 lg:px-12 max-w-[1720px] mx-auto min-h-screen flex flex-col justify-between">
        {/* Grid Hairline Guides Background */}
        <div className="absolute inset-0 pointer-events-none px-6 lg:px-12 grid grid-cols-4 lg:grid-cols-12 gap-8 z-0">
          <div className="hairline-l h-full"></div>
          <div className="hairline-l h-full hidden lg:block"></div>
          <div className="hairline-l h-full hidden lg:block"></div>
          <div className="hairline-l h-full"></div>
          <div className="hairline-l h-full hidden lg:block"></div>
          <div className="hairline-l h-full hidden lg:block"></div>
          <div className="hairline-l h-full"></div>
          <div className="hairline-l h-full hidden lg:block"></div>
          <div className="hairline-l h-full hidden lg:block"></div>
          <div className="hairline-l h-full"></div>
          <div className="hairline-l h-full hidden lg:block"></div>
          <div className="hairline-l hairline-r h-full hidden lg:block"></div>
        </div>

        {/* Editorial Header Statement */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-16 pt-8">
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center gap-3 text-[10px] tracking-[0.28em] uppercase text-bronze font-sans font-semibold">
              <span className="inline-block w-8 h-[1px] bg-bronze"></span>
              <span>Architectural Sanctum • Volumetric Light &amp; Stone</span>
            </div>
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[5.75rem] font-light leading-[1.02] tracking-tight text-monolithNoir text-balance">
              Spaces sculpted by <span className="italic font-normal text-bronze">light</span>, proportion &amp; monolithic materiality.
            </h1>
          </div>

          <div className="lg:col-span-4 space-y-5 lg:pl-6 hairline-l">
            <p className="font-sans text-sm text-monolithNoir/70 font-light leading-relaxed">
              Operating across Tirupati, Bangalore, and Hyderabad. We conceive private residential estates, duplex penthouses, and crafted environments using raw travertine, fumed timber, and patinated bronze.
            </p>
            <div className="flex items-center gap-6 pt-2 text-[10px] tracking-[0.2em] uppercase font-sans text-monolithNoir/50">
              <div>
                <div className="text-monolithNoir font-medium text-xs font-mono">180+</div>
                <div>Sanctuaries Crafted</div>
              </div>
              <div className="hairline-l pl-6">
                <div className="text-monolithNoir font-medium text-xs font-mono">₹450 Cr+</div>
                <div>Asset Portfolio</div>
              </div>
              <div className="hairline-l pl-6">
                <div className="text-monolithNoir font-medium text-xs font-mono">3 Ateliers</div>
                <div>South India</div>
              </div>
            </div>
          </div>
        </div>

        {/* Monolithic Hero Visual Canvas with Ambient Lighting Frame */}
        <div className="relative z-10 w-full overflow-hidden bg-atelierCream border border-stoneBorder group shadow-xl">
          <div className="relative aspect-[16/9] lg:aspect-[21/9] w-full overflow-hidden">
            {/* Main Hero Architectural Showcase Image */}
            <img 
              alt="The Artihc Studio — Master Villa Suite in Cane Weave, Travertine & Natural Light" 
              className="editorial-zoom w-full h-full object-cover object-center filter saturate-[0.92] brightness-[0.97]" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbjuMY85fVzzhlgrYV15loL8falIOKtApGxCjcymqS_wy4lUTbYeeHYMgwp3Kg91EHp2NgKIyIjSZ9GUhz-jQqRcakO89DcgGdfRgNIJfbQagM__IgsHV-9JcQv7Im2I6_Gc-4lkeXpPeyXrsb5FE8KWgJ3rIMa0-9T2OlXIUQGprd5MSODK-2hicZGMmJEZbAP1ZnFJYdaKltk1p2b4zyW9vt3l_dE_VwHsIHMQ"
              onError={(e) => { e.currentTarget.src = '/images/hero_villa.jpg'; }}
            />
            {/* Cinematic Vignette & Ambient Layer */}
            <div className="absolute inset-0 bg-gradient-to-t from-monolithNoir/85 via-monolithNoir/25 to-black/10 pointer-events-none"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-monolithNoir/40 via-transparent to-monolithNoir/20 pointer-events-none"></div>

            {/* Monograph Spatial Stamp (Top Left) */}
            <div className="absolute top-6 left-6 lg:top-10 lg:left-10 flex items-center gap-3 bg-monolithNoir/85 backdrop-blur-md px-4 py-2 border border-white/10 text-travertine">
              <span className="w-2 h-2 rounded-full bg-bronze animate-pulse"></span>
              <span className="text-[10px] tracking-[0.24em] uppercase font-sans font-medium">Plate No. 01 — The Tirupati Ridge Estate</span>
            </div>

            {/* Spatial Scale Interactive Pill (Top Right) */}
            <div className="hidden sm:flex absolute top-6 right-6 lg:top-10 lg:right-10 items-center gap-3 bg-monolithNoir/75 backdrop-blur-md px-4 py-2 border border-white/10 text-travertine/90 text-[10px] tracking-[0.2em] uppercase font-sans">
              <span className="text-warmOchre font-mono">Scale 1:50</span>
              <span className="text-white/30">•</span>
              <span>9,200 SQ.FT</span>
              <span className="text-white/30">•</span>
              <span className="text-travertine font-medium">Tirupati Ridge Sanctuary</span>
            </div>

            {/* Technical Metadata HUD (Bottom) */}
            <div className="absolute bottom-6 inset-x-6 lg:bottom-10 lg:inset-x-10 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-5 text-travertine">
              <div className="space-y-1.5 max-w-xl">
                <div className="text-[10px] tracking-[0.3em] uppercase text-warmOchre font-sans font-semibold flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-warmOchre rounded-full"></span>
                  <span>Primary Residence • 9,200 SQ.FT • 2024</span>
                </div>
                <div className="font-serif text-2xl lg:text-4xl font-light tracking-wide leading-tight">The Pavilion of Cane &amp; Fluted Travertine</div>
                <p className="font-sans text-xs text-travertine/70 font-light hidden md:block">Seamless flow between sun-drenched colonnades, tactile fluted woodwork, and monolithic travertine surfaces.</p>
              </div>

              <div className="flex items-center gap-4 lg:gap-6 text-[10px] tracking-[0.2em] uppercase font-sans text-travertine/90 bg-monolithNoir/80 backdrop-blur-md px-5 py-3 border border-white/10 shadow-lg">
                <span>Natural Rattan</span>
                <span className="text-warmOchre/60">•</span>
                <span>Fumed French Oak</span>
                <span className="text-warmOchre/60">•</span>
                <span className="text-warmOchre font-medium">Honed Navona Stone</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 00. STUDIO NAVIGATION & DIRECTORY OVERVIEW                                */}
      {/* ========================================================================= */}
      <section className="py-20 px-6 lg:px-12 max-w-[1720px] mx-auto hairline-t">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <div className="text-[10px] tracking-[0.3em] uppercase text-bronze font-sans mb-3 flex items-center gap-2">
              <span>00</span>
              <span className="w-6 h-[1px] bg-bronze"></span>
              <span>Overview &amp; Directory</span>
            </div>
            <h2 className="font-serif text-3xl lg:text-4xl font-light text-monolithNoir">
              Studio Navigation &amp; Sections
            </h2>
          </div>
          <div className="text-xs font-sans text-monolithNoir/60 max-w-md font-light leading-relaxed">
            Direct access to our studio background, architectural services, completed projects archive, and consultation inquiries.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Passage 01: About / Manifesto */}
          <Link to="/about" className="group relative bg-atelierCream/40 border border-stoneBorder p-8 flex flex-col justify-between hover:bg-[#F8F6F1] hover:border-bronze transition-all duration-300 min-h-[320px]">
            <div>
              <div className="flex items-center justify-between text-[10px] tracking-[0.24em] uppercase text-bronze font-sans mb-6">
                <span>Section 01</span>
                <span className="font-mono text-monolithNoir/40">01/04</span>
              </div>
              <div className="text-[9px] tracking-[0.22em] uppercase text-monolithNoir/50 font-sans mb-2">Studio Philosophy &amp; Story</div>
              <h3 className="font-serif text-2xl text-monolithNoir font-normal leading-snug mb-3 group-hover:text-bronze transition-colors">
                About The Studio
              </h3>
              <p className="font-sans text-xs text-monolithNoir/70 font-light leading-relaxed">
                Our design philosophy, history, and focus on natural materials, light, and timeless architecture across South India.
              </p>
            </div>
            <div className="pt-8 hairline-t flex items-center justify-between text-[10px] tracking-[0.22em] uppercase font-sans text-monolithNoir group-hover:text-bronze transition-colors">
              <span className="font-medium">Learn About Us</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </Link>

          {/* Passage 02: Services / Disciplines */}
          <Link to="/services" className="group relative bg-atelierCream/40 border border-stoneBorder p-8 flex flex-col justify-between hover:bg-[#F8F6F1] hover:border-bronze transition-all duration-300 min-h-[320px]">
            <div>
              <div className="flex items-center justify-between text-[10px] tracking-[0.24em] uppercase text-bronze font-sans mb-6">
                <span>Section 02</span>
                <span className="font-mono text-monolithNoir/40">02/04</span>
              </div>
              <div className="text-[9px] tracking-[0.22em] uppercase text-monolithNoir/50 font-sans mb-2">What We Offer</div>
              <h3 className="font-serif text-2xl text-monolithNoir font-normal leading-snug mb-3 group-hover:text-bronze transition-colors">
                Architecture &amp; Interior Services
              </h3>
              <p className="font-sans text-xs text-monolithNoir/70 font-light leading-relaxed">
                Comprehensive architectural design, interior styling, custom joinery, and landscape architecture from concept to handover.
              </p>
            </div>
            <div className="pt-8 hairline-t flex items-center justify-between text-[10px] tracking-[0.22em] uppercase font-sans text-monolithNoir group-hover:text-bronze transition-colors">
              <span className="font-medium">View Services</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </Link>

          {/* Passage 03: Monographs / Portfolio */}
          <Link to="/portfolio" className="group relative bg-atelierCream/40 border border-stoneBorder p-8 flex flex-col justify-between hover:bg-[#F8F6F1] hover:border-bronze transition-all duration-300 min-h-[320px]">
            <div>
              <div className="flex items-center justify-between text-[10px] tracking-[0.24em] uppercase text-bronze font-sans mb-6">
                <span>Section 03</span>
                <span className="font-mono text-monolithNoir/40">03/04</span>
              </div>
              <div className="text-[9px] tracking-[0.22em] uppercase text-monolithNoir/50 font-sans mb-2">Featured Works &amp; Projects</div>
              <h3 className="font-serif text-2xl text-monolithNoir font-normal leading-snug mb-3 group-hover:text-bronze transition-colors">
                Portfolio of 180+ Homes
              </h3>
              <p className="font-sans text-xs text-monolithNoir/70 font-light leading-relaxed">
                Browse completed villa residences, luxury duplex penthouses, and private estates across South India.
              </p>
            </div>
            <div className="pt-8 hairline-t flex items-center justify-between text-[10px] tracking-[0.22em] uppercase font-sans text-monolithNoir group-hover:text-bronze transition-colors">
              <span className="font-medium">Explore Portfolio</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </Link>

          {/* Passage 04: Commission Concierge / Contact */}
          <Link to="/contact" className="group relative bg-atelierCream/40 border border-stoneBorder p-8 flex flex-col justify-between hover:bg-[#F8F6F1] hover:border-bronze transition-all duration-300 min-h-[320px]">
            <div>
              <div className="flex items-center justify-between text-[10px] tracking-[0.24em] uppercase text-bronze font-sans mb-6">
                <span>Section 04</span>
                <span className="font-mono text-monolithNoir/40">04/04</span>
              </div>
              <div className="text-[9px] tracking-[0.22em] uppercase text-monolithNoir/50 font-sans mb-2">Consultation &amp; Inquiries</div>
              <h3 className="font-serif text-2xl text-monolithNoir font-normal leading-snug mb-3 group-hover:text-bronze transition-colors">
                Contact Our Studio
              </h3>
              <p className="font-sans text-xs text-monolithNoir/70 font-light leading-relaxed">
                Discuss your prospective residential project with our principal architectural teams in Hyderabad, Bangalore, or Tirupati.
              </p>
            </div>
            <div className="pt-8 hairline-t flex items-center justify-between text-[10px] tracking-[0.22em] uppercase font-sans text-monolithNoir group-hover:text-bronze transition-colors">
              <span className="font-medium">Get In Touch</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </Link>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 01. ASYMMETRICAL PORTFOLIO MONOGRAPH GALLERY                              */}
      {/* ========================================================================= */}
      <section className="py-24 px-6 lg:px-12 max-w-[1720px] mx-auto hairline-t" id="portfolio">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 gap-6">
          <div>
            <div className="text-[10px] tracking-[0.3em] uppercase text-bronze font-sans mb-3 flex items-center gap-2">
              <span>01</span>
              <span className="w-6 h-[1px] bg-bronze"></span>
              <span>Portfolio</span>
            </div>
            <h2 className="font-serif text-4xl lg:text-5xl font-light text-monolithNoir">
              Featured Architectural Projects
            </h2>
          </div>

          {/* Gallery Mode & Filter Controls */}
          <div className="flex flex-wrap items-center gap-4 text-[10px] tracking-[0.2em] uppercase font-sans">
            {/* View Mode Switch */}
            <div className="inline-flex p-1 bg-atelierCream border border-stoneBorder">
              <button 
                onClick={() => setViewMode('editorial')}
                className={`px-4 py-2 transition-all font-medium ${viewMode === 'editorial' ? 'bg-monolithNoir text-travertine' : 'text-monolithNoir/70 hover:text-monolithNoir'}`}
              >
                Editorial Grid
              </button>
              <button 
                onClick={() => setViewMode('blueprint')}
                className={`px-4 py-2 transition-all font-medium ${viewMode === 'blueprint' ? 'bg-monolithNoir text-travertine' : 'text-monolithNoir/70 hover:text-monolithNoir'}`}
              >
                Blueprint Index
              </button>
            </div>

            {/* Typology Filters */}
            <div className="hidden sm:flex items-center space-x-2 pl-4 hairline-l">
              {[
                { label: 'All Typologies', id: 'all' },
                { label: 'Residential Estates', id: 'residential' },
                { label: 'Duplex Penthouses', id: 'penthouse' },
                { label: 'Atelier Workplaces', id: 'commercial' }
              ].map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setPortfolioCategory(cat.id)}
                  className={`px-3 py-1.5 transition-colors ${
                    portfolioCategory === cat.id
                      ? 'text-monolithNoir border-b border-monolithNoir font-medium'
                      : 'text-monolithNoir/50 hover:text-monolithNoir'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 1. EDITORIAL ASYMMETRICAL GRID */}
        {viewMode === 'editorial' && (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {filteredProjects.map((project) => (
              <div 
                key={project.id}
                className={`${project.aspect} group relative bg-atelierCream border border-stoneBorder overflow-hidden flex flex-col justify-between`}
              >
                <div className="overflow-hidden relative flex-1">
                  <img 
                    alt={project.title} 
                    className="editorial-zoom w-full h-full object-cover" 
                    src={project.image}
                    onError={(e) => { e.currentTarget.src = project.localFallback; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-monolithNoir/60 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity"></div>
                  <div className="absolute top-4 left-4 bg-monolithNoir/80 backdrop-blur-xs px-3 py-1 text-[9px] uppercase tracking-widest text-warmOchre border border-white/10 font-sans">
                    Monograph {project.id}
                  </div>
                </div>

                <div className="p-8 flex justify-between items-end hairline-t bg-[#F8F6F1]">
                  <div>
                    <div className="text-[9px] tracking-[0.26em] uppercase text-bronze font-sans mb-1.5">
                      {project.location} • {project.sqft} SQ.FT • {project.year}
                    </div>
                    <h3 className="font-serif text-2xl lg:text-3xl text-monolithNoir font-light">
                      {project.title}
                    </h3>
                    <p className="font-sans text-xs text-monolithNoir/70 mt-1 max-w-lg leading-relaxed">
                      {project.desc}
                    </p>
                  </div>
                  <Link 
                    to={`/portfolio/${project.slug}`} 
                    className="w-10 h-10 border border-stoneBorder flex items-center justify-center hover:bg-monolithNoir hover:text-travertine transition-colors shrink-0 ml-4"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 2. BLUEPRINT INDEX MODE (High Density Architectural Table) */}
        {viewMode === 'blueprint' && (
          <div className="overflow-x-auto border border-stoneBorder bg-atelierCream">
            <table className="w-full text-left font-sans text-xs border-collapse">
              <thead>
                <tr className="hairline-b bg-monolithNoir text-travertine text-[10px] tracking-[0.22em] uppercase font-medium">
                  <th className="py-4 px-6">Catalog ID</th>
                  <th className="py-4 px-6">Project Title</th>
                  <th className="py-4 px-6">Typology</th>
                  <th className="py-4 px-6">Atelier Locale</th>
                  <th className="py-4 px-6">Scale (SQ.FT)</th>
                  <th className="py-4 px-6">Material Key</th>
                  <th className="py-4 px-6 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stoneBorder text-monolithNoir/80">
                {projects.map((proj) => (
                  <tr 
                    key={proj.id}
                    className="hover:bg-[#F8F6F1] transition-colors cursor-pointer group"
                  >
                    <td className="py-5 px-6 font-mono text-[11px] text-bronze">{proj.id}</td>
                    <td className="py-5 px-6 font-serif text-base font-normal text-monolithNoir">{proj.title}</td>
                    <td className="py-5 px-6 uppercase text-[10px] tracking-wider">{proj.categoryLabel}</td>
                    <td className="py-5 px-6">{proj.location}</td>
                    <td className="py-5 px-6 font-mono">{proj.sqft}</td>
                    <td className="py-5 px-6 text-monolithNoir/60">{proj.materials}</td>
                    <td className="py-5 px-6 text-right">
                      <Link to={`/portfolio/${proj.slug}`} className="text-[10px] uppercase tracking-wider text-bronze underline">
                        View Dossier
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      {/* ========================================================================= */}
      {/* 02. THE MATERIALITY ARCHIVE (INTERACTIVE MATERIAL LAB)                    */}
      {/* ========================================================================= */}
      <section className="py-24 px-6 lg:px-12 max-w-[1720px] mx-auto hairline-t bg-atelierCream/40" id="materiality">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Manifesto & Material Index */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="text-[10px] tracking-[0.3em] uppercase text-bronze font-sans mb-3 flex items-center gap-2">
                <span>02</span>
                <span className="w-6 h-[1px] bg-bronze"></span>
                <span>The Tactile Archive</span>
              </div>
              <h2 className="font-serif text-4xl lg:text-5xl font-light text-monolithNoir">
                Raw Materiality &amp; Tactile Resonance
              </h2>
              <p className="font-sans text-xs text-monolithNoir/70 font-light mt-4 leading-relaxed">
                Every sanctuary is founded on non-synthetic, tactile matter. Examine our curated palette, acoustic characteristics, and daylight reflections under varied sunlight temperatures.
              </p>
            </div>

            {/* Material Selection Tab List */}
            <div className="space-y-2">
              {materials.map((mat, idx) => {
                const isActive = activeMaterialIdx === idx;
                return (
                  <button
                    key={mat.title}
                    onClick={() => setActiveMaterialIdx(idx)}
                    className={`w-full text-left p-4 border transition-all flex items-center justify-between ${
                      isActive
                        ? 'border-monolithNoir bg-monolithNoir text-travertine'
                        : 'border-stoneBorder bg-[#F8F6F1] text-monolithNoir hover:border-monolithNoir'
                    }`}
                  >
                    <div>
                      <div className="font-serif text-lg">{mat.title}</div>
                      <div className={`text-[9px] tracking-[0.2em] uppercase ${isActive ? 'text-warmOchre' : 'text-monolithNoir/50'}`}>
                        {mat.origin}
                      </div>
                    </div>
                    {isActive ? (
                      <Sparkles className="w-4 h-4 text-warmOchre" />
                    ) : (
                      <ChevronRight className="w-4 h-4 text-monolithNoir/30" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Lighting Temperature Simulator Switcher */}
            <div className="p-6 border border-stoneBorder bg-travertine space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] tracking-[0.2em] uppercase font-sans font-medium text-monolithNoir">
                  Sunlight Temperature Simulator
                </span>
                <span className="font-mono text-xs text-bronze">
                  {lightingStyles[lighting].label}
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-[9px] tracking-[0.16em] uppercase font-sans">
                <button
                  onClick={() => setLighting('morning')}
                  className={`py-2.5 px-2 text-center border transition-all ${
                    lighting === 'morning'
                      ? 'bg-monolithNoir text-travertine border-monolithNoir'
                      : 'bg-atelierCream text-monolithNoir border-stoneBorder hover:border-monolithNoir'
                  }`}
                >
                  Morning East (4500K)
                </button>
                <button
                  onClick={() => setLighting('noon')}
                  className={`py-2.5 px-2 text-center border transition-all ${
                    lighting === 'noon'
                      ? 'bg-monolithNoir text-travertine border-monolithNoir'
                      : 'bg-atelierCream text-monolithNoir border-stoneBorder hover:border-monolithNoir'
                  }`}
                >
                  Noon Solar (6500K)
                </button>
                <button
                  onClick={() => setLighting('night')}
                  className={`py-2.5 px-2 text-center border transition-all ${
                    lighting === 'night'
                      ? 'bg-monolithNoir text-travertine border-monolithNoir'
                      : 'bg-atelierCream text-monolithNoir border-stoneBorder hover:border-monolithNoir'
                  }`}
                >
                  Nocturnal (2700K)
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: High-Res Macro Visual Inspector */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative w-full aspect-[4/3] lg:aspect-[16/11] border border-stoneBorder overflow-hidden bg-monolithNoir group">
              <img 
                alt={`${activeMaterial.title} Macro Texture`} 
                className={`w-full h-full object-cover transition-all duration-700 filter ${lightingStyles[lighting].filter}`}
                src={activeMaterial.image}
                onError={(e) => { e.currentTarget.src = activeMaterial.localFallback; }}
              />

              {/* Ambient Light Simulation Overlay */}
              <div className={`absolute inset-0 pointer-events-none transition-all duration-500 ${lightingStyles[lighting].overlay}`}></div>

              {/* Material HUD Stamp */}
              <div className="absolute top-6 left-6 bg-monolithNoir/85 backdrop-blur-md px-4 py-2 border border-white/10 text-travertine">
                <div className="text-[9px] tracking-[0.24em] uppercase text-warmOchre">Macro Specification 1:1</div>
                <div className="font-serif text-lg font-light">{activeMaterial.title}</div>
              </div>

              {/* Interactive Magnifier Tooltip */}
              <div className="absolute bottom-6 right-6 bg-monolithNoir/80 backdrop-blur-md px-4 py-2 border border-white/10 text-travertine/80 text-[10px] tracking-wider uppercase font-sans">
                Tactile Swatch #TAS-MAT-0{activeMaterialIdx + 1}
              </div>
            </div>

            {/* Material Properties Matrix Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              <div className="p-4 border border-stoneBorder bg-travertine">
                <div className="text-[9px] tracking-[0.2em] uppercase text-monolithNoir/50">Porosity &amp; Density</div>
                <div className="font-mono text-sm text-monolithNoir font-medium mt-1">{activeMaterial.porosity}</div>
              </div>
              <div className="p-4 border border-stoneBorder bg-travertine">
                <div className="text-[9px] tracking-[0.2em] uppercase text-monolithNoir/50">Light Reflectance (LRV)</div>
                <div className="font-mono text-sm text-monolithNoir font-medium mt-1">{activeMaterial.lrv}</div>
              </div>
              <div className="p-4 border border-stoneBorder bg-travertine">
                <div className="text-[9px] tracking-[0.2em] uppercase text-monolithNoir/50">Acoustic Absorption</div>
                <div className="font-mono text-sm text-monolithNoir font-medium mt-1">{activeMaterial.acoustic}</div>
              </div>
              <div className="p-4 border border-stoneBorder bg-travertine">
                <div className="text-[9px] tracking-[0.2em] uppercase text-monolithNoir/50">Tactile Patina Index</div>
                <div className="font-mono text-sm text-bronze font-medium mt-1">{activeMaterial.patina}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 03. PROJECT DETAIL MONOGRAPH (CASE STUDY DEEP DIVE)                       */}
      {/* ========================================================================= */}
      <section className="py-24 px-6 lg:px-12 max-w-[1720px] mx-auto hairline-t" id="case-study">
        <div className="mb-12">
          <div className="text-[10px] tracking-[0.3em] uppercase text-bronze font-sans mb-3 flex items-center gap-2">
            <span>03</span>
            <span className="w-6 h-[1px] bg-bronze"></span>
            <span>Architectural Chapter</span>
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl font-light text-monolithNoir">
            Case Study: The Tirupati Ridge Sanctuary
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Sticky Left Architectural Specifications Sidebar */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-8 bg-atelierCream p-8 border border-stoneBorder">
            <div className="space-y-4">
              <div className="text-[9px] tracking-[0.24em] uppercase text-bronze font-sans">Project Technical Dossier</div>
              <h3 className="font-serif text-2xl text-monolithNoir font-light">Ridge Villa Residence</h3>
              <p className="font-sans text-xs text-monolithNoir/70 font-light leading-relaxed">
                Conceived as a dialogue between Tirupati’s geological granite topography and private meditative domesticity. The ground plane seamlessly merges terrazzo with open water courts.
              </p>
            </div>

            <div className="space-y-3 font-sans text-xs divide-y divide-stoneBorder pt-2">
              <div className="flex justify-between py-2.5">
                <span className="text-monolithNoir/50 uppercase text-[10px] tracking-wider">Footprint</span>
                <span className="font-mono text-monolithNoir font-semibold">9,200 SQ.FT</span>
              </div>
              <div className="flex justify-between py-2.5">
                <span className="text-monolithNoir/50 uppercase text-[10px] tracking-wider">Completed</span>
                <span className="font-mono text-monolithNoir">December 2024</span>
              </div>
              <div className="flex justify-between py-2.5">
                <span className="text-monolithNoir/50 uppercase text-[10px] tracking-wider">Typology</span>
                <span className="text-monolithNoir">Private Residential Sanctum</span>
              </div>
              <div className="flex justify-between py-2.5">
                <span className="text-monolithNoir/50 uppercase text-[10px] tracking-wider">Key Elements</span>
                <span className="text-monolithNoir text-right">Rattan Wardrobes, Travertine Island, Bronze Portals</span>
              </div>
              <div className="flex justify-between py-2.5">
                <span className="text-monolithNoir/50 uppercase text-[10px] tracking-wider">Commission Lead</span>
                <span className="text-monolithNoir font-medium">Principal Architect V. Rao</span>
              </div>
            </div>

            {/* Download Blueprint Button */}
            <a 
              href="/THE_ARTIHC_STUDIO_Client_Presentation.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 border border-monolithNoir bg-monolithNoir text-travertine text-[10px] tracking-[0.22em] uppercase font-sans hover:bg-bronze hover:border-bronze transition-colors flex items-center justify-center gap-2"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Download Spatial Specification (PDF)</span>
            </a>
          </div>

          {/* Right Column: Visual Narrative & Before/After Comparison */}
          <div className="lg:col-span-8 space-y-12">
            {/* Interactive Blueprint-to-Reality Comparison Slider */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-[10px] tracking-[0.2em] uppercase font-sans text-monolithNoir/60">
                <span>Spatial Realization: Architectural Study vs Built Reality</span>
                <span className="text-bronze font-medium">Drag slider to reveal built finish</span>
              </div>

              <div className="relative w-full aspect-[16/10] overflow-hidden border border-stoneBorder select-none group shadow-lg">
                {/* Built Reality Photo */}
                <img 
                  alt="Built Reality Master Suite with Cane Millwork" 
                  className="absolute inset-0 w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkSsvUpnvRzvrJehXPOzOEp0nvUPgCd3Ag9rWjnKPtnxRUzQvyxpcO9SzNBVxrvWQ6pmps-5eWIyOgOq5ONXy3wrFR7aeJSnKxrQbAqBnbYsC8u03vM1gcxEFvY4CaV2bWgdAMwr67O_nz2hTgHXF53rvJax6jtTHvQ_Jc_URE6K2_ZMAK46mUO2ekgowa3jQ8pFZ3Cj-mzF-qvi8nvXglFMy9B4V1wsdeQfzX5A"
                  onError={(e) => { e.currentTarget.src = '/images/allay_gal1.jpg'; }}
                />

                {/* CAD Vector Blueprint Aesthetic Layer */}
                <div 
                  className="absolute inset-y-0 left-0 overflow-hidden border-r-2 border-bronze bg-[#141412]"
                  style={{ width: `${sliderPos}%` }}
                >
                  <img 
                    alt="Architectural Plan & Wireframe Stage" 
                    className="absolute inset-y-0 left-0 h-full max-w-none filter grayscale contrast-125 brightness-90 mix-blend-luminosity" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMTlbczLYQaU3pchQEj1b7R8ATEr9nWCJzY-E2DzliuzADMiOPLABGzKG2dlyaz370O3V-H5q8pZ-xYMUI6UndbUVz2UywO48Mc8VH7rQJbZ75s0C6Mq2LQviGS2majqn8ZdFzvNLUOPLXttmUj0312EycgIOaAu9pJGCwxPIlC823OMb1tCGfghBdFYvbjJQiQH0MzwB7Vy-TQ_j4STVYJQEKCeF2JEnCaz91Eg" 
                    style={{ width: '1200px' }}
                    onError={(e) => { e.currentTarget.src = '/images/allay_gal4.jpg'; }}
                  />
                  <div className="absolute inset-0 bg-[#0E0E0C]/80 mix-blend-multiply flex items-center justify-center">
                    <div className="text-center space-y-2 p-6 border border-white/20 bg-monolithNoir/70 backdrop-blur-xs">
                      <div className="text-travertine font-mono text-xs tracking-widest uppercase">CAD BLUEPRINT STAGE 03</div>
                      <div className="text-[9px] text-warmOchre tracking-[0.25em] uppercase font-sans">Volumetric Massing &amp; Daylight Studies</div>
                    </div>
                  </div>
                </div>

                {/* Slider Drag Handle */}
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

            {/* Daylight & Volumetric Geometry Narrative */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
              <div className="space-y-4">
                <h4 className="font-serif text-2xl text-monolithNoir font-light">01. Daylight Modulation</h4>
                <p className="font-sans text-xs text-monolithNoir/70 font-light leading-relaxed">
                  In South India's high-thermal zones, direct harsh solar gain is tempered through deep perforated cane arches. Natural illumination filters into micro-shadows across the lime wash walls without heating interior volumes.
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="font-serif text-2xl text-monolithNoir font-light">02. Micro-Joinery Details</h4>
                <p className="font-sans text-xs text-monolithNoir/70 font-light leading-relaxed">
                  Every timber handle was lathed from solid teak and paired with flush bronze hardware. No exposed screwheads or synthetic veneers—preserving tactile honesty across decades of generational patina.
                </p>
              </div>
            </div>

            {/* Project Gallery Diptych */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="relative aspect-[4/3] border border-stoneBorder overflow-hidden group shadow-xs">
                <img 
                  alt="Gourmet Island Detail in Honed Travertine" 
                  className="editorial-zoom w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuChJDewOFDC81LVTYvNtg3066vx5jIgHZhvug_TEyEkLRismUtQ70Gh0T29Xj7fklZKEhRl1L9n51RZzfzI2D6C-Pa-eo3d5jtpP9-ZdlAQGmUMfJ9kdFTw4p5NdnDf8Hi3pGaorlnno_ld6fTiiAY1vadZFfz9pEfI17ayuVa2BehgHlYkOa67p8_vxPrp8D3yCsNxRqhUjNUtGwjufaDs9nwpDrfjLUINGdquTw"
                  onError={(e) => { e.currentTarget.src = '/images/allay_gal2.jpg'; }}
                />
                <div className="absolute bottom-3 left-3 bg-monolithNoir/85 backdrop-blur-xs px-3.5 py-1.5 text-travertine text-[9px] uppercase font-sans tracking-widest border border-white/10">
                  Gourmet Island Detail
                </div>
              </div>

              <div className="relative aspect-[4/3] border border-stoneBorder overflow-hidden group shadow-xs">
                <img 
                  alt="Living Room Horizon with Monolithic Windows" 
                  className="editorial-zoom w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPNNGcMy1VymsAKRRqfG6xUCAmIK7DY7cJHn2cvYonmcokyB8_gHkUXTcU4vroMzBmxR9hsftT3GS_jfDOLS0ZeZbhPRksIigiI2rQntkkgco0tgf6Icn2iDuMCD1IdAFaDOFyO2NIlhpLZEv1oQW9ZYPWPoT3uPffSsIDseigQhy8yAo41SGmQKAJTSNuYJ53zuAOdRYY0oo_QpSWjFwavPV6cAs5aaTtUU3Xkw"
                  onError={(e) => { e.currentTarget.src = '/images/allay_gal3.jpg'; }}
                />
                <div className="absolute bottom-3 left-3 bg-monolithNoir/85 backdrop-blur-xs px-3.5 py-1.5 text-travertine text-[9px] uppercase font-sans tracking-widest border border-white/10">
                  Living Room Horizon
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 04. PRIVATE COMMISSION CONCIERGE (INQUIRY FLOW)                           */}
      {/* ========================================================================= */}
      <section className="py-24 px-6 lg:px-12 max-w-[1720px] mx-auto hairline-t bg-atelierCream/60" id="inquiry">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <div className="text-[10px] tracking-[0.32em] uppercase text-bronze font-sans font-semibold">Contact &amp; Inquiries</div>
            <h2 className="font-serif text-4xl sm:text-5xl font-light text-monolithNoir">
              Start a Project Consultation
            </h2>
            <p className="font-sans text-xs text-monolithNoir/70 max-w-lg mx-auto font-light">
              We accept a select number of residential and commercial projects annually across Tirupati, Bangalore, and Hyderabad to guarantee attentive principal partner attention.
            </p>
          </div>

          {/* Multi-step Inquiry Form Container */}
          <div className="border border-monolithNoir bg-[#F8F6F1] p-8 md:p-12 shadow-xs">
            {/* Step Indicators */}
            <div className="grid grid-cols-4 gap-2 mb-10 pb-6 hairline-b text-center font-sans text-[10px] tracking-[0.18em] uppercase">
              <div className={`pb-2 transition-colors ${currentStep === 1 ? 'text-monolithNoir font-medium border-b-2 border-monolithNoir' : 'text-monolithNoir/30 border-b-2 border-transparent'}`}>
                01. Typology
              </div>
              <div className={`pb-2 transition-colors ${currentStep === 2 ? 'text-monolithNoir font-medium border-b-2 border-monolithNoir' : 'text-monolithNoir/30 border-b-2 border-transparent'}`}>
                02. Locale &amp; Scale
              </div>
              <div className={`pb-2 transition-colors ${currentStep === 3 ? 'text-monolithNoir font-medium border-b-2 border-monolithNoir' : 'text-monolithNoir/30 border-b-2 border-transparent'}`}>
                03. Investment
              </div>
              <div className={`pb-2 transition-colors ${currentStep === 4 ? 'text-monolithNoir font-medium border-b-2 border-monolithNoir' : 'text-monolithNoir/30 border-b-2 border-transparent'}`}>
                04. Brief
              </div>
            </div>

            {!formSubmitted ? (
              <form onSubmit={handleCommissionSubmit}>
                {/* STEP 1: TYPOLOGY */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <label className="block text-xs uppercase tracking-[0.2em] text-monolithNoir font-medium">Select Spatial Typology</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[
                        { title: 'Private Residential Villa', subtitle: 'Standalone sanctuary & estate' },
                        { title: 'Duplex Penthouse', subtitle: 'High-altitude luxury residence' },
                        { title: 'Executive Atelier & HQ', subtitle: 'Bespoke boardroom & studio' },
                        { title: 'Bespoke Hospitality', subtitle: 'Boutique sanctuary resort' }
                      ].map(typ => (
                        <div
                          key={typ.title}
                          onClick={() => setSelectedTypology(typ.title)}
                          className={`border p-5 cursor-pointer transition-all flex items-start justify-between ${
                            selectedTypology === typ.title
                              ? 'border-monolithNoir bg-atelierCream'
                              : 'border-stoneBorder hover:border-monolithNoir'
                          }`}
                        >
                          <div>
                            <div className="font-serif text-lg text-monolithNoir">{typ.title}</div>
                            <div className="text-[9px] tracking-wider text-monolithNoir/60 uppercase mt-1">{typ.subtitle}</div>
                          </div>
                          <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${selectedTypology === typ.title ? 'border-monolithNoir' : 'border-stoneBorder'}`}>
                            {selectedTypology === typ.title && <div className="w-2 h-2 rounded-full bg-monolithNoir"></div>}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="pt-4 flex justify-end">
                      <button 
                        type="button" 
                        onClick={() => setCurrentStep(2)}
                        className="px-8 py-3.5 bg-monolithNoir text-travertine text-[10px] tracking-[0.24em] uppercase font-sans hover:bg-bronze transition-colors flex items-center gap-3"
                      >
                        <span>Continue</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 2: LOCALE & SCALE */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="block text-xs uppercase tracking-[0.2em] text-monolithNoir font-medium">Select Geographic Region</label>
                      <div className="grid grid-cols-3 gap-3">
                        {['Hyderabad', 'Bangalore', 'Tirupati'].map(city => (
                          <button
                            key={city}
                            type="button"
                            onClick={() => setSelectedCity(city)}
                            className={`py-3 px-4 border text-xs tracking-wider uppercase font-sans transition-all ${
                              selectedCity === city
                                ? 'border-monolithNoir bg-monolithNoir text-travertine'
                                : 'border-stoneBorder bg-travertine text-monolithNoir hover:border-monolithNoir'
                            }`}
                          >
                            {city}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2 pt-2">
                      <label className="block text-xs uppercase tracking-[0.2em] text-monolithNoir font-medium">Estimated Footprint (SQ.FT)</label>
                      <input 
                        type="text"
                        value={sqft}
                        onChange={(e) => setSqft(e.target.value)}
                        placeholder="e.g. 7,500 SQ.FT"
                        className="w-full p-4 border border-stoneBorder bg-travertine font-sans text-sm focus:outline-hidden focus:border-monolithNoir text-monolithNoir"
                      />
                    </div>

                    <div className="pt-4 flex justify-between">
                      <button 
                        type="button" 
                        onClick={() => setCurrentStep(1)}
                        className="px-6 py-3 border border-stoneBorder text-monolithNoir text-[10px] tracking-[0.2em] uppercase font-sans"
                      >
                        Back
                      </button>
                      <button 
                        type="button" 
                        onClick={() => setCurrentStep(3)}
                        className="px-8 py-3.5 bg-monolithNoir text-travertine text-[10px] tracking-[0.24em] uppercase font-sans hover:bg-bronze transition-colors"
                      >
                        Continue to Investment
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 3: INVESTMENT */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <label className="block text-xs uppercase tracking-[0.2em] text-monolithNoir font-medium">Allocated Project Capital</label>
                    <div className="space-y-3">
                      {[
                        '₹2.0 Crore — ₹3.5 Crore',
                        '₹3.5 Crore — ₹7.0 Crore',
                        '₹7.0 Crore+ (Monumental Commission)'
                      ].map(tier => (
                        <div
                          key={tier}
                          onClick={() => setSelectedBudget(tier)}
                          className={`border p-4 cursor-pointer transition-all flex items-center justify-between ${
                            selectedBudget === tier
                              ? 'border-monolithNoir bg-atelierCream'
                              : 'border-stoneBorder hover:border-monolithNoir'
                          }`}
                        >
                          <span className="font-serif text-lg text-monolithNoir">{tier}</span>
                          <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${selectedBudget === tier ? 'border-monolithNoir' : 'border-stoneBorder'}`}>
                            {selectedBudget === tier && <div className="w-2 h-2 rounded-full bg-monolithNoir"></div>}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 flex justify-between">
                      <button 
                        type="button" 
                        onClick={() => setCurrentStep(2)}
                        className="px-6 py-3 border border-stoneBorder text-monolithNoir text-[10px] tracking-[0.2em] uppercase font-sans"
                      >
                        Back
                      </button>
                      <button 
                        type="button" 
                        onClick={() => setCurrentStep(4)}
                        className="px-8 py-3.5 bg-monolithNoir text-travertine text-[10px] tracking-[0.24em] uppercase font-sans hover:bg-bronze transition-colors"
                      >
                        Final Details
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 4: CONTACT & BRIEF */}
                {currentStep === 4 && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] uppercase tracking-wider text-monolithNoir/60 font-sans mb-1">Your Full Name</label>
                        <input 
                          type="text" 
                          required 
                          value={clientName}
                          onChange={(e) => setClientName(e.target.value)}
                          placeholder="Srikanth Reddy" 
                          className="w-full p-3.5 border border-stoneBorder bg-travertine font-sans text-xs focus:outline-hidden focus:border-monolithNoir text-monolithNoir"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] uppercase tracking-wider text-monolithNoir/60 font-sans mb-1">Direct Phone / WhatsApp</label>
                        <input 
                          type="tel" 
                          required 
                          value={clientPhone}
                          onChange={(e) => setClientPhone(e.target.value)}
                          placeholder="+91 98490 00000" 
                          className="w-full p-3.5 border border-stoneBorder bg-travertine font-sans text-xs focus:outline-hidden focus:border-monolithNoir text-monolithNoir"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase tracking-wider text-monolithNoir/60 font-sans mb-1">Spatial Brief &amp; Specific Vision</label>
                      <textarea 
                        rows={3} 
                        value={clientNotes}
                        onChange={(e) => setClientNotes(e.target.value)}
                        placeholder="Outline your spatial aspirations, timeline, or preferred natural stone elements..." 
                        className="w-full p-3.5 border border-stoneBorder bg-travertine font-sans text-xs focus:outline-hidden focus:border-monolithNoir text-monolithNoir"
                      ></textarea>
                    </div>

                    <div className="p-4 border border-stoneBorder bg-atelierCream flex items-center justify-between text-xs font-sans">
                      <span className="text-monolithNoir/70">Prefers Instant Direct Partner VIP Chat</span>
                      <a 
                        href={`https://wa.me/918772289011?text=${encodeURIComponent(`Hello The Artihc Studio, I would like to commission an architectural project (${selectedTypology}) in ${selectedCity} (${sqft}).`)}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-bronze uppercase tracking-wider font-medium text-[10px] hover:underline"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>Direct WhatsApp VIP Desk</span>
                      </a>
                    </div>

                    <div className="pt-4 flex justify-between">
                      <button 
                        type="button" 
                        onClick={() => setCurrentStep(3)}
                        className="px-6 py-3 border border-stoneBorder text-monolithNoir text-[10px] tracking-[0.2em] uppercase font-sans"
                      >
                        Back
                      </button>
                      <button 
                        type="submit" 
                        className="px-10 py-4 bg-monolithNoir text-travertine text-[10px] tracking-[0.26em] uppercase font-sans hover:bg-bronze transition-colors flex items-center gap-2"
                      >
                        <span>Submit Atelier Commission</span>
                        <Check className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}
              </form>
            ) : (
              /* Success Message */
              <div className="text-center py-12 space-y-4">
                <div className="w-12 h-12 rounded-full bg-bronze/10 border border-bronze mx-auto flex items-center justify-center text-bronze">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-3xl text-monolithNoir font-light">Commission Inscribed</h3>
                <p className="font-sans text-xs text-monolithNoir/70 max-w-md mx-auto">
                  Your architectural inquiry has been logged with Priority Token #TAS-COMM-892. Principal Partner will review the brief and contact you within 24 business hours.
                </p>
                <button
                  onClick={() => { setFormSubmitted(false); setCurrentStep(1); }}
                  className="mt-4 px-6 py-2.5 border border-stoneBorder text-[10px] uppercase tracking-widest text-monolithNoir hover:border-bronze"
                >
                  Submit Another Inquiry
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 05. RESTRICTED ATELIER PORTAL LINK                                        */}
      {/* ========================================================================= */}
      <section className="py-16 px-6 lg:px-12 max-w-[1720px] mx-auto hairline-t">
        <div className="p-8 lg:p-12 border border-monolithNoir bg-[#121210] text-travertine flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-[9px] tracking-[0.28em] uppercase text-warmOchre font-sans">Restricted Access • Partner Console</div>
            <h3 className="font-serif text-2xl lg:text-3xl font-light mt-1">Atelier Management &amp; Commission Queue</h3>
            <p className="text-xs text-travertine/60 font-sans mt-1">
              Internal studio workspace for principal architects, blueprint approvals, and active project dossier audits.
            </p>
          </div>
          <Link
            to="/admin"
            className="px-8 py-3.5 bg-bronze text-travertine text-[10px] tracking-[0.22em] uppercase font-sans hover:bg-warmOchre hover:text-monolithNoir transition-colors shrink-0"
          >
            Access Partner Portal
          </Link>
        </div>
      </section>
    </main>
  );
}
