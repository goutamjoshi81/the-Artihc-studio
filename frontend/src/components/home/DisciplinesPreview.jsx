import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import { studioStore } from '../../data/store';

export default function DisciplinesPreview() {
  const [services, setServices] = React.useState([]);

  React.useEffect(() => {
    const update = () => {
      setServices(studioStore.getServices().slice(0, 4));
    };
    update();
    return studioStore.subscribe(update);
  }, []);

  return (
    <section 
      className="section"
      style={{
        backgroundColor: 'var(--travertine)',
        borderBottom: '1px solid var(--stone-border)'
      }}
    >
      <div className="container">
        <SectionHeader
          numeral="IV"
          tag="STUDIO DISCIPLINES"
          title="Architectural &amp; Spatial Offerings"
          description="A rigorous methodology spanning initial site planning through bespoke joinery and turnkey completion."
          action={
            <Link to="/services" className="btn btn-outline">
              <span>Explore All Disciplines</span>
              <ArrowUpRight size={14} />
            </Link>
          }
        />

        {/* Disciplines Accordion / Grid */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', backgroundColor: 'var(--stone-border)', border: '1px solid var(--stone-border)', borderRadius: '2px', overflow: 'hidden' }}>
          {services.map((service, index) => (
            <div
              key={service.id}
              style={{
                backgroundColor: 'var(--atelier-white)',
                padding: 'clamp(2rem, 3.5vw, 3rem)',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '2rem',
                alignItems: 'center',
                transition: 'all 0.35s var(--ease-editorial)',
                borderLeft: '3px solid transparent'
              }}
              className="group"
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#FAF8F5';
                e.currentTarget.style.borderLeftColor = 'var(--bronze)';
                e.currentTarget.style.paddingLeft = 'calc(clamp(2rem, 3.5vw, 3rem) + 4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--atelier-white)';
                e.currentTarget.style.borderLeftColor = 'transparent';
                e.currentTarget.style.paddingLeft = 'clamp(2rem, 3.5vw, 3rem)';
              }}
            >
              {/* Number and Title */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.75rem' }}>
                <span 
                  style={{
                    fontFamily: "var(--font-heading, sans-serif)",
                    fontSize: '1.5rem',
                    color: 'var(--bronze)',
                    fontWeight: 600,
                    lineHeight: 1
                  }}
                >
                  {service.number || `0${index + 1}`}
                </span>
                <div>
                  <h3 
                    style={{
                      fontFamily: "var(--font-heading, sans-serif)",
                      fontSize: '1.25rem',
                      fontWeight: 600,
                      color: 'var(--noir)',
                      marginBottom: '0.5rem'
                    }}
                  >
                    {service.title}
                  </h3>
                  <p 
                    style={{
                      fontFamily: "var(--font-sans, sans-serif)",
                      fontSize: '0.88rem',
                      lineHeight: 1.65,
                      color: 'var(--muted)',
                      fontWeight: 300,
                      maxWidth: '520px'
                    }}
                  >
                    {service.short_desc}
                  </p>
                </div>
              </div>

              {/* Scope Points */}
              <div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {(service.deliverables || []).slice(0, 3).map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.82rem', color: 'var(--noir)' }}>
                      <CheckCircle2 size={14} color="var(--bronze)" style={{ flexShrink: 0 }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Link */}
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Link to="/services" className="btn-link">
                  <span>View Scope &amp; Process</span>
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
