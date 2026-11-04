import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, ArrowUpRight, Compass } from 'lucide-react';
import ArchitecturalPlaceholder from '../common/ArchitecturalPlaceholder';

export default function HeroSection() {
  return (
    <section 
      className="section-hero"
      style={{
        position: 'relative',
        paddingTop: 'calc(var(--header-height) + 3rem)',
        paddingBottom: 'clamp(3rem, 6vw, 6rem)',
        borderBottom: '1px solid var(--stone-border)',
        overflow: 'hidden'
      }}
    >
      {/* Ambient Architectural Light Beam Diffusion (Taste + Emil Kowalski) */}
      <div className="ambient-light-glow" />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Top Architectural Positioning Tag */}
        <div 
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            paddingBottom: '1.5rem',
            borderBottom: '1px solid var(--stone-border)',
            marginBottom: 'clamp(2rem, 4vw, 3.5rem)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <Compass size={15} color="var(--bronze)" />
            <span className="tech-label tech-label-bronze">
              SPATIAL ARCHITECTURE &bull; BESPOKE INTERIORS
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <span 
              style={{
                fontFamily: "var(--font-heading, sans-serif)",
                fontSize: '0.68rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--muted)'
              }}
            >
              TIRUPATI &bull; BANGALORE &bull; HYDERABAD
            </span>
            <span className="tech-dot" />
            <span 
              style={{
                fontFamily: "var(--font-heading, sans-serif)",
                fontSize: '0.68rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--noir)',
                fontWeight: 600
              }}
            >
              EST. STUDIO MONOGRAPH
            </span>
          </div>
        </div>

        {/* Hero Title & Architectural Statement */}
        <div style={{ maxWidth: '1140px', marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
          <h1 
            className="animate-slide-up"
            style={{
              fontFamily: "var(--font-display, serif)",
              fontSize: 'clamp(2.85rem, 7vw, 6.2rem)',
              lineHeight: 1.04,
              fontWeight: 400,
              letterSpacing: '-0.025em',
              color: 'var(--noir)',
              marginBottom: '1.75rem',
              textWrap: 'balance'
            }}
          >
            Spaces sculpted by <em>light</em>, proportion &amp; <em>monolithic materiality</em>.
          </h1>

          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2.5rem',
              alignItems: 'flex-start'
            }}
          >
            <p 
              className="animate-slide-up animate-delay-1"
              style={{
                fontFamily: "var(--font-sans, sans-serif)",
                fontSize: 'clamp(1.05rem, 1.35vw, 1.25rem)',
                lineHeight: 1.75,
                color: 'var(--muted)',
                fontWeight: 300,
                maxWidth: '560px'
              }}
            >
              THE ARTIHC STUDIO conceives architectural sanctuaries and refined interior environments. Every commission is an uncompromising pursuit of volumetric calm, tectonic precision, and living materiality.
            </p>

            <div className="animate-slide-up animate-delay-2" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link to="/portfolio" className="btn btn-primary">
                  <span>Selected Monographs</span>
                  <ArrowUpRight size={14} />
                </Link>
                <Link to="/contact" className="btn btn-outline">
                  <span>Start Commission</span>
                </Link>
              </div>

              {/* Geographic Coordinates Stamp */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.65rem', color: 'var(--muted)', fontFamily: 'var(--font-heading)', letterSpacing: '0.12em' }}>
                <span className="tech-dot" />
                <span style={{ fontVariantNumeric: 'tabular-nums' }}>
                  13.6288° N (TPTY) &bull; 12.9716° N (BLR) &bull; 17.3850° N (HYD)
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Architectural Image Canvas Placeholder with Curated Luxury Villa */}
        <div style={{ position: 'relative' }}>
          <ArchitecturalPlaceholder
            src="/images/hero_villa.jpg"
            aspect="aspect-banner"
            theme="arch-placeholder-warm"
            category="FEATURED ARCHITECTURAL MONOGRAPH"
            title="The House of Allay &bull; Monolithic Limestone &amp; Volumetric Light"
            scale="1:50 VOLUMETRIC SCALE"
            tag="MONUMENTAL ELEVATION PERSPECTIVE"
          />

          {/* Quick Stats Overlay Pill */}
          <div 
            style={{
              position: 'absolute',
              bottom: '1.5rem',
              right: '1.5rem',
              backgroundColor: 'rgba(12, 12, 10, 0.85)',
              color: '#FFFFFF',
              backdropFilter: 'blur(10px)',
              padding: '0.75rem 1.25rem',
              borderRadius: '2px',
              display: 'flex',
              alignItems: 'center',
              gap: '1.5rem',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              zIndex: 10
            }}
            className="hero-badge"
          >
            <div>
              <span style={{ display: 'block', fontSize: '0.62rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255, 255, 255, 0.6)' }}>
                Scale / Typology
              </span>
              <strong style={{ fontSize: '0.82rem', fontFamily: 'var(--font-heading)', letterSpacing: '0.05em' }}>
                9,200 SQ.FT Villa
              </strong>
            </div>
            <div style={{ width: '1px', height: '24px', backgroundColor: 'rgba(255, 255, 255, 0.2)' }} />
            <div>
              <span style={{ display: 'block', fontSize: '0.62rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255, 255, 255, 0.6)' }}>
                Location
              </span>
              <strong style={{ fontSize: '0.82rem', fontFamily: 'var(--font-heading)', letterSpacing: '0.05em' }}>
                Jubilee Hills, Hyderabad
              </strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
