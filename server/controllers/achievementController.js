const ACHIEVEMENTS_DATA = [
  { _id: 'ach1', title: '14 Days Coding Streak', description: 'Maintained 14 consecutive days of active problem solving on LeetCode.', badgeIcon: '🔥', xpPoints: 250, unlockedAt: '2026-08-01' },
  { _id: 'ach2', title: 'MERN Stack Pioneer', description: 'Completed Month 3 of the Full Stack AI Career Roadmap.', badgeIcon: '🚀', xpPoints: 500, unlockedAt: '2026-08-03' },
  { _id: 'ach3', title: 'ATS Resume Ninja', description: 'Scored 85%+ on ATS Resume Evaluation.', badgeIcon: '🎯', xpPoints: 300, unlockedAt: '2026-08-06' },
  { _id: 'ach4', title: 'Mock Interview Ace', description: 'Achieved 90%+ in AI Technical Mock Interview Simulator.', badgeIcon: '🏆', xpPoints: 400, unlockedAt: '2026-08-07' }
];

const LEADERBOARD_DATA = [
  { rank: 1, name: 'Aarav Sharma', college: 'IIT Bombay', readinessScore: 96, codingStreak: 45, xpPoints: 3850, avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150' },
  { rank: 2, name: 'Ananya Verma', college: 'BITS Pilani', readinessScore: 94, codingStreak: 38, xpPoints: 3420, avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150' },
  { rank: 3, name: 'Rohan Gupta', college: 'NIT Trichy', readinessScore: 91, codingStreak: 32, xpPoints: 3100, avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150' },
  { rank: 4, name: 'Priyanaka Roy', college: 'VIT Vellore', readinessScore: 89, codingStreak: 28, xpPoints: 2890, avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150' },
  { rank: 5, name: 'Selva Kumar (You)', college: 'Tier 1 Engineering College', readinessScore: 85, codingStreak: 14, xpPoints: 1450, avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150' }
];

exports.getAchievements = async (req, res) => {
  try {
    res.json({ success: true, achievements: ACHIEVEMENTS_DATA, totalXp: 1450 });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.getLeaderboard = async (req, res) => {
  try {
    res.json({ success: true, leaderboard: LEADERBOARD_DATA });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
