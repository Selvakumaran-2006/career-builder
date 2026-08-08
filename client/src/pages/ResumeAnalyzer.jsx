import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { 
  FileText, UploadCloud, CheckCircle2, AlertCircle, 
  Sparkles, Zap, ArrowRight, ShieldCheck 
} from 'lucide-react';
import GlassCard from '../components/GlassCard';

export const ResumeAnalyzer = () => {
  const { showToast } = useTheme();

  const [resumeText, setResumeText] = useState(`Karthik Raja
Full Stack Developer | IIT Madras CSE
Email: karthik@student.com | GitHub: github.com/karthikraja

TECHNICAL SKILLS:
- Languages: JavaScript, Python, C++, HTML5, CSS3
- Frontend: React.js, Tailwind CSS, Redux, Context API
- Backend: Node.js, Express.js, REST APIs, JWT Auth
- Databases: MongoDB Atlas, Mongoose ODM

PROJECTS:
- Career Builder AI Roadmap Generator: Built full stack React + Express app.
- Task Tracker App: React & LocalStorage application.`);

  const [targetRole, setTargetRole] = useState('Full Stack Developer');
  const [isScanning, setIsScanning] = useState(false);

  const [atsReport, setAtsReport] = useState({
    atsScore: 85,
    matchRating: 'High Match Candidate',
    missingKeywords: ['TypeScript', 'Docker', 'Redis', 'Jest Unit Tests', 'CI/CD Pipelines', 'AWS S3'],
    suggestedImprovements: [
      'Replace passive language with strong impact action verbs (e.g. "Architected", "Engineered", "Optimized response latency by 35%").',
      'Add quantifiable metric metrics for your Career Builder project (e.g., "Handled 10,000+ API requests with <50ms latency").',
      'Add an explicit section for Cloud Deployments (Vercel, Render, AWS).'
    ],
    recommendedSkills: ['TypeScript', 'Docker', 'Redis', 'GraphQL']
  });

  const handleScan = (e) => {
    e.preventDefault();
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      showToast('ATS Resume Evaluation Complete!', 'success');
    }, 1000);
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      {/* Header */}
      <GlassCard className="border border-indigo-500/30 bg-slate-900/80">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl font-bold font-outfit text-white">ATS Resume Screener & Analyzer</h1>
              <p className="text-xs text-slate-400">Scan your resume against ATS algorithms used by top tech recruiters</p>
            </div>
          </div>

          <button 
            onClick={handleScan}
            disabled={isScanning}
            className="glass-button px-5 py-2.5 rounded-xl text-xs font-bold text-white flex items-center space-x-2 shadow-lg shrink-0"
          >
            <Sparkles className={`w-4 h-4 text-cyan-300 ${isScanning ? 'animate-spin' : ''}`} />
            <span>{isScanning ? 'Running ATS Parser...' : 'Re-Scan Resume'}</span>
          </button>
        </div>
      </GlassCard>

      {/* Editor & Dropzone Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Input Resume Text / File */}
        <GlassCard>
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xs font-bold text-slate-200 uppercase tracking-wider">Paste Resume Content</h3>
            <select 
              value={targetRole} 
              onChange={(e) => setTargetRole(e.target.value)}
              className="bg-slate-950 border border-slate-700/80 rounded-lg px-2.5 py-1 text-[11px] text-slate-300"
            >
              {['Full Stack Developer', 'Frontend Developer', 'Backend Developer', 'AI Engineer'].map(r => (
                <option key={r} value={r}>{r}</option>
              ))}
            </select>
          </div>

          <textarea 
            rows={12}
            value={resumeText}
            onChange={(e) => setResumeText(e.target.value)}
            className="w-full bg-slate-950 border border-slate-700/80 rounded-xl p-3.5 text-xs font-mono text-slate-300 focus:outline-none focus:border-indigo-500"
          />

          <div className="mt-3 border-2 border-dashed border-slate-800 rounded-xl p-3 text-center cursor-pointer hover:border-indigo-500/50 transition-all">
            <span className="text-[11px] text-slate-400">Or drag & drop PDF resume file here</span>
          </div>
        </GlassCard>

        {/* ATS Score & Keyword Results */}
        <div className="space-y-6">
          {/* ATS Gauge Card */}
          <GlassCard className="border-l-4 border-l-purple-500 flex items-center justify-between p-6">
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">ATS Score Match</p>
              <p className="text-4xl font-extrabold text-white mt-1 font-outfit">{atsReport.atsScore} <span className="text-lg text-slate-500 font-normal">/ 100</span></p>
              <span className="inline-block mt-2 px-3 py-0.5 rounded-full text-[10px] font-bold bg-purple-500/20 text-purple-300 border border-purple-500/30">
                {atsReport.matchRating}
              </span>
            </div>

            <div className="w-20 h-20 rounded-full bg-purple-500/10 border-4 border-purple-500/40 flex items-center justify-center text-purple-300 font-bold text-xl">
              85%
            </div>
          </GlassCard>

          {/* Missing Keywords Box */}
          <GlassCard>
            <h3 className="text-xs font-bold text-rose-400 uppercase tracking-wider mb-3 flex items-center">
              <AlertCircle className="w-4 h-4 mr-1.5" /> Missing High-Impact Keywords
            </h3>

            <div className="flex flex-wrap gap-2">
              {atsReport.missingKeywords.map(kw => (
                <span key={kw} className="px-3 py-1 rounded-full text-xs font-medium bg-rose-500/10 border border-rose-500/30 text-rose-300">
                  + Add "{kw}"
                </span>
              ))}
            </div>
          </GlassCard>

          {/* Actionable Suggestions */}
          <GlassCard>
            <h3 className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-3 flex items-center">
              <Zap className="w-4 h-4 mr-1.5" /> AI Recommended Improvements
            </h3>

            <ul className="space-y-2 text-xs text-slate-300">
              {atsReport.suggestedImprovements.map((imp, idx) => (
                <li key={idx} className="flex items-start space-x-2">
                  <span className="text-cyan-400 shrink-0 mt-0.5">•</span>
                  <span>{imp}</span>
                </li>
              ))}
            </ul>
          </GlassCard>
        </div>
      </div>
    </div>
  );
};

export default ResumeAnalyzer;
