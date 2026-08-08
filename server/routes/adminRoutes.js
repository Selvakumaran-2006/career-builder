const express = require('express');
const router = express.Router();
const { getDashboardStats, getUsers, toggleUserRole, createResource } = require('../controllers/adminController');
const { protect, admin } = require('../middleware/authMiddleware');

router.get('/stats', protect, admin, getDashboardStats);
router.get('/users', protect, admin, getUsers);
router.put('/users/:id/role', protect, admin, toggleUserRole);
router.post('/resources', protect, admin, createResource);

module.exports = router;
