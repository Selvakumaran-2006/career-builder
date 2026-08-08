import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { 
  GitCompare, Sparkles, Target, AlertTriangle, CheckCircle2, 
  Clock, ArrowRight, BookOpen 
} from 'lucide-react';
import GlassCard from '../components/GlassCard';

export const GapAnalyzer = () => {
  const { showToast } = useTheme();

  const [targetRole, setTargetRole] = useState('Full Stack Developer');
  const [userSkills, setUserSkills] = useState('HTML, CSS, JavaScript, React.js, Node.js, Express, Git, MongoDB');

  const [analysisResult, setAnalysisResult] = useState({
    readinessScore: 78,
    matchedSkills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'Git'],
    missingSkills: ['TypeScript', 'Docker', 'Redis', 'System Design', 'Microservices', 'Jest Unit Testing'],
    suggestedLearningPath: [
      { priority: 'High', skill: 'TypeScript', estimatedHours: 20, reason: 'Required in 88% of full stack job descriptions' },
      { priority: 'High', skill: 'Docker Containerization', estimatedHours: 15, reason: 'Essential for dev environment reproducibility' },
      { priority: 'Medium', skill: 'Redis In-Memory Caching', estimatedHours: 12, reason: 'Crucial for high performance API optimization' },
      { priority: 'Medium', skill: 'System Design Fundamentals', estimatedHours: 25, reason: 'Needed for MAANG round 3 technical interviews' }
    ],
    estimatedWeeks: 6
  });

  const handleRunAnalysis = (e) => {
    e.preventDefault();
    showToast('AI Career Gap Analysis re-calculated!', 'success');
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      {/* Header */}
      <GlassCard className="border border-indigo-500/30 bg-slate-900/80">
        <div className="flex items-center space-x-3">
          <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400">
            <GitCompare className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl font-bold font-outfit text-white">AI Career Gap Analyzer</h1>
            <p className="text-xs text-slate-400">Benchmark your current skill portfolio against MAANG & Product Industry standards</p>
          </div>
        </div>

        <form onSubmit={handleRunAnalysis} className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Target Placement Role</label>
            <select 
              value={targetRole}
              onChange={(e) => setTargetRole(e.target.value)}
              className="w-full bg-slate-950 border border-slate-700/80 rounded-xl px-3.5 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-indigo-500"
            >
              {['Full Stack Developer', 'Frontend Developer', 'Backend Developer', 'Java Developer', 'AI Engineer', 'DevOps Engineer'].map(r => (
                <option key={r} value={r}>{r}</option>
              ))}
            </select>
          </div>

          <div className="sm:col-span-2 flex items-end gap-2">
            <div className="flex-1">
              <label className="block text-xs font-semibold text-slate-300 mb-1">My Current Skills (Comma Separated)</label>
              <input 
                type="text" 
                value={userSkills}
                onChange={(e) => setUserSkills(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700/80 rounded-xl px-3.5 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-indigo-500"
              />
            </div>
            <button 
              type="submit" 
              className="glass-button px-5 py-2.5 rounded-xl text-xs font-bold text-white flex items-center space-x-2 shrink-0"
            >
              <Sparkles className="w-4 h-4 text-cyan-300" />
              <span>Analyze Gap</span>
            </button>
          </div>
        </form>
      </GlassCard>

      {/* Main Score & Breakdown Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Readiness Meter Card */}
        <GlassCard className="text-center flex flex-col items-center justify-center border-l-4 border-l-emerald-500">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Overall Career Readiness</p>
          
          <div className="relative w-36 h-36 flex items-center justify-center my-2">
            <svg className="w-full h-full transform -rotate-90">
              <circle cx="72" cy="72" r="58" stroke="#1e293b" strokeWidth="12" fill="transparent" />
              <circle 
                cx="72" cy="72" r="58" 
                stroke="#10b981" strokeWidth="12" 
                fill="transparent" 
                strokeDasharray="364" 
                strokeDashoffset={364 - (364 * analysisResult.readinessScore) / 100}
                strokeLinecap="round"
                className="transition-all duration-1000"
              />
            </svg>
            <div className="absolute flex flex-col items-center">
              <span className="text-3xl font-extrabold font-outfit text-white">{analysisResult.readinessScore}%</span>
              <span className="text-[10px] text-emerald-400 font-bold uppercase">Strong Match</span>
            </div>
          </div>

          <p className="text-xs text-slate-300 mt-2 font-medium">
            Estimated Time to Bridge Gap: <strong className="text-cyan-400 font-mono">{analysisResult.estimatedWeeks} Weeks</strong>
          </p>
        </GlassCard>

        {/* Matched vs Missing Skills */}
        <GlassCard className="md:col-span-2">
          <h3 className="text-sm font-bold text-slate-200 mb-4">Skill Matrix Comparison</h3>

          <div className="space-y-4">
            <div>
              <p className="text-xs font-semibold text-emerald-400 mb-2 flex items-center">
                <CheckCircle2 className="w-4 h-4 mr-1.5" /> Matched Industry Skills ({analysisResult.matchedSkills.length})
              </p>
              <div className="flex flex-wrap gap-2">
                {analysisResult.matchedSkills.map(s => (
                  <span key={s} className="px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 border border-emerald-500/30 text-emerald-300">
                    {s} ✓
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800">
              <p className="text-xs font-semibold text-rose-400 mb-2 flex items-center">
                <AlertTriangle className="w-4 h-4 mr-1.5" /> Missing Skills for {targetRole} ({analysisResult.missingSkills.length})
              </p>
              <div className="flex flex-wrap gap-2">
                {analysisResult.missingSkills.map(s => (
                  <span key={s} className="px-3 py-1 rounded-full text-xs font-medium bg-rose-500/10 border border-rose-500/30 text-rose-300">
                    {s} ⚠️
                  </span>
                ))}
              </div>
            </div>
          </div>
        </GlassCard>
      </div>

      {/* Suggested Priority Learning Path */}
      <GlassCard>
        <h3 className="text-base font-bold text-slate-100 mb-4 flex items-center">
          <BookOpen className="w-5 h-5 text-indigo-400 mr-2" /> Recommended Priority Learning Sequence
        </h3>

        <div className="space-y-3">
          {analysisResult.suggestedLearningPath.map((item, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/60 flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center space-x-2">
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                    item.priority === 'High' ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30' : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                  }`}>
                    {item.priority} Priority
                  </span>
                  <h4 className="text-xs font-bold text-slate-100">{item.skill}</h4>
                </div>
                <p className="text-xs text-slate-400 mt-1">{item.reason}</p>
              </div>

              <div className="flex items-center space-x-1 text-xs text-cyan-400 font-mono shrink-0">
                <Clock className="w-3.5 h-3.5" />
                <span>{item.estimatedHours} hrs</span>
              </div>
            </div>
          ))}
        </div>
      </GlassCard>
    </div>
  );
};

export default GapAnalyzer;
