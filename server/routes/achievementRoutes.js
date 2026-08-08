const express = require('express');
const router = express.Router();
const { getAchievements, getLeaderboard } = require('../controllers/achievementController');
const { protect } = require('../middleware/authMiddleware');

router.get('/', protect, getAchievements);
router.get('/leaderboard', protect, getLeaderboard);

module.exports = router;
