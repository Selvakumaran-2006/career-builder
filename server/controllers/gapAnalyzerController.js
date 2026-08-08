const { calculateCareerGapAI } = require('../services/aiService');

exports.analyzeGap = async (req, res) => {
  try {
    const { skills, targetRole } = req.body;
    const currentSkills = skills || ['HTML', 'CSS', 'JavaScript', 'React.js', 'Git'];
    const role = targetRole || 'Full Stack Developer';

    const result = calculateCareerGapAI(currentSkills, role);
    res.json({ success: true, ...result });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
