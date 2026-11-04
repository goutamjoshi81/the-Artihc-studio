// Data Store with LocalStorage fallback & reactive subscribers
// Provides immediate CRUD operations during Phase 1 (Frontend),
// designed to seamlessly swap to PHP REST API endpoints in Phase 2.

import { 
  INITIAL_PROJECTS, 
  INITIAL_SERVICES, 
  INITIAL_CATEGORIES, 
  INITIAL_ENQUIRIES, 
  INITIAL_ANALYTICS 
} from './initialData';

const STORAGE_KEYS = {
  PROJECTS: 'tas_projects_v3',
  SERVICES: 'tas_services_v3',
  CATEGORIES: 'tas_categories_v3',
  ENQUIRIES: 'tas_enquiries_v3',
  AUTH: 'tas_admin_session_v1'
};

function getStorage(key, fallback) {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : fallback;
  } catch (e) {
    console.warn(`LocalStorage read error for ${key}:`, e);
    return fallback;
  }
}

function setStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.warn(`LocalStorage write error for ${key}:`, e);
  }
}

class StudioStore {
  constructor() {
    this.projects = getStorage(STORAGE_KEYS.PROJECTS, INITIAL_PROJECTS);
    this.services = getStorage(STORAGE_KEYS.SERVICES, INITIAL_SERVICES);
    this.categories = getStorage(STORAGE_KEYS.CATEGORIES, INITIAL_CATEGORIES);
    this.enquiries = getStorage(STORAGE_KEYS.ENQUIRIES, INITIAL_ENQUIRIES);
    this.analytics = INITIAL_ANALYTICS;
    this.listeners = new Set();
  }

  subscribe(listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  notify() {
    this.listeners.forEach((listener) => listener(this));
  }

  // --- PROJECTS ---
  getProjects(filterCategory = 'all') {
    if (!filterCategory || filterCategory === 'all') {
      return this.projects.filter(p => p.status === 'published');
    }
    return this.projects.filter(p => p.status === 'published' && p.category_slug === filterCategory);
  }

  getAllProjectsAdmin() {
    return this.projects;
  }

  getProjectBySlug(slug) {
    return this.projects.find(p => p.slug === slug);
  }

  addProject(projectData) {
    const newProject = {
      id: Date.now(),
      slug: projectData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, ''),
      year: new Date().getFullYear().toString(),
      status: 'published',
      featured: false,
      aspect: 'aspect-cinema',
      placeholderTheme: 'arch-placeholder-warm',
      gallery: [],
      materials: [],
      ...projectData
    };
    this.projects = [newProject, ...this.projects];
    setStorage(STORAGE_KEYS.PROJECTS, this.projects);
    this.notify();
    return newProject;
  }

  updateProject(id, updates) {
    this.projects = this.projects.map(p => p.id === id ? { ...p, ...updates } : p);
    setStorage(STORAGE_KEYS.PROJECTS, this.projects);
    this.notify();
  }

  deleteProject(id) {
    this.projects = this.projects.filter(p => p.id !== id);
    setStorage(STORAGE_KEYS.PROJECTS, this.projects);
    this.notify();
  }

  // --- SERVICES ---
  getServices() {
    return this.services.filter(s => s.status === 'published').sort((a, b) => a.sort_order - b.sort_order);
  }

  getAllServicesAdmin() {
    return this.services.sort((a, b) => a.sort_order - b.sort_order);
  }

  updateService(id, updates) {
    this.services = this.services.map(s => s.id === id ? { ...s, ...updates } : s);
    setStorage(STORAGE_KEYS.SERVICES, this.services);
    this.notify();
  }

  addService(serviceData) {
    const newService = {
      id: Date.now(),
      slug: serviceData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      sort_order: this.services.length + 1,
      status: 'published',
      deliverables: [],
      ...serviceData
    };
    this.services = [...this.services, newService];
    setStorage(STORAGE_KEYS.SERVICES, this.services);
    this.notify();
    return newService;
  }

  deleteService(id) {
    this.services = this.services.filter(s => s.id !== id);
    setStorage(STORAGE_KEYS.SERVICES, this.services);
    this.notify();
  }

  // --- ENQUIRIES ---
  getEnquiries() {
    return this.enquiries;
  }

  submitEnquiry(formData) {
    const newEnquiry = {
      id: Date.now(),
      ...formData,
      status: 'new',
      created_at: new Date().toLocaleString('en-US', {
        year: 'numeric',
        month: 'short',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
      })
    };
    this.enquiries = [newEnquiry, ...this.enquiries];
    setStorage(STORAGE_KEYS.ENQUIRIES, this.enquiries);
    this.notify();
    return newEnquiry;
  }

  updateEnquiryStatus(id, newStatus) {
    this.enquiries = this.enquiries.map(e => e.id === id ? { ...e, status: newStatus } : e);
    setStorage(STORAGE_KEYS.ENQUIRIES, this.enquiries);
    this.notify();
  }

  deleteEnquiry(id) {
    this.enquiries = this.enquiries.filter(e => e.id !== id);
    setStorage(STORAGE_KEYS.ENQUIRIES, this.enquiries);
    this.notify();
  }

  // --- AUTHENTICATION STATE ---
  getAuth() {
    return getStorage(STORAGE_KEYS.AUTH, { isAuthenticated: false, user: null });
  }

  login(email, password) {
    // Phase 1 demo authentication, ready for /api/auth/login in Phase 2
    if (email === 'admin@artihcstudio.com' && password === 'artihc2026') {
      const session = {
        isAuthenticated: true,
        user: { name: 'Principal Architect', email: 'admin@artihcstudio.com', role: 'owner' }
      };
      setStorage(STORAGE_KEYS.AUTH, session);
      return { success: true, session };
    }
    // Also allow any demo login for testing convenience if entered
    if (email && password) {
      const session = {
        isAuthenticated: true,
        user: { name: 'Studio Director', email, role: 'owner' }
      };
      setStorage(STORAGE_KEYS.AUTH, session);
      return { success: true, session };
    }
    return { success: false, error: 'Invalid credentials. Use admin@artihcstudio.com / artihc2026' };
  }

  logout() {
    setStorage(STORAGE_KEYS.AUTH, { isAuthenticated: false, user: null });
  }

  // --- RESET TO SEED ---
  resetToDefaults() {
    localStorage.removeItem(STORAGE_KEYS.PROJECTS);
    localStorage.removeItem(STORAGE_KEYS.SERVICES);
    localStorage.removeItem(STORAGE_KEYS.CATEGORIES);
    localStorage.removeItem(STORAGE_KEYS.ENQUIRIES);
    this.projects = INITIAL_PROJECTS;
    this.services = INITIAL_SERVICES;
    this.categories = INITIAL_CATEGORIES;
    this.enquiries = INITIAL_ENQUIRIES;
    this.notify();
  }
}

export const studioStore = new StudioStore();
