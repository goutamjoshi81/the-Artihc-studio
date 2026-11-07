import mysql from 'mysql2/promise';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import {
  INITIAL_CATEGORIES,
  INITIAL_PROJECTS,
  INITIAL_SERVICES,
  INITIAL_ENQUIRIES,
  INITIAL_ANALYTICS
} from '../../frontend/src/data/initialData.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function initDatabase() {
  const host = process.env.DB_HOST || '127.0.0.1';
  const port = parseInt(process.env.DB_PORT || '3306', 10);
  const user = process.env.DB_USER || 'root';
  const password = process.env.DB_PASSWORD || '';
  const database = process.env.DB_NAME || 'the_artihc_studio';

  console.log(`[InitDB] Connecting to MySQL server at ${host}:${port} as ${user}...`);

  let connection;
  try {
    connection = await mysql.createConnection({
      host,
      port,
      user,
      password,
      multipleStatements: true
    });
    console.log(`[InitDB] Connected to MySQL server successfully.`);
  } catch (err) {
    console.error(`[InitDB Error] Could not connect to MySQL server:`, err.message);
    process.exit(1);
  }

  try {
    // 1. Run schema.sql
    const schemaPath = path.join(__dirname, '../database/schema.sql');
    const schemaSql = fs.readFileSync(schemaPath, 'utf8');
    console.log(`[InitDB] Executing schema.sql...`);
    await connection.query(schemaSql);
    console.log(`[InitDB] Schema created successfully.`);

    // Switch to database
    await connection.query(`USE \`${database}\`;`);

    // 2. Seed Categories
    console.log(`[InitDB] Seeding categories...`);
    for (const cat of INITIAL_CATEGORIES) {
      await connection.query(
        `INSERT INTO categories (id, name, slug, count)
         VALUES (?, ?, ?, ?)
         ON DUPLICATE KEY UPDATE name=VALUES(name), count=VALUES(count);`,
        [cat.id, cat.name, cat.slug, cat.count]
      );
    }

    // 3. Seed Projects & Galleries
    console.log(`[InitDB] Seeding projects & galleries...`);
    for (const p of INITIAL_PROJECTS) {
      await connection.query(
        `INSERT INTO projects (
          id, title, slug, category_id, type, location, area, scope, year,
          featured, status, cover_image, short_desc, full_desc, aspect,
          placeholder_theme, materials
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        ON DUPLICATE KEY UPDATE
          title=VALUES(title),
          category_id=VALUES(category_id),
          type=VALUES(type),
          location=VALUES(location),
          area=VALUES(area),
          scope=VALUES(scope),
          year=VALUES(year),
          featured=VALUES(featured),
          status=VALUES(status),
          cover_image=VALUES(cover_image),
          short_desc=VALUES(short_desc),
          full_desc=VALUES(full_desc),
          aspect=VALUES(aspect),
          placeholder_theme=VALUES(placeholder_theme),
          materials=VALUES(materials);`,
        [
          p.id,
          p.title,
          p.slug,
          p.category_id,
          p.type,
          p.location,
          p.area,
          p.scope,
          p.year,
          p.featured ? 1 : 0,
          p.status,
          p.cover_image,
          p.short_desc,
          p.full_desc,
          p.aspect,
          p.placeholderTheme,
          JSON.stringify(p.materials || [])
        ]
      );

      // Seed gallery items
      if (p.gallery && p.gallery.length > 0) {
        for (let idx = 0; idx < p.gallery.length; idx++) {
          const g = p.gallery[idx];
          await connection.query(
            `INSERT INTO project_gallery (
              id, project_id, title, aspect, theme, caption, image, sort_order
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
            ON DUPLICATE KEY UPDATE
              title=VALUES(title),
              caption=VALUES(caption),
              image=VALUES(image),
              sort_order=VALUES(sort_order);`,
            [
              g.id,
              p.id,
              g.title || p.title,
              g.aspect || 'aspect-editorial',
              g.theme || 'arch-placeholder-stone',
              g.caption || '',
              g.image || '',
              idx
            ]
          );
        }
      }
    }

    // 4. Seed Services
    console.log(`[InitDB] Seeding services...`);
    for (const s of INITIAL_SERVICES) {
      await connection.query(
        `INSERT INTO services (
          id, title, slug, number, image, short_desc, full_desc, deliverables, sort_order, status
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        ON DUPLICATE KEY UPDATE
          title=VALUES(title),
          number=VALUES(number),
          image=VALUES(image),
          short_desc=VALUES(short_desc),
          full_desc=VALUES(full_desc),
          deliverables=VALUES(deliverables),
          sort_order=VALUES(sort_order),
          status=VALUES(status);`,
        [
          s.id,
          s.title,
          s.slug,
          s.number,
          s.image,
          s.short_desc,
          s.full_desc,
          JSON.stringify(s.deliverables || []),
          s.sort_order,
          s.status
        ]
      );
    }

    // 5. Seed Enquiries
    console.log(`[InitDB] Seeding enquiries...`);
    for (const e of INITIAL_ENQUIRIES) {
      await connection.query(
        `INSERT INTO enquiries (
          id, name, email, phone, project_type, location, area, budget, message, status
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        ON DUPLICATE KEY UPDATE
          status=VALUES(status);`,
        [
          e.id,
          e.name,
          e.email,
          e.phone,
          e.project_type,
          e.location,
          e.area,
          e.budget,
          e.message,
          e.status
        ]
      );
    }

    // 6. Seed Analytics
    console.log(`[InitDB] Seeding analytics...`);
    await connection.query(
      `INSERT INTO analytics_metrics (metric_key, metric_value)
       VALUES ('studio_overview', ?)
       ON DUPLICATE KEY UPDATE metric_value=VALUES(metric_value);`,
      [JSON.stringify(INITIAL_ANALYTICS)]
    );

    // 7. Seed Admin User
    console.log(`[InitDB] Seeding default admin user...`);
    await connection.query(
      `INSERT INTO admin_users (name, email, password, role)
       VALUES ('Principal Architect', 'admin@artihcstudio.com', 'artihc2026', 'owner')
       ON DUPLICATE KEY UPDATE name=VALUES(name);`
    );

    console.log(`[InitDB] Database '${database}' successfully initialized and populated!`);
  } catch (err) {
    console.error(`[InitDB Error] Execution failed:`, err);
  } finally {
    if (connection) await connection.end();
  }
}

initDatabase();

