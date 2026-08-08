import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { 
  Code2, Flame, Trophy, Clock, Plus, TrendingUp, 
  CheckCircle2, Award 
} from 'lucide-react';
import GlassCard from '../components/GlassCard';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

export const CodingTracker = () => {
  const { showToast } = useTheme();

  const [stats, setStats] = useState({
    leetcode: 145,
    hackerrank: 82,
    codechef: 45,
    dailyMinutes: 120,
    streakDays: 18
  });

  const [newSolvePlatform, setNewSolvePlatform] = useState('leetcode');
  const [newSolveCount, setNewSolveCount] = useState(1);

  const weeklyData = [
    { day: 'Mon', leetcode: 3, hackerrank: 1 },
    { day: 'Tue', leetcode: 5, hackerrank: 2 },
    { day: 'Wed', leetcode: 4, hackerrank: 0 },
    { day: 'Thu', leetcode: 6, hackerrank: 3 },
    { day: 'Fri', leetcode: 2, hackerrank: 1 },
    { day: 'Sat', leetcode: 8, hackerrank: 4 },
    { day: 'Sun', leetcode: 5, hackerrank: 2 }
  ];

  const handleAddSolve = (e) => {
    e.preventDefault();
    const count = parseInt(newSolveCount) || 1;
    setStats(prev => ({
      ...prev,
      [newSolvePlatform]: prev[newSolvePlatform] + count
    }));
    showToast(`Added ${count} problem(s) to ${newSolvePlatform.toUpperCase()}!`, 'success');
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      {/* Header */}
      <GlassCard className="border border-indigo-500/30 bg-slate-900/80">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
              <Code2 className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl font-bold font-outfit text-white">Competitive Coding & Practice Tracker</h1>
              <p className="text-xs text-slate-400">Monitor problem solving milestones on LeetCode, HackerRank, CodeChef</p>
            </div>
          </div>

          <div className="flex items-center space-x-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold">
            <Flame className="w-4 h-4 fill-amber-500 animate-bounce" />
            <span>{stats.streakDays} Day Active Streak</span>
          </div>
        </div>
      </GlassCard>

      {/* 4 Cards Platform Breakdown */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <GlassCard className="border-l-4 border-l-amber-500">
          <p className="text-xs font-semibold text-slate-400">LeetCode Solved</p>
          <p className="text-3xl font-extrabold text-white mt-1 font-outfit">{stats.leetcode}</p>
          <p className="text-[11px] text-amber-400 mt-1">45 Mediums | 12 Hards</p>
        </GlassCard>

        <GlassCard className="border-l-4 border-l-emerald-500">
          <p className="text-xs font-semibold text-slate-400">HackerRank Badge</p>
          <p className="text-3xl font-extrabold text-white mt-1 font-outfit">{stats.hackerrank}</p>
          <p className="text-[11px] text-emerald-400 mt-1">5★ Problem Solving</p>
        </GlassCard>

        <GlassCard className="border-l-4 border-l-indigo-500">
          <p className="text-xs font-semibold text-slate-400">CodeChef Rating</p>
          <p className="text-3xl font-extrabold text-white mt-1 font-outfit">{stats.codechef}</p>
          <p className="text-[11px] text-indigo-400 mt-1">3★ Competitive Coder</p>
        </GlassCard>

        <GlassCard className="border-l-4 border-l-cyan-500">
          <p className="text-xs font-semibold text-slate-400">Daily Coding Time</p>
          <p className="text-3xl font-extrabold text-white mt-1 font-outfit">2.0 hrs</p>
          <p className="text-[11px] text-cyan-400 mt-1">120 Minutes Logged</p>
        </GlassCard>
      </div>

      {/* Add New Problem & Chart Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Quick Log Form */}
        <GlassCard className="h-full flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-bold text-slate-200 mb-2">Log Solved Problems</h3>
            <p className="text-xs text-slate-400 mb-4">Record your daily problem count</p>

            <form onSubmit={handleAddSolve} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1">Platform</label>
                <select 
                  value={newSolvePlatform}
                  onChange={(e) => setNewSolvePlatform(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700/80 rounded-xl px-3 py-2 text-xs text-slate-200"
                >
                  <option value="leetcode">LeetCode</option>
                  <option value="hackerrank">HackerRank</option>
                  <option value="codechef">CodeChef</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1">Problems Solved Today</label>
                <input 
                  type="number" 
                  min="1"
                  value={newSolveCount}
                  onChange={(e) => setNewSolveCount(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700/80 rounded-xl px-3 py-2 text-xs text-slate-200"
                />
              </div>

              <button 
                type="submit" 
                className="w-full glass-button py-2.5 rounded-xl text-xs font-bold text-white flex items-center justify-center space-x-1"
              >
                <Plus className="w-4 h-4" />
                <span>Log Solved Problems</span>
              </button>
            </form>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] text-slate-400">
            💡 <strong>Tip:</strong> Aim for 3 LeetCode Medium problems daily to stay in top 5% placement candidates.
          </div>
        </GlassCard>

        {/* Weekly Solves Graph */}
        <GlassCard className="lg:col-span-2">
          <h3 className="text-sm font-bold text-slate-200 mb-1">Weekly Problem Solves Trend</h3>
          <p className="text-xs text-slate-400 mb-4">Daily breakdown across LeetCode & HackerRank</p>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={weeklyData}>
                <XAxis dataKey="day" stroke="#64748b" fontSize={12} />
                <YAxis stroke="#64748b" fontSize={12} />
                <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '12px', fontSize: '12px' }} />
                <Bar dataKey="leetcode" fill="#f59e0b" radius={[4, 4, 0, 0]} name="LeetCode" />
                <Bar dataKey="hackerrank" fill="#10b981" radius={[4, 4, 0, 0]} name="HackerRank" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>
      </div>
    </div>
  );
};

export default CodingTracker;
