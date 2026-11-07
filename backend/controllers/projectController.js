import pool from '../config/db.js';

export async function getAllProjects(req, res) {
  try {
    const { category, status } = req.query;

    let query = `
      SELECT p.*, c.name AS category_name, c.slug AS category_slug
      FROM projects p
      LEFT JOIN categories c ON p.category_id = c.id
      WHERE 1=1
    `;
    const params = [];

    if (status) {
      query += ` AND p.status = ?`;
      params.push(status);
    } else {
      query += ` AND p.status = 'published'`;
    }

    if (category && category !== 'all') {
      query += ` AND c.slug = ?`;
      params.push(category);
    }

    query += ` ORDER BY p.year DESC, p.id DESC`;

    const [rows] = await pool.query(query, params);

    // Fetch gallery images for all retrieved projects
    const projectIds = rows.map(r => r.id);
    let galleryMap = {};

    if (projectIds.length > 0) {
      const [galleryRows] = await pool.query(
        `SELECT * FROM project_gallery WHERE project_id IN (?) ORDER BY sort_order ASC`,
        [projectIds]
      );
      galleryRows.forEach(g => {
        if (!galleryMap[g.project_id]) galleryMap[g.project_id] = [];
        galleryMap[g.project_id].push({
          id: g.id,
          title: g.title,
          aspect: g.aspect,
          theme: g.theme,
          caption: g.caption,
          image: g.image
        });
      });
    }

    const projects = rows.map(r => ({
      id: r.id,
      title: r.title,
      slug: r.slug,
      category_id: r.category_id,
      category_name: r.category_name,
      category_slug: r.category_slug,
      type: r.type,
      location: r.location,
      area: r.area,
      scope: r.scope,
      year: r.year,
      featured: Boolean(r.featured),
      status: r.status,
      cover_image: r.cover_image,
      short_desc: r.short_desc,
      full_desc: r.full_desc,
      aspect: r.aspect,
      placeholderTheme: r.placeholder_theme,
      materials: typeof r.materials === 'string' ? JSON.parse(r.materials) : (r.materials || []),
      gallery: galleryMap[r.id] || []
    }));

    res.json({ success: true, count: projects.length, data: projects });
  } catch (err) {
    console.error('Error fetching projects:', err);
    res.status(500).json({ success: false, error: err.message });
  }
}

export async function getProjectBySlug(req, res) {
  try {
    const { slug } = req.params;

    const [rows] = await pool.query(
      `SELECT p.*, c.name AS category_name, c.slug AS category_slug
       FROM projects p
       LEFT JOIN categories c ON p.category_id = c.id
       WHERE p.slug = ?`,
      [slug]
    );

    if (rows.length === 0) {
      return res.status(404).json({ success: false, error: 'Project not found' });
    }

    const r = rows[0];

    const [galleryRows] = await pool.query(
      `SELECT * FROM project_gallery WHERE project_id = ? ORDER BY sort_order ASC`,
      [r.id]
    );

    const project = {
      id: r.id,
      title: r.title,
      slug: r.slug,
      category_id: r.category_id,
      category_name: r.category_name,
      category_slug: r.category_slug,
      type: r.type,
      location: r.location,
      area: r.area,
      scope: r.scope,
      year: r.year,
      featured: Boolean(r.featured),
      status: r.status,
      cover_image: r.cover_image,
      short_desc: r.short_desc,
      full_desc: r.full_desc,
      aspect: r.aspect,
      placeholderTheme: r.placeholder_theme,
      materials: typeof r.materials === 'string' ? JSON.parse(r.materials) : (r.materials || []),
      gallery: galleryRows.map(g => ({
        id: g.id,
        title: g.title,
        aspect: g.aspect,
        theme: g.theme,
        caption: g.caption,
        image: g.image
      }))
    };

    res.json({ success: true, data: project });
  } catch (err) {
    console.error('Error fetching project by slug:', err);
    res.status(500).json({ success: false, error: err.message });
  }
}

export async function createProject(req, res) {
  try {
    const p = req.body;
    const slug = p.slug || p.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

    const [result] = await pool.query(
      `INSERT INTO projects (
        title, slug, category_id, type, location, area, scope, year,
        featured, status, cover_image, short_desc, full_desc, aspect,
        placeholder_theme, materials
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        p.title,
        slug,
        p.category_id || 2,
        p.type || 'Architectural Monograph',
        p.location || 'South India',
        p.area || '5,000 SQ.FT',
        p.scope || 'Comprehensive Architecture & Turnkey Interiors',
        p.year || new Date().getFullYear().toString(),
        p.featured ? 1 : 0,
        p.status || 'published',
        p.cover_image || '/images/hero_villa.jpg',
        p.short_desc || '',
        p.full_desc || '',
        p.aspect || 'aspect-cinema',
        p.placeholderTheme || 'arch-placeholder-warm',
        JSON.stringify(p.materials || [])
      ]
    );

    const projectId = result.insertId;

    if (p.gallery && Array.isArray(p.gallery)) {
      for (let i = 0; i < p.gallery.length; i++) {
        const g = p.gallery[i];
        await pool.query(
          `INSERT INTO project_gallery (project_id, title, aspect, theme, caption, image, sort_order)
           VALUES (?, ?, ?, ?, ?, ?, ?)`,
          [projectId, g.title || p.title, g.aspect || 'aspect-editorial', g.theme || 'arch-placeholder-stone', g.caption || '', g.image || '', i]
        );
      }
    }

    res.status(201).json({ success: true, message: 'Project created successfully', id: projectId, slug });
  } catch (err) {
    console.error('Error creating project:', err);
    res.status(500).json({ success: false, error: err.message });
  }
}

export async function updateProject(req, res) {
  try {
    const { id } = req.params;
    const updates = req.body;

    const [result] = await pool.query(
      `UPDATE projects SET
        title = COALESCE(?, title),
        category_id = COALESCE(?, category_id),
        type = COALESCE(?, type),
        location = COALESCE(?, location),
        area = COALESCE(?, area),
        scope = COALESCE(?, scope),
        year = COALESCE(?, year),
        featured = COALESCE(?, featured),
        status = COALESCE(?, status),
        cover_image = COALESCE(?, cover_image),
        short_desc = COALESCE(?, short_desc),
        full_desc = COALESCE(?, full_desc),
        materials = COALESCE(?, materials)
       WHERE id = ?`,
      [
        updates.title,
        updates.category_id,
        updates.type,
        updates.location,
        updates.area,
        updates.scope,
        updates.year,
        updates.featured !== undefined ? (updates.featured ? 1 : 0) : null,
        updates.status,
        updates.cover_image,
        updates.short_desc,
        updates.full_desc,
        updates.materials ? JSON.stringify(updates.materials) : null,
        id
      ]
    );

    res.json({ success: true, message: 'Project updated successfully' });
  } catch (err) {
    console.error('Error updating project:', err);
    res.status(500).json({ success: false, error: err.message });
  }
}

export async function deleteProject(req, res) {
  try {
    const { id } = req.params;
    await pool.query(`DELETE FROM projects WHERE id = ?`, [id]);
    res.json({ success: true, message: 'Project deleted successfully' });
  } catch (err) {
    console.error('Error deleting project:', err);
    res.status(500).json({ success: false, error: err.message });
  }
}

