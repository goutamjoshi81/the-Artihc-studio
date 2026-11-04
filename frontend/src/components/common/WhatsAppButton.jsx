import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react';

export default function WhatsAppButton({ 
  phoneNumber = '918772289011', 
  defaultMessage = 'Hello The Artihc Studio, I would like to enquire about commissioning an architectural sanctuary or interior project.' 
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Direct WhatsApp Studio Consultation"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => { setIsHovered(false); setIsPressed(false); }}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 90,
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.75rem',
        padding: '0.75rem 1.35rem',
        backgroundColor: isHovered ? 'var(--bronze)' : 'var(--noir)',
        color: '#FFFFFF',
        borderRadius: '30px',
        boxShadow: isHovered 
          ? '0 16px 36px rgba(168, 134, 93, 0.35), 0 0 20px rgba(168, 134, 93, 0.2)' 
          : '0 12px 32px rgba(12, 12, 10, 0.28)',
        border: '1px solid rgba(255, 255, 255, 0.16)',
        backdropFilter: 'blur(10px)',
        textDecoration: 'none',
        transform: isPressed 
          ? 'scale(0.96) translateY(-1px)' 
          : isHovered 
            ? 'translateY(-3px)' 
            : 'translateY(0)',
        transition: 'transform 0.18s cubic-bezier(0.2, 0, 0, 1), background-color 0.25s ease, box-shadow 0.25s ease',
        cursor: 'pointer',
        willChange: 'transform'
      }}
    >
      <div 
        style={{
          width: '30px',
          height: '30px',
          borderRadius: '50%',
          backgroundColor: '#25D366',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          position: 'relative'
        }}
      >
        <MessageSquare size={16} color="#FFFFFF" />
        {/* Subtle Online Pulse Dot */}
        <span 
          style={{
            position: 'absolute',
            top: '-2px',
            right: '-2px',
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            backgroundColor: '#4ADE80',
            border: '1.5px solid var(--noir)',
            boxShadow: '0 0 6px #4ADE80'
          }} 
        />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.15 }}>
        <span 
          style={{
            fontFamily: "var(--font-heading, sans-serif)",
            fontSize: '0.72rem',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            fontWeight: 600
          }}
        >
          WhatsApp Concierge
        </span>
        <span 
          style={{
            fontSize: '0.62rem',
            letterSpacing: '0.05em',
            color: 'rgba(255, 255, 255, 0.8)',
            fontVariantNumeric: 'tabular-nums'
          }}
        >
          Direct Consultation &bull; Online
        </span>
      </div>
    </a>
  );
}
