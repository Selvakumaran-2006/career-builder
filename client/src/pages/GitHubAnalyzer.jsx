import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { 
  Github, Sparkles, Star, GitFork, CheckCircle2, 
  AlertCircle, Code2, ArrowUpRight 
} from 'lucide-react';
import GlassCard from '../components/GlassCard';

export const GitHubAnalyzer = () => {
  const { showToast } = useTheme();

  const [username, setUsername] = useState('karthikraja');
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const [gitData, setGitData] = useState({
    username: 'karthikraja',
    repositoriesCount: 24,
    totalStars: 48,
    totalContributionsThisYear: 382,
    topLanguages: [
      { name: 'JavaScript', percentage: 45, color: 'bg-amber-400' },
      { name: 'TypeScript', percentage: 28, color: 'bg-indigo-500' },
      { name: 'HTML/CSS', percentage: 17, color: 'bg-rose-500' },
      { name: 'Python', percentage: 10, color: 'bg-emerald-400' }
    ],
    suggestions: [
      'Add detailed architecture diagrams & live Vercel links to top 3 repositories.',
      'Maintain continuous commit green square activity across weekdays.',
      'Include MIT License files and GitHub Issue templates for open-source visibility.'
    ]
  });

  const handleAnalyze = (e) => {
    e.preventDefault();
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      showToast(`GitHub Profile '@${username}' analyzed successfully!`, 'success');
    }, 1000);
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      {/* Header */}
      <GlassCard className="border border-indigo-500/30 bg-slate-900/80">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white">
              <Github className="w-6 h-6 text-purple-400" />
            </div>
            <div>
              <h1 className="text-xl font-bold font-outfit text-white">GitHub Profile Analyzer</h1>
              <p className="text-xs text-slate-400">Evaluate repository code quality, language distribution, and commit streaks</p>
            </div>
          </div>

          <form onSubmit={handleAnalyze} className="flex gap-2 w-full sm:w-auto">
            <input 
              type="text" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="github-username"
              className="bg-slate-950 border border-slate-700/80 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none"
            />
            <button 
              type="submit" 
              className="glass-button px-4 py-2 rounded-xl text-xs font-bold text-white flex items-center space-x-1 shrink-0"
            >
              <Sparkles className="w-4 h-4 text-cyan-300" />
              <span>Analyze</span>
            </button>
          </form>
        </div>
      </GlassCard>

      {/* Grid Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <GlassCard className="border-l-4 border-l-purple-500">
          <p className="text-xs font-semibold text-slate-400">Public Repositories</p>
          <p className="text-3xl font-extrabold text-white mt-1 font-outfit">{gitData.repositoriesCount}</p>
        </GlassCard>
        <GlassCard className="border-l-4 border-l-amber-500">
          <p className="text-xs font-semibold text-slate-400">Total Stars Received</p>
          <p className="text-3xl font-extrabold text-white mt-1 font-outfit">{gitData.totalStars} ⭐</p>
        </GlassCard>
        <GlassCard className="border-l-4 border-l-emerald-500">
          <p className="text-xs font-semibold text-slate-400">2026 Commit Contributions</p>
          <p className="text-3xl font-extrabold text-white mt-1 font-outfit">{gitData.totalContributionsThisYear}</p>
        </GlassCard>
      </div>

      {/* Languages & Recommendations */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <GlassCard>
          <h3 className="text-sm font-bold text-slate-200 mb-4">Top Languages Breakdown</h3>
          <div className="space-y-3">
            {gitData.topLanguages.map(lang => (
              <div key={lang.name}>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-300 font-semibold">{lang.name}</span>
                  <span className="text-slate-400 font-mono">{lang.percentage}%</span>
                </div>
                <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden">
                  <div className={`h-full ${lang.color}`} style={{ width: `${lang.percentage}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>

        <GlassCard>
          <h3 className="text-sm font-bold text-slate-200 mb-4">GitHub Portfolio Optimization</h3>
          <ul className="space-y-2.5 text-xs text-slate-300">
            {gitData.suggestions.map((s, i) => (
              <li key={i} className="flex items-start space-x-2">
                <span className="text-purple-400 shrink-0">✓</span>
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </GlassCard>
      </div>
    </div>
  );
};

export default GitHubAnalyzer;
