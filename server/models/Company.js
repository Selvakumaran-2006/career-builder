const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  logo: String,
  tier: { type: String, default: 'MAANG / Product' },
  avgSalary: { type: String, default: '18 - 35 LPA' },
  requiredSkills: [{ type: String }],
  interviewRounds: [{
    roundName: String,
    description: String,
    duration: String
  }],
  topQuestions: [{
    question: String,
    category: String, // Coding, System Design, HR, Aptitude
    difficulty: String, // Easy, Medium, Hard
    solution: String,
    codeSnippet: String
  }],
  codingPatterns: [{ type: String }],
  aptitudeTopics: [{ type: String }],
  preparationRoadmap: [{ step: String, description: String }]
}, { timestamps: true });

module.exports = mongoose.model('Company', companySchema);
