const mongoose = require('mongoose');

const topicSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  completed: { type: Boolean, default: false },
  resources: [{
    title: String,
    url: String,
    type: { type: String, enum: ['YouTube', 'Documentation', 'Free Course', 'Practice'], default: 'YouTube' }
  }]
});

const monthSchema = new mongoose.Schema({
  month: { type: Number, required: true },
  title: { type: String, required: true },
  description: String,
  topics: [topicSchema]
});

const roadmapSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  targetRole: { type: String, required: true },
  totalProgress: { type: Number, default: 0 },
  months: [monthSchema]
}, { timestamps: true });

module.exports = mongoose.model('Roadmap', roadmapSchema);
