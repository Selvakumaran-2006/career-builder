const Task = require('../models/Task');

const DEFAULT_TASKS = [
  { _id: 'task1', title: 'Solve 2 LeetCode Medium Problems (Trees & Graphs)', category: 'Coding', priority: 'High', timeFrame: 'daily', completed: true },
  { _id: 'task2', title: 'Watch React.js Context API & Redux Toolkit tutorial', category: 'Learning', priority: 'Medium', timeFrame: 'daily', completed: false },
  { _id: 'task3', title: 'Complete Node.js Express REST API controller module', category: 'Project', priority: 'High', timeFrame: 'weekly', completed: false },
  { _id: 'task4', title: 'Mock Interview Prep: Behavioral STAR story practice', category: 'Interview Prep', priority: 'Low', timeFrame: 'weekly', completed: true },
  { _id: 'task5', title: 'Review System Design ByteByteGo Newsletter', category: 'General', priority: 'Medium', timeFrame: 'monthly', completed: false }
];

exports.getTasks = async (req, res) => {
  try {
    res.json({ success: true, tasks: DEFAULT_TASKS });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.createTask = async (req, res) => {
  try {
    const newTask = {
      _id: 'task_' + Date.now(),
      ...req.body,
      completed: false
    };
    res.status(201).json({ success: true, task: newTask, message: 'Task created successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.toggleTask = async (req, res) => {
  try {
    const { id } = req.params;
    res.json({ success: true, message: `Task ${id} status toggled` });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    res.json({ success: true, message: `Task ${id} deleted` });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
