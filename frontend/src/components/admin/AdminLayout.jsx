import React, { useState } from 'react';
import { NavLink, useNavigate, Link } from 'react-router-dom';
import { 
  LayoutDashboard, 
  FolderKanban, 
  Wrench, 
  Inbox, 
  BarChart3, 
  LogOut, 
  ExternalLink,
  Menu,
  X,
  ShieldCheck
} from 'lucide-react';
import BrandLogo from '../common/BrandLogo';
import { studioStore } from '../../data/store';

export default function AdminLayout({ children, activeTab = 'dashboard' }) {
  const navigate = useNavigate();
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const handleLogout = () => {
    studioStore.logout();
    navigate('/admin/login');
  };

  const navItems = [
    { label: 'Executive Dashboard', path: '/admin', icon: <LayoutDashboard size={18} /> },
    { label: 'Portfolio CMS', path: '/admin/portfolio', icon: <FolderKanban size={18} /> },
    { label: 'Services CMS', path: '/admin/services', icon: <Wrench size={18} /> },
    { label: 'Client Enquiries', path: '/admin/enquiries', icon: <Inbox size={18} /> },
    { label: 'GA4 & Clarity Analytics', path: '/admin/analytics', icon: <BarChart3 size={18} /> }
  ];

  return (
    <div className="admin-shell">
      {/* Sidebar Navigation */}
      <aside className={`admin-sidebar ${mobileSidebarOpen ? 'open' : ''}`}>
        {/* Brand Header */}
        <div style={{ padding: '1.75rem 1.5rem', borderBottom: '1px solid #1F2937', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <BrandLogo variant="light" size="small" />
          <button 
            onClick={() => setMobileSidebarOpen(false)}
            style={{ color: '#9CA3AF', display: 'none' }}
            className="lg:hidden"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation Links */}
        <nav style={{ padding: '1.5rem 1rem', display: 'flex', flexDirection: 'column', gap: '0.4rem', flexGrow: 1 }}>
          <span style={{ fontSize: '0.65rem', fontFamily: 'var(--font-heading)', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#6B7280', padding: '0 0.75rem 0.5rem' }}>
            STUDIO MANAGEMENT
          </span>

          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/admin'}
              style={({ isActive }) => ({
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '0.75rem 1rem',
                borderRadius: '4px',
                fontSize: '0.85rem',
                color: isActive ? '#FFFFFF' : '#9CA3AF',
                backgroundColor: isActive ? '#1F2937' : 'transparent',
                fontWeight: isActive ? 500 : 400,
                transition: 'all 0.2s ease',
                textDecoration: 'none'
              })}
            >
              {item.icon}
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>

        {/* Footer Actions */}
        <div style={{ padding: '1.25rem', borderTop: '1px solid #1F2937', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <Link
            to="/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0.65rem 0.85rem',
              backgroundColor: '#111827',
              borderRadius: '4px',
              fontSize: '0.78rem',
              color: '#D1D5DB',
              textDecoration: 'none'
            }}
          >
            <span>View Public Website</span>
            <ExternalLink size={14} />
          </Link>

          <button
            onClick={handleLogout}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.65rem',
              padding: '0.65rem 0.85rem',
              color: '#EF4444',
              fontSize: '0.8rem',
              width: '100%',
              borderRadius: '4px',
              textAlign: 'left'
            }}
            className="hover:bg-red-950/30"
          >
            <LogOut size={16} />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Admin Content Area */}
      <div className="admin-content">
        {/* Top Minimal Admin Bar */}
        <header 
          style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid #E5E7EB',
            borderRadius: '6px',
            padding: '1rem 1.5rem',
            marginBottom: '2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <button
              onClick={() => setMobileSidebarOpen(true)}
              style={{ display: 'none', padding: '0.35rem', color: '#374151' }}
              className="admin-mobile-toggle"
            >
              <Menu size={20} />
            </button>
            <div>
              <h2 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#111827' }}>
                THE ARTIHC STUDIO &bull; Control Center
              </h2>
              <span style={{ fontSize: '0.75rem', color: '#6B7280' }}>
                Hosting Environment: GoDaddy cPanel Ready &bull; MySQL Schema v2
              </span>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.72rem',
                fontWeight: 500,
                padding: '0.35rem 0.75rem',
                backgroundColor: '#ECFDF5',
                color: '#065F46',
                borderRadius: '999px',
                border: '1px solid #A7F3D0'
              }}
            >
              <ShieldCheck size={14} />
              <span>Phase 1 Frontend Verified</span>
            </span>
          </div>
        </header>

        {/* Content Body */}
        {children}
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .admin-mobile-toggle {
            display: block !important;
          }
        }
      `}</style>
    </div>
  );
}
