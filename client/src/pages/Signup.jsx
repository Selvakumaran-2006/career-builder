import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { Sparkles, User, Mail, Lock, Building2, ArrowRight } from 'lucide-react';
import GlassCard from '../components/GlassCard';

export const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('student');
  const [loading, setLoading] = useState(false);

  const { register } = useAuth();
  const { showToast } = useTheme();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await register(name, email, password, role);
    setLoading(false);
    if (res.success) {
      showToast('Registration successful! Account created.', 'success');
      navigate('/dashboard');
    } else {
      showToast('Failed to register account.', 'error');
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0D14] flex items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <GlassCard className="w-full max-w-md border border-slate-800 bg-slate-900/80 shadow-2xl relative z-10">
        <div className="text-center mb-8">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-600 to-cyan-400 p-0.5 mx-auto mb-3 flex items-center justify-center">
            <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-cyan-400 animate-pulse" />
            </div>
          </div>
          <h2 className="text-2xl font-bold font-outfit gradient-text">Create Account</h2>
          <p className="text-xs text-slate-400 mt-1">Start your journey to placement readiness</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">Full Name</label>
            <div className="relative">
              <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <input 
                type="text" 
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Karthik Raja"
                className="w-full bg-slate-950 border border-slate-700/80 rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-indigo-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">College Email</label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="student@college.edu"
                className="w-full bg-slate-950 border border-slate-700/80 rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-indigo-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">Password</label>
            <div className="relative">
              <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <input 
                type="password" 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-slate-950 border border-slate-700/80 rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-indigo-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">Role Selection</label>
            <div className="grid grid-cols-2 gap-3">
              <button 
                type="button"
                onClick={() => setRole('student')}
                className={`py-2 rounded-xl text-xs font-semibold transition-all ${
                  role === 'student' ? 'bg-indigo-600 text-white border border-indigo-400' : 'bg-slate-950 text-slate-400 border border-slate-800'
                }`}
              >
                Student
              </button>
              <button 
                type="button"
                onClick={() => setRole('admin')}
                className={`py-2 rounded-xl text-xs font-semibold transition-all ${
                  role === 'admin' ? 'bg-purple-600 text-white border border-purple-400' : 'bg-slate-950 text-slate-400 border border-slate-800'
                }`}
              >
                Admin
              </button>
            </div>
          </div>

          <button 
            type="submit"
            disabled={loading}
            className="w-full glass-button py-3 rounded-xl text-xs font-bold text-white flex items-center justify-center space-x-2 shadow-lg mt-6"
          >
            <span>{loading ? 'Creating Profile...' : 'Complete Registration'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <p className="text-center text-xs text-slate-400 mt-6">
          Already have an account?{' '}
          <Link to="/login" className="text-cyan-400 font-semibold hover:underline">
            Sign In
          </Link>
        </p>
      </GlassCard>
    </div>
  );
};

export default Signup;
