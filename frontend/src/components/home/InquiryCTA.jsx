import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Phone } from 'lucide-react';

export default function InquiryCTA() {
  return (
    <section 
      style={{
        backgroundColor: 'var(--noir)',
        color: '#FFFFFF',
        padding: 'clamp(4.5rem, 8vw, 8rem) 0',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.04) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          opacity: 0.5,
          pointerEvents: 'none'
        }}
      />

      {/* Center Ambient Bronze Glow */}
      <div 
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '700px',
          height: '500px',
          background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(168, 134, 93, 0.18) 0%, transparent 70%)',
          pointerEvents: 'none',
          filter: 'blur(30px)'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: '920px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.25rem' }}>
            <span className="tech-dot" />
            <span 
              style={{
                fontFamily: "var(--font-heading, sans-serif)",
                fontSize: '0.72rem',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'var(--bronze-light)',
                fontWeight: 600
              }}
            >
              COMMISSION INQUIRIES &bull; 2025–2026 CALENDAR
            </span>
          </div>

          <h2 
            style={{
              fontFamily: "var(--font-display, serif)",
              fontSize: 'clamp(2.4rem, 5.5vw, 4.8rem)',
              fontWeight: 400,
              lineHeight: 1.1,
              letterSpacing: '-0.015em',
              marginBottom: '1.5rem',
              color: '#FFFFFF',
              textWrap: 'balance'
            }}
          >
            Ready to shape your <em>architectural sanctuary</em>?
          </h2>

          <p 
            style={{
              fontFamily: "var(--font-sans, sans-serif)",
              fontSize: 'clamp(1rem, 1.3vw, 1.2rem)',
              lineHeight: 1.7,
              color: 'rgba(255, 255, 255, 0.7)',
              fontWeight: 300,
              maxWidth: '640px',
              margin: '0 auto 2.5rem'
            }}
          >
            We take on a limited number of residential and commercial commissions each year to ensure uncompromising spatial rigor and artisan oversight.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
            <Link 
              to="/contact" 
              className="btn btn-primary"
              style={{ 
                backgroundColor: 'var(--bronze)', 
                borderColor: 'var(--bronze)', 
                color: '#FFFFFF',
                padding: '1.1rem 2.25rem',
                fontSize: '0.85rem'
              }}
            >
              <span>Initiate Project Commission</span>
              <ArrowUpRight size={16} />
            </Link>

            <a 
              href="tel:+917799392012"
              className="btn btn-outline-white"
              style={{ padding: '1.1rem 2rem', fontSize: '0.85rem' }}
            >
              <Phone size={15} />
              <span>Direct Studio Dial</span>
            </a>
          </div>

          {/* Location Footprint Indicator */}
          <div 
            style={{
              marginTop: '3.5rem',
              paddingTop: '2rem',
              borderTop: '1px solid rgba(255, 255, 255, 0.1)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '2rem',
              flexWrap: 'wrap',
              fontSize: '0.72rem',
              fontFamily: 'var(--font-heading)',
              letterSpacing: '0.18em',
              color: 'rgba(255, 255, 255, 0.5)',
              textTransform: 'uppercase'
            }}
          >
            <span>TIRUPATI ATELIER</span>
            <span>&bull;</span>
            <span>BANGALORE STUDIO</span>
            <span>&bull;</span>
            <span>HYDERABAD ENCLAVE</span>
          </div>
        </div>
      </div>
    </section>
  );
}
