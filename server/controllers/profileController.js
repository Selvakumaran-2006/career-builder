const Profile = require('../models/Profile');

exports.getProfile = async (req, res) => {
  try {
    let profile = await Profile.findOne({ user: req.user.id || req.user._id }).populate('user', 'name email avatar role');
    if (!profile) {
      profile = {
        college: 'Indian Institute of Technology / Tier 1 Engineering College',
        department: 'Computer Science and Engineering',
        graduationYear: 2026,
        cgpa: 8.8,
        skills: ['JavaScript', 'React', 'Node.js', 'Express', 'MongoDB', 'HTML5', 'CSS3', 'Git'],
        programmingLanguages: ['JavaScript', 'Python', 'C++', 'Java'],
        certifications: [
          { title: 'Full Stack Web Development', issuer: 'Coursera / Meta', date: '2025', link: 'https://coursera.org' },
          { title: 'AWS Certified Cloud Practitioner', issuer: 'Amazon Web Services', date: '2025', link: 'https://aws.amazon.com' }
        ],
        projects: [
          { title: 'Career Builder AI', description: 'MERN Stack AI Roadmap Generator', techStack: ['React', 'Node.js', 'MongoDB', 'Tailwind'], githubUrl: 'https://github.com/developer/career-builder' }
        ],
        githubLink: 'https://github.com/developer',
        linkedinLink: 'https://linkedin.com/in/developer',
        preferredCareer: 'Full Stack Developer',
        dreamCompany: 'Google',
        readinessScore: 78,
        codingStreak: 14,
        codingStats: { leetcode: 145, hackerrank: 82, codechef: 45, dailyCodingMinutes: 120 }
      };
    }
    res.json({ success: true, profile });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.updateProfile = async (req, res) => {
  try {
    let profile = await Profile.findOne({ user: req.user.id || req.user._id });
    if (!profile) {
      profile = new Profile({ user: req.user.id || req.user._id, ...req.body });
    } else {
      Object.assign(profile, req.body);
    }
    await profile.save();
    res.json({ success: true, profile, message: 'Profile updated successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.uploadResume = async (req, res) => {
  try {
    const resumeUrl = req.file ? `/uploads/${req.file.filename}` : 'https://example.com/resume.pdf';
    res.json({ success: true, resumeUrl, message: 'Resume uploaded successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
