import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { 
  Map, Sparkles, CheckCircle2, Circle, ExternalLink, 
  BookOpen, Video, Code, ChevronRight, Play, RefreshCw 
} from 'lucide-react';
import GlassCard from '../components/GlassCard';

export const CareerRoadmap = () => {
  const { showToast } = useTheme();

  const [selectedRole, setSelectedRole] = useState('Full Stack Developer');
  const [isGenerating, setIsGenerating] = useState(false);

  const [roadmapData, setRoadmapData] = useState({
    'Full Stack Developer': [
      {
        month: 1,
        title: 'Month 1: Frontend Foundations & Responsive Design',
        description: 'Semantic HTML5, CSS Flexbox & Grid, ES6+ Modern JavaScript, DOM Manipulation.',
        topics: [
          { title: 'HTML5 Semantic Tags & Accessibility (a11y)', completed: true, type: 'Doc', url: 'https://developer.mozilla.org' },
          { title: 'CSS3 Flexbox, Grid & Glassmorphism UI Systems', completed: true, type: 'YouTube', url: 'https://youtube.com' },
          { title: 'JavaScript ES6+: Promises, Async/Await & Closures', completed: true, type: 'Doc', url: 'https://javascript.info' },
          { title: 'DOM Events, Event Delegation & LocalStorage', completed: false, type: 'Practice', url: 'https://freecodecamp.org' }
        ]
      },
      {
        month: 2,
        title: 'Month 2: Modern Single Page Apps with React.js',
        description: 'React Component Architecture, JSX, State & Hooks, Tailwind CSS styling, React Router DOM.',
        topics: [
          { title: 'React Core Concept: Components, Props & State', completed: true, type: 'Doc', url: 'https://react.dev' },
          { title: 'Mastering Hooks: useState, useEffect, useMemo, useRef', completed: false, type: 'YouTube', url: 'https://youtube.com' },
          { title: 'Tailwind CSS Integration & Reusable Glass UI Components', completed: false, type: 'Doc', url: 'https://tailwindcss.com' },
          { title: 'Routing with React Router DOM v6 & Protected Routes', completed: false, type: 'Free Course', url: 'https://reactrouter.com' }
        ]
      },
      {
        month: 3,
        title: 'Month 3: Backend REST APIs with Node.js & Express',
        description: 'Event Driven Architecture, Express Routing, Controllers, Middleware, JWT Security & Hashing.',
        topics: [
          { title: 'Node.js Modules, Event Loop & File System (fs)', completed: false, type: 'Doc', url: 'https://nodejs.org' },
          { title: 'Express.js MVC Controller Pattern & Error Handling', completed: false, type: 'YouTube', url: 'https://expressjs.com' },
          { title: 'JWT Authentication & bcrypt.js Password Hashing', completed: false, type: 'Free Course', url: 'https://jwt.io' },
          { title: 'Multer File Uploads & Cloudinary Cloud Integration', completed: false, type: 'Doc', url: 'https://cloudinary.com' }
        ]
      },
      {
        month: 4,
        title: 'Month 4: Database Engineering with MongoDB Atlas',
        description: 'NoSQL Schema Design, Mongoose ODM Validation, Aggregation Pipelines & Text Indexes.',
        topics: [
          { title: 'MongoDB Atlas Setup, Collections & Document Validation', completed: false, type: 'Free Course', url: 'https://learn.mongodb.com' },
          { title: 'Mongoose Schemas, Virtuals & Population Joins', completed: false, type: 'Doc', url: 'https://mongoosejs.com' },
          { title: 'MongoDB Aggregation Pipelines & Performance Indexing', completed: false, type: 'YouTube', url: 'https://youtube.com' }
        ]
      },
      {
        month: 5,
        title: 'Month 5: Full Stack Capstone Projects & Cloud Deploy',
        description: 'Building 2 production MERN Stack portfolio projects, deploying frontend to Vercel and backend to Render.',
        topics: [
          { title: 'Building Career Builder AI Full Stack Web App', completed: false, type: 'Practice', url: 'https://github.com' },
          { title: 'Production Deployment: Vercel + Render + MongoDB Atlas', completed: false, type: 'Doc', url: 'https://vercel.com' }
        ]
      },
      {
        month: 6,
        title: 'Month 6: Placement Drills, ATS Resume & Mock Interviews',
        description: 'LeetCode 150 patterns, High Level System Design, ATS Resume scoring, AI Technical Mock Drills.',
        topics: [
          { title: 'Top 100 Coding Interview Patterns (Sliding Window, Graph BFS)', completed: false, type: 'Practice', url: 'https://neetcode.io' },
          { title: 'System Design Principles & Mock Interview Simulations', completed: false, type: 'YouTube', url: 'https://youtube.com' }
        ]
      }
    ]
  });

  const toggleTopic = (monthIndex, topicIndex) => {
    setRoadmapData(prev => {
      const currentList = [...(prev[selectedRole] || prev['Full Stack Developer'])];
      currentList[monthIndex].topics[topicIndex].completed = !currentList[monthIndex].topics[topicIndex].completed;
      return { ...prev, [selectedRole]: currentList };
    });
    showToast('Topic progress updated!');
  };

  const handleGenerateAI = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      showToast(`AI Roadmap generated for ${selectedRole}!`, 'success');
    }, 1200);
  };

  const currentMonths = roadmapData[selectedRole] || roadmapData['Full Stack Developer'];

  // Calculate overall completion percentage
  let totalTopics = 0;
  let completedTopics = 0;
  currentMonths.forEach(m => {
    m.topics.forEach(t => {
      totalTopics++;
      if (t.completed) completedTopics++;
    });
  });
  const completionPercentage = Math.round((completedTopics / Math.max(1, totalTopics)) * 100);

  return (
    <div className="space-y-6">
      {/* Top Controls Header */}
      <GlassCard className="border border-indigo-500/30 bg-slate-900/80">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2">
              <Map className="w-5 h-5 text-indigo-400" />
              <h1 className="text-xl font-bold font-outfit text-white">AI Career Roadmap Generator</h1>
            </div>
            <p className="text-xs text-slate-400 mt-1">Month-by-month structured learning path curated by AI algorithms</p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <select 
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
              className="bg-slate-950 border border-slate-700/80 rounded-xl px-4 py-2.5 text-xs text-slate-200 font-semibold focus:outline-none focus:border-indigo-500"
            >
              {[
                'Full Stack Developer', 'Frontend Developer', 'Backend Developer', 
                'Java Developer', 'Python Developer', 'AI Engineer', 
                'Data Analyst', 'DevOps Engineer', 'Cyber Security Engineer', 'Mobile App Developer'
              ].map(role => (
                <option key={role} value={role}>{role}</option>
              ))}
            </select>

            <button 
              onClick={handleGenerateAI}
              disabled={isGenerating}
              className="glass-button px-5 py-2.5 rounded-xl text-xs font-bold text-white flex items-center space-x-2 shadow-lg"
            >
              <Sparkles className={`w-4 h-4 text-cyan-300 ${isGenerating ? 'animate-spin' : ''}`} />
              <span>{isGenerating ? 'Synthesizing AI Roadmap...' : 'Generate AI Roadmap'}</span>
            </button>
          </div>
        </div>

        {/* Progress Bar Header */}
        <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="text-xs font-semibold text-slate-300">Overall Track Completion:</span>
            <span className="text-sm font-extrabold text-cyan-400 font-mono">{completionPercentage}%</span>
          </div>
          <div className="w-48 sm:w-64 bg-slate-950 h-2.5 rounded-full overflow-hidden border border-slate-800">
            <div 
              className="bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 h-full rounded-full transition-all duration-500"
              style={{ width: `${completionPercentage}%` }}
            ></div>
          </div>
        </div>
      </GlassCard>

      {/* Month-by-Month Node Timeline */}
      <div className="space-y-6">
        {currentMonths.map((m, monthIdx) => (
          <GlassCard key={monthIdx} className="border-l-4 border-l-indigo-500 relative">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[10px] font-bold font-mono px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  MILESTONE MONTH 0{m.month}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-slate-100 mt-2">{m.title}</h3>
                <p className="text-xs text-slate-400 mt-1">{m.description}</p>
              </div>
            </div>

            {/* Topic Checklist */}
            <div className="mt-5 space-y-3">
              {m.topics.map((t, topicIdx) => (
                <div 
                  key={topicIdx}
                  className={`p-3 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-all ${
                    t.completed ? 'bg-slate-900/30 border-slate-800' : 'bg-slate-800/40 border-slate-700/60'
                  }`}
                >
                  <div 
                    onClick={() => toggleTopic(monthIdx, topicIdx)}
                    className="flex items-center space-x-3 cursor-pointer flex-1"
                  >
                    {t.completed ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    ) : (
                      <Circle className="w-5 h-5 text-slate-500 shrink-0" />
                    )}
                    <span className={`text-xs font-semibold ${t.completed ? 'text-slate-400 line-through' : 'text-slate-200'}`}>
                      {t.title}
                    </span>
                  </div>

                  <div className="flex items-center space-x-2 self-end sm:self-center">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 text-cyan-300 border border-slate-800">
                      {t.type}
                    </span>
                    <a 
                      href={t.url} 
                      target="_blank" 
                      rel="noreferrer"
                      className="p-1.5 rounded-lg bg-slate-950 text-slate-400 hover:text-white hover:bg-indigo-600/30 transition-all text-[11px] flex items-center space-x-1"
                    >
                      <span>Resource</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
};

export default CareerRoadmap;
