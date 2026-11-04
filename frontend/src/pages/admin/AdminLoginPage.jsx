import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Lock, Mail, ArrowRight, ShieldCheck, ArrowLeft } from 'lucide-react';
import BrandLogo from '../../components/common/BrandLogo';
import { studioStore } from '../../data/store';

export default function AdminLoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('admin@artihcstudio.com');
  const [password, setPassword] = useState('artihc2026');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    setTimeout(() => {
      const res = studioStore.login(email, password);
      setIsLoading(false);
      if (res.success) {
        navigate('/admin');
      } else {
        setError(res.error || 'Authentication failed');
      }
    }, 400);
  };

  return (
    <div 
      style={{
        minHeight: '100vh',
        backgroundColor: '#0E0E0C',
        color: '#FFFFFF',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem',
        position: 'relative'
      }}
    >
      {/* Return to Public Site Button */}
      <Link 
        to="/" 
        style={{
          position: 'absolute',
          top: '2rem',
          left: '2rem',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          color: 'rgba(255, 255, 255, 0.6)',
          fontSize: '0.78rem',
          fontFamily: 'var(--font-heading)',
          letterSpacing: '0.12em',
          textTransform: 'uppercase'
        }}
        className="hover:text-white"
      >
        <ArrowLeft size={15} />
        <span>Return to Public Monograph</span>
      </Link>

      <div 
        style={{
          width: '100%',
          maxWidth: '440px',
          backgroundColor: '#161614',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          borderRadius: '3px',
          padding: '2.5rem',
          boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{ display: 'inline-block', marginBottom: '1.25rem' }}>
            <BrandLogo variant="light" size="large" />
          </div>
          <h1 
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.25rem',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '0.4rem'
            }}
          >
            Studio CMS Gateway
          </h1>
          <p style={{ color: 'rgba(255, 255, 255, 0.55)', fontSize: '0.8rem' }}>
            Authorized Principal Architect &amp; Studio Director Access
          </p>
        </div>

        {error && (
          <div 
            style={{
              backgroundColor: 'rgba(150, 53, 53, 0.2)',
              border: '1px solid var(--danger)',
              color: '#F87171',
              padding: '0.75rem 1rem',
              borderRadius: '2px',
              fontSize: '0.82rem',
              marginBottom: '1.5rem'
            }}
          >
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255, 255, 255, 0.7)', marginBottom: '0.4rem', fontFamily: 'var(--font-heading)' }}>
              Studio Administrator Email
            </label>
            <div style={{ position: 'relative' }}>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.85rem 1rem 0.85rem 2.6rem',
                  backgroundColor: '#0E0E0C',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  color: '#FFFFFF',
                  borderRadius: '2px',
                  fontSize: '0.9rem',
                  outline: 'none'
                }}
              />
              <Mail size={16} color="rgba(255, 255, 255, 0.4)" style={{ position: 'absolute', left: '0.9rem', top: '50%', transform: 'translateY(-50%)' }} />
            </div>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255, 255, 255, 0.7)', marginBottom: '0.4rem', fontFamily: 'var(--font-heading)' }}>
              Security Password
            </label>
            <div style={{ position: 'relative' }}>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.85rem 1rem 0.85rem 2.6rem',
                  backgroundColor: '#0E0E0C',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  color: '#FFFFFF',
                  borderRadius: '2px',
                  fontSize: '0.9rem',
                  outline: 'none'
                }}
              />
              <Lock size={16} color="rgba(255, 255, 255, 0.4)" style={{ position: 'absolute', left: '0.9rem', top: '50%', transform: 'translateY(-50%)' }} />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="btn btn-primary"
            style={{
              backgroundColor: 'var(--bronze)',
              borderColor: 'var(--bronze)',
              color: '#FFFFFF',
              width: '100%',
              padding: '1rem',
              marginTop: '0.5rem'
            }}
          >
            <span>{isLoading ? 'Verifying Credentials...' : 'Authenticate & Enter CMS'}</span>
            <ArrowRight size={15} />
          </button>
        </form>

        {/* Demo Credentials Helper */}
        <div 
          style={{
            marginTop: '2rem',
            paddingTop: '1.25rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            fontSize: '0.75rem',
            color: 'rgba(255, 255, 255, 0.45)',
            textAlign: 'center'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.35rem', marginBottom: '0.35rem' }}>
            <ShieldCheck size={14} color="var(--bronze)" />
            <strong style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Demo Admin Access Enabled</strong>
          </div>
          <span>email: <code>admin@artihcstudio.com</code> &bull; pass: <code>artihc2026</code></span>
        </div>
      </div>
    </div>
  );
}
