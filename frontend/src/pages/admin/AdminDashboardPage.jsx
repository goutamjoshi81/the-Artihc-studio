import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  FolderKanban, 
  Wrench, 
  Inbox, 
  BarChart3, 
  ArrowUpRight, 
  CheckCircle, 
  Clock, 
  Plus,
  Activity,
  Eye,
  MessageSquare
} from 'lucide-react';
import AdminLayout from '../../components/admin/AdminLayout';
import { studioStore } from '../../data/store';

export default function AdminDashboardPage() {
  const [projects, setProjects] = useState([]);
  const [services, setServices] = useState([]);
  const [enquiries, setEnquiries] = useState([]);
  const [analytics, setAnalytics] = useState(null);

  useEffect(() => {
    const update = () => {
      setProjects(studioStore.getAllProjectsAdmin());
      setServices(studioStore.getAllServicesAdmin());
      setEnquiries(studioStore.getEnquiries());
      setAnalytics(studioStore.analytics);
    };
    update();
    return studioStore.subscribe(update);
  }, []);

  const newEnquiriesCount = enquiries.filter(e => e.status === 'new').length;
  const publishedProjectsCount = projects.filter(p => p.status === 'published').length;

  return (
    <AdminLayout activeTab="dashboard">
      {/* Metrics Row */}
      <div 
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1.25rem',
          marginBottom: '2rem'
        }}
      >
        {/* Metric 1 */}
        <div style={{ backgroundColor: '#FFFFFF', padding: '1.5rem', borderRadius: '6px', border: '1px solid #E5E7EB' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
            <span style={{ fontSize: '0.78rem', color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>
              Published Monographs
            </span>
            <div style={{ padding: '0.4rem', backgroundColor: '#EEF2FF', borderRadius: '4px', color: '#4F46E5' }}>
              <FolderKanban size={18} />
            </div>
          </div>
          <div style={{ fontSize: '2rem', fontWeight: 700, color: '#111827', lineHeight: 1 }}>
            {publishedProjectsCount}
          </div>
          <span style={{ fontSize: '0.75rem', color: '#059669', display: 'inline-flex', alignItems: 'center', gap: '0.25rem', marginTop: '0.5rem' }}>
            {projects.length} Total records in database
          </span>
        </div>

        {/* Metric 2 */}
        <div style={{ backgroundColor: '#FFFFFF', padding: '1.5rem', borderRadius: '6px', border: '1px solid #E5E7EB' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
            <span style={{ fontSize: '0.78rem', color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>
              Active Services
            </span>
            <div style={{ padding: '0.4rem', backgroundColor: '#FEF3C7', borderRadius: '4px', color: '#D97706' }}>
              <Wrench size={18} />
            </div>
          </div>
          <div style={{ fontSize: '2rem', fontWeight: 700, color: '#111827', lineHeight: 1 }}>
            {services.filter(s => s.status === 'published').length}
          </div>
          <span style={{ fontSize: '0.75rem', color: '#6B7280', display: 'inline-flex', alignItems: 'center', gap: '0.25rem', marginTop: '0.5rem' }}>
            Dynamic Scope Offerings
          </span>
        </div>

        {/* Metric 3 */}
        <div style={{ backgroundColor: '#FFFFFF', padding: '1.5rem', borderRadius: '6px', border: '1px solid #E5E7EB' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
            <span style={{ fontSize: '0.78rem', color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>
              Client Enquiries
            </span>
            <div style={{ padding: '0.4rem', backgroundColor: '#ECFDF5', borderRadius: '4px', color: '#059669' }}>
              <Inbox size={18} />
            </div>
          </div>
          <div style={{ fontSize: '2rem', fontWeight: 700, color: '#111827', lineHeight: 1 }}>
            {enquiries.length}
          </div>
          <span style={{ fontSize: '0.75rem', color: newEnquiriesCount > 0 ? '#DC2626' : '#6B7280', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.25rem', marginTop: '0.5rem' }}>
            {newEnquiriesCount} Pending New Review
          </span>
        </div>

        {/* Metric 4 */}
        <div style={{ backgroundColor: '#FFFFFF', padding: '1.5rem', borderRadius: '6px', border: '1px solid #E5E7EB' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
            <span style={{ fontSize: '0.78rem', color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>
              GA4 Monthly Traffic
            </span>
            <div style={{ padding: '0.4rem', backgroundColor: '#F3E8FF', borderRadius: '4px', color: '#9333EA' }}>
              <BarChart3 size={18} />
            </div>
          </div>
          <div style={{ fontSize: '2rem', fontWeight: 700, color: '#111827', lineHeight: 1 }}>
            {analytics?.summary?.monthlyVisitors?.toLocaleString() || '4,820'}
          </div>
          <span style={{ fontSize: '0.75rem', color: '#6B7280', display: 'inline-flex', alignItems: 'center', gap: '0.25rem', marginTop: '0.5rem' }}>
            Avg session {analytics?.summary?.avgSessionDuration || '3m 42s'}
          </span>
        </div>
      </div>

      {/* Quick Action Bar */}
      <div 
        style={{
          display: 'flex',
          gap: '1rem',
          flexWrap: 'wrap',
          marginBottom: '2rem'
        }}
      >
        <Link 
          to="/admin/portfolio" 
          className="btn btn-primary"
          style={{ backgroundColor: '#111827', borderColor: '#111827', color: '#FFFFFF', borderRadius: '4px', padding: '0.75rem 1.25rem', fontSize: '0.82rem' }}
        >
          <Plus size={15} />
          <span>Manage Portfolio Projects</span>
        </Link>

        <Link 
          to="/admin/services" 
          className="btn btn-outline"
          style={{ borderColor: '#D1D5DB', borderRadius: '4px', padding: '0.75rem 1.25rem', fontSize: '0.82rem' }}
        >
          <Wrench size={15} />
          <span>Configure Services</span>
        </Link>

        <Link 
          to="/admin/enquiries" 
          className="btn btn-outline"
          style={{ borderColor: '#D1D5DB', borderRadius: '4px', padding: '0.75rem 1.25rem', fontSize: '0.82rem' }}
        >
          <Inbox size={15} />
          <span>Open Lead Pipeline ({newEnquiriesCount})</span>
        </Link>

        <Link 
          to="/admin/analytics" 
          className="btn btn-outline"
          style={{ borderColor: '#D1D5DB', borderRadius: '4px', padding: '0.75rem 1.25rem', fontSize: '0.82rem' }}
        >
          <Activity size={15} />
          <span>GA4 &amp; Clarity Console</span>
        </Link>
      </div>

      {/* Recent Client Enquiries Table */}
      <div 
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '6px',
          border: '1px solid #E5E7EB',
          overflow: 'hidden',
          marginBottom: '2rem'
        }}
      >
        <div style={{ padding: '1.25rem 1.5rem', borderBottom: '1px solid #E5E7EB', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#111827' }}>
              Recent Client Commission Inquiries
            </h3>
            <span style={{ fontSize: '0.75rem', color: '#6B7280' }}>
              Submitted through public website consultation form
            </span>
          </div>

          <Link to="/admin/enquiries" style={{ fontSize: '0.8rem', color: '#4F46E5', fontWeight: 500 }} className="hover:underline">
            View All ({enquiries.length}) &rarr;
          </Link>
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.85rem' }}>
            <thead>
              <tr style={{ backgroundColor: '#F9FAFB', borderBottom: '1px solid #E5E7EB', color: '#4B5563', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                <th style={{ padding: '0.85rem 1.5rem' }}>Client</th>
                <th style={{ padding: '0.85rem 1rem' }}>Typology &bull; Area</th>
                <th style={{ padding: '0.85rem 1rem' }}>Location</th>
                <th style={{ padding: '0.85rem 1rem' }}>Budget</th>
                <th style={{ padding: '0.85rem 1rem' }}>Status</th>
                <th style={{ padding: '0.85rem 1.5rem', textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {enquiries.slice(0, 5).map((enq) => (
                <tr key={enq.id} style={{ borderBottom: '1px solid #F3F4F6' }}>
                  <td style={{ padding: '1rem 1.5rem' }}>
                    <strong style={{ display: 'block', color: '#111827' }}>{enq.name}</strong>
                    <span style={{ fontSize: '0.75rem', color: '#6B7280' }}>{enq.phone} &bull; {enq.email}</span>
                  </td>
                  <td style={{ padding: '1rem' }}>
                    <span style={{ display: 'block', color: '#111827' }}>{enq.project_type}</span>
                    <span style={{ fontSize: '0.75rem', color: '#6B7280' }}>{enq.area}</span>
                  </td>
                  <td style={{ padding: '1rem', color: '#374151' }}>
                    {enq.location}
                  </td>
                  <td style={{ padding: '1rem', color: '#374151', fontWeight: 500 }}>
                    {enq.budget}
                  </td>
                  <td style={{ padding: '1rem' }}>
                    <span 
                      style={{
                        padding: '0.25rem 0.65rem',
                        borderRadius: '999px',
                        fontSize: '0.72rem',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        backgroundColor: enq.status === 'new' ? '#FEE2E2' : enq.status === 'contacted' ? '#DBEAFE' : '#D1FAE5',
                        color: enq.status === 'new' ? '#991B1B' : enq.status === 'contacted' ? '#1E40AF' : '#065F46'
                      }}
                    >
                      {enq.status}
                    </span>
                  </td>
                  <td style={{ padding: '1rem 1.5rem', textAlign: 'right' }}>
                    <a
                      href={`https://wa.me/${enq.phone.replace(/[^0-9]/g, '')}?text=Hello%20${encodeURIComponent(enq.name)},%20regarding%20your%20architectural%20enquiry%20with%20The%20Artihc%20Studio`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        padding: '0.4rem 0.75rem',
                        backgroundColor: '#25D366',
                        color: '#FFFFFF',
                        borderRadius: '4px',
                        fontSize: '0.75rem',
                        fontWeight: 500,
                        textDecoration: 'none'
                      }}
                    >
                      <MessageSquare size={13} />
                      <span>WhatsApp</span>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
}
