const express = require('express');
const router = express.Router();
const { getQuestions, evaluateAnswer, getHistory } = require('../controllers/mockInterviewController');
const { protect } = require('../middleware/authMiddleware');

router.get('/questions', protect, getQuestions);
router.post('/evaluate', protect, evaluateAnswer);
router.get('/history', protect, getHistory);

module.exports = router;
