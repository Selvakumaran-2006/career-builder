const { evaluateResumeATS } = require('../services/aiService');

exports.analyzeResume = async (req, res) => {
  try {
    const { resumeText, targetRole } = req.body;
    const analysis = evaluateResumeATS(resumeText, targetRole || 'Full Stack Developer');
    res.json({ success: true, ...analysis });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
