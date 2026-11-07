import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import apiRoutes from './routes/api.js';
import { testConnection } from './config/db.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

// Request logger
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Mount API routes
app.use('/api', apiRoutes);

// Root greeting
app.get('/', (req, res) => {
  res.json({
    atelier: 'The Artihc Studio',
    architecture: 'Monolithic & Warm Minimalist Sanctuaries',
    endpoints: {
      health: '/api/health',
      projects: '/api/projects',
      categories: '/api/categories',
      services: '/api/services',
      enquiries: '/api/enquiries',
      analytics: '/api/analytics'
    }
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('[Unhandled Error]:', err);
  res.status(500).json({ success: false, error: 'Internal Atelier Server Error' });
});

// Start server
app.listen(PORT, async () => {
  console.log(`=======================================================`);
  console.log(`  The Artihc Studio API Server`);
  console.log(`  Running on: http://localhost:${PORT}`);
  console.log(`  Target MySQL: ${process.env.DB_HOST || '127.0.0.1'}:${process.env.DB_PORT || '3306'}`);
  console.log(`=======================================================`);
  await testConnection();
});

