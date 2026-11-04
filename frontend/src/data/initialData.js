// THE ARTIHC STUDIO — Dynamic Schema & Initial Seed Data
// Follows PDS/TSD/BAS v2 Specification for MySQL entities:
// projects, project_images, categories, services, enquiries, settings

export const INITIAL_CATEGORIES = [
  { id: 1, name: 'All Typologies', slug: 'all', count: 6 },
  { id: 2, name: 'Residential Architecture', slug: 'residential', count: 3 },
  { id: 3, name: 'Commercial & Workplace', slug: 'commercial', count: 2 },
  { id: 4, name: 'Bespoke & Hospitality', slug: 'bespoke', count: 1 }
];

export const INITIAL_PROJECTS = [
  {
    id: 1,
    title: 'The House of Allay',
    slug: 'the-house-of-allay',
    category_id: 2,
    category_name: 'Residential Architecture',
    category_slug: 'residential',
    type: 'Bespoke Luxury Villa',
    location: 'Jubilee Hills, Hyderabad',
    area: '9,200 SQ.FT',
    scope: 'Comprehensive Architecture & Turnkey Interiors',
    year: '2025',
    featured: true,
    status: 'published',
    cover_image: '/images/allay_cover.jpg',
    short_desc: 'A monolithic private residence exploring the dialogue between fluted limestone, concealed ambient illumination, and double-height volumetric expanses.',
    full_desc: 'The House of Allay stands as a rigorous study in monolithic tranquility. Located on an elevated enclave in Jubilee Hills, the architectural composition balances monumental fluted stone colonnades with expansive glass apertures that frame courtyards of native flora. The interior unfolds in an unbroken sequence of spatial thresholds—honed Italian travertine floorplates transition into custom white oak millwork and patinated architectural bronze hardware. Natural daylight is sculpted through recessed clerestory apertures, yielding a shifting chiaroscuro across the day.',
    materials: ['Honed Navona Travertine', 'Fumed European Oak', 'Hand-Patinated Bronze', 'Acoustic Lime Plaster'],
    aspect: 'aspect-cinema',
    placeholderTheme: 'arch-placeholder-warm',
    gallery: [
      { 
        id: 101, 
        title: 'Grand Volumetric Atrium & Fluted Colonnade', 
        aspect: 'aspect-cinema', 
        theme: 'arch-placeholder-warm', 
        caption: 'Double-height central living gallery with tailored fluted stone',
        image: '/images/allay_gal1.jpg'
      },
      { 
        id: 102, 
        title: 'Private Dining & Sculptural Joinery', 
        aspect: 'aspect-editorial', 
        theme: 'arch-placeholder-stone', 
        caption: 'Custom rift-sawn oak dining console with integrated lighting',
        image: '/images/allay_gal2.jpg'
      },
      { 
        id: 103, 
        title: 'Master Sanctuary & Dressing Suite', 
        aspect: 'aspect-editorial', 
        theme: 'arch-placeholder-dark', 
        caption: 'Acoustic lime plaster walls with flush floor-to-ceiling pivot transitions',
        image: '/images/allay_gal3.jpg'
      },
      { 
        id: 104, 
        title: 'Courtyard Water Feature & Outer Loggia', 
        aspect: 'aspect-banner', 
        theme: 'arch-placeholder-warm', 
        caption: 'Monolithic travertine plinth meeting reflective black granite water mirror',
        image: '/images/allay_gal4.jpg'
      }
    ]
  },
  {
    id: 2,
    title: 'Montique Residence',
    slug: 'montique-residence',
    category_id: 2,
    category_name: 'Residential Architecture',
    category_slug: 'residential',
    type: 'Penthouse Duplex',
    location: 'Indiranagar, Bangalore',
    area: '5,800 SQ.FT',
    scope: 'Interior Architecture, Custom Millwork & Art Curation',
    year: '2025',
    featured: true,
    status: 'published',
    cover_image: '/images/montique_cover.jpg',
    short_desc: 'An elevated urban penthouse defined by tactile fumed oak wall paneling, sculpted marble fireplaces, and panoramic city vistas.',
    full_desc: 'Hovering above the tree-lined canopy of Indiranagar, Montique Residence reinterprets penthouse living as an intimate sanctuary. The spatial layout prioritizes clear circulation lines and curated sightlines. Rich fumed oak wall paneling conceals functional storage and private suites, while the open-plan entertaining pavilion features a monolithic Calacatta marble fireplace and low-slung, tailored Italian upholstery.',
    materials: ['Calacatta Oro Marble', 'Fumed Quarter-Sawn Oak', 'Brushed Champagne Brass', 'Bouclé Textile'],
    aspect: 'aspect-editorial',
    placeholderTheme: 'arch-placeholder-stone',
    gallery: [
      { 
        id: 201, 
        title: 'Penthouse Living Pavilion', 
        aspect: 'aspect-cinema', 
        theme: 'arch-placeholder-stone', 
        caption: 'Floor-to-ceiling glass wrapping around the fumed oak living suite',
        image: '/images/montique_gal1.jpg'
      },
      { 
        id: 202, 
        title: 'Sculptural Marble Culinary Island', 
        aspect: 'aspect-square', 
        theme: 'arch-placeholder-warm', 
        caption: 'Monolithic fluted Calacatta marble island with brass reveals',
        image: '/images/montique_gal2.jpg'
      }
    ]
  },
  {
    id: 3,
    title: 'Farm Bijou',
    slug: 'farm-bijou',
    category_id: 4,
    category_name: 'Bespoke & Hospitality',
    category_slug: 'bespoke',
    type: 'Contemporary Country Estate',
    location: 'Tirupati Foothills',
    area: '14,000 SQ.FT',
    scope: 'Master Spatial Planning & Turnkey Execution',
    year: '2024',
    featured: true,
    status: 'published',
    cover_image: '/images/bijou_cover.jpg',
    short_desc: 'A sprawling weekend retreat nestled against the sacred foothills, harmonizing raw local granite, aged teak, and expansive courtyard verandahs.',
    full_desc: 'Farm Bijou responds directly to its dramatic natural context. Anchored by heavy local granite masonry, the single-story estate unfolds around a central water courtyard that creates natural micro-climatic cooling. Wide overhangs and deep verandahs shade internal spaces from harsh sunlight while framing panoramic views of the distant ridgelines.',
    materials: ['Hand-Chiseled Tirupati Granite', 'Reclaimed Teakwood', 'Terracotta Floor Pavers', 'Weathered Zinc'],
    aspect: 'aspect-cinema',
    placeholderTheme: 'arch-placeholder-warm',
    gallery: [
      { 
        id: 301, 
        title: 'Verandah Colonnade & Courtyard', 
        aspect: 'aspect-cinema', 
        theme: 'arch-placeholder-warm', 
        caption: 'Deep timber loggia overlooking native landscaped courtyard',
        image: '/images/bijou_gal1.jpg'
      },
      { 
        id: 302, 
        title: 'Pavilion Hearth & High Rafters', 
        aspect: 'aspect-editorial', 
        theme: 'arch-placeholder-stone', 
        caption: 'Exposed timber truss roof with central granite hearth',
        image: '/images/bijou_gal2.jpg'
      }
    ]
  },
  {
    id: 4,
    title: 'Cerulean Holt',
    slug: 'cerulean-holt',
    category_id: 2,
    category_name: 'Residential Architecture',
    category_slug: 'residential',
    type: 'Minimalist Duplex Residence',
    location: 'Sadashivanagar, Bangalore',
    area: '6,400 SQ.FT',
    scope: 'Spatial Restructuring & Bespoke Interiors',
    year: '2024',
    featured: false,
    status: 'published',
    cover_image: '/images/cerulean_cover.jpg',
    short_desc: 'A calm study in white architectural planes, subtle curved bulkheads, and warm micro-cement finishes tailored for quiet contemplation.',
    full_desc: 'Designed for a collector of contemporary art, Cerulean Holt employs an ethereal palette of chalk whites, soft sage undercurrents, and seamless micro-cement flooring. Wall corners are softened into gentle radii, guiding natural illumination through the double-height volume with seamless elegance.',
    materials: ['Seamless Warm Micro-Cement', 'Bleached Ash Wood', 'Curved Drywall Radii', 'Cast Glass'],
    aspect: 'aspect-editorial',
    placeholderTheme: 'arch-placeholder-stone',
    gallery: [
      { 
        id: 401, 
        title: 'Gallery Foyer with Curved Reveal', 
        aspect: 'aspect-cinema', 
        theme: 'arch-placeholder-stone', 
        caption: 'Softened architectural corners and integrated artwork niches',
        image: '/images/cerulean_gal1.jpg'
      }
    ]
  },
  {
    id: 5,
    title: 'The Office Atelier',
    slug: 'the-office-atelier',
    category_id: 3,
    category_name: 'Commercial & Workplace',
    category_slug: 'commercial',
    type: 'Executive Headquarters',
    location: 'Hitec City, Hyderabad',
    area: '11,500 SQ.FT',
    scope: 'Workplace Strategy, Spatial Architecture & Fitout',
    year: '2025',
    featured: false,
    status: 'published',
    cover_image: '/images/office_cover.jpg',
    short_desc: 'An architectural corporate headquarters prioritizing acoustic intimacy, biophilic lightwells, and tailored executive boardroom environments.',
    full_desc: 'Challenging standard commercial workplace conventions, The Office Atelier crafts a collegiate, hospitality-inspired environment for an investment leadership firm. Acoustic felt baffle ceilings, fluted walnut partition walls, and expansive lounge zones replace conventional cubicles.',
    materials: ['Fluted American Walnut', 'Acoustic Felt Baffles', 'Black Powder-Coated Steel', 'Honed Basalt'],
    aspect: 'aspect-cinema',
    placeholderTheme: 'arch-placeholder-dark',
    gallery: [
      { 
        id: 501, 
        title: 'Executive Boardroom & Lightwell', 
        aspect: 'aspect-cinema', 
        theme: 'arch-placeholder-dark', 
        caption: 'Custom 18-seat walnut boardroom table with concealed power integration',
        image: '/images/office_gal1.jpg'
      }
    ]
  },
  {
    id: 6,
    title: 'The Azure Lounge',
    slug: 'the-azure-lounge',
    category_id: 3,
    category_name: 'Commercial & Workplace',
    category_slug: 'commercial',
    type: 'Boutique Private Club',
    location: 'Lavelle Road, Bangalore',
    area: '4,500 SQ.FT',
    scope: 'Hospitality Architecture, Lighting Design & Custom Furniture',
    year: '2024',
    featured: false,
    status: 'published',
    cover_image: '/images/azure_cover.jpg',
    short_desc: 'An intimate nocturnal hospitality lounge balancing fluted midnight-blue lacquered joinery with burnished bronze cocktail bars.',
    full_desc: 'The Azure Lounge creates an alluring atmospheric hospitality experience through deep chromatic tones, dramatic downlighting, and tactile velvet upholstery. The centerpiece is a 24-foot solid brass cocktail plinth anchored against illuminated fluted wall panels.',
    materials: ['High-Gloss Deep Blue Lacquer', 'Brushed Solid Brass', 'Aged Leather', 'Smoked Bronze Mirrors'],
    aspect: 'aspect-editorial',
    placeholderTheme: 'arch-placeholder-dark',
    gallery: [
      { 
        id: 601, 
        title: 'Central Brass Bar & Ambient Portals', 
        aspect: 'aspect-cinema', 
        theme: 'arch-placeholder-dark', 
        caption: 'Backlit fluted spirits display and seamless monolithic brass counter',
        image: '/images/azure_gal1.jpg'
      }
    ]
  }
];

