# 🚀 Career Builder – AI Powered Career Roadmap Generator

> **Industry-Level MERN Stack Web Application for Student Career Planning, AI Roadmap Generation, ATS Resume Analysis, Skill Gap Benchmarking, and Placement Preparation.**

![License](https://img.shields.io/badge/License-MIT-blue.svg)
![Tech Stack](https://img.shields.io/badge/Stack-MERN%20(MongoDB%2C%20Express%2C%20React%2C%20Node.js)-indigo)
![Design](https://img.shields.io/badge/Design-Glassmorphism%20Dark%20Theme-purple)

---

## ✨ Features Overview

### 1. 🎯 Career Readiness & Dashboard
- **Live Readiness Score**: Calculates percentage readiness (e.g. 84%) based on target role requirements vs current skills.
- **Coding Streak & Metrics**: Tracks daily problem-solving streak (18 Days 🔥) and problem counts across LeetCode, HackerRank, and CodeChef.
- **Visual Analytics**: Interactive Recharts graphs displaying weekly learning hours and a skill radar matrix.

### 2. 🗺️ AI Career Roadmap Generator
- Personalized 6-month timelines for **10 Target Careers**: Full Stack Developer, Frontend, Backend, Java, Python, AI Engineer, Data Analyst, DevOps, Cyber Security, Mobile App Developer.
- Topic completion checkmarks, interactive resource drawers (YouTube, Docs, Free Courses, Practice), and AI regenerate button.

### 3. 🔍 Career Gap & ATS Resume Screener
- **Career Gap Analyzer**: Skill gap meter matching current student skills against MAANG/Product standards with priority learning paths (High, Medium, Low).
- **ATS Resume Screener**: Drag & drop PDF resume upload, ATS Score Gauge (85%), missing keyword matrix, and action verb bullet suggestions.

### 4. 🎙️ AI Mock Interview Simulator & Company Prep Hub
- **AI Mock Interview Room**: Practice Technical, HR, and Behavioral rounds with text/voice input, instant AI score report (88%), technical keyword hits, and speech feedback.
- **Target Company Intelligence**: Detailed interview prep guides for **Google, Amazon, Microsoft, Zoho, TCS, Infosys, Accenture**, complete with rounds breakdown, top coding questions, and C++/Java solutions.

### 5. 📅 Study Planner & GitHub Analyzer
- **Focus Pomodoro Timer**: Integrated 25-minute study clock.
- **Task Planner**: Daily/Weekly/Monthly task organization with priority tags.
- **GitHub Profile Analyzer**: Repo language distribution chart, contribution streak simulator, and optimization tips.
- **Achievements & Leaderboard**: Level badges, XP points system, and global student placement rankings.

---

## 🛠️ Tech Stack & Architecture

### **Frontend (`/client`)**
- **Core**: React 18, Vite
- **Styling**: Tailwind CSS (Dark Mode Glassmorphism with neon accents)
- **Icons & Charts**: Lucide-React, Recharts
- **HTTP Client**: Axios
- **Routing**: React Router DOM v6

### **Backend (`/server`)**
- **Runtime & Framework**: Node.js, Express.js (MVC Pattern)
- **Database & ORM**: MongoDB Atlas, Mongoose
- **Authentication**: JWT (JSON Web Tokens), bcrypt.js
- **File Uploads**: Multer, Cloudinary
- **AI Engine**: Gemini API Integration & Heuristic Fallback Engine
- **Validation**: Express-Validator

---

## 🚀 Quick Setup & Installation

### Prerequisites
- Node.js (v18+ recommended)
- MongoDB installed locally OR a MongoDB Atlas cluster URI.

### Step 1: Clone Repository
```bash
git clone https://github.com/YOUR_USERNAME/career-builder.git
cd career-builder
```

### Step 2: Install Backend Dependencies & Start Server
```bash
cd server
npm install
npm run seed     # Populate database with sample companies & users
npm run dev      # Starts API on http://localhost:5000
```

### Step 3: Install Frontend Dependencies & Start App
```bash
cd ../client
npm install
npm run dev      # Starts Vite app on http://localhost:3000
```

---

## 🔐 Environment Variables (`server/.env`)
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/career_builder
JWT_SECRET=supersecret_career_builder_jwt_token_2026_key
CLOUDINARY_CLOUD_NAME=demo_cloud
GEMINI_API_KEY=
```

---

## 📄 License
Distributed under the MIT License. See `LICENSE` for more information.
