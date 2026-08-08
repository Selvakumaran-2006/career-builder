exports.getDashboardStats = async (req, res) => {
  try {
    const stats = {
      totalStudents: 1420,
      activeRoadmaps: 1180,
      mockInterviewsCompleted: 3450,
      avgReadinessScore: '78.5%',
      topTargetRole: 'Full Stack Developer (42%)',
      mostPreparedCompany: 'Google (28%)',
      recentRegistrations: [
        { name: 'Karthik Raja', college: 'Anna University', role: 'Full Stack Developer', date: '2 mins ago' },
        { name: 'Meera Nair', college: 'PES University', role: 'AI Engineer', date: '15 mins ago' },
        { name: 'Siddharth Rao', college: 'IIT Madras', role: 'DevOps Engineer', date: '1 hour ago' }
      ]
    };
    res.json({ success: true, stats });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = [
      { id: 'usr1', name: 'Karthik Raja', email: 'karthik@example.com', role: 'student', college: 'Anna University', readinessScore: 82, joined: '2026-07-15' },
      { id: 'usr2', name: 'Meera Nair', email: 'meera@example.com', role: 'student', college: 'PES University', readinessScore: 88, joined: '2026-07-20' },
      { id: 'usr3', name: 'Admin Selva', email: 'admin@careerbuilder.com', role: 'admin', college: 'IIT Madras', readinessScore: 99, joined: '2026-06-01' }
    ];
    res.json({ success: true, users });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.toggleUserRole = async (req, res) => {
  try {
    const { id } = req.params;
    res.json({ success: true, message: `User ${id} role updated successfully` });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.createResource = async (req, res) => {
  try {
    res.status(201).json({ success: true, message: 'Learning resource published by admin' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
