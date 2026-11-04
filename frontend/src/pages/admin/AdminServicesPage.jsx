import React, { useState, useEffect } from 'react';
import { Plus, Edit, Trash2, CheckCircle2, X } from 'lucide-react';
import AdminLayout from '../../components/admin/AdminLayout';
import { studioStore } from '../../data/store';

export default function AdminServicesPage() {
  const [services, setServices] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingService, setEditingService] = useState(null);

  const [formData, setFormData] = useState({
    title: '',
    short_desc: '',
    full_desc: '',
    deliverablesText: '',
    sort_order: 1,
    status: 'published'
  });

  useEffect(() => {
    const update = () => {
      setServices(studioStore.getAllServicesAdmin());
    };
    update();
    return studioStore.subscribe(update);
  }, []);

  const openNewModal = () => {
    setEditingService(null);
    setFormData({
      title: '',
      short_desc: '',
      full_desc: '',
      deliverablesText: 'Concept Formulation & Modeling\nStructural Coordination\nTurnkey Site Supervision',
      sort_order: services.length + 1,
      status: 'published'
    });
    setModalOpen(true);
  };

  const openEditModal = (svc) => {
    setEditingService(svc);
    setFormData({
      ...svc,
      deliverablesText: (svc.deliverables || []).join('\n')
    });
    setModalOpen(true);
  };

  const handleSave = (e) => {
    e.preventDefault();
    const deliverables = formData.deliverablesText
      .split('\n')
      .map(s => s.trim())
      .filter(Boolean);

    const payload = {
      ...formData,
      deliverables
    };

    if (editingService) {
      studioStore.updateService(editingService.id, payload);
    } else {
      studioStore.addService(payload);
    }
    setModalOpen(false);
  };

  const handleDelete = (id) => {
    if (window.confirm('Delete this architectural discipline?')) {
      studioStore.deleteService(id);
    }
  };

  const toggleStatus = (svc) => {
    const next = svc.status === 'published' ? 'draft' : 'published';
    studioStore.updateService(svc.id, { status: next });
  };

  return (
    <AdminLayout activeTab="services">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#111827' }}>
            Services &amp; Scope Management
          </h1>
          <p style={{ fontSize: '0.82rem', color: '#6B7280' }}>
            Database-driven disciplines exposed on the public /services page.
          </p>
        </div>

        <button
          onClick={openNewModal}
          className="btn btn-primary"
          style={{ backgroundColor: '#111827', borderColor: '#111827', color: '#FFFFFF', padding: '0.75rem 1.25rem', borderRadius: '4px', fontSize: '0.8rem' }}
        >
          <Plus size={15} />
          <span>Add New Discipline</span>
        </button>
      </div>

      <div style={{ backgroundColor: '#FFFFFF', borderRadius: '6px', border: '1px solid #E5E7EB', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.85rem' }}>
          <thead>
            <tr style={{ backgroundColor: '#F9FAFB', borderBottom: '1px solid #E5E7EB', color: '#4B5563', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              <th style={{ padding: '0.85rem 1.5rem' }}>Order</th>
              <th style={{ padding: '0.85rem 1rem' }}>Discipline Title</th>
              <th style={{ padding: '0.85rem 1rem' }}>Key Deliverables</th>
              <th style={{ padding: '0.85rem 1rem' }}>Status</th>
              <th style={{ padding: '0.85rem 1.5rem', textAlign: 'right' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {services.map((svc) => (
              <tr key={svc.id} style={{ borderBottom: '1px solid #F3F4F6' }}>
                <td style={{ padding: '1rem 1.5rem', fontWeight: 600, color: '#4B5563' }}>
                  {svc.sort_order || svc.number || '01'}
                </td>
                <td style={{ padding: '1rem' }}>
                  <strong style={{ display: 'block', color: '#111827' }}>{svc.title}</strong>
                  <span style={{ fontSize: '0.75rem', color: '#6B7280' }}>{svc.short_desc?.slice(0, 75)}...</span>
                </td>
                <td style={{ padding: '1rem' }}>
                  <span style={{ fontSize: '0.78rem', color: '#374151' }}>
                    {(svc.deliverables || []).length} scope items specified
                  </span>
                </td>
                <td style={{ padding: '1rem' }}>
                  <button
                    onClick={() => toggleStatus(svc)}
                    style={{
                      padding: '0.25rem 0.65rem',
                      borderRadius: '999px',
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      backgroundColor: svc.status === 'published' ? '#D1FAE5' : '#E5E7EB',
                      color: svc.status === 'published' ? '#065F46' : '#4B5563'
                    }}
                  >
                    {svc.status}
                  </button>
                </td>
                <td style={{ padding: '1rem 1.5rem', textAlign: 'right' }}>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                    <button onClick={() => openEditModal(svc)} style={{ padding: '0.4rem', color: '#4F46E5' }}>
                      <Edit size={16} />
                    </button>
                    <button onClick={() => handleDelete(svc.id)} style={{ padding: '0.4rem', color: '#EF4444' }}>
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal: Add / Edit Service */}
      {modalOpen && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 100, backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem' }}>
          <div style={{ backgroundColor: '#FFFFFF', borderRadius: '6px', width: '100%', maxWidth: '600px', maxHeight: '90vh', overflowY: 'auto', padding: '2rem', boxShadow: '0 25px 50px rgba(0,0,0,0.25)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '1px solid #E5E7EB', paddingBottom: '1rem' }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#111827' }}>
                {editingService ? 'Edit Discipline' : 'Add New Discipline'}
              </h2>
              <button onClick={() => setModalOpen(false)} style={{ color: '#6B7280' }}><X size={20} /></button>
            </div>

            <form onSubmit={handleSave} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <label className="form-label">Service Title *</label>
                <input 
                  type="text" 
                  required 
                  value={formData.title} 
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })} 
                  className="form-input" 
                />
              </div>

              <div>
                <label className="form-label">Short Description</label>
                <textarea 
                  rows="2" 
                  value={formData.short_desc} 
                  onChange={(e) => setFormData({ ...formData, short_desc: e.target.value })} 
                  className="form-textarea" 
                />
              </div>

              <div>
                <label className="form-label">Full Narrative Description</label>
                <textarea 
                  rows="4" 
                  value={formData.full_desc} 
                  onChange={(e) => setFormData({ ...formData, full_desc: e.target.value })} 
                  className="form-textarea" 
                />
              </div>

              <div>
                <label className="form-label">Key Deliverables (One per line)</label>
                <textarea 
                  rows="4" 
                  value={formData.deliverablesText} 
                  onChange={(e) => setFormData({ ...formData, deliverablesText: e.target.value })} 
                  className="form-textarea" 
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', borderTop: '1px solid #E5E7EB', paddingTop: '1.25rem' }}>
                <button type="button" onClick={() => setModalOpen(false)} className="btn btn-outline" style={{ borderRadius: '4px', fontSize: '0.8rem' }}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#111827', borderColor: '#111827', color: '#FFFFFF', borderRadius: '4px', fontSize: '0.8rem' }}>
                  Save Discipline
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </AdminLayout>
  );
}
