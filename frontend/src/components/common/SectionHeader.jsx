import React from 'react';

export default function SectionHeader({
  numeral = 'I',
  tag = 'ARCHITECTURAL PORTFOLIO',
  title = '',
  description = '',
  align = 'left',
  theme = 'light',
  action = null
}) {
  const isDark = theme === 'dark';

  return (
    <div 
      style={{
        marginBottom: 'clamp(2.5rem, 5vw, 4.5rem)',
        textAlign: align,
        position: 'relative'
      }}
    >
      {/* Top Meta Line with Roman Numeral */}
      <div 
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: align === 'center' ? 'center' : 'flex-start',
          gap: '0.85rem',
          marginBottom: '0.85rem'
        }}
      >
        <span 
          style={{
            fontFamily: "var(--font-heading, sans-serif)",
            fontSize: '0.72rem',
            letterSpacing: '0.22em',
            color: 'var(--bronze)',
            fontWeight: 600
          }}
        >
          [{numeral}]
        </span>
        <span className="tech-dot" />
        <span 
          style={{
            fontFamily: "var(--font-heading, sans-serif)",
            fontSize: '0.72rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: isDark ? 'rgba(255, 255, 255, 0.6)' : 'var(--muted)',
            fontWeight: 500
          }}
        >
          {tag}
        </span>
      </div>

      {/* Main Editorial Headline */}
      <div 
        style={{
          display: 'flex',
          flexDirection: align === 'center' ? 'column' : 'row',
          justifyContent: 'space-between',
          alignItems: align === 'center' ? 'center' : 'flex-end',
          flexWrap: 'wrap',
          gap: '1.5rem'
        }}
      >
        <div style={{ maxWidth: '820px' }}>
          <h2 
            style={{
              fontFamily: "var(--font-display, serif)",
              fontSize: 'clamp(2.1rem, 4.5vw, 3.6rem)',
              color: isDark ? '#FFFFFF' : 'var(--noir)',
              fontWeight: 400,
              lineHeight: 1.15,
              letterSpacing: '-0.01em',
              marginBottom: description ? '1rem' : 0
            }}
          >
            {title}
          </h2>

          {description && (
            <p 
              style={{
                fontFamily: "var(--font-sans, sans-serif)",
                fontSize: 'clamp(0.95rem, 1.2vw, 1.1rem)',
                color: isDark ? 'rgba(255, 255, 255, 0.7)' : 'var(--muted)',
                lineHeight: 1.65,
                fontWeight: 300,
                maxWidth: '680px'
              }}
            >
              {description}
            </p>
          )}
        </div>

        {action && (
          <div style={{ flexShrink: 0 }}>
            {action}
          </div>
        )}
      </div>
    </div>
  );
}
