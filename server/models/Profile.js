const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
  college: { type: String, default: 'Indian Institute of Technology / Tier 1 Engineering College' },
  department: { type: String, default: 'Computer Science and Engineering' },
  graduationYear: { type: Number, default: 2026 },
  cgpa: { type: Number, default: 8.8 },
  skills: [{ type: String }], // e.g. ["JavaScript", "React", "Node.js", "MongoDB", "Python"]
  programmingLanguages: [{ type: String }],
  certifications: [{ title: String, issuer: String, date: String, link: String }],
  projects: [{ title: String, description: String, techStack: [String], githubUrl: String, liveUrl: String }],
  githubLink: { type: String, default: 'https://github.com/developer' },
  linkedinLink: { type: String, default: 'https://linkedin.com/in/developer' },
  resumeUrl: { type: String, default: '' },
  preferredCareer: { type: String, default: 'Full Stack Developer' },
  dreamCompany: { type: String, default: 'Google' },
  readinessScore: { type: Number, default: 78 },
  codingStreak: { type: Number, default: 14 },
  codingStats: {
    leetcode: { type: Number, default: 145 },
    hackerrank: { type: Number, default: 82 },
    codechef: { type: Number, default: 45 },
    dailyCodingMinutes: { type: Number, default: 120 }
  }
}, { timestamps: true });

module.exports = mongoose.model('Profile', profileSchema);