export const INITIAL_SERVICES = [
  {
    id: 1,
    title: 'Architectural Planning & Spatial Design',
    slug: 'architectural-planning',
    number: '01',
    image: '/images/service_planning.jpg',
    short_desc: 'Comprehensive architectural concept formulation, structural volume organization, volumetric studies, and regulatory compliance mapping.',
    full_desc: 'We approach architecture from the inside out—ensuring that structural rhythm, light path orientation, and spatial proportions harmonize before aesthetic finishes are introduced. Our scope encompasses master site layout, solar path orientation, structural coordination, and 3D volumetric visualization.',
    deliverables: [
      'Site analysis, solar path study & microclimate response',
      'Volumetric spatial organization & circulation programming',
      'Structural coordination with MEP and structural engineers',
      'High-fidelity 3D architectural renders & volumetric flythroughs',
      'Detailed municipal coordination & construction documentation'
    ],
    sort_order: 1,
    status: 'published'
  },
  {
    id: 2,
    title: 'Bespoke Luxury Residential Interiors',
    slug: 'residential-interiors',
    number: '02',
    image: '/images/service_residential.jpg',
    short_desc: 'Tailored interior architecture for private residences, luxury duplexes, and villas with bespoke joinery and material precision.',
    full_desc: 'Every home crafted by The Artihc Studio is a bespoke personal monograph. We curate tactile palettes—honed natural marbles, fumed European timbers, acoustic lime wash plasters, and architectural bronzes—into cohesive spatial sanctuaries engineered for longevity and effortless serenity.',
    deliverables: [
      'Full interior architectural elevations, sections & reflected ceiling plans',
      'Detailed millwork, bespoke cabinetry & hidden storage engineering',
      'Curated natural stone, timber, tile & fabric specifications',
      'Multi-scene architectural lighting design & fixture curation',
      'Sanitaryware, ironmongery & bespoke hardware schedules'
    ],
    sort_order: 2,
    status: 'published'
  },
  {
    id: 3,
    title: 'Commercial & Workplace Architecture',
    slug: 'commercial-workplace',
    number: '03',
    image: '/images/service_commercial.jpg',
    short_desc: 'Dynamic corporate headquarters, executive pavilions, and boutique commercial environments that reinforce organizational identity.',
    full_desc: 'Modern workplaces require an artful equilibrium between focused individual performance and collaborative synergy. We design headquarters and executive workspaces that elevate team morale, foster client confidence, and seamlessly weave technology into timeless architecture.',
    deliverables: [
      'Workplace programming & density zoning analysis',
      'Acoustic engineering & privacy zoning strategies',
      'Executive suites, boardrooms & collaborative pavilions',
      'Integrated technology pathways, cable management & AV coordination',
      'Brand aesthetic translation into physical spatial identity'
    ],
    sort_order: 3,
    status: 'published'
  },
  {
    id: 4,
    title: 'Custom Millwork, Furniture & Art Curation',
    slug: 'custom-millwork-art',
    number: '04',
    image: '/images/service_millwork.jpg',
    short_desc: 'One-of-a-kind furniture design, custom joinery fabrication, and international art curation tailored to each specific interior space.',
    full_desc: 'When standard market furniture cannot fulfill the spatial intent, our atelier designs bespoke pieces manufactured by master artisans. From monolithic stone dining plinths to hand-stitched leather upholstery and curated modern art collections, we ensure every object has pedigree.',
    deliverables: [
      'Original furniture conceptual sketches & shop fabrication drawings',
      'Artisan coordination for timber carving, stone cutting & metalwork',
      'Textile, leather, rug & bespoke window dressing curation',
      'Art advisory, artist commissions & spatial sculpture curation',
      'Turnkey delivery, white-glove staging & aesthetic styling'
    ],
    sort_order: 4,
    status: 'published'
  },
  {
    id: 5,
    title: 'Turnkey Project Execution & Site Supervision',
    slug: 'turnkey-execution',
    number: '05',
    image: '/images/service_turnkey.jpg',
    short_desc: 'End-to-end site management, contractor governance, procurement logistics, and meticulous quality control from foundation to handover.',
    full_desc: 'Great design achieves perfection through uncompromising execution. Our turnkey project management team monitors every millimeter on site, verifies material batches, enforces schedule milestones, and shields the client from contractor friction.',
    deliverables: [
      'Detailed Bill of Quantities (BOQ) & itemized material budgeting',
      'Rigorous contractor tendering, evaluation & onboarding',
      'Full-time on-site architectural supervision & QA/QC audits',
      'Milestone tracking with transparent weekly client progress reports',
      'Final defect liability rectification & immaculate white-glove handover'
    ],
    sort_order: 5,
    status: 'published'
  }
];

