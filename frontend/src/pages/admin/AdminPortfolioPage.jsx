import React, { useState, useEffect } from 'react';
import { Plus, Edit, Trash2, Eye, Star, CheckCircle, X, ShieldCheck } from 'lucide-react';
import AdminLayout from '../../components/admin/AdminLayout';
import { studioStore } from '../../data/store';

export default function AdminPortfolioPage() {
  const [projects, setProjects] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState(null);

  const [formData, setFormData] = useState({
    title: '',
    type: 'Bespoke Luxury Villa',
    category_id: 2,
    category_name: 'Residential Architecture',
    category_slug: 'residential',
    location: '',
    area: '',
    scope: '',
    year: '2026',
    short_desc: '',
    full_desc: '',
    featured: false,
    status: 'published'
  });

  useEffect(() => {
    const update = () => {
      setProjects(studioStore.getAllProjectsAdmin());
    };
    update();
    return studioStore.subscribe(update);
  }, []);

  const openNewModal = () => {
    setEditingProject(null);
    setFormData({
      title: '',
      type: 'Bespoke Luxury Villa',
      category_id: 2,
      category_name: 'Residential Architecture',
      category_slug: 'residential',
      location: 'Jubilee Hills, Hyderabad',
      area: '8,500 SQ.FT',
      scope: 'Spatial Architecture & Turnkey Execution',
      year: '2026',
      short_desc: '',
      full_desc: '',
      featured: false,
      status: 'published'
    });
    setModalOpen(true);
  };

  const openEditModal = (proj) => {
    setEditingProject(proj);
    setFormData({ ...proj });
    setModalOpen(true);
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (editingProject) {
      studioStore.updateProject(editingProject.id, formData);
    } else {
      studioStore.addProject(formData);
    }
    setModalOpen(false);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to remove this project monograph?')) {
      studioStore.deleteProject(id);
    }
  };

  const toggleFeatured = (proj) => {
    studioStore.updateProject(proj.id, { featured: !proj.featured });
  };

  const toggleStatus = (proj) => {
    const nextStatus = proj.status === 'published' ? 'draft' : 'published';
    studioStore.updateProject(proj.id, { status: nextStatus });
  };

  return (
    <AdminLayout activeTab="portfolio">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#111827' }}>
            Portfolio Monograph Management
          </h1>
          <p style={{ fontSize: '0.82rem', color: '#6B7280' }}>
            Database-driven architectural project catalog. Changes sync immediately to public portfolio.
          </p>
        </div>

        <button
          onClick={openNewModal}
          className="btn btn-primary"
          style={{ backgroundColor: '#111827', borderColor: '#111827', color: '#FFFFFF', padding: '0.75rem 1.25rem', borderRadius: '4px', fontSize: '0.8rem' }}
        >
          <Plus size={15} />
          <span>Add New Monograph</span>
        </button>
      </div>

      {/* Projects Table */}
      <div 
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '6px',
          border: '1px solid #E5E7EB',
          overflow: 'hidden'
        }}
      >
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.85rem' }}>
            <thead>
              <tr style={{ backgroundColor: '#F9FAFB', borderBottom: '1px solid #E5E7EB', color: '#4B5563', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                <th style={{ padding: '0.85rem 1.5rem' }}>Monograph Title</th>
                <th style={{ padding: '0.85rem 1rem' }}>Category &bull; Type</th>
                <th style={{ padding: '0.85rem 1rem' }}>Location &bull; Area</th>
                <th style={{ padding: '0.85rem 1rem' }}>Featured</th>
                <th style={{ padding: '0.85rem 1rem' }}>Status</th>
                <th style={{ padding: '0.85rem 1.5rem', textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((proj) => (
                <tr key={proj.id} style={{ borderBottom: '1px solid #F3F4F6' }}>
                  <td style={{ padding: '1rem 1.5rem' }}>
                    <strong style={{ display: 'block', color: '#111827' }}>{proj.title}</strong>
                    <span style={{ fontSize: '0.72rem', color: '#9CA3AF' }}>slug: /portfolio/{proj.slug}</span>
                  </td>
                  <td style={{ padding: '1rem' }}>
                    <span style={{ display: 'block', color: '#111827' }}>{proj.category_name}</span>
                    <span style={{ fontSize: '0.75rem', color: '#6B7280' }}>{proj.type}</span>
                  </td>
                  <td style={{ padding: '1rem' }}>
                    <span style={{ display: 'block', color: '#111827' }}>{proj.location}</span>
                    <span style={{ fontSize: '0.75rem', color: '#6B7280' }}>{proj.area}</span>
                  </td>
                  <td style={{ padding: '1rem' }}>
                    <button
                      onClick={() => toggleFeatured(proj)}
                      style={{
                        padding: '0.3rem 0.6rem',
                        borderRadius: '4px',
                        fontSize: '0.72rem',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        backgroundColor: proj.featured ? '#FEF3C7' : '#F3F4F6',
                        color: proj.featured ? '#D97706' : '#6B7280',
                        fontWeight: 600
                      }}
                    >
                      <Star size={13} fill={proj.featured ? 'currentColor' : 'none'} />
                      <span>{proj.featured ? 'Featured' : 'Standard'}</span>
                    </button>
                  </td>
                  <td style={{ padding: '1rem' }}>
                    <button
                      onClick={() => toggleStatus(proj)}
                      style={{
                        padding: '0.25rem 0.65rem',
                        borderRadius: '999px',
                        fontSize: '0.72rem',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        backgroundColor: proj.status === 'published' ? '#D1FAE5' : '#E5E7EB',
                        color: proj.status === 'published' ? '#065F46' : '#4B5563'
                      }}
                    >
                      {proj.status}
                    </button>
                  </td>
                  <td style={{ padding: '1rem 1.5rem', textAlign: 'right' }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                      <button
                        onClick={() => openEditModal(proj)}
                        style={{ padding: '0.4rem', color: '#4F46E5', borderRadius: '4px' }}
                        title="Edit Project"
                      >
                        <Edit size={16} />
                      </button>
                      <button
                        onClick={() => handleDelete(proj.id)}
                        style={{ padding: '0.4rem', color: '#EF4444', borderRadius: '4px' }}
                        title="Delete Project"
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
      </div>

      {/* Modal: Add / Edit Monograph */}
      {modalOpen && (
        <div 
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 100,
            backgroundColor: 'rgba(0,0,0,0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem'
          }}
        >
          <div 
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '6px',
              width: '100%',
              maxWidth: '680px',
              maxHeight: '90vh',
              overflowY: 'auto',
              padding: '2rem',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '1px solid #E5E7EB', paddingBottom: '1rem' }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#111827' }}>
                {editingProject ? 'Edit Project Monograph' : 'Add New Project Monograph'}
              </h2>
              <button onClick={() => setModalOpen(false)} style={{ color: '#6B7280' }}>
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSave} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <label className="form-label">Project Title *</label>
                <input 
                  type="text" 
                  required 
                  value={formData.title} 
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })} 
                  placeholder="e.g. The Sanctuary at Gandipet" 
                  className="form-input" 
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label className="form-label">Category</label>
                  <select 
                    value={formData.category_slug} 
                    onChange={(e) => {
                      const slug = e.target.value;
                      const name = slug === 'residential' ? 'Residential Architecture' : slug === 'commercial' ? 'Commercial & Workplace' : 'Bespoke & Hospitality';
                      const id = slug === 'residential' ? 2 : slug === 'commercial' ? 3 : 4;
                      setFormData({ ...formData, category_slug: slug, category_name: name, category_id: id });
                    }} 
                    className="form-select"
                  >
                    <option value="residential">Residential Architecture</option>
                    <option value="commercial">Commercial &amp; Workplace</option>
                    <option value="bespoke">Bespoke &amp; Hospitality</option>
                  </select>
                </div>

                <div>
                  <label className="form-label">Project Typology</label>
                  <input 
                    type="text" 
                    value={formData.type} 
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })} 
                    placeholder="e.g. Bespoke Luxury Villa" 
                    className="form-input" 
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label className="form-label">Location</label>
                  <input 
                    type="text" 
                    value={formData.location} 
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })} 
                    placeholder="e.g. Jubilee Hills, Hyderabad" 
                    className="form-input" 
                  />
                </div>

                <div>
                  <label className="form-label">Area / Volumetric Scale</label>
                  <input 
                    type="text" 
                    value={formData.area} 
                    onChange={(e) => setFormData({ ...formData, area: e.target.value })} 
                    placeholder="e.g. 9,200 SQ.FT" 
                    className="form-input" 
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label className="form-label">Scope of Practice</label>
                  <input 
                    type="text" 
                    value={formData.scope} 
                    onChange={(e) => setFormData({ ...formData, scope: e.target.value })} 
                    placeholder="e.g. Architecture &amp; Turnkey Interiors" 
                    className="form-input" 
                  />
                </div>

                <div>
                  <label className="form-label">Completion Year</label>
                  <input 
                    type="text" 
                    value={formData.year} 
                    onChange={(e) => setFormData({ ...formData, year: e.target.value })} 
                    placeholder="2026" 
                    className="form-input" 
                  />
                </div>
              </div>

              <div>
                <label className="form-label">Short Summary (Shows on card)</label>
                <textarea 
                  rows="2" 
                  value={formData.short_desc} 
                  onChange={(e) => setFormData({ ...formData, short_desc: e.target.value })} 
                  placeholder="Concise architectural description..." 
                  className="form-textarea" 
                />
              </div>

              <div>
                <label className="form-label">Full Narrative Statement</label>
                <textarea 
                  rows="4" 
                  value={formData.full_desc} 
                  onChange={(e) => setFormData({ ...formData, full_desc: e.target.value })} 
                  placeholder="In-depth spatial and material narrative..." 
                  className="form-textarea" 
                />
              </div>

              <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '0.85rem' }}>
                  <input 
                    type="checkbox" 
                    checked={formData.featured} 
                    onChange={(e) => setFormData({ ...formData, featured: e.target.checked })} 
                  />
                  <span>Feature on Homepage</span>
                </label>

                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '0.85rem' }}>
                  <input 
                    type="checkbox" 
                    checked={formData.status === 'published'} 
                    onChange={(e) => setFormData({ ...formData, status: e.target.checked ? 'published' : 'draft' })} 
                  />
                  <span>Publish Immediately</span>
                </label>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', marginTop: '1rem', borderTop: '1px solid #E5E7EB', paddingTop: '1.25rem' }}>
                <button 
                  type="button" 
                  onClick={() => setModalOpen(false)} 
                  className="btn btn-outline" 
                  style={{ borderRadius: '4px', fontSize: '0.8rem' }}
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="btn btn-primary" 
                  style={{ backgroundColor: '#111827', borderColor: '#111827', color: '#FFFFFF', borderRadius: '4px', fontSize: '0.8rem' }}
                >
                  <span>Save Project Monograph</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </AdminLayout>
  );
}
