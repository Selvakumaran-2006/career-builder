const mongoose = require('mongoose');

const resourceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  url: { type: String, required: true },
  type: { type: String, enum: ['YouTube', 'Documentation', 'Free Course', 'Practice'], default: 'YouTube' },
  tags: [{ type: String }],
  addedByAdmin: { type: Boolean, default: true }
}, { timestamps: true });

module.exports = mongoose.model('Resource', resourceSchema);
