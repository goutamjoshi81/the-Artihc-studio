import pool from '../config/db.js';

export async function getAllServices(req, res) {
  try {
    const { status } = req.query;
    let query = `SELECT * FROM services`;
    const params = [];

    if (status) {
      query += ` WHERE status = ?`;
      params.push(status);
    } else {
      query += ` WHERE status = 'published'`;
    }

    query += ` ORDER BY sort_order ASC, id ASC`;

    const [rows] = await pool.query(query, params);

    const services = rows.map(s => ({
      id: s.id,
      title: s.title,
      slug: s.slug,
      number: s.number,
      image: s.image,
      short_desc: s.short_desc,
      full_desc: s.full_desc,
      deliverables: typeof s.deliverables === 'string' ? JSON.parse(s.deliverables) : (s.deliverables || []),
      sort_order: s.sort_order,
      status: s.status
    }));

    res.json({ success: true, count: services.length, data: services });
  } catch (err) {
    console.error('Error fetching services:', err);
    res.status(500).json({ success: false, error: err.message });
  }
}

export async function updateService(req, res) {
  try {
    const { id } = req.params;
    const s = req.body;

    await pool.query(
      `UPDATE services SET
        title = COALESCE(?, title),
        short_desc = COALESCE(?, short_desc),
        full_desc = COALESCE(?, full_desc),
        image = COALESCE(?, image),
        deliverables = COALESCE(?, deliverables),
        sort_order = COALESCE(?, sort_order),
        status = COALESCE(?, status)
       WHERE id = ?`,
      [
        s.title,
        s.short_desc,
        s.full_desc,
        s.image,
        s.deliverables ? JSON.stringify(s.deliverables) : null,
        s.sort_order,
        s.status,
        id
      ]
    );

    res.json({ success: true, message: 'Service updated successfully' });
  } catch (err) {
    console.error('Error updating service:', err);
    res.status(500).json({ success: false, error: err.message });
  }
}

