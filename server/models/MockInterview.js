const mongoose = require('mongoose');

const mockInterviewSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  targetRole: { type: String, default: 'Full Stack Developer' },
  interviewType: { type: String, enum: ['Technical', 'HR', 'Behavioral'], default: 'Technical' },
  questions: [{
    question: String,
    category: String,
    userAnswer: String,
    aiFeedback: String,
    score: Number // 0 to 100
  }],
  overallScore: { type: Number, default: 0 },
  summary: String,
  completedAt: { type: Date, default: Date.now }
}, { timestamps: true });

module.exports = mongoose.model('MockInterview', mockInterviewSchema);
