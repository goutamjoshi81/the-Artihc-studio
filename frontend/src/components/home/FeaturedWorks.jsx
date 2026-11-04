import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, MapPin, Maximize2 } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import ArchitecturalPlaceholder from '../common/ArchitecturalPlaceholder';
import { studioStore } from '../../data/store';

export default function FeaturedWorks() {
  const [projects, setProjects] = React.useState([]);

  React.useEffect(() => {
    const update = () => {
      const all = studioStore.getProjects('all');
      setProjects(all.filter(p => p.featured).slice(0, 3));
    };
    update();
    return studioStore.subscribe(update);
  }, []);

  return (
    <section className="section" style={{ borderBottom: '1px solid var(--stone-border)' }}>
      <div className="container">
        <SectionHeader
          numeral="III"
          tag="SELECTED MONOGRAPHS"
          title="Curated Architectural Works"
          description="A selection of recent residential estates, duplex penthouses, and bespoke sanctuaries across South India."
          action={
            <Link to="/portfolio" className="btn btn-primary">
              <span>View All Projects</span>
              <ArrowUpRight size={14} />
            </Link>
          }
        />

        {/* Project Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: 'clamp(2rem, 3.5vw, 3rem)'
          }}
        >
          {projects.map((project, idx) => (
            <article 
              key={project.id}
              style={{
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: 'var(--atelier-white)',
                border: '1px solid var(--stone-border)',
                borderRadius: '2px',
                overflow: 'hidden'
              }}
              className="group arch-card-interactive spotlight-card"
            >
              {/* Image Container */}
              <Link 
                to={`/portfolio/${project.slug}`} 
                style={{ display: 'block', overflow: 'hidden' }}
                aria-label={`View details of ${project.title}`}
              >
                <ArchitecturalPlaceholder
                  src={project.cover_image}
                  aspect={idx === 0 ? 'aspect-cinema' : 'aspect-editorial'}
                  theme={project.placeholderTheme || 'arch-placeholder-warm'}
                  title={project.title}
                  category={project.type}
                  scale={project.area}
                  tag={project.location}
                />
              </Link>

              {/* Project Meta Card Details */}
              <div 
                style={{
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  flexGrow: 1,
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  {/* Category and Year */}
                  <div 
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '0.85rem'
                    }}
                  >
                    <span className="tech-label tech-label-bronze">
                      {project.category_name}
                    </span>
                    <span 
                      style={{
                        fontFamily: "var(--font-heading, sans-serif)",
                        fontSize: '0.72rem',
                        letterSpacing: '0.12em',
                        color: 'var(--muted)'
                      }}
                    >
                      {project.year}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 
                    style={{
                      fontFamily: "var(--font-display, serif)",
                      fontSize: '1.65rem',
                      fontWeight: 400,
                      marginBottom: '0.75rem',
                      lineHeight: 1.2
                    }}
                  >
                    <Link 
                      to={`/portfolio/${project.slug}`}
                      className="hover:text-amber-800 transition-colors"
                      style={{ color: 'var(--noir)' }}
                    >
                      {project.title}
                    </Link>
                  </h3>

                  {/* Short Description */}
                  <p 
                    style={{
                      fontFamily: "var(--font-sans, sans-serif)",
                      fontSize: '0.88rem',
                      lineHeight: 1.65,
                      color: 'var(--muted)',
                      fontWeight: 300,
                      marginBottom: '1.5rem'
                    }}
                  >
                    {project.short_desc}
                  </p>
                </div>

                {/* Bottom Specifications Bar */}
                <div 
                  style={{
                    paddingTop: '1rem',
                    borderTop: '1px solid var(--stone-border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontSize: '0.78rem'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--muted)' }}>
                    <MapPin size={13} color="var(--bronze)" />
                    <span>{project.location}</span>
                  </div>

                  <Link 
                    to={`/portfolio/${project.slug}`}
                    className="btn-link"
                    style={{ fontSize: '0.72rem' }}
                  >
                    <span>View Monograph</span>
                    <ArrowUpRight size={13} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
