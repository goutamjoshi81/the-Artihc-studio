import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Shield } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [istTime, setIstTime] = useState('');
  const location = useLocation();

  // Live IST Atelier Clock for Tirupati, Bangalore, Hyderabad
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      setIstTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'Contact', path: '/contact' }
  ];

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#F8F6F1]/95 shadow-xs' : 'bg-[#F8F6F1]/90'} backdrop-blur-md hairline-b`}>
      {/* Top Micro Telemetry Bar */}
      <div className="hidden lg:flex items-center justify-between px-8 py-1.5 text-[10px] tracking-[0.2em] uppercase text-monolithNoir/70 font-sans hairline-b bg-atelierCream/60">
        <div className="flex items-center space-x-6">
          <span className="flex items-center gap-1.5 font-medium text-monolithNoir">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-700 animate-pulse"></span>
            Atelier Active
          </span>
          <span className="text-monolithNoir/30">•</span>
          <span className="text-monolithNoir/60">Coordinates: 13.6288° N (Tirupati) • 12.9716° N (BLR) • 17.3850° N (HYD)</span>
        </div>
        <div className="flex items-center space-x-6">
          <span className="font-mono tracking-wider text-monolithNoir/90">IST {istTime || '11:30:00 AM'}</span>
          <span className="text-monolithNoir/30">•</span>
          <span className="text-bronze font-medium tracking-widest">Accepting New Projects (Q3/Q4)</span>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-[1720px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        {/* Monogram & Identity */}
        <Link to="/" className="flex items-center gap-4 group cursor-pointer">
          <div className="w-10 h-10 flex items-center justify-center hairline-r pr-4">
            {/* Monogram Column & Arch SVG */}
            <svg className="w-8 h-8 fill-none stroke-monolithNoir stroke-[1.5] transition-transform duration-500 group-hover:scale-105" viewBox="0 0 40 40">
              <rect fill="#0E0E0C" height="24" width="4" x="6" y="8"></rect>
              <rect fill="#0E0E0C" height="24" width="4" x="13" y="8"></rect>
              <path d="M21 32V18C21 12.4772 25.4772 8 31 8V8C36.5228 8 41 12.4772 41 18V32" stroke="#0E0E0C" stroke-width="2.5"></path>
              <line stroke="#0E0E0C" stroke-width="2" x1="4" x2="36" y1="32" y2="32"></line>
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl tracking-[0.16em] uppercase text-monolithNoir font-medium leading-none">The Artihc Studio</span>
            <span className="text-[9px] tracking-[0.28em] uppercase text-monolithNoir/50 font-sans mt-1">Architecture &amp; Interior Atelier</span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center space-x-10 text-[11px] font-sans tracking-[0.22em] uppercase text-monolithNoir/80">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[1px] after:bg-bronze after:transition-all ${
                  isActive
                    ? 'text-monolithNoir font-semibold after:w-full'
                    : 'hover:text-bronze after:w-0 hover:after:w-full'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* CTA & Actions */}
        <div className="flex items-center space-x-4">
          <Link
            to="/admin"
            className="hidden xl:flex items-center justify-center w-8 h-8 rounded-full border border-stoneBorder hover:border-bronze hover:text-bronze text-monolithNoir/60 transition-colors"
            title="Studio Partner Portal"
          >
            <Shield size={14} />
          </Link>

          <Link
            to="/contact"
            className="group relative inline-flex items-center gap-3 px-6 py-3 bg-monolithNoir text-travertine text-[10px] tracking-[0.24em] uppercase font-sans overflow-hidden transition-all duration-300 hover:bg-bronze"
          >
            <span className="relative z-10 font-medium">Contact</span>
            <ArrowUpRight className="w-3.5 h-3.5 relative z-10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-monolithNoir hover:text-bronze transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-travertine border-t border-stoneBorder px-6 py-8 space-y-6 animate-slide-up">
          <div className="flex flex-col space-y-4 text-xs font-sans tracking-[0.2em] uppercase">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `py-2 border-b border-stoneBorder transition-colors ${
                    isActive ? 'text-bronze font-semibold' : 'text-monolithNoir hover:text-bronze'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/admin"
              className="py-2 border-b border-stoneBorder text-monolithNoir/60 hover:text-bronze"
            >
              Partner Portal
            </Link>
          </div>

          <div className="pt-4 text-[10px] tracking-widest uppercase text-monolithNoir/50 font-sans space-y-1">
            <div>Coordinates: 13.6288° N • 12.9716° N • 17.3850° N</div>
            <div className="font-mono text-bronze">Live IST: {istTime}</div>
          </div>
        </div>
      )}
    </header>
  );
}
