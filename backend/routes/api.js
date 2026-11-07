import express from 'express';
import {
  getAllProjects,
  getProjectBySlug,
  createProject,
  updateProject,
  deleteProject
} from '../controllers/projectController.js';
import { getAllServices, updateService } from '../controllers/serviceController.js';
import {
  createEnquiry,
  getAllEnquiries,
  updateEnquiryStatus,
  deleteEnquiry
} from '../controllers/enquiryController.js';
import { getAllCategories } from '../controllers/categoryController.js';
import { getAnalytics, login } from '../controllers/analyticsController.js';

const router = express.Router();

// Projects
router.get('/projects', getAllProjects);
router.get('/projects/:slug', getProjectBySlug);
router.post('/projects', createProject);
router.put('/projects/:id', updateProject);
router.delete('/projects/:id', deleteProject);

// Categories
router.get('/categories', getAllCategories);

// Services
router.get('/services', getAllServices);
router.put('/services/:id', updateService);

// Enquiries (Concierge & Project Commissions)
router.post('/enquiries', createEnquiry);
router.get('/enquiries', getAllEnquiries);
router.patch('/enquiries/:id', updateEnquiryStatus);
router.delete('/enquiries/:id', deleteEnquiry);

// Analytics & Auth
router.get('/analytics', getAnalytics);
router.post('/auth/login', login);

// Health check
router.get('/health', (req, res) => {
  res.json({
    status: 'online',
    timestamp: new Date().toISOString(),
    service: 'The Artihc Studio API',
    database: '127.0.0.1:3306'
  });
});

export default router;

