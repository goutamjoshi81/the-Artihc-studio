import pool from '../config/db.js';

export async function createEnquiry(req, res) {
  try {
    const { name, email, phone, project_type, location, area, budget, message } = req.body;

    if (!name || !email) {
      return res.status(400).json({ success: false, error: 'Name and email are required.' });
    }

    const [result] = await pool.query(
      `INSERT INTO enquiries (name, email, phone, project_type, location, area, budget, message, status)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, 'new')`,
      [
        name,
        email,
        phone || '',
        project_type || 'Private Residential Villa',
        location || 'South India',
        area || '',
        budget || '',
        message || ''
      ]
    );

    const newEnquiry = {
      id: result.insertId,
      name,
      email,
      phone,
      project_type,
      location,
      area,
      budget,
      message,
      status: 'new',
      created_at: new Date().toISOString()
    };

    res.status(201).json({ success: true, message: 'Enquiry received with gratitude', data: newEnquiry });
  } catch (err) {
    console.error('Error creating enquiry:', err);
    res.status(500).json({ success: false, error: err.message });
  }
}

export async function getAllEnquiries(req, res) {
  try {
    const [rows] = await pool.query(
      `SELECT * FROM enquiries ORDER BY created_at DESC, id DESC`
    );

    res.json({ success: true, count: rows.length, data: rows });
  } catch (err) {
    console.error('Error fetching enquiries:', err);
    res.status(500).json({ success: false, error: err.message });
  }
}

export async function updateEnquiryStatus(req, res) {
  try {
    const { id } = req.params;
    const { status } = req.body;

    await pool.query(
      `UPDATE enquiries SET status = ? WHERE id = ?`,
      [status, id]
    );

    res.json({ success: true, message: 'Enquiry status updated' });
  } catch (err) {
    console.error('Error updating enquiry status:', err);
    res.status(500).json({ success: false, error: err.message });
  }
}

export async function deleteEnquiry(req, res) {
  try {
    const { id } = req.params;
    await pool.query(`DELETE FROM enquiries WHERE id = ?`, [id]);
    res.json({ success: true, message: 'Enquiry deleted' });
  } catch (err) {
    console.error('Error deleting enquiry:', err);
    res.status(500).json({ success: false, error: err.message });
  }
}

