import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { 
  FolderGit2, Code2, Sparkles, CheckCircle2, ExternalLink, 
  Github, Layers, Filter 
} from 'lucide-react';
import GlassCard from '../components/GlassCard';

export const ProjectStore = () => {
  const { showToast } = useTheme();

  const [activeLevel, setActiveLevel] = useState('All');

  const projects = [
    {
      id: 'proj1',
      title: 'Interactive Portfolio & Resume Web App',
      level: 'Beginner',
      category: 'Frontend',
      desc: 'Build a sleek, interactive personal developer portfolio featuring glassmorphic design system, dark mode switcher, contact modal, and responsive layouts.',
      techStack: ['HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS'],
      github: 'https://github.com/developer/portfolio-starter',
      completed: true
    },
    {
      id: 'proj2',
      title: 'Collaborative Kanban Task Management Board',
      level: 'Intermediate',
      category: 'Full Stack',
      desc: 'A Trello-style task management board allowing users to create cards, drag and drop across columns, assign priority tags, and persist to MongoDB.',
      techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind'],
      github: 'https://github.com/developer/kanban-mern',
      completed: false
    },
    {
      id: 'proj3',
      title: 'Real-time Multiplayer Code Sandbox Engine',
      level: 'Advanced',
      category: 'Full Stack & Docker',
      desc: 'An online code editor with real-time cursor synchronization, live syntax highlighting, Docker sandbox code execution, and WebSocket rooms.',
      techStack: ['React', 'TypeScript', 'Node.js', 'Socket.io', 'Docker', 'Redis'],
      github: 'https://github.com/developer/code-sandbox-engine',
      completed: false
    },
    {
      id: 'proj4',
      title: 'AI Resume Screener & ATS Keyword Matcher',
      level: 'Advanced',
      category: 'AI & MERN',
      desc: 'Upload PDF resumes, extract text embeddings, calculate ATS match score against job descriptions using LangChain / Gemini LLM pipeline.',
      techStack: ['React', 'Node.js', 'Python', 'FastAPI', 'Gemini API', 'Tailwind'],
      github: 'https://github.com/developer/ats-screener',
      completed: true
    }
  ];

  const filteredProjects = activeLevel === 'All' ? projects : projects.filter(p => p.level === activeLevel);

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      {/* Header */}
      <GlassCard className="border border-indigo-500/30 bg-slate-900/80">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400">
              <FolderGit2 className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl font-bold font-outfit text-white">Recommended Industry Projects</h1>
              <p className="text-xs text-slate-400">Curated project ideas complete with tech stacks, architecture blueprints & starter code</p>
            </div>
          </div>

          <div className="flex space-x-2">
            {['All', 'Beginner', 'Intermediate', 'Advanced'].map(lvl => (
              <button 
                key={lvl}
                onClick={() => setActiveLevel(lvl)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  activeLevel === lvl 
                    ? 'bg-purple-600 text-white shadow-md' 
                    : 'bg-slate-950 text-slate-400 border border-slate-800'
                }`}
              >
                {lvl}
              </button>
            ))}
          </div>
        </div>
      </GlassCard>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((p) => (
          <GlassCard key={p.id} className="flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between">
                <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                  p.level === 'Beginner' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' :
                  p.level === 'Intermediate' ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30' :
                  'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                }`}>
                  {p.level} • {p.category}
                </span>

                <span className={`text-xs font-bold ${p.completed ? 'text-emerald-400' : 'text-slate-500'}`}>
                  {p.completed ? 'Completed ✓' : 'In Progress'}
                </span>
              </div>

              <h3 className="text-base font-bold text-slate-100 mt-2">{p.title}</h3>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">{p.desc}</p>
            </div>

            <div>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {p.techStack.map(ts => (
                  <span key={ts} className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-950 text-cyan-300 border border-slate-800">
                    {ts}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-slate-800">
                <a 
                  href={p.github} 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-xs text-slate-300 hover:text-white flex items-center space-x-1.5"
                >
                  <Github className="w-4 h-4 text-purple-400" />
                  <span>GitHub Blueprint</span>
                </a>

                <button 
                  onClick={() => showToast(`Toggled completion status for '${p.title}'`)}
                  className="text-xs text-cyan-400 hover:underline font-semibold"
                >
                  {p.completed ? 'Mark Incomplete' : 'Mark Completed'}
                </button>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
};

export default ProjectStore;
