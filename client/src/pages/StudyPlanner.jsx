import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { 
  Calendar as CalendarIcon, Clock, Plus, CheckCircle2, 
  Trash2, Play, Pause, RotateCcw, Sparkles 
} from 'lucide-react';
import GlassCard from '../components/GlassCard';

export const StudyPlanner = () => {
  const { showToast } = useTheme();

  const [activeTab, setActiveTab] = useState('daily');
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Solve 2 LeetCode Medium Problems (Trees & Graphs)', category: 'Coding', priority: 'High', timeFrame: 'daily', completed: true },
    { id: 2, title: 'Watch React.js Context API & Redux Toolkit tutorial', category: 'Learning', priority: 'Medium', timeFrame: 'daily', completed: false },
    { id: 3, title: 'Complete Node.js Express REST API controller module', category: 'Project', priority: 'High', timeFrame: 'weekly', completed: false },
    { id: 4, title: 'Mock Interview Prep: Behavioral STAR story practice', category: 'Interview Prep', priority: 'Low', timeFrame: 'weekly', completed: true },
    { id: 5, title: 'Review System Design ByteByteGo Newsletter', category: 'General', priority: 'Medium', timeFrame: 'monthly', completed: false }
  ]);

  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskCategory, setNewTaskCategory] = useState('Coding');
  const [newTaskPriority, setNewTaskPriority] = useState('Medium');

  // Pomodoro Timer State
  const [secondsLeft, setSecondsLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer = null;
    if (isRunning && secondsLeft > 0) {
      timer = setInterval(() => setSecondsLeft(prev => prev - 1), 1000);
    } else if (secondsLeft === 0) {
      setIsRunning(false);
      showToast('Pomodoro Study Session Complete! Take a 5-minute break.', 'success');
    }
    return () => clearInterval(timer);
  }, [isRunning, secondsLeft]);

  const formatTime = (secs) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;
    const newTask = {
      id: Date.now(),
      title: newTaskTitle,
      category: newTaskCategory,
      priority: newTaskPriority,
      timeFrame: activeTab,
      completed: false
    };
    setTasks([newTask, ...tasks]);
    setNewTaskTitle('');
    showToast('New study task added!');
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
    showToast('Task removed.');
  };

  const filteredTasks = tasks.filter(t => t.timeFrame === activeTab);

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      {/* Header */}
      <GlassCard className="border border-indigo-500/30 bg-slate-900/80">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
              <CalendarIcon className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl font-bold font-outfit text-white">Study & Task Planner</h1>
              <p className="text-xs text-slate-400">Organize daily targets, weekly milestones, and focus pomodoro timer</p>
            </div>
          </div>

          <div className="flex space-x-2">
            {['daily', 'weekly', 'monthly'].map(tab => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold capitalize transition-all ${
                  activeTab === tab 
                    ? 'bg-indigo-600 text-white shadow-md' 
                    : 'bg-slate-950 text-slate-400 border border-slate-800'
                }`}
              >
                {tab} Planner
              </button>
            ))}
          </div>
        </div>
      </GlassCard>

      {/* Grid: Planner & Pomodoro */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Cols: Task List & Add Form */}
        <div className="lg:col-span-2 space-y-6">
          <GlassCard>
            <form onSubmit={handleAddTask} className="flex flex-col sm:flex-row gap-3 mb-6">
              <input 
                type="text" 
                placeholder={`Add new ${activeTab} task...`}
                value={newTaskTitle}
                onChange={(e) => setNewTaskTitle(e.target.value)}
                className="flex-1 bg-slate-950 border border-slate-700/80 rounded-xl px-3.5 py-2 text-xs text-slate-200 focus:outline-none focus:border-indigo-500"
              />

              <select 
                value={newTaskCategory}
                onChange={(e) => setNewTaskCategory(e.target.value)}
                className="bg-slate-950 border border-slate-700/80 rounded-xl px-3 py-2 text-xs text-slate-200"
              >
                <option value="Coding">Coding</option>
                <option value="Learning">Learning</option>
                <option value="Project">Project</option>
                <option value="Interview Prep">Interview</option>
              </select>

              <button 
                type="submit" 
                className="glass-button px-4 py-2 rounded-xl text-xs font-bold text-white flex items-center justify-center space-x-1 shrink-0"
              >
                <Plus className="w-4 h-4" />
                <span>Add Task</span>
              </button>
            </form>

            <div className="space-y-2.5">
              {filteredTasks.map(t => (
                <div 
                  key={t.id}
                  className="p-3.5 rounded-xl bg-slate-800/40 border border-slate-700/60 flex items-center justify-between"
                >
                  <div className="flex items-center space-x-3">
                    <button 
                      onClick={() => {
                        setTasks(tasks.map(item => item.id === t.id ? { ...item, completed: !item.completed } : item));
                        showToast('Task updated!');
                      }}
                      className={`w-5 h-5 rounded-full flex items-center justify-center border text-xs font-bold ${
                        t.completed ? 'bg-emerald-500/20 border-emerald-500 text-emerald-400' : 'border-slate-600 text-transparent'
                      }`}
                    >
                      ✓
                    </button>
                    <span className={`text-xs font-medium ${t.completed ? 'text-slate-500 line-through' : 'text-slate-200'}`}>
                      {t.title}
                    </span>
                  </div>

                  <div className="flex items-center space-x-2">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 text-indigo-300 border border-slate-800">
                      {t.category}
                    </span>
                    <button onClick={() => deleteTask(t.id)} className="text-slate-500 hover:text-rose-400">
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>

        {/* Right Col: Pomodoro Study Clock */}
        <GlassCard className="text-center flex flex-col items-center justify-center border-l-4 border-l-cyan-500">
          <Clock className="w-8 h-8 text-cyan-400 mb-2" />
          <h3 className="text-sm font-bold text-slate-100">Focus Pomodoro Clock</h3>
          <p className="text-[11px] text-slate-400 mt-0.5">25 Min Deep Work Session</p>

          <div className="my-6 text-4xl font-extrabold font-mono text-cyan-300 tracking-widest bg-slate-950 px-6 py-3 rounded-2xl border border-slate-800">
            {formatTime(secondsLeft)}
          </div>

          <div className="flex items-center space-x-3">
            <button 
              onClick={() => setIsRunning(!isRunning)}
              className="glass-button px-5 py-2 rounded-xl text-xs font-bold text-white flex items-center space-x-1"
            >
              {isRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              <span>{isRunning ? 'Pause' : 'Start Focus'}</span>
            </button>

            <button 
              onClick={() => { setIsRunning(false); setSecondsLeft(25 * 60); }}
              className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </GlassCard>
      </div>
    </div>
  );
};

export default StudyPlanner;
