import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, ArrowRight, CheckCircle2, Trophy, Target, 
  Map, FileCheck, Mic, Code2, Building2, Star, Zap, Shield 
} from 'lucide-react';
import GlassCard from '../components/GlassCard';

export const LandingPage = () => {
  const [selectedRole, setSelectedRole] = useState('Full Stack Developer');

  const sampleRoadmaps = {
    'Full Stack Developer': ['Month 1: HTML/CSS/JS ES6+', 'Month 2: React.js & Tailwind', 'Month 3: Node.js & Express REST', 'Month 4: MongoDB NoSQL', 'Month 5: Capstone Projects', 'Month 6: Placement Drills'],
    'AI Engineer': ['Month 1: Python & Math', 'Month 2: PyTorch & ML Fundamentals', 'Month 3: LLMs & LangChain', 'Month 4: Vector Databases', 'Month 5: Autonomous Agents', 'Month 6: System Design & Deploy'],
    'DevOps Engineer': ['Month 1: Linux & Shell', 'Month 2: Docker Containerization', 'Month 3: Kubernetes Orchestration', 'Month 4: CI/CD Pipelines', 'Month 5: Cloud Architecture (AWS)', 'Month 6: Site Reliability']
  };

  return (
    <div className="min-h-screen bg-[#0A0D14] text-slate-100 selection:bg-indigo-500">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 glass-panel border-b border-slate-800/80 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-400 p-0.5 flex items-center justify-center">
            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-cyan-400 animate-pulse" />
            </div>
          </div>
          <span className="text-xl font-bold font-outfit gradient-text">CareerBuilder AI</span>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/login" className="text-xs font-semibold text-slate-300 hover:text-white px-4 py-2 rounded-xl transition-all">
            Sign In
          </Link>
          <Link to="/signup" className="glass-button px-5 py-2.5 rounded-xl text-xs font-bold text-white flex items-center space-x-2">
            <span>Get Started Free</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-6 max-w-7xl mx-auto text-center">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-panel border border-indigo-500/30 text-indigo-300 text-xs font-semibold mb-8">
          <Zap className="w-4 h-4 text-cyan-400" />
          <span>Industry 5.0 AI Career Intelligence Engine</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-outfit leading-tight max-w-5xl mx-auto">
          Crack Your Dream Tech Role with <span className="gradient-text">AI Personalized Roadmaps</span> & ATS Intelligence
        </h1>

        <p className="mt-6 text-base sm:text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
          Analyze skill gaps against MAANG standards, track coding streaks across LeetCode & GitHub, simulate real-time AI mock interviews, and land top placement offers.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/signup" className="w-full sm:w-auto glass-button px-8 py-4 rounded-2xl text-sm font-bold text-white flex items-center justify-center space-x-3 shadow-xl">
            <span>Generate Free Career Roadmap</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link to="/login" className="w-full sm:w-auto glass-panel hover:bg-slate-800/80 px-8 py-4 rounded-2xl text-sm font-semibold text-slate-200 border border-slate-700">
            View Live Demo Dashboard
          </Link>
        </div>

        {/* Live Interactive Roadmap Preview */}
        <div className="mt-16 max-w-4xl mx-auto text-left">
          <GlassCard className="border border-indigo-500/30 bg-slate-900/80 shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center space-x-2">
                <Map className="w-5 h-5 text-indigo-400" />
                <span className="font-semibold text-sm text-slate-200">Interactive AI Roadmap Visualizer</span>
              </div>
              <div className="flex space-x-2">
                {['Full Stack Developer', 'AI Engineer', 'DevOps Engineer'].map((role) => (
                  <button 
                    key={role}
                    onClick={() => setSelectedRole(role)}
                    className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-all ${
                      selectedRole === role ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-400 hover:text-slate-200 bg-slate-800/50'
                    }`}
                  >
                    {role}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-6">
              {sampleRoadmaps[selectedRole].map((step, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-800/40 border border-slate-700/50 hover:border-indigo-500/50 transition-all">
                  <span className="text-[10px] font-bold text-indigo-400 font-mono">NODE 0{idx+1}</span>
                  <p className="text-xs font-semibold text-slate-200 mt-1">{step}</p>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Feature Highlights Grid */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-outfit">Everything You Need To Get Placed</h2>
          <p className="text-slate-400 text-sm mt-3">All-in-one suite designed for tier-1 & tier-2 engineering students.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <GlassCard>
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-5">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-100">Career Gap Analyzer</h3>
            <p className="text-xs text-slate-400 mt-2 leading-relaxed">
              Compare your current skills vs target company requirements (Google, Amazon, Microsoft, Zoho) and get a readiness score.
            </p>
          </GlassCard>

          <GlassCard>
            <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-5">
              <FileCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-100">ATS Resume Screener</h3>
            <p className="text-xs text-slate-400 mt-2 leading-relaxed">
              Upload your resume PDF to receive an instant ATS score, missing keyword flags, and AI project description enhancements.
            </p>
          </GlassCard>

          <GlassCard>
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-5">
              <Mic className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-100">AI Mock Interview Room</h3>
            <p className="text-xs text-slate-400 mt-2 leading-relaxed">
              Practice Technical, HR & Behavioral questions with real-time AI audio/text feedback and scoring.
            </p>
          </GlassCard>
        </div>
      </section>

      {/* Target Companies Strip */}
      <section className="py-12 border-t border-b border-slate-800/80 bg-slate-950/40">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-6">Students Placed At Top Global Companies</p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-16 opacity-70">
            {['Google', 'Amazon', 'Microsoft', 'Zoho', 'TCS Digital', 'Infosys Power Programmer', 'Accenture'].map((comp) => (
              <span key={comp} className="text-lg font-bold text-slate-300 font-outfit tracking-wider hover:text-cyan-400 transition-colors cursor-pointer">
                {comp}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-xs text-slate-500 border-t border-slate-900">
        <p>© 2026 Career Builder AI. Industry Level MERN Stack Project for Placement Preparation.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
