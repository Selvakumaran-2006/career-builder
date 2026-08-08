import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { 
  Bell, Search, Sun, Moon, LogOut, User, ShieldCheck, 
  Sparkles, Flame, Trophy, ChevronDown, Menu, X 
} from 'lucide-react';

export const Navbar = ({ toggleSidebar }) => {
  const { user, logout } = useAuth();
  const { isDarkMode, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const [showNotifMenu, setShowNotifMenu] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full glass-panel border-b border-slate-800/80 px-4 lg:px-8 py-3 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <button 
          onClick={toggleSidebar}
          className="lg:hidden p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/60"
        >
          <Menu className="w-6 h-6" />
        </button>

        <Link to="/dashboard" className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-cyan-400 p-0.5 shadow-lg shadow-indigo-500/30 flex items-center justify-center">
            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-cyan-400 animate-pulse" />
            </div>
          </div>
          <div className="hidden sm:block">
            <span className="text-xl font-bold font-outfit gradient-text tracking-wide">CareerBuilder</span>
            <span className="text-[10px] block font-mono text-cyan-400 -mt-1 tracking-wider uppercase font-semibold">AI Powered Hub</span>
          </div>
        </Link>
      </div>

      {/* Global Search Bar */}
      <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
        <div className="relative w-full">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search roadmaps, companies, ATS keywords, projects..."
            className="w-full bg-slate-900/60 border border-slate-700/60 focus:border-indigo-500/80 rounded-full pl-10 pr-4 py-2 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all"
          />
        </div>
      </div>

      {/* Top Action Items */}
      <div className="flex items-center space-x-3">
        {/* Streak Flame Badge */}
        <div className="hidden sm:flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold">
          <Flame className="w-4 h-4 fill-amber-500 text-amber-500 animate-bounce" />
          <span>18 Day Streak</span>
        </div>

        {/* XP Points Badge */}
        <div className="hidden lg:flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-semibold">
          <Trophy className="w-4 h-4 text-purple-400" />
          <span>1,450 XP</span>
        </div>

        {/* Dark / Light Toggle */}
        <button 
          onClick={toggleTheme}
          className="p-2 rounded-xl text-slate-400 hover:text-amber-400 hover:bg-slate-800/60 transition-all"
          title="Toggle Theme"
        >
          {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5 text-indigo-400" />}
        </button>

        {/* Notification Bell */}
        <div className="relative">
          <button 
            onClick={() => setShowNotifMenu(!showNotifMenu)}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/60 relative transition-all"
          >
            <Bell className="w-5 h-5" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-indigo-500 rounded-full ring-4 ring-slate-950 animate-ping"></span>
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-indigo-500 rounded-full"></span>
          </button>

          {showNotifMenu && (
            <div className="absolute right-0 mt-3 w-80 glass-panel rounded-2xl p-4 shadow-2xl z-50 border border-slate-700/80">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-sm font-semibold text-slate-200">Notifications</span>
                <span className="text-[10px] bg-indigo-500/20 text-indigo-300 px-2 py-0.5 rounded-full font-medium">2 New</span>
              </div>
              <div className="py-2 space-y-3 max-h-64 overflow-y-auto">
                <div className="p-2.5 rounded-xl bg-slate-800/40 hover:bg-slate-800/70 cursor-pointer transition-all border border-slate-700/30">
                  <p className="text-xs font-semibold text-indigo-300">🔥 Daily Coding Reminder</p>
                  <p className="text-[11px] text-slate-400 mt-1">Keep your 18-day streak alive! Solve 1 LeetCode problem today.</p>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-800/40 hover:bg-slate-800/70 cursor-pointer transition-all border border-slate-700/30">
                  <p className="text-xs font-semibold text-emerald-400">🎯 Google Mock Interview</p>
                  <p className="text-[11px] text-slate-400 mt-1">Your AI Technical Mock Interview feedback is generated.</p>
                </div>
              </div>
              <Link to="/notifications" onClick={() => setShowNotifMenu(false)} className="block text-center text-xs font-semibold text-cyan-400 hover:underline pt-2 border-t border-slate-800">
                View All Alerts
              </Link>
            </div>
          )}
        </div>

        {/* User Profile Dropdown */}
        <div className="relative">
          <button 
            onClick={() => setShowDropdown(!showDropdown)}
            className="flex items-center space-x-2.5 p-1.5 rounded-xl hover:bg-slate-800/60 transition-all border border-transparent hover:border-slate-700/60"
          >
            <img 
              src={user?.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150'} 
              alt="Avatar" 
              className="w-8 h-8 rounded-full object-cover ring-2 ring-indigo-500/40"
            />
            <div className="hidden md:block text-left">
              <p className="text-xs font-semibold text-slate-200 leading-tight">{user?.name || 'Karthik Raja'}</p>
              <p className="text-[10px] text-indigo-400 font-medium capitalize leading-tight">{user?.role || 'Student'}</p>
            </div>
            <ChevronDown className="w-4 h-4 text-slate-400 hidden md:block" />
          </button>

          {showDropdown && (
            <div className="absolute right-0 mt-3 w-56 glass-panel rounded-2xl p-2 shadow-2xl z-50 border border-slate-700/80">
              <div className="px-3 py-2 border-b border-slate-800 mb-1">
                <p className="text-xs font-bold text-white">{user?.name}</p>
                <p className="text-[11px] text-slate-400 truncate">{user?.email}</p>
              </div>
              <Link 
                to="/profile" 
                onClick={() => setShowDropdown(false)}
                className="flex items-center space-x-2.5 px-3 py-2 rounded-xl text-xs text-slate-300 hover:text-white hover:bg-indigo-600/20 transition-all"
              >
                <User className="w-4 h-4 text-indigo-400" />
                <span>My Profile & Resume</span>
              </Link>
              {user?.role === 'admin' && (
                <Link 
                  to="/admin" 
                  onClick={() => setShowDropdown(false)}
                  className="flex items-center space-x-2.5 px-3 py-2 rounded-xl text-xs text-slate-300 hover:text-white hover:bg-purple-600/20 transition-all"
                >
                  <ShieldCheck className="w-4 h-4 text-purple-400" />
                  <span>Admin Panel</span>
                </Link>
              )}
              <button 
                onClick={() => { logout(); navigate('/login'); }}
                className="w-full flex items-center space-x-2.5 px-3 py-2 rounded-xl text-xs text-rose-400 hover:bg-rose-500/10 transition-all mt-1"
              >
                <LogOut className="w-4 h-4 text-rose-400" />
                <span>Logout</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
