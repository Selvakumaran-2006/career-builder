const express = require('express');
const router = express.Router();
const { getTasks, createTask, toggleTask, deleteTask } = require('../controllers/studyPlannerController');
const { protect } = require('../middleware/authMiddleware');

router.get('/tasks', protect, getTasks);
router.post('/tasks', protect, createTask);
router.put('/tasks/:id/toggle', protect, toggleTask);
router.delete('/tasks/:id', protect, deleteTask);

module.exports = router;