export const INITIAL_ENQUIRIES = [
  {
    id: 1,
    name: 'Vikramaditya Rao',
    phone: '+91 98450 12345',
    email: 'v.rao@solargroup.com',
    project_type: 'Bespoke Luxury Villa',
    location: 'Jubilee Hills, Hyderabad',
    area: '10,500 SQ.FT',
    budget: '₹2.5 Cr – ₹4 Cr',
    message: 'We recently acquired a 1,200 sq.yard corner plot in Jubilee Hills and are looking for full architectural planning and turnkey interior execution. We admire your warm minimalist and stone materiality aesthetic.',
    status: 'new',
    created_at: '2026-10-01 10:45 AM'
  },
  {
    id: 2,
    name: 'Ananya & Siddharth Reddy',
    phone: '+91 99002 88761',
    email: 'ananya.reddy@gmail.com',
    project_type: 'Penthouse Duplex',
    location: 'Indiranagar, Bangalore',
    area: '6,200 SQ.FT',
    budget: '₹1.5 Cr – ₹2.5 Cr',
    message: 'Looking to restructure a penthouse duplex currently in bare shell condition. We require complete interior architecture, custom walnut millwork, and smart lighting design.',
    status: 'contacted',
    created_at: '2026-09-29 03:20 PM'
  },
  {
    id: 3,
    name: 'K. Balakrishna',
    phone: '+91 94419 00122',
    email: 'kbala@tirupatitrust.org',
    project_type: 'Contemporary Country Estate',
    location: 'Tirupati Foothills',
    area: '15,000 SQ.FT',
    budget: '₹4 Cr+',
    message: 'Requesting a site meeting at our farmland in Tirupati to discuss architectural master planning for a multi-generational family retreat.',
    status: 'in_review',
    created_at: '2026-09-27 11:15 AM'
  }
];

