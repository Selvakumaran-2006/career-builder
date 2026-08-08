import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { 
  ShieldCheck, Users, Map, Mic, Plus, 
  Trash2, CheckCircle2, AlertTriangle, TrendingUp 
} from 'lucide-react';
import GlassCard from '../components/GlassCard';

export const AdminDashboard = () => {
  const { showToast } = useTheme();

  const [users, setUsers] = useState([
    { id: 'usr1', name: 'Karthik Raja', email: 'karthik@student.com', role: 'student', college: 'IIT Madras', readiness: 84, status: 'Active' },
    { id: 'usr2', name: 'Meera Nair', email: 'meera@student.com', role: 'student', college: 'PES University', readiness: 88, status: 'Active' },
    { id: 'usr3', name: 'Admin Selva', email: 'admin@careerbuilder.com', role: 'admin', college: 'IIT Madras', readiness: 99, status: 'Active' }
  ]);

  const toggleRole = (id) => {
    setUsers(prev => prev.map(u => u.id === id ? { ...u, role: u.role === 'student' ? 'admin' : 'student' } : u));
    showToast('User role updated!');
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      {/* Admin Banner */}
      <GlassCard className="border border-purple-500/30 bg-slate-900/80">
        <div className="flex items-center space-x-3">
          <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl font-bold font-outfit text-white">Admin Control & Platform Analytics</h1>
            <p className="text-xs text-slate-400">Manage registered students, career path resources, and system metrics</p>
          </div>
        </div>
      </GlassCard>

      {/* Admin Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <GlassCard className="border-l-4 border-l-purple-500">
          <p className="text-xs font-semibold text-slate-400">Total Registered Students</p>
          <p className="text-3xl font-extrabold text-white mt-1 font-outfit">1,420</p>
          <p className="text-[11px] text-purple-400 mt-1">+12% this month</p>
        </GlassCard>
        <GlassCard className="border-l-4 border-l-cyan-500">
          <p className="text-xs font-semibold text-slate-400">Active AI Roadmaps</p>
          <p className="text-3xl font-extrabold text-white mt-1 font-outfit">1,180</p>
          <p className="text-[11px] text-cyan-400 mt-1">42% Full Stack Developer</p>
        </GlassCard>
        <GlassCard className="border-l-4 border-l-emerald-500">
          <p className="text-xs font-semibold text-slate-400">Mock Interviews Simulated</p>
          <p className="text-3xl font-extrabold text-white mt-1 font-outfit">3,450</p>
          <p className="text-[11px] text-emerald-400 mt-1">Avg Score 78.5%</p>
        </GlassCard>
      </div>

      {/* User Management Table */}
      <GlassCard>
        <h3 className="text-sm font-bold text-slate-200 mb-4">User Management & Permissions</h3>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="text-slate-400 border-b border-slate-800">
                <th className="pb-3 font-semibold">User</th>
                <th className="pb-3 font-semibold">Email</th>
                <th className="pb-3 font-semibold">College</th>
                <th className="pb-3 font-semibold">Role</th>
                <th className="pb-3 font-semibold">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {users.map(u => (
                <tr key={u.id} className="text-slate-300">
                  <td className="py-3 font-bold text-white">{u.name}</td>
                  <td className="py-3 text-slate-400">{u.email}</td>
                  <td className="py-3 text-slate-400">{u.college}</td>
                  <td className="py-3">
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold capitalize ${
                      u.role === 'admin' ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30' : 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30'
                    }`}>
                      {u.role}
                    </span>
                  </td>
                  <td className="py-3">
                    <button 
                      onClick={() => toggleRole(u.id)}
                      className="text-xs text-cyan-400 hover:underline"
                    >
                      Toggle Role
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </GlassCard>
    </div>
  );
};

export default AdminDashboard;
