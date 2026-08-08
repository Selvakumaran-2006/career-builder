import React, { useState } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import ProfileHub from './pages/ProfileHub';
import CareerRoadmap from './pages/CareerRoadmap';
import GapAnalyzer from './pages/GapAnalyzer';
import ResumeAnalyzer from './pages/ResumeAnalyzer';
import CodingTracker from './pages/CodingTracker';
import ProjectStore from './pages/ProjectStore';
import CompanyPrep from './pages/CompanyPrep';
import MockInterview from './pages/MockInterview';
import StudyPlanner from './pages/StudyPlanner';
import GitHubAnalyzer from './pages/GitHubAnalyzer';
import Achievements from './pages/Achievements';
import Notifications from './pages/Notifications';
import AdminDashboard from './pages/AdminDashboard';

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  // Pages that don't display sidebar & navbar (Landing, Login, Signup)
  const isAuthOrLanding = ['/', '/login', '/signup'].includes(location.pathname);

  if (isAuthOrLanding) {
    return (
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    );
  }

  return (
    <div className="min-h-screen bg-[#0A0D14] flex flex-col">
      <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

      <div className="flex flex-1 relative">
        <Sidebar isOpen={sidebarOpen} closeSidebar={() => setSidebarOpen(false)} />

        <main className="flex-1 p-4 lg:p-8 max-w-7xl mx-auto w-full overflow-x-hidden">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<ProfileHub />} />
            <Route path="/roadmap" element={<CareerRoadmap />} />
            <Route path="/gap-analyzer" element={<GapAnalyzer />} />
            <Route path="/resume-analyzer" element={<ResumeAnalyzer />} />
            <Route path="/coding-tracker" element={<CodingTracker />} />
            <Route path="/projects" element={<ProjectStore />} />
            <Route path="/company-prep" element={<CompanyPrep />} />
            <Route path="/mock-interview" element={<MockInterview />} />
            <Route path="/study-planner" element={<StudyPlanner />} />
            <Route path="/github-analyzer" element={<GitHubAnalyzer />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
