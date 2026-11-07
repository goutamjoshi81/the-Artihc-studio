// THE ARTIHC STUDIO — Connected Reactive Data Store
// Connects to MySQL REST Endpoints at /api with LocalStorage fallback

import { 
  INITIAL_PROJECTS, 
  INITIAL_SERVICES, 
  INITIAL_CATEGORIES, 
  INITIAL_ENQUIRIES, 
  INITIAL_ANALYTICS 
} from './initialData';

const API_BASE = import.meta.env.VITE_API_URL || '/api';

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
    this.isServerConnected = false;
    this.listeners = new Set();

    // Trigger initial synchronization from MySQL API
    this.syncWithBackend();
  }

  subscribe(listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  notify() {
    this.listeners.forEach((listener) => listener(this));
  }

  // --- SYNC FROM BACKEND API ---
  async syncWithBackend() {
    try {
      const [projRes, servRes, catRes, enqRes, analRes] = await Promise.allSettled([
        fetch(`${API_BASE}/projects?status=published`),
        fetch(`${API_BASE}/services`),
        fetch(`${API_BASE}/categories`),
        fetch(`${API_BASE}/enquiries`),
        fetch(`${API_BASE}/analytics`)
      ]);

      let changed = false;

      if (projRes.status === 'fulfilled' && projRes.value.ok) {
        const data = await projRes.value.json();
        if (data.success && Array.isArray(data.data) && data.data.length > 0) {
          this.projects = data.data;
          setStorage(STORAGE_KEYS.PROJECTS, this.projects);
          changed = true;
        }
      }

      if (servRes.status === 'fulfilled' && servRes.value.ok) {
        const data = await servRes.value.json();
        if (data.success && Array.isArray(data.data) && data.data.length > 0) {
          this.services = data.data;
          setStorage(STORAGE_KEYS.SERVICES, this.services);
          changed = true;
        }
      }

      if (catRes.status === 'fulfilled' && catRes.value.ok) {
        const data = await catRes.value.json();
        if (data.success && Array.isArray(data.data) && data.data.length > 0) {
          this.categories = data.data;
          setStorage(STORAGE_KEYS.CATEGORIES, this.categories);
          changed = true;
        }
      }

      if (enqRes.status === 'fulfilled' && enqRes.value.ok) {
        const data = await enqRes.value.json();
        if (data.success && Array.isArray(data.data)) {
          this.enquiries = data.data;
          setStorage(STORAGE_KEYS.ENQUIRIES, this.enquiries);
          changed = true;
        }
      }

      if (analRes.status === 'fulfilled' && analRes.value.ok) {
        const data = await analRes.value.json();
        if (data.success && data.data) {
          this.analytics = data.data;
          changed = true;
        }
      }

      this.isServerConnected = true;
      if (changed) this.notify();
    } catch (err) {
      console.warn('[StudioStore] Running in offline/cache mode:', err.message);
      this.isServerConnected = false;
    }
  }

  // --- PROJECTS ---
  getProjects(filterCategory = 'all') {
    if (!filterCategory || filterCategory === 'all') {
      return this.projects.filter(p => p.status === 'published');
    }
    return this.projects.filter(p => p.status === 'published' && (p.category_slug === filterCategory || p.category === filterCategory));
  }

  getAllProjectsAdmin() {
    return this.projects;
  }

  getProjectBySlug(slug) {
    return this.projects.find(p => p.slug === slug);
  }

  async addProject(projectData) {
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

    // Optimistic update
    this.projects = [newProject, ...this.projects];
    setStorage(STORAGE_KEYS.PROJECTS, this.projects);
    this.notify();

    // Async sync to MySQL
    try {
      const res = await fetch(`${API_BASE}/projects`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newProject)
      });
      if (res.ok) {
        const result = await res.json();
        if (result.id) newProject.id = result.id;
      }
    } catch (e) {
      console.warn('[StudioStore] Failed to sync project creation to MySQL:', e);
    }

    return newProject;
  }

  async updateProject(id, updates) {
    this.projects = this.projects.map(p => p.id === id ? { ...p, ...updates } : p);
    setStorage(STORAGE_KEYS.PROJECTS, this.projects);
    this.notify();

    try {
      await fetch(`${API_BASE}/projects/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updates)
      });
    } catch (e) {
      console.warn('[StudioStore] Failed to sync project update to MySQL:', e);
    }
  }

  async deleteProject(id) {
    this.projects = this.projects.filter(p => p.id !== id);
    setStorage(STORAGE_KEYS.PROJECTS, this.projects);
    this.notify();

    try {
      await fetch(`${API_BASE}/projects/${id}`, { method: 'DELETE' });
    } catch (e) {
      console.warn('[StudioStore] Failed to sync project deletion to MySQL:', e);
    }
  }

  // --- SERVICES ---
  getServices() {
    return this.services.filter(s => s.status === 'published').sort((a, b) => a.sort_order - b.sort_order);
  }

  getAllServicesAdmin() {
    return this.services.sort((a, b) => a.sort_order - b.sort_order);
  }

  async updateService(id, updates) {
    this.services = this.services.map(s => s.id === id ? { ...s, ...updates } : s);
    setStorage(STORAGE_KEYS.SERVICES, this.services);
    this.notify();

    try {
      await fetch(`${API_BASE}/services/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updates)
      });
    } catch (e) {
      console.warn('[StudioStore] Failed to sync service update to MySQL:', e);
    }
  }

  // --- ENQUIRIES ---
  getEnquiries() {
    return this.enquiries;
  }

  async submitEnquiry(formData) {
    const newEnquiry = {
      id: Date.now(),
      ...formData,
      status: 'new',
      created_at: new Date().toISOString()
    };

    // Optimistic local update
    this.enquiries = [newEnquiry, ...this.enquiries];
    setStorage(STORAGE_KEYS.ENQUIRIES, this.enquiries);
    this.notify();

    // Persist to MySQL endpoint
    try {
      const res = await fetch(`${API_BASE}/enquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        const result = await res.json();
        if (result.data) {
          this.enquiries[0] = result.data;
          setStorage(STORAGE_KEYS.ENQUIRIES, this.enquiries);
        }
      }
    } catch (e) {
      console.warn('[StudioStore] Enquiry saved locally; MySQL offline or syncing:', e);
    }

    return newEnquiry;
  }

  async updateEnquiryStatus(id, newStatus) {
    this.enquiries = this.enquiries.map(e => e.id === id ? { ...e, status: newStatus } : e);
    setStorage(STORAGE_KEYS.ENQUIRIES, this.enquiries);
    this.notify();

    try {
      await fetch(`${API_BASE}/enquiries/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus })
      });
    } catch (e) {
      console.warn('[StudioStore] Failed to sync enquiry status to MySQL:', e);
    }
  }

  async deleteEnquiry(id) {
    this.enquiries = this.enquiries.filter(e => e.id !== id);
    setStorage(STORAGE_KEYS.ENQUIRIES, this.enquiries);
    this.notify();

    try {
      await fetch(`${API_BASE}/enquiries/${id}`, { method: 'DELETE' });
    } catch (e) {
      console.warn('[StudioStore] Failed to sync enquiry deletion to MySQL:', e);
    }
  }

  // --- AUTHENTICATION STATE ---
  getAuth() {
    return getStorage(STORAGE_KEYS.AUTH, { isAuthenticated: false, user: null });
  }

  async login(email, password) {
    try {
      const res = await fetch(`${API_BASE}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      if (res.ok) {
        const data = await res.json();
        if (data.success && data.session) {
          setStorage(STORAGE_KEYS.AUTH, data.session);
          return { success: true, session: data.session };
        }
      }
    } catch (e) {
      console.warn('[StudioStore] Falling back to local auth verification');
    }

    // Local fallback check
    if (email === 'admin@artihcstudio.com' && password === 'artihc2026') {
      const session = {
        isAuthenticated: true,
        user: { name: 'Principal Architect', email: 'admin@artihcstudio.com', role: 'owner' }
      };
      setStorage(STORAGE_KEYS.AUTH, session);
      return { success: true, session };
    }

    return { success: false, error: 'Invalid credentials. Use admin@artihcstudio.com / artihc2026' };
  }

  logout() {
    setStorage(STORAGE_KEYS.AUTH, { isAuthenticated: false, user: null });
  }
}

export const studioStore = new StudioStore();
