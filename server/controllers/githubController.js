const { analyzeGitHubProfile } = require('../services/aiService');

exports.analyzeUserGitHub = async (req, res) => {
  try {
    const { username } = req.body;
    const data = analyzeGitHubProfile(username || 'octocat');
    res.json({ success: true, ...data });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
