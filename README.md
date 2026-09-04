# 🚀 Career Builder – AI Powered Career Roadmap Generator

> **Production-Grade MERN Stack Web Application for Student Career Planning, AI Roadmap Generation, ATS Resume Analysis, Skill Gap Benchmarking, Company Interview Preparation, and Placement Readiness.**

[![Live Demo](https://img.shields.io/badge/Live_Demo-career--builder--jmxg.onrender.com-brightgreen?style=for-the-badge&logo=render)](https://career-builder-jmxg.onrender.com)
[![Repository](https://img.shields.io/badge/GitHub-Selvakumaran--2006%2Fcareer--builder-181717?style=for-the-badge&logo=github)](https://github.com/Selvakumaran-2006/career-builder)

---

### 🌐 **Live Project Link**: [https://career-builder-jmxg.onrender.com](https://career-builder-jmxg.onrender.com)

---

## 🌟 Application Architecture & Features

```
               ┌──────────────────────────────────────────────┐
               │    React 18 + Vite Glassmorphic UI (Client)  │
               └──────────────────────┬───────────────────────┘
                                      │ REST API Calls (Axios)
                                      ▼
               ┌──────────────────────────────────────────────┐
               │  Express.js MVC Server & REST Endpoints      │
               └──────┬──────────────────────┬────────────────┘
                      │                      │
                      ▼                      ▼
        ┌────────────────────────┐  ┌─────────────────────────┐
        │ MongoDB Atlas / Mongoose│  │  AI Intelligence Engine │
        │ Document Collections   │  │ (Gemini API & Heuristics)│
        └────────────────────────┘  └─────────────────────────┘
```

---

## ⚡ Key Modules & Features

### 1. 📊 Student Dashboard & Career Readiness Gauge
- **Readiness Score**: Calculates live percentage match (e.g., `84%`) based on current skills vs target placement requirements.
- **Coding Streak Counter**: Tracks daily problem solving (18 Days 🔥) across LeetCode, HackerRank, and CodeChef.
- **Visual Analytics**: Interactive Recharts displaying weekly learning hours and a 6-axis skill radar matrix.

### 2. 🗺️ AI Career Roadmap Generator
- Custom 6-month timelines for **10 Industry Roles**:
  - Full Stack Developer, Frontend Developer, Backend Developer
  - Java Developer, Python Developer, AI Engineer
  - Data Analyst, DevOps Engineer, Cyber Security Engineer, Mobile App Developer
- Month-by-month interactive timeline node graph, topic completion checkboxes, and curated resources (YouTube, Docs, Free Courses, Practice).

### 3. 🔍 Career Gap Analyzer & ATS Resume Screener
- **Gap Analyzer**: Skill benchmark comparing student skills against MAANG/Product standards with priority learning paths (`High`, `Medium`, `Low`).
- **ATS Resume Screener**: Drag & drop PDF resume upload, ATS Score Gauge (`85%`), missing keyword matrix, and action verb bullet suggestions.

### 4. 🎙️ AI Mock Interview Simulator & Company Prep Hub
- **AI Mock Interview Simulator**: Practice Technical, HR, and Behavioral rounds with text/voice input, instant AI score evaluation (`88%`), technical keyword hits, and speech feedback.
- **Target Company Intelligence**: Comprehensive interview prep guides for **Google, Amazon, Microsoft, Zoho, TCS, Infosys, Accenture** complete with interview rounds breakdown, top coding questions, and C++/Java solutions.

### 5. 📅 Study Planner, GitHub Analyzer & Admin Control
- **Pomodoro Timer**: Integrated 25-minute deep focus study timer.
- **Task Planner**: Daily / Weekly / Monthly task organization with priority tags.
- **GitHub Profile Analyzer**: Repository language distribution chart, contribution streak simulator, and optimization tips.
- **Achievements & Leaderboard**: Level badges, XP points system, and global student placement rankings.
- **Admin Management Panel**: View system analytics, manage student users, toggle roles, and publish learning resources.

---

## 🛠️ Tech Stack & Directory Structure

```
career-builder/
├── client/                      # React 18 + Vite Frontend
│   ├── src/
│   │   ├── components/          # GlassCard, Navbar, Sidebar
│   │   ├── context/             # AuthContext, ThemeContext
│   │   ├── pages/               # 15+ Module Pages (Dashboard, Roadmap, etc.)
│   │   ├── App.jsx              # Router & Layout System
│   │   ├── index.css            # Tailwind & Glassmorphism Design Tokens
│   │   └── main.jsx             # Entry Point
│   ├── package.json
│   └── vite.config.js
│
├── server/                      # Node.js + Express REST API Backend
│   ├── config/                  # MongoDB Connection
│   ├── controllers/             # Auth, Profile, Roadmap, Gap, ATS, Mock Interview
│   ├── middleware/              # Auth Protection, Admin Guard, Multer Upload
│   ├── models/                  # Mongoose Schemas (User, Profile, Roadmap, etc.)
│   ├── routes/                  # RESTful API Endpoints
│   ├── services/                # AI Intelligence Service (Gemini API / Fallback)
│   ├── utils/                   # Database Seed Script
│   ├── server.js                # Express App & Production Static Client Serving
│   └── package.json
│
├── package.json                 # Monorepo Build & Start Scripts for Render
├── render.yaml                  # Render Blueprint Infrastructure Config
└── README.md
```

---

## 📡 REST API Endpoint Reference

| Module | HTTP Method | Endpoint Path | Description |
| :--- | :--- | :--- | :--- |
| **Auth** | `POST` | `/api/auth/register` | Register new student or admin account |
| **Auth** | `POST` | `/api/auth/login` | Authenticate user & return JWT token |
| **Auth** | `GET` | `/api/auth/me` | Fetch active user credentials |
| **Profile** | `GET` | `/api/profile` | Get student profile, CGPA & skills |
| **Profile** | `PUT` | `/api/profile` | Update profile info & career goals |
| **Profile** | `POST` | `/api/profile/resume` | Upload PDF resume file |
| **Roadmap** | `GET` | `/api/roadmap` | Fetch target role career roadmap |
| **Roadmap** | `POST` | `/api/roadmap/generate` | Synthesize new AI career roadmap |
| **Gap Analyzer** | `POST` | `/api/gap-analyzer/analyze` | Calculate readiness score & missing skills |
| **Resume ATS** | `POST` | `/api/resume/analyze` | Scan resume text & return ATS score |
| **Company Prep**| `GET` | `/api/companies` | List top target company interview preps |
| **Mock Interview**| `GET` | `/api/mock-interview/questions` | Fetch technical/behavioral interview prompts |
| **Mock Interview**| `POST` | `/api/mock-interview/evaluate` | Evaluate recorded answer with AI scoring |
| **GitHub** | `POST` | `/api/github/analyze` | Analyze GitHub profile & language stats |
| **Planner** | `GET` | `/api/planner/tasks` | Fetch study tasks & pomodoro items |
| **Achievements**| `GET` | `/api/achievements/leaderboard` | Get global student placement leaderboard |
| **Admin** | `GET` | `/api/admin/stats` | View administrative system metrics |

---

## 💻 Local Development Setup

### Step 1: Clone Repository
```bash
git clone https://github.com/Selvakumaran-2006/career-builder.git
cd career-builder
```

### Step 2: Start Backend API
```bash
cd server
npm install
npm run seed     # Populate database with sample companies & users
npm run dev      # Starts API on http://localhost:5000
```

### Step 3: Start Frontend Client
```bash
cd ../client
npm install
npm run dev      # Starts React Vite app on http://localhost:3000
```

---

## 🌐 Live Render Deployment

- **Live URL**: [https://career-builder-jmxg.onrender.com](https://career-builder-jmxg.onrender.com)
- **Deployment Config**: [`render.yaml`](render.yaml)

---

## 📜 License
Distributed under the MIT License. Developed for placement, hackathons, and software engineering portfolios.
