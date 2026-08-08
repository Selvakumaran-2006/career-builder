const mongoose = require('mongoose');

const resumeSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  resumeUrl: { type: String, required: true },
  atsScore: { type: Number, required: true },
  missingKeywords: [{ type: String }],
  suggestedImprovements: [{ type: String }],
  recommendedSkills: [{ type: String }],
  formattingFeedback: [{ type: String }],
  targetRoleMatch: { type: String, default: '82%' }
}, { timestamps: true });

module.exports = mongoose.model('Resume', resumeSchema);
