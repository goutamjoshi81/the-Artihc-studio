import pool from '../config/db.js';

export async function getAnalytics(req, res) {
  try {
    const [rows] = await pool.query(
      `SELECT metric_value FROM analytics_metrics WHERE metric_key = 'studio_overview' LIMIT 1`
    );

    if (rows.length === 0) {
      return res.json({ success: true, data: {} });
    }

    const val = typeof rows[0].metric_value === 'string'
      ? JSON.parse(rows[0].metric_value)
      : rows[0].metric_value;

    res.json({ success: true, data: val });
  } catch (err) {
    console.error('Error fetching analytics:', err);
    res.status(500).json({ success: false, error: err.message });
  }
}

export async function login(req, res) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ success: false, error: 'Email and password required' });
    }

    const [rows] = await pool.query(
      `SELECT id, name, email, role FROM admin_users WHERE email = ? AND password = ?`,
      [email, password]
    );

    if (rows.length === 0) {
      // Demo fallback check
      if (email === 'admin@artihcstudio.com' && password === 'artihc2026') {
        return res.json({
          success: true,
          session: {
            isAuthenticated: true,
            user: { name: 'Principal Architect', email: 'admin@artihcstudio.com', role: 'owner' }
          }
        });
      }
      return res.status(401).json({ success: false, error: 'Invalid credentials. Use admin@artihcstudio.com / artihc2026' });
    }

    const user = rows[0];
    res.json({
      success: true,
      session: {
        isAuthenticated: true,
        user: { name: user.name, email: user.email, role: user.role }
      }
    });
  } catch (err) {
    console.error('Error logging in:', err);
    res.status(500).json({ success: false, error: err.message });
  }
}

