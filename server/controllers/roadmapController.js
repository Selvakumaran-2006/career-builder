const Roadmap = require('../models/Roadmap');
const { generateRoadmapAI } = require('../services/aiService');

exports.getRoadmap = async (req, res) => {
  try {
    const { targetRole } = req.query;
    const role = targetRole || 'Full Stack Developer';
    
    let roadmap = await Roadmap.findOne({ user: req.user.id || req.user._id, targetRole: role });
    if (!roadmap) {
      const months = await generateRoadmapAI(role);
      roadmap = {
        targetRole: role,
        totalProgress: 25,
        months
      };
    }
    res.json({ success: true, roadmap });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.generateRoadmap = async (req, res) => {
  try {
    const { targetRole } = req.body;
    const role = targetRole || 'Full Stack Developer';
    
    const months = await generateRoadmapAI(role);
    const roadmap = {
      targetRole: role,
      totalProgress: 0,
      months
    };

    res.json({ success: true, roadmap, message: `Personalized AI Roadmap generated for ${role}` });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.toggleTopicCompletion = async (req, res) => {
  try {
    res.json({ success: true, message: 'Topic completion status updated' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
