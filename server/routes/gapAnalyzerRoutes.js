const express = require('express');
const router = express.Router();
const { analyzeGap } = require('../controllers/gapAnalyzerController');
const { protect } = require('../middleware/authMiddleware');

router.post('/analyze', protect, analyzeGap);

module.exports = router;
