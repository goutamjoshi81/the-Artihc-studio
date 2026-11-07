import pool from '../config/db.js';

export async function getAllCategories(req, res) {
  try {
    const [rows] = await pool.query(
      `SELECT c.id, c.name, c.slug, COUNT(p.id) AS project_count
       FROM categories c
       LEFT JOIN projects p ON p.category_id = c.id AND p.status = 'published'
       GROUP BY c.id, c.name, c.slug
       ORDER BY c.id ASC`
    );

    // Also get total count for 'all'
    const [totalRows] = await pool.query(`SELECT COUNT(*) AS total FROM projects WHERE status = 'published'`);
    const totalPublished = totalRows[0]?.total || 0;

    const categories = [
      { id: 1, name: 'All Typologies', slug: 'all', count: totalPublished },
      ...rows.map(r => ({
        id: r.id,
        name: r.name,
        slug: r.slug,
        count: Number(r.project_count)
      }))
    ];

    res.json({ success: true, data: categories });
  } catch (err) {
    console.error('Error fetching categories:', err);
    res.status(500).json({ success: false, error: err.message });
  }
}

