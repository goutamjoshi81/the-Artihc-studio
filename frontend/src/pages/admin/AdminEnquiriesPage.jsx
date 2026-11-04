import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, MessageSquare, Trash2, Eye, X, CheckCircle } from 'lucide-react';
import AdminLayout from '../../components/admin/AdminLayout';
import { studioStore } from '../../data/store';

export default function AdminEnquiriesPage() {
  const [enquiries, setEnquiries] = useState([]);
  const [selectedEnquiry, setSelectedEnquiry] = useState(null);

  useEffect(() => {
    const update = () => {
      setEnquiries(studioStore.getEnquiries());
    };
    update();
    return studioStore.subscribe(update);
  }, []);

  const handleStatusChange = (id, newStatus) => {
    studioStore.updateEnquiryStatus(id, newStatus);
    if (selectedEnquiry && selectedEnquiry.id === id) {
      setSelectedEnquiry(prev => ({ ...prev, status: newStatus }));
    }
  };

  const handleDelete = (id) => {
    if (window.confirm('Delete this client enquiry record?')) {
      studioStore.deleteEnquiry(id);
      if (selectedEnquiry && selectedEnquiry.id === id) {
        setSelectedEnquiry(null);
      }
    }
  };

  return (
    <AdminLayout activeTab="enquiries">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#111827' }}>
            Client Commission Enquiries
          </h1>
          <p style={{ fontSize: '0.82rem', color: '#6B7280' }}>
            Prospective commissions received via public consultation form.
          </p>
        </div>
      </div>

      <div style={{ backgroundColor: '#FFFFFF', borderRadius: '6px', border: '1px solid #E5E7EB', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.85rem' }}>
          <thead>
            <tr style={{ backgroundColor: '#F9FAFB', borderBottom: '1px solid #E5E7EB', color: '#4B5563', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              <th style={{ padding: '0.85rem 1.5rem' }}>Client</th>
              <th style={{ padding: '0.85rem 1rem' }}>Project Scope</th>
              <th style={{ padding: '0.85rem 1rem' }}>Location &bull; Budget</th>
              <th style={{ padding: '0.85rem 1rem' }}>Received</th>
              <th style={{ padding: '0.85rem 1rem' }}>Status</th>
              <th style={{ padding: '0.85rem 1.5rem', textAlign: 'right' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {enquiries.map((enq) => (
              <tr key={enq.id} style={{ borderBottom: '1px solid #F3F4F6' }}>
                <td style={{ padding: '1rem 1.5rem' }}>
                  <strong style={{ display: 'block', color: '#111827' }}>{enq.name}</strong>
                  <span style={{ fontSize: '0.75rem', color: '#6B7280' }}>{enq.phone}</span>
                </td>
                <td style={{ padding: '1rem' }}>
                  <span style={{ display: 'block', color: '#111827' }}>{enq.project_type}</span>
                  <span style={{ fontSize: '0.75rem', color: '#6B7280' }}>{enq.area}</span>
                </td>
                <td style={{ padding: '1rem' }}>
                  <span style={{ display: 'block', color: '#111827' }}>{enq.location}</span>
                  <span style={{ fontSize: '0.75rem', color: '#6B7280' }}>{enq.budget}</span>
                </td>
                <td style={{ padding: '1rem', color: '#6B7280', fontSize: '0.78rem' }}>
                  {enq.created_at}
                </td>
                <td style={{ padding: '1rem' }}>
                  <select 
                    value={enq.status} 
                    onChange={(e) => handleStatusChange(enq.id, e.target.value)}
                    style={{
                      padding: '0.35rem 0.65rem',
                      borderRadius: '4px',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      backgroundColor: enq.status === 'new' ? '#FEE2E2' : enq.status === 'contacted' ? '#DBEAFE' : '#D1FAE5',
                      color: enq.status === 'new' ? '#991B1B' : enq.status === 'contacted' ? '#1E40AF' : '#065F46',
                      border: 'none',
                      cursor: 'pointer'
                    }}
                  >
                    <option value="new">NEW</option>
                    <option value="contacted">CONTACTED</option>
                    <option value="in_review">IN REVIEW</option>
                    <option value="closed">CLOSED</option>
                  </select>
                </td>
                <td style={{ padding: '1rem 1.5rem', textAlign: 'right' }}>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                    <button 
                      onClick={() => setSelectedEnquiry(enq)}
                      style={{ padding: '0.4rem', color: '#4F46E5' }} 
                      title="Inspect Scope &amp; Message"
                    >
                      <Eye size={16} />
                    </button>
                    <a
                      href={`https://wa.me/${enq.phone.replace(/[^0-9]/g, '')}?text=Hello%20${encodeURIComponent(enq.name)},%20regarding%20your%20architectural%20enquiry%20with%20The%20Artihc%20Studio`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ padding: '0.4rem', color: '#25D366' }}
                      title="Direct WhatsApp"
                    >
                      <MessageSquare size={16} />
                    </a>
                    <button 
                      onClick={() => handleDelete(enq.id)}
                      style={{ padding: '0.4rem', color: '#EF4444' }} 
                      title="Delete Record"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal: View Enquiry Details */}
      {selectedEnquiry && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 100, backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem' }}>
          <div style={{ backgroundColor: '#FFFFFF', borderRadius: '6px', width: '100%', maxWidth: '580px', padding: '2rem', boxShadow: '0 25px 50px rgba(0,0,0,0.25)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '1px solid #E5E7EB', paddingBottom: '1rem' }}>
              <div>
                <h2 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#111827' }}>
                  Enquiry Dossier &bull; {selectedEnquiry.name}
                </h2>
                <span style={{ fontSize: '0.75rem', color: '#6B7280' }}>Received {selectedEnquiry.created_at}</span>
              </div>
              <button onClick={() => setSelectedEnquiry(null)} style={{ color: '#6B7280' }}><X size={20} /></button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.88rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <span style={{ fontSize: '0.72rem', color: '#6B7280', textTransform: 'uppercase', display: 'block' }}>Phone</span>
                  <strong>{selectedEnquiry.phone}</strong>
                </div>
                <div>
                  <span style={{ fontSize: '0.72rem', color: '#6B7280', textTransform: 'uppercase', display: 'block' }}>Email</span>
                  <strong>{selectedEnquiry.email}</strong>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <span style={{ fontSize: '0.72rem', color: '#6B7280', textTransform: 'uppercase', display: 'block' }}>Typology</span>
                  <strong>{selectedEnquiry.project_type}</strong>
                </div>
                <div>
                  <span style={{ fontSize: '0.72rem', color: '#6B7280', textTransform: 'uppercase', display: 'block' }}>Area</span>
                  <strong>{selectedEnquiry.area}</strong>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <span style={{ fontSize: '0.72rem', color: '#6B7280', textTransform: 'uppercase', display: 'block' }}>Location</span>
                  <strong>{selectedEnquiry.location}</strong>
                </div>
                <div>
                  <span style={{ fontSize: '0.72rem', color: '#6B7280', textTransform: 'uppercase', display: 'block' }}>Budget</span>
                  <strong>{selectedEnquiry.budget}</strong>
                </div>
              </div>

              <div>
                <span style={{ fontSize: '0.72rem', color: '#6B7280', textTransform: 'uppercase', display: 'block', marginBottom: '0.35rem' }}>Client Spatial Brief</span>
                <div style={{ backgroundColor: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: '4px', padding: '1rem', color: '#1F2937', lineHeight: 1.6 }}>
                  {selectedEnquiry.message || 'No additional message text provided.'}
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '2rem', borderTop: '1px solid #E5E7EB', paddingTop: '1.25rem' }}>
              <select 
                value={selectedEnquiry.status} 
                onChange={(e) => handleStatusChange(selectedEnquiry.id, e.target.value)}
                style={{ padding: '0.5rem 0.75rem', borderRadius: '4px', border: '1px solid #D1D5DB' }}
              >
                <option value="new">Status: NEW</option>
                <option value="contacted">Status: CONTACTED</option>
                <option value="in_review">Status: IN REVIEW</option>
                <option value="closed">Status: CLOSED</option>
              </select>

              <a
                href={`https://wa.me/${selectedEnquiry.phone.replace(/[^0-9]/g, '')}?text=Hello%20${encodeURIComponent(selectedEnquiry.name)},%20regarding%20your%20architectural%20enquiry%20with%20The%20Artihc%20Studio`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ backgroundColor: '#25D366', borderColor: '#25D366', color: '#FFFFFF', padding: '0.65rem 1.25rem', borderRadius: '4px', fontSize: '0.8rem' }}
              >
                <MessageSquare size={14} />
                <span>Open WhatsApp Dialogue</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  );
}
