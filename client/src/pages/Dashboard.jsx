import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { 
  Sparkles, Target, Flame, FileText, CheckCircle2, Circle, 
  TrendingUp, Award, ArrowUpRight, Calendar, Building2, Code2, 
  MapPin, BookOpen, Clock, ChevronRight
} from 'lucide-react';
import GlassCard from '../components/GlassCard';
import { 
  ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, 
  RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, BarChart, Bar 
} from 'recharts';

export const Dashboard = () => {
  const { user } = useAuth();
  const { showToast } = useTheme();

  const [tasks, setTasks] = useState([
    { id: 1, text: 'Solve 2 LeetCode Medium Problems (Trees & Graphs)', completed: true, category: 'Coding' },
    { id: 2, text: 'Watch React.js Context API & Redux Toolkit tutorial', completed: false, category: 'Learning' },
    { id: 3, text: 'Complete Node.js Express REST API controller module', completed: false, category: 'Project' },
    { id: 4, text: 'Practice 1 Mock Technical Interview round', completed: true, category: 'Interview' }
  ]);

  const toggleTask = (id) => {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
    showToast('Task status updated!');
  };

  const progressData = [
    { day: 'Mon', hours: 2.5, solves: 3 },
    { day: 'Tue', hours: 4.0, solves: 5 },
    { day: 'Wed', hours: 3.5, solves: 4 },
    { day: 'Thu', hours: 5.0, solves: 6 },
    { day: 'Fri', hours: 2.0, solves: 2 },
    { day: 'Sat', hours: 6.5, solves: 8 },
    { day: 'Sun', hours: 4.5, solves: 5 },
  ];

  const skillRadarData = [
    { subject: 'Frontend', score: 90 },
    { subject: 'Backend', score: 82 },
    { subject: 'Database', score: 78 },
    { subject: 'DSA', score: 85 },
    { subject: 'System Design', score: 70 },
    { subject: 'DevOps', score: 65 },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Card Banner */}
      <GlassCard className="border border-indigo-500/30 bg-gradient-to-r from-indigo-950/80 via-slate-900/90 to-purple-950/80 p-6 sm:p-8 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                STUDENT PLACEMENT DASHBOARD
              </span>
              <span className="text-xs text-slate-400 font-mono">Class of 2026</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold font-outfit text-white">
              Welcome back, <span className="gradient-text">{user?.name || 'Karthik Raja'}</span>! 👋
            </h1>
            <p className="text-xs text-slate-300 max-w-xl">
              Target Role: <strong className="text-cyan-400">Full Stack Developer</strong> | Dream Company: <strong className="text-indigo-400">Google</strong> | CGPA: <strong className="text-emerald-400">9.1</strong>
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <Link to="/roadmap" className="glass-button px-5 py-2.5 rounded-xl text-xs font-bold text-white flex items-center space-x-2 shadow-lg">
              <Sparkles className="w-4 h-4 text-cyan-300" />
              <span>Resume Roadmap</span>
            </Link>
            <Link to="/mock-interview" className="glass-panel hover:bg-slate-800 px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-200 border border-slate-700">
              Mock Interview
            </Link>
          </div>
        </div>
      </GlassCard>

      {/* Top 4 Quick Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Career Readiness */}
        <GlassCard className="border-l-4 border-l-emerald-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-slate-400">Career Readiness Score</p>
              <p className="text-2xl font-extrabold text-white mt-1 font-outfit">84%</p>
              <p className="text-[11px] text-emerald-400 mt-1 flex items-center">
                <TrendingUp className="w-3.5 h-3.5 mr-1" /> +4% from last week
              </p>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Target className="w-6 h-6" />
            </div>
          </div>
        </GlassCard>

        {/* Coding Streak */}
        <GlassCard className="border-l-4 border-l-amber-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-slate-400">Coding Streak</p>
              <p className="text-2xl font-extrabold text-white mt-1 font-outfit">18 Days 🔥</p>
              <p className="text-[11px] text-amber-400 mt-1">168 LeetCode Solved</p>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Flame className="w-6 h-6" />
            </div>
          </div>
        </GlassCard>

        {/* ATS Resume Score */}
        <GlassCard className="border-l-4 border-l-indigo-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-slate-400">ATS Resume Score</p>
              <p className="text-2xl font-extrabold text-white mt-1 font-outfit">85 / 100</p>
              <p className="text-[11px] text-indigo-400 mt-1">High Match Candidate</p>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
              <FileText className="w-6 h-6" />
            </div>
          </div>
        </GlassCard>

        {/* Completed Projects */}
        <GlassCard className="border-l-4 border-l-purple-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-slate-400">Projects Completed</p>
              <p className="text-2xl font-extrabold text-white mt-1 font-outfit">6 Projects</p>
              <p className="text-[11px] text-purple-400 mt-1">3 Full Stack Apps</p>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
              <Code2 className="w-6 h-6" />
            </div>
          </div>
        </GlassCard>
      </div>

      {/* Main Charts & Tasks Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Weekly Progress & Today's Tasks */}
        <div className="lg:col-span-2 space-y-6">
          {/* Weekly Coding Activity Graph */}
          <GlassCard>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-base font-bold text-slate-100">Weekly Learning & Coding Hours</h3>
                <p className="text-xs text-slate-400">Daily hours spent on roadmap modules & problem solving</p>
              </div>
              <span className="text-xs text-cyan-400 font-mono bg-cyan-500/10 px-2.5 py-1 rounded-lg border border-cyan-500/30">
                Avg 4.0 hrs/day
              </span>
            </div>

            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={progressData}>
                  <defs>
                    <linearGradient id="colorHours" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#6366f1" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="day" stroke="#64748b" fontSize={12} />
                  <YAxis stroke="#64748b" fontSize={12} />
                  <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '12px', fontSize: '12px' }} />
                  <Area type="monotone" dataKey="hours" stroke="#6366f1" strokeWidth={3} fillOpacity={1} fill="url(#colorHours)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </GlassCard>

          {/* Today's Tasks Checklist */}
          <GlassCard>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-indigo-400" />
                <h3 className="text-base font-bold text-slate-100">Today's Placement Tasks</h3>
              </div>
              <Link to="/study-planner" className="text-xs text-cyan-400 hover:underline flex items-center">
                Manage Planner <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
              </Link>
            </div>

            <div className="space-y-2.5">
              {tasks.map((task) => (
                <div 
                  key={task.id}
                  onClick={() => toggleTask(task.id)}
                  className={`p-3.5 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                    task.completed 
                      ? 'bg-slate-900/40 border-slate-800 text-slate-500 line-through' 
                      : 'bg-slate-800/40 border-slate-700/60 text-slate-200 hover:border-indigo-500/50'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    {task.completed ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    ) : (
                      <Circle className="w-5 h-5 text-slate-500 shrink-0" />
                    )}
                    <span className="text-xs font-medium">{task.text}</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-800 text-indigo-300 border border-slate-700">
                    {task.category}
                  </span>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>

        {/* Right Column: Skill Radar & Upcoming Goals */}
        <div className="space-y-6">
          {/* Skill Radar Chart */}
          <GlassCard>
            <h3 className="text-base font-bold text-slate-100 mb-1">Skill Matrix Breakdown</h3>
            <p className="text-xs text-slate-400 mb-4">Proficiency vs industry requirements</p>

            <div className="h-60 w-full flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={skillRadarData}>
                  <PolarGrid stroke="#334155" />
                  <PolarAngleAxis dataKey="subject" stroke="#94a3b8" fontSize={11} />
                  <PolarRadiusAxis stroke="#334155" />
                  <Radar name="Student Skill" dataKey="score" stroke="#c084fc" fill="#c084fc" fillOpacity={0.5} />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </GlassCard>

          {/* Upcoming Placement Goals */}
          <GlassCard>
            <h3 className="text-base font-bold text-slate-100 mb-3">Upcoming Placement Milestones</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 p-3 rounded-xl bg-slate-800/40 border border-slate-700/40">
                <Building2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-slate-200">Google SDE-1 Drive</p>
                  <p className="text-[11px] text-slate-400">Applications close in 12 days</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 p-3 rounded-xl bg-slate-800/40 border border-slate-700/40">
                <Award className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-slate-200">System Design Mock Round</p>
                  <p className="text-[11px] text-slate-400">Scheduled for Saturday, 4:00 PM</p>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
