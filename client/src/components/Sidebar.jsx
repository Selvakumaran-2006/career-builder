import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { 
  LayoutDashboard, User, Map, GitCompare, FileText, Code2, 
  FolderGit2, Building2, Mic, Calendar, Github, Award, 
  Bell, ShieldCheck, Sparkles, X, ChevronRight
} from 'lucide-react';

export const Sidebar = ({ isOpen, closeSidebar }) => {
  const { user } = useAuth();

  const navItems = [
    { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard, badge: null },
    { name: 'Student Profile', path: '/profile', icon: User, badge: null },
    { name: 'AI Career Roadmap', path: '/roadmap', icon: Map, badge: 'AI' },
    { name: 'Career Gap Analyzer', path: '/gap-analyzer', icon: GitCompare, badge: null },
    { name: 'ATS Resume Analyzer', path: '/resume-analyzer', icon: FileText, badge: '85%' },
    { name: 'Coding Tracker', path: '/coding-tracker', icon: Code2, badge: '18 Days' },
    { name: 'Project Store', path: '/projects', icon: FolderGit2, badge: null },
    { name: 'Company Interview Prep', path: '/company-prep', icon: Building2, badge: 'Top 7' },
    { name: 'AI Mock Interview', path: '/mock-interview', icon: Mic, badge: 'Sim' },
    { name: 'Study & Task Planner', path: '/study-planner', icon: Calendar, badge: null },
    { name: 'GitHub Analyzer', path: '/github-analyzer', icon: Github, badge: null },
    { name: 'Achievements & Ranks', path: '/achievements', icon: Award, badge: 'Top 5' },
    { name: 'Notifications', path: '/notifications', icon: Bell, badge: '2' },
  ];

  if (user?.role === 'admin') {
    navItems.push({ name: 'Admin Management', path: '/admin', icon: ShieldCheck, badge: 'Admin' });
  }

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div 
          onClick={closeSidebar}
          className="fixed inset-0 z-40 bg-slate-950/80 backdrop-blur-sm lg:hidden"
        />
      )}

      <aside className={`fixed lg:sticky top-0 left-0 z-50 h-screen w-64 glass-panel border-r border-slate-800/80 flex flex-col justify-between transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      }`}>
        <div className="p-4 overflow-y-auto max-h-[calc(100vh-80px)]">
          {/* Header Mobile Close Button */}
          <div className="flex items-center justify-between lg:hidden pb-4 border-b border-slate-800 mb-4">
            <span className="text-sm font-bold gradient-text">CareerBuilder Nav</span>
            <button onClick={closeSidebar} className="p-1 rounded-lg text-slate-400 hover:text-white">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider px-3 mb-3">
            Navigation Menu
          </div>

          <nav className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={closeSidebar}
                  className={({ isActive }) =>
                    `flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all group ${
                      isActive
                        ? 'bg-gradient-to-r from-indigo-600/90 to-purple-600/90 text-white font-semibold shadow-lg shadow-indigo-500/20'
                        : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/50'
                    }`
                  }
                >
                  <div className="flex items-center space-x-3">
                    <Icon className="w-4 h-4 text-indigo-400 group-hover:scale-110 transition-transform" />
                    <span>{item.name}</span>
                  </div>
                  {item.badge && (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-indigo-500/20 text-cyan-300 border border-indigo-500/30">
                      {item.badge}
                    </span>
                  )}
                </NavLink>
              );
            })}
          </nav>
        </div>

        {/* Footer Promo Box */}
        <div className="p-4 border-t border-slate-800/80">
          <div className="glass-panel p-3.5 rounded-xl border border-indigo-500/30 bg-gradient-to-br from-indigo-900/20 to-purple-900/20">
            <div className="flex items-center space-x-2 text-indigo-300 font-semibold text-xs mb-1">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Target Role</span>
            </div>
            <p className="text-[11px] text-slate-300 font-medium">Full Stack Developer</p>
            <p className="text-[10px] text-emerald-400 mt-1 font-mono">Ready Score: 84%</p>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
