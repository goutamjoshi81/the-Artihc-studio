import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import WhatsAppButton from './components/common/WhatsAppButton';

// Public Pages
import HomePage from './pages/public/HomePage';
import AboutPage from './pages/public/AboutPage';
import ServicesPage from './pages/public/ServicesPage';
import PortfolioPage from './pages/public/PortfolioPage';
import ProjectDetailPage from './pages/public/ProjectDetailPage';
import ContactPage from './pages/public/ContactPage';

// Admin Pages
import AdminLoginPage from './pages/admin/AdminLoginPage';
import AdminDashboardPage from './pages/admin/AdminDashboardPage';
import AdminPortfolioPage from './pages/admin/AdminPortfolioPage';
import AdminServicesPage from './pages/admin/AdminServicesPage';
import AdminEnquiriesPage from './pages/admin/AdminEnquiriesPage';
import AdminAnalyticsPage from './pages/admin/AdminAnalyticsPage';

function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');
  const [scrollProgress, setScrollProgress] = React.useState(0);

  // Global Scroll Progress Calculation
  React.useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, progress)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Global Mouse Coordinate Tracking for Ambient Lighting & Card Spotlights
  React.useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);

      // If hovering an interactive card, set card-relative coordinates
      const card = e.target.closest('.arch-card-interactive, .spotlight-card');
      if (card) {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--mouse-card-x', `${e.clientX - rect.left}px`);
        card.style.setProperty('--mouse-card-y', `${e.clientY - rect.top}px`);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="app-container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <ScrollToTop />

      {/* Top Architectural Monograph Scroll Progress Bar */}
      {!isAdminRoute && (
        <div 
          className="scroll-progress-bar" 
          style={{ width: `${scrollProgress}%` }} 
          aria-hidden="true"
        />
      )}

      {/* Subtle Ambient Cursor Light Beam Overlay */}
      {!isAdminRoute && <div className="mouse-ambient-glow" aria-hidden="true" />}
      
      {/* Public Header - Only rendered on public website pages */}
      {!isAdminRoute && <Navbar />}

      {/* Main Dynamic Router Content */}
      <div style={{ flexGrow: 1, position: 'relative', zIndex: 2 }}>
        <Routes>
          {/* Public Website Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/portfolio/:slug" element={<ProjectDetailPage />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* Studio Admin Routes */}
          <Route path="/admin/login" element={<AdminLoginPage />} />
          <Route path="/admin" element={<AdminDashboardPage />} />
          <Route path="/admin/portfolio" element={<AdminPortfolioPage />} />
          <Route path="/admin/services" element={<AdminServicesPage />} />
          <Route path="/admin/enquiries" element={<AdminEnquiriesPage />} />
          <Route path="/admin/analytics" element={<AdminAnalyticsPage />} />

          {/* Fallback */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </div>

      {/* Public Footer & Floating WhatsApp - Only rendered on public website pages */}
      {!isAdminRoute && (
        <>
          <Footer />
          <WhatsAppButton />
        </>
      )}
    </div>
  );
}

