import React, { useState } from 'react';
import SectionHeader from '../common/SectionHeader';

export default function MaterialPaletteSection() {
  const materials = [
    {
      id: 'travertine',
      name: 'Honed Navona Travertine',
      origin: 'Tivoli, Italy',
      textureBg: 'linear-gradient(135deg, #E6DDD0 0%, #D8CDBC 50%, #CBBFA9 100%)',
      desc: 'Vein-cut natural limestone with microscopic surface voids left unfilled for natural tactile honesty. Used extensively in plinths, hearth surrounds, and master vanity volumes.',
      tag: 'MASONRY & PLINTHS'
    },
    {
      id: 'oak',
      name: 'Quarter-Sawn Fumed Oak',
      origin: 'European Temperate Forests',
      textureBg: 'linear-gradient(135deg, #4A3B32 0%, #382A22 50%, #291E18 100%)',
      textColor: '#FFFFFF',
      desc: 'Naturally fumed using ammonia vapor to achieve a rich, deep chocolate tone through the entire wood grain depth, avoiding superficial stains or chemical lacquers.',
      tag: 'BESPOKE MILLWORK'
    },
    {
      id: 'bronze',
      name: 'Hand-Patinated Architectural Bronze',
      origin: 'Atelier Foundry',
      textureBg: 'linear-gradient(135deg, #8A6E46 0%, #68502F 50%, #4D391F 100%)',
      textColor: '#FFFFFF',
      desc: 'Living alloy that oxidizes with touch and humidity, recording the domestic history of the home through warm golden undertones and subtle antique burnishing.',
      tag: 'HARDWARE & REVEALS'
    },
    {
      id: 'plaster',
      name: 'Acoustic Lime Wash Plaster',
      origin: 'Slaked Mineral Lime',
      textureBg: 'linear-gradient(135deg, #F0ECE4 0%, #E3DDD2 50%, #D5CDC0 100%)',
      desc: 'Breathable, non-toxic mineral wash providing micro-shadow diffusion and acoustic softness to expansive double-height volumes and bedroom suites.',
      tag: 'VOLUMETRIC SURFACES'
    },
    {
      id: 'marble',
      name: 'Calacatta Oro Marble',
      origin: 'Apuan Alps, Carrara',
      textureBg: 'linear-gradient(135deg, #F4F3F0 0%, #E2DDD5 50%, #D3CBBE 100%)',
      desc: 'Warm white crystalline marble characterized by sweeping caramel and grey veins. Monolithically book-matched across dramatic culinary counters and private bathtubs.',
      tag: 'SCULPTURAL STONE'
    }
  ];

  const [activeMaterial, setActiveMaterial] = useState(materials[0]);

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
          numeral="V"
          tag="TACTILE ATELIER"
          title="Materiality &amp; Architectural Substance"
          description="We select materials that age with dignity. Spaces are composed through genuine tactile contrast rather than superficial ornament."
        />

        {/* Material Swatch Selector */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '1rem',
            marginBottom: '2.5rem'
          }}
        >
          {materials.map((mat) => {
            const isSelected = activeMaterial.id === mat.id;
            return (
              <button
                key={mat.id}
                onClick={() => setActiveMaterial(mat)}
                style={{
                  height: '110px',
                  borderRadius: '2px',
                  background: mat.textureBg,
                  padding: '1rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  textAlign: 'left',
                  border: isSelected ? '2px solid var(--noir)' : '1px solid var(--stone-border)',
                  boxShadow: isSelected ? '0 8px 24px rgba(12, 12, 10, 0.15)' : 'none',
                  transform: isSelected ? 'translateY(-4px)' : 'none',
                  transition: 'all var(--transition-fast)',
                  cursor: 'pointer'
                }}
                aria-label={`Select material ${mat.name}`}
              >
                <span 
                  style={{
                    fontFamily: "var(--font-heading, sans-serif)",
                    fontSize: '0.62rem',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: mat.textColor || 'var(--noir)',
                    fontWeight: 600,
                    opacity: 0.85
                  }}
                >
                  {mat.tag}
                </span>

                <span 
                  style={{
                    fontFamily: "var(--font-heading, sans-serif)",
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: mat.textColor || 'var(--noir)',
                    lineHeight: 1.2
                  }}
                >
                  {mat.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Material Deep Dive Panel */}
        <div 
          className="spotlight-card"
          style={{
            backgroundColor: 'var(--travertine)',
            border: '1px solid var(--stone-border)',
            borderRadius: '2px',
            padding: 'clamp(2rem, 4vw, 3.5rem)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2.5rem',
            alignItems: 'center'
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
              <span className="live-pulse-dot" />
              <span className="tech-label tech-label-bronze">
                PROVENANCE: {activeMaterial.origin}
              </span>
            </div>

            <h3 
              style={{
                fontFamily: "var(--font-display, serif)",
                fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                fontWeight: 400,
                color: 'var(--noir)',
                marginBottom: '1rem',
                lineHeight: 1.15
              }}
            >
              {activeMaterial.name}
            </h3>

            <p 
              style={{
                fontFamily: "var(--font-sans, sans-serif)",
                fontSize: '0.95rem',
                lineHeight: 1.75,
                color: 'var(--muted)',
                fontWeight: 300,
                maxWidth: '560px',
                marginBottom: '1.75rem'
              }}
            >
              {activeMaterial.desc}
            </p>

            {/* Tactile Specifications Schedule */}
            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '1rem',
                paddingTop: '1.25rem',
                borderTop: '1px solid var(--stone-border)'
              }}
            >
              <div>
                <span style={{ display: 'block', fontSize: '0.62rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--muted)' }}>
                  Tactility Rating
                </span>
                <strong style={{ fontSize: '0.85rem', fontFamily: 'var(--font-heading)', color: 'var(--noir)' }}>
                  Natural Matte
                </strong>
              </div>
              <div>
                <span style={{ display: 'block', fontSize: '0.62rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--muted)' }}>
                  Durability Tier
                </span>
                <strong style={{ fontSize: '0.85rem', fontFamily: 'var(--font-heading)', color: 'var(--noir)' }}>
                  Architectural A+
                </strong>
              </div>
              <div>
                <span style={{ display: 'block', fontSize: '0.62rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--muted)' }}>
                  Aging Vector
                </span>
                <strong style={{ fontSize: '0.85rem', fontFamily: 'var(--font-heading)', color: 'var(--bronze-dark)' }}>
                  Living Patina
                </strong>
              </div>
            </div>
          </div>

          {/* Visual Texture Simulator with Interactive Tactile Grain */}
          <div 
            style={{
              height: '250px',
              borderRadius: '2px',
              background: activeMaterial.textureBg,
              border: '1px solid var(--stone-border)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: '1.5rem',
              boxShadow: 'inset 0 0 50px rgba(12, 12, 10, 0.12), 0 8px 24px rgba(12, 12, 10, 0.06)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Subtle Texture Grain Overlay */}
            <div 
              style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: 'radial-gradient(rgba(0,0,0,0.06) 1px, transparent 1px)',
                backgroundSize: '8px 8px',
                pointerEvents: 'none'
              }}
            />

            <span 
              style={{
                fontSize: '0.65rem',
                fontFamily: 'var(--font-heading)',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: activeMaterial.textColor || 'var(--noir)',
                opacity: 0.85,
                position: 'relative',
                zIndex: 1
              }}
            >
              ATELIER SURFACE SAMPLE &bull; SPEC NO. {activeMaterial.id.toUpperCase()}-26
            </span>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', position: 'relative', zIndex: 1 }}>
              <span 
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.25rem',
                  color: activeMaterial.textColor || 'var(--noir)'
                }}
              >
                {activeMaterial.name}
              </span>
              <span 
                style={{
                  fontSize: '0.62rem',
                  fontFamily: 'var(--font-heading)',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: activeMaterial.textColor || 'var(--noir)',
                  opacity: 0.8,
                  padding: '0.25rem 0.5rem',
                  backgroundColor: 'rgba(255,255,255,0.2)',
                  borderRadius: '1px',
                  backdropFilter: 'blur(4px)'
                }}
              >
                100% AUTHENTIC EXTRACTION
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}
