import React from 'react';
import { Award, Trophy, Flame, Star, Crown } from 'lucide-react';
import GlassCard from '../components/GlassCard';

export const Achievements = () => {
  const achievements = [
    { title: '18 Days Coding Streak', desc: 'Maintained 18 consecutive days of problem solving.', icon: '🔥', points: 250, unlocked: true },
    { title: 'MERN Stack Pioneer', desc: 'Completed Month 3 of Full Stack Career Roadmap.', icon: '🚀', points: 500, unlocked: true },
    { title: 'ATS Resume Ninja', desc: 'Scored 85%+ on ATS Resume Evaluation.', icon: '🎯', points: 300, unlocked: true },
    { title: 'Mock Interview Ace', desc: 'Scored 88% in AI Technical Mock Interview.', icon: '🏆', points: 400, unlocked: true }
  ];

  const leaderboard = [
    { rank: 1, name: 'Aarav Sharma', college: 'IIT Bombay', readiness: '96%', streak: 45, xp: 3850, avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100' },
    { rank: 2, name: 'Ananya Verma', college: 'BITS Pilani', readiness: '94%', streak: 38, xp: 3420, avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100' },
    { rank: 3, name: 'Rohan Gupta', college: 'NIT Trichy', readiness: '91%', streak: 32, xp: 3100, avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100' },
    { rank: 4, name: 'Priyanka Roy', college: 'VIT Vellore', readiness: '89%', streak: 28, xp: 2890, avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100' },
    { rank: 5, name: 'Karthik Raja (You)', college: 'IIT Madras', readiness: '84%', streak: 18, xp: 1450, avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100' }
  ];

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      {/* Header */}
      <GlassCard className="border border-indigo-500/30 bg-slate-900/80">
        <div className="flex items-center space-x-3">
          <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400">
            <Trophy className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl font-bold font-outfit text-white">Achievements & Student Leaderboard</h1>
            <p className="text-xs text-slate-400">Unlock achievement badges, earn XP points, and rank on the global student leaderboards</p>
          </div>
        </div>
      </GlassCard>

      {/* Badges Grid */}
      <div>
        <h3 className="text-sm font-bold text-slate-200 mb-4">Unlocked Badges & Medals</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {achievements.map((a, i) => (
            <GlassCard key={i} className="text-center">
              <div className="text-4xl mb-2">{a.icon}</div>
              <h4 className="text-xs font-bold text-white">{a.title}</h4>
              <p className="text-[11px] text-slate-400 mt-1">{a.desc}</p>
              <span className="inline-block mt-3 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-purple-500/20 text-purple-300">
                +{a.points} XP
              </span>
            </GlassCard>
          ))}
        </div>
      </div>

      {/* Leaderboard Table */}
      <GlassCard>
        <h3 className="text-sm font-bold text-slate-200 mb-4">Global Placement Readiness Ranking</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="text-slate-400 border-b border-slate-800">
                <th className="pb-3 font-semibold">Rank</th>
                <th className="pb-3 font-semibold">Student Name</th>
                <th className="pb-3 font-semibold">College</th>
                <th className="pb-3 font-semibold">Readiness Score</th>
                <th className="pb-3 font-semibold">Streak</th>
                <th className="pb-3 font-semibold">Total XP</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {leaderboard.map(u => (
                <tr key={u.rank} className={u.name.includes('You') ? 'bg-indigo-600/10 font-bold text-indigo-300' : 'text-slate-300'}>
                  <td className="py-3 font-mono">
                    {u.rank === 1 ? '🥇 #1' : u.rank === 2 ? '🥈 #2' : u.rank === 3 ? '🥉 #3' : `#${u.rank}`}
                  </td>
                  <td className="py-3 flex items-center space-x-2">
                    <img src={u.avatar} alt="avatar" className="w-6 h-6 rounded-full object-cover" />
                    <span>{u.name}</span>
                  </td>
                  <td className="py-3 text-slate-400">{u.college}</td>
                  <td className="py-3 text-emerald-400 font-bold">{u.readiness}</td>
                  <td className="py-3 text-amber-400 font-bold">{u.streak} Days</td>
                  <td className="py-3 font-mono text-purple-300">{u.xp} XP</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </GlassCard>
    </div>
  );
};

export default Achievements;
