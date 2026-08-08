import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Bell, Flame, Mic, Calendar, CheckCircle2 } from 'lucide-react';
import GlassCard from '../components/GlassCard';

export const Notifications = () => {
  const { showToast } = useTheme();

  const [notifs, setNotifs] = useState([
    { id: 1, title: '🔥 Daily Coding Streak Alert', message: 'Maintain your 18-day streak! Solve 1 LeetCode problem today.', type: 'reminder', read: false, time: '1 hour ago' },
    { id: 2, title: '🎯 Google AI Technical Mock Round', message: 'Your mock interview recording feedback has been generated.', type: 'interview', read: false, time: '3 hours ago' },
    { id: 3, title: '⏳ TCS Digital Placement Deadline', message: 'Campus recruitment registration closes in 48 hours.', type: 'deadline', read: true, time: '1 day ago' },
    { id: 4, title: '🚀 Roadmap Milestone Unlocked', message: 'Congratulations on completing Month 2: React & Modern Web!', type: 'task', read: true, time: '2 days ago' }
  ]);

  const markRead = (id) => {
    setNotifs(prev => prev.map(n => n.id === id ? { ...n, read: true } : n));
    showToast('Notification marked as read');
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <GlassCard className="border border-indigo-500/30 bg-slate-900/80">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400">
              <Bell className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl font-bold font-outfit text-white">Notification & Deadline Alerts</h1>
              <p className="text-xs text-slate-400">Daily reminders, interview schedules, and placement deadlines</p>
            </div>
          </div>

          <button 
            onClick={() => {
              setNotifs(prev => prev.map(n => ({ ...n, read: true })));
              showToast('All notifications marked as read');
            }}
            className="text-xs text-cyan-400 hover:underline font-semibold"
          >
            Mark All Read
          </button>
        </div>
      </GlassCard>

      <div className="space-y-3">
        {notifs.map(n => (
          <GlassCard 
            key={n.id} 
            className={`flex items-start justify-between transition-all ${
              !n.read ? 'border-l-4 border-l-indigo-500 bg-slate-800/60' : 'opacity-75'
            }`}
          >
            <div>
              <h3 className="text-xs font-bold text-white flex items-center">
                <span>{n.title}</span>
                {!n.read && <span className="ml-2 w-2 h-2 rounded-full bg-indigo-400 inline-block"></span>}
              </h3>
              <p className="text-xs text-slate-300 mt-1">{n.message}</p>
              <span className="text-[10px] text-slate-500 mt-2 block font-mono">{n.time}</span>
            </div>

            {!n.read && (
              <button 
                onClick={() => markRead(n.id)}
                className="text-xs text-slate-400 hover:text-white p-1"
              >
                Mark Read
              </button>
            )}
          </GlassCard>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
