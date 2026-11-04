import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Layers, SunMedium, Compass, Sparkles } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';

export default function ManifestoSection() {
  const pillars = [
    {
      icon: <Compass size={22} color="var(--bronze)" />,
      numeral: '01',
      title: 'Volumetric Proportion',
      desc: 'We organize space through disciplined structural axes and natural sightlines, allowing light and air to sculpt the spatial experience before interior furnishings are considered.'
    },
    {
      icon: <Layers size={22} color="var(--bronze)" />,
      numeral: '02',
      title: 'Honest Materiality',
      desc: 'Our tactile palette celebrates authentic materials—honed Navona travertine, quarter-sawn fumed oak, patinated architectural bronze, and breathable lime wash plasters.'
    },
    {
      icon: <SunMedium size={22} color="var(--bronze)" />,
      numeral: '03',
      title: 'Light as an Element',
      desc: 'Natural daylight is treated as a core architectural building material. We sculpt openings and conceal ambient fixtures to create atmospheric warmth that shifts throughout the day.'
    },
    {
      icon: <Sparkles size={22} color="var(--bronze)" />,
      numeral: '04',
      title: 'Turnkey Craftsmanship',
      desc: 'Uncompromising execution from initial site zoning to bespoke millwork fabrication and white-glove handover across Tirupati, Bangalore, and Hyderabad.'
    }
  ];

  return (
    <section 
      className="section"
      style={{
        backgroundColor: 'var(--atelier-white)',
        borderBottom: '1px solid var(--stone-border)'
      }}
    >
      <div className="container">
        <SectionHeader
          numeral="II"
          tag="STUDIO MANIFESTO"
          title="Architecture begins when two bricks are put together carefully."
          description="At THE ARTIHC STUDIO, we believe an interior is not mere decoration. It is an enduring spatial sanctuary that shapes how one lives, reflects, and connects."
          action={
            <Link to="/about" className="btn btn-outline">
              <span>Read Studio Story</span>
              <ArrowUpRight size={14} />
            </Link>
          }
        />

        {/* 4 Architectural Pillars Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2px',
            backgroundColor: 'var(--stone-border)',
            border: '1px solid var(--stone-border)',
            borderRadius: '2px',
            overflow: 'hidden'
          }}
        >
          {pillars.map((pillar) => (
            <div
              key={pillar.numeral}
              style={{
                backgroundColor: 'var(--atelier-white)',
                padding: 'clamp(2rem, 3.5vw, 3rem)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.35s var(--ease-editorial)',
                position: 'relative',
                overflow: 'hidden'
              }}
              className="group spotlight-card"
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#FAF8F5';
                const line = e.currentTarget.querySelector('.pillar-accent-line');
                if (line) line.style.transform = 'scaleX(1)';
                const icon = e.currentTarget.querySelector('.pillar-icon');
                if (icon) icon.style.transform = 'scale(1.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--atelier-white)';
                const line = e.currentTarget.querySelector('.pillar-accent-line');
                if (line) line.style.transform = 'scaleX(0)';
                const icon = e.currentTarget.querySelector('.pillar-icon');
                if (icon) icon.style.transform = 'scale(1)';
              }}
            >
              <div>
                <div 
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '2rem'
                  }}
                >
                  <div 
                    className="pillar-icon"
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '2px',
                      backgroundColor: 'rgba(168, 134, 93, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'transform 0.3s var(--ease-spring)'
                    }}
                  >
                    {pillar.icon}
                  </div>
                  <span 
                    style={{
                      fontFamily: "var(--font-heading, sans-serif)",
                      fontSize: '0.72rem',
                      letterSpacing: '0.15em',
                      color: 'var(--muted)',
                      fontWeight: 600,
                      fontVariantNumeric: 'tabular-nums'
                    }}
                  >
                    {pillar.numeral}
                  </span>
                </div>

                <h3 
                  style={{
                    fontFamily: "var(--font-heading, sans-serif)",
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    marginBottom: '0.85rem',
                    color: 'var(--noir)',
                    textWrap: 'balance'
                  }}
                >
                  {pillar.title}
                </h3>

                <p 
                  style={{
                    fontFamily: "var(--font-sans, sans-serif)",
                    fontSize: '0.9rem',
                    lineHeight: 1.7,
                    color: 'var(--muted)',
                    fontWeight: 300
                  }}
                >
                  {pillar.desc}
                </p>
              </div>

              <div 
                style={{
                  marginTop: '2rem',
                  paddingTop: '1rem',
                  borderTop: '1px solid var(--stone-border)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                <span className="tech-dot" />
                <span 
                  style={{
                    fontFamily: "var(--font-sans, sans-serif)",
                    fontSize: '0.62rem',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: 'var(--muted-light)'
                  }}
                >
                  CORE DISCIPLINE
                </span>
              </div>

              {/* Subtle Bronze Accent Indicator Bar */}
              <div 
                className="pillar-accent-line"
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '2.5px',
                  backgroundColor: 'var(--bronze)',
                  boxShadow: '0 0 10px var(--bronze-glow)',
                  transform: 'scaleX(0)',
                  transformOrigin: 'left',
                  transition: 'transform 0.4s var(--ease-editorial)'
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
