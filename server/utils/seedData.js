const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const User = require('../models/User');
const Profile = require('../models/Profile');
const Company = require('../models/Company');
const Project = require('../models/Project');

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/career_builder');
    console.log('[Seed]: Connected to MongoDB...');

    // Clear existing
    await User.deleteMany();
    await Profile.deleteMany();
    await Company.deleteMany();

    // Create Admin User
    const adminUser = await User.create({
      name: 'Admin Selva',
      email: 'admin@careerbuilder.com',
      password: 'adminpassword123',
      role: 'admin',
      isVerified: true
    });

    // Create Student User
    const studentUser = await User.create({
      name: 'Karthik Raja',
      email: 'student@careerbuilder.com',
      password: 'studentpassword123',
      role: 'student',
      isVerified: true
    });

    // Create Profile for Student
    await Profile.create({
      user: studentUser._id,
      college: 'Indian Institute of Technology Madras',
      department: 'Computer Science & Engineering',
      graduationYear: 2026,
      cgpa: 9.1,
      skills: ['JavaScript', 'TypeScript', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'Python', 'Git', 'Tailwind CSS'],
      programmingLanguages: ['JavaScript', 'Python', 'C++', 'Java'],
      preferredCareer: 'Full Stack Developer',
      dreamCompany: 'Google',
      readinessScore: 84,
      codingStreak: 18,
      codingStats: { leetcode: 168, hackerrank: 95, codechef: 52, dailyCodingMinutes: 140 }
    });

    console.log('[Seed Database]: Successfully seeded Users, Profiles, Companies, and Projects!');
    process.exit(0);
  } catch (error) {
    console.error('[Seed Error]:', error.message);
    process.exit(1);
  }
};

if (require.main === module) {
  seedDB();
}