export const INITIAL_ANALYTICS = {
  summary: {
    monthlyVisitors: 4820,
    pageViews: 19430,
    avgSessionDuration: '3m 42s',
    bounceRate: '34.2%',
    activeLiveSessions: 14,
    conversionRate: '4.8%'
  },
  topPages: [
    { path: '/', views: 9840, title: 'Home — Monograph Experience' },
    { path: '/portfolio', views: 5120, title: 'Portfolio — Selected Architectural Works' },
    { path: '/portfolio/the-house-of-allay', views: 2450, title: 'Project: The House of Allay' },
    { path: '/services', views: 1840, title: 'Services — Spatial Disciplines' },
    { path: '/contact', views: 1180, title: 'Contact — Project Commission' }
  ],
  clarityStats: {
    recordingsCount: 1840,
    deadClicksPct: '1.2%',
    rageClicksPct: '0.4%',
    scrollDepthAvg: '74%',
    clarityProjectId: 'clrt_tas_live_9082'
  },
  ga4Stats: {
    measurementId: 'G-TAS882194',
    events: [
      { name: 'page_view', count: 19430 },
      { name: 'project_view', count: 6890 },
      { name: 'service_view', count: 2450 },
      { name: 'enquiry_start', count: 412 },
      { name: 'enquiry_submit', count: 78 },
      { name: 'whatsapp_click', count: 154 }
    ]
  }
};
