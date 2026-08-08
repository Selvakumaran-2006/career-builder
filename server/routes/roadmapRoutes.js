const express = require('express');
const router = express.Router();
const { getRoadmap, generateRoadmap, toggleTopicCompletion } = require('../controllers/roadmapController');
const { protect } = require('../middleware/authMiddleware');

router.get('/', protect, getRoadmap);
router.post('/generate', protect, generateRoadmap);
router.put('/topic/toggle', protect, toggleTopicCompletion);

module.exports = router;
