const express = require('express');
const router = express.Router();
const { analyzeUserGitHub } = require('../controllers/githubController');
const { protect } = require('../middleware/authMiddleware');

router.post('/analyze', protect, analyzeUserGitHub);

module.exports = router;
