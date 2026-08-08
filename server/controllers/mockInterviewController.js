const { generateMockQuestions, evaluateMockAnswer } = require('../services/aiService');

exports.getQuestions = async (req, res) => {
  try {
    const { targetRole, interviewType } = req.query;
    const questions = generateMockQuestions(targetRole || 'Full Stack Developer', interviewType || 'Technical');
    res.json({ success: true, questions });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.evaluateAnswer = async (req, res) => {
  try {
    const { question, userAnswer } = req.body;
    const evaluation = evaluateMockAnswer(question, userAnswer);
    res.json({ success: true, evaluation });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.getHistory = async (req, res) => {
  try {
    const history = [
      {
        id: 'int_101',
        targetRole: 'Full Stack Developer',
        interviewType: 'Technical',
        overallScore: 88,
        date: '2026-08-01',
        summary: 'Strong understanding of Node event loop and React state management.'
      },
      {
        id: 'int_102',
        targetRole: 'Full Stack Developer',
        interviewType: 'Behavioral',
        overallScore: 92,
        date: '2026-08-05',
        summary: 'Excellent STAR method articulation and leadership skills.'
      }
    ];
    res.json({ success: true, history });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
