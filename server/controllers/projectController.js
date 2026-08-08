const Project = require('../models/Project');

const SAMPLE_PROJECTS = [
  {
    _id: 'proj1',
    title: 'Personal Portfolio Web App',
    description: 'Build a sleek, interactive portfolio featuring glassmorphic UI, responsive layouts, contact form validation, and dark mode toggle.',
    level: 'Beginner',
    category: 'Frontend',
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS'],
    githubTemplate: 'https://github.com/developer/portfolio-starter',
    architectureDetails: 'Single page application with client side DOM manipulation, IntersectionObserver scroll animations, and CSS variables.',
    features: ['Dark/Light Theme Switcher', 'Smooth Scroll Navigation', 'Project Showcase Grid', 'Contact Form Modal']
  },
  {
    _id: 'proj2',
    title: 'Collaborative Task Management Board',
    description: 'A Trello-style Kanban board allowing users to drag and drop tasks, organize by priority columns, and assign tags.',
    level: 'Intermediate',
    category: 'Full Stack',
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind'],
    githubTemplate: 'https://github.com/developer/kanban-mern',
    architectureDetails: 'REST API architecture with MongoDB schema validation, React Context API state management, and Drag-and-Drop library.',
    features: ['Drag & Drop Column Organization', 'JWT User Authentication', 'Task Priority Badges', 'Search & Filtering']
  },
  {
    _id: 'proj3',
    title: 'Real-time Code Collaboration & Execution Platform',
    description: 'An online code editor with real-time multiplayer cursor synchronization, live syntax highlighting, and code compilation API.',
    level: 'Advanced',
    category: 'Full Stack',
    techStack: ['React.js', 'TypeScript', 'Node.js', 'Socket.io', 'Docker', 'Redis'],
    githubTemplate: 'https://github.com/developer/code-collab-engine',
    architectureDetails: 'Microservices architecture with Docker sandbox containers for safe untrusted code execution and Socket.io WebSockets.',
    features: ['Multiplayer Real-time Cursor Sync', 'Multi-language Sandbox Execution', 'Room Key Sharing', 'Execution Output Logs']
  },
  {
    _id: 'proj4',
    title: 'AI Resume Screener & ATS Parser',
    description: 'Upload PDF resumes and parse missing keywords, ATS score gauges, and generate tailored bullet points using LLM prompt pipelines.',
    level: 'Advanced',
    category: 'AI & Full Stack',
    techStack: ['React', 'Python', 'FastAPI', 'LangChain', 'OpenAI / Gemini', 'Tailwind'],
    githubTemplate: 'https://github.com/developer/ats-resume-ai',
    architectureDetails: 'FastAPI microservice extracting raw PDF text, processing vector embeddings with cosine similarity matching.',
    features: ['PDF Drag & Drop Uploader', 'Visual Match Heatmap', 'AI Action Verb Generator', 'Downloadable PDF Report']
  }
];

exports.getProjects = async (req, res) => {
  try {
    res.json({ success: true, projects: SAMPLE_PROJECTS });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.markProjectCompleted = async (req, res) => {
  try {
    const { projectId } = req.params;
    res.json({ success: true, message: `Project ${projectId} marked as completed!` });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
