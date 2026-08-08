const NOTIFICATIONS_DATA = [
  { _id: 'notif1', title: 'Daily Coding Reminder', message: 'Keep your 14-day coding streak alive! Solve 1 LeetCode problem today.', type: 'reminder', read: false, createdAt: '1 hour ago' },
  { _id: 'notif2', title: 'Google Interview Mock Drill', message: 'Scheduled Technical Mock Interview round is ready for practice.', type: 'interview', read: false, createdAt: '3 hours ago' },
  { _id: 'notif3', title: 'Placement Deadline Alert', message: 'TCS Digital campus registration closes in 48 hours.', type: 'deadline', read: true, createdAt: '1 day ago' },
  { _id: 'notif4', title: 'Roadmap Milestone Complete', message: 'Congratulations on completing Month 2: React & Modern Web!', type: 'task', read: true, createdAt: '2 days ago' }
];

exports.getNotifications = async (req, res) => {
  try {
    res.json({ success: true, notifications: NOTIFICATIONS_DATA, unreadCount: 2 });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.markAsRead = async (req, res) => {
  try {
    const { id } = req.params;
    res.json({ success: true, message: `Notification ${id} marked as read` });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
