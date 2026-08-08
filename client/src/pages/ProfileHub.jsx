import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { 
  User, GraduationCap, Award, FolderGit2, UploadCloud, 
  Github, Linkedin, Plus, Trash2, CheckCircle2, Save, FileText 
} from 'lucide-react';
import GlassCard from '../components/GlassCard';

export const ProfileHub = () => {
  const { user } = useAuth();
  const { showToast } = useTheme();

  const [college, setCollege] = useState('Indian Institute of Technology Madras');
  const [department, setDepartment] = useState('Computer Science & Engineering');
  const [gradYear, setGradYear] = useState(2026);
  const [cgpa, setCgpa] = useState(9.1);
  const [preferredCareer, setPreferredCareer] = useState('Full Stack Developer');
  const [dreamCompany, setDreamCompany] = useState('Google');
  const [githubLink, setGithubLink] = useState('https://github.com/karthikraja');
  const [linkedinLink, setLinkedinLink] = useState('https://linkedin.com/in/karthikraja');

  const [skills, setSkills] = useState(['JavaScript', 'TypeScript', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'Python', 'Tailwind CSS', 'Git', 'Docker']);
  const [newSkill, setNewSkill] = useState('');

  const [resumeFile, setResumeFile] = useState(null);

  const addSkill = (e) => {
    e.preventDefault();
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill('');
      showToast(`Skill '${newSkill.trim()}' added!`);
    }
  };

  const removeSkill = (skillToRemove) => {
    setSkills(skills.filter(s => s !== skillToRemove));
    showToast(`Skill '${skillToRemove}' removed.`);
  };

  const handleSave = (e) => {
    e.preventDefault();
    showToast('Student Profile & Career Goals saved successfully!', 'success');
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setResumeFile(file);
      showToast(`Resume '${file.name}' uploaded & queued for ATS scan!`, 'success');
    }
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <div className="flex items-center justify-between pb-4 border-b border-slate-800">
        <div>
          <h1 className="text-2xl font-bold font-outfit gradient-text">Student Profile & Resume Hub</h1>
          <p className="text-xs text-slate-400">Manage academic credentials, skills, target career roles, and uploaded resume</p>
        </div>
        <button 
          onClick={handleSave}
          className="glass-button px-5 py-2.5 rounded-xl text-xs font-bold text-white flex items-center space-x-2 shadow-lg"
        >
          <Save className="w-4 h-4" />
          <span>Save Changes</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Column: Glass Avatar Profile Summary */}
        <div className="space-y-6">
          <GlassCard className="text-center">
            <div className="relative w-24 h-24 mx-auto mb-4">
              <img 
                src={user?.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300'} 
                alt="Profile" 
                className="w-full h-full rounded-full object-cover ring-4 ring-indigo-500/40 shadow-xl"
              />
              <span className="absolute bottom-1 right-1 w-5 h-5 bg-emerald-500 rounded-full ring-4 ring-slate-950 flex items-center justify-center text-[10px] text-white">
                ✓
              </span>
            </div>
            <h2 className="text-lg font-bold text-white font-outfit">{user?.name || 'Karthik Raja'}</h2>
            <p className="text-xs text-indigo-400 font-medium">{user?.email || 'student@college.edu'}</p>

            <div className="mt-4 pt-4 border-t border-slate-800 space-y-2 text-left text-xs">
              <div className="flex items-center justify-between text-slate-400">
                <span>College:</span>
                <span className="font-semibold text-slate-200 truncate max-w-[140px]">{college}</span>
              </div>
              <div className="flex items-center justify-between text-slate-400">
                <span>Graduation:</span>
                <span className="font-semibold text-slate-200">{gradYear}</span>
              </div>
              <div className="flex items-center justify-between text-slate-400">
                <span>CGPA:</span>
                <span className="font-semibold text-emerald-400">{cgpa} / 10.0</span>
              </div>
            </div>
          </GlassCard>

          {/* Resume PDF Upload Box */}
          <GlassCard>
            <h3 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-3 flex items-center">
              <FileText className="w-4 h-4 text-cyan-400 mr-2" /> Resume Upload
            </h3>
            <label className="border-2 border-dashed border-slate-700 hover:border-indigo-500 rounded-2xl p-6 flex flex-col items-center justify-center cursor-pointer transition-all bg-slate-900/40">
              <UploadCloud className="w-8 h-8 text-indigo-400 mb-2 animate-bounce" />
              <span className="text-xs font-semibold text-slate-300">Click to upload PDF resume</span>
              <span className="text-[10px] text-slate-500 mt-1">Max file size 5MB (.pdf, .docx)</span>
              <input type="file" accept=".pdf,.doc,.docx" onChange={handleFileUpload} className="hidden" />
            </label>

            {resumeFile && (
              <div className="mt-3 p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-between text-xs">
                <span className="font-medium text-indigo-300 truncate max-w-[160px]">{resumeFile.name}</span>
                <span className="text-[10px] text-emerald-400 font-bold">Uploaded ✓</span>
              </div>
            )}
          </GlassCard>
        </div>

        {/* Right 2 Columns: Form Fields & Skills */}
        <div className="md:col-span-2 space-y-6">
          {/* Academic Info */}
          <GlassCard>
            <h3 className="text-sm font-bold text-slate-200 mb-4 flex items-center">
              <GraduationCap className="w-4 h-4 text-indigo-400 mr-2" /> Academic Details
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1">College / University</label>
                <input 
                  type="text" 
                  value={college} 
                  onChange={(e) => setCollege(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700/80 rounded-xl px-3.5 py-2 text-xs text-slate-200 focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1">Department</label>
                <input 
                  type="text" 
                  value={department} 
                  onChange={(e) => setDepartment(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700/80 rounded-xl px-3.5 py-2 text-xs text-slate-200 focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1">Graduation Year</label>
                <input 
                  type="number" 
                  value={gradYear} 
                  onChange={(e) => setGradYear(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700/80 rounded-xl px-3.5 py-2 text-xs text-slate-200 focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1">Current CGPA</label>
                <input 
                  type="number" 
                  step="0.1" 
                  value={cgpa} 
                  onChange={(e) => setCgpa(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700/80 rounded-xl px-3.5 py-2 text-xs text-slate-200 focus:outline-none focus:border-indigo-500"
                />
              </div>
            </div>
          </GlassCard>

          {/* Preferred Career & Dream Company */}
          <GlassCard>
            <h3 className="text-sm font-bold text-slate-200 mb-4 flex items-center">
              <User className="w-4 h-4 text-cyan-400 mr-2" /> Career Aspiration Goals
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1">Preferred Career Role</label>
                <select 
                  value={preferredCareer}
                  onChange={(e) => setPreferredCareer(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700/80 rounded-xl px-3.5 py-2 text-xs text-slate-200 focus:outline-none focus:border-indigo-500"
                >
                  {['Full Stack Developer', 'Frontend Developer', 'Backend Developer', 'Java Developer', 'Python Developer', 'AI Engineer', 'Data Analyst', 'DevOps Engineer', 'Cyber Security Engineer', 'Mobile App Developer'].map(role => (
                    <option key={role} value={role}>{role}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1">Dream Target Company</label>
                <select 
                  value={dreamCompany}
                  onChange={(e) => setDreamCompany(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700/80 rounded-xl px-3.5 py-2 text-xs text-slate-200 focus:outline-none focus:border-indigo-500"
                >
                  {['Google', 'Amazon', 'Microsoft', 'Zoho', 'TCS', 'Infosys', 'Accenture'].map(comp => (
                    <option key={comp} value={comp}>{comp}</option>
                  ))}
                </select>
              </div>
            </div>
          </GlassCard>

          {/* Interactive Skills Pill Tags Manager */}
          <GlassCard>
            <h3 className="text-sm font-bold text-slate-200 mb-2">Technical Skills & Technologies</h3>
            <p className="text-xs text-slate-400 mb-4">Add skills to benchmark against your target company requirements</p>

            <form onSubmit={addSkill} className="flex gap-2 mb-4">
              <input 
                type="text" 
                placeholder="Add skill (e.g. Next.js, Redis, PyTorch)..."
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
                className="flex-1 bg-slate-950 border border-slate-700/80 rounded-xl px-3.5 py-2 text-xs text-slate-200 focus:outline-none focus:border-indigo-500"
              />
              <button 
                type="submit" 
                className="glass-button px-4 py-2 rounded-xl text-xs font-bold text-white flex items-center space-x-1"
              >
                <Plus className="w-4 h-4" />
                <span>Add</span>
              </button>
            </form>

            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span 
                  key={skill}
                  className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-indigo-500/10 border border-indigo-500/30 text-indigo-300"
                >
                  <span>{skill}</span>
                  <button onClick={() => removeSkill(skill)} className="text-slate-500 hover:text-rose-400">
                    <Trash2 className="w-3 h-3" />
                  </button>
                </span>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
};

export default ProfileHub;
