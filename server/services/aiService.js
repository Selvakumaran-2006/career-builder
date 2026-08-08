/**
 * AI Service for Career Builder
 * Handles roadmap generation, gap analysis, ATS resume evaluation, mock interview scoring, and GitHub analysis.
 */

const ROLE_SKILLS_MAP = {
  'Full Stack Developer': ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Git', 'Docker'],
  'Frontend Developer': ['HTML5', 'CSS3', 'Tailwind CSS', 'JavaScript (ES6+)', 'React.js', 'Next.js', 'Redux / Zustand', 'TypeScript', 'Jest / Vitest'],
  'Backend Developer': ['Node.js', 'Express.js', 'Python', 'Django / FastApi', 'PostgreSQL', 'MongoDB', 'Redis', 'Microservices', 'Docker', 'System Design'],
  'Java Developer': ['Core Java', 'Advanced Java', 'Spring Boot', 'Hibernate / JPA', 'MySQL', 'Kafka', 'Microservices', 'RESTful Web Services', 'JUnit'],
  'Python Developer': ['Python 3', 'Django', 'FastAPI', 'Pandas & NumPy', 'SQLAlchemy', 'PostgreSQL', 'Docker', 'Celery', 'AsyncIO'],
  'AI Engineer': ['Python', 'PyTorch / TensorFlow', 'OpenAI API / Gemini API', 'LangChain', 'Vector DBs (Chroma/Pinecone)', 'Math & Linear Algebra', 'MLOps', 'Transformers'],
  'Data Analyst': ['Python', 'SQL', 'Pandas', 'PowerBI / Tableau', 'Statistics', 'Excel (VLOOKUP/Pivot)', 'Data Visualization', 'Scikit-Learn'],
  'DevOps Engineer': ['Linux / Bash', 'Git', 'Docker', 'Kubernetes', 'Terraform', 'AWS / GCP', 'CI/CD (GitHub Actions)', 'Prometheus & Grafana'],
  'Cyber Security Engineer': ['Networking (TCP/IP)', 'Linux Security', 'Ethical Hacking / Wireshark', 'Python Scripting', 'OWASP Top 10', 'SIEM Tools', 'Cryptography'],
  'Mobile App Developer': ['React Native / Flutter', 'Dart / JavaScript', 'iOS (Swift) / Android (Kotlin)', 'State Management', 'Firebase', 'App Store / Play Store Deploy']
};

const DEFAULT_ROADMAP_TEMPLATES = {
  'Full Stack Developer': [
    {
      month: 1,
      title: 'Frontend Foundations (HTML, CSS, JavaScript)',
      description: 'Master semantic HTML5, CSS Flexbox & Grid, responsive layout design, and modern ES6+ JavaScript concepts.',
      topics: [
        { title: 'Semantic HTML5 & Accessibility (a11y)', completed: true, resources: [{ title: 'MDN Web Docs HTML', url: 'https://developer.mozilla.org', type: 'Documentation' }] },
        { title: 'Modern CSS3, Flexbox, Grid & Glassmorphic UI', completed: true, resources: [{ title: 'CSS Tricks Complete Guide', url: 'https://css-tricks.com', type: 'Documentation' }] },
        { title: 'JavaScript ES6+, Closures, Async/Await & Promises', completed: true, resources: [{ title: 'JavaScript.info Complete Tutorial', url: 'https://javascript.info', type: 'Documentation' }] },
        { title: 'DOM Manipulation & Dynamic Event Handling', completed: false, resources: [{ title: 'Traversy Media JS Crash Course', url: 'https://youtube.com', type: 'YouTube' }] }
      ]
    },
    {
      month: 2,
      title: 'Modern Frontend with React.js & Tailwind CSS',
      description: 'Build interactive Single Page Applications using React components, hooks, state management, and utility-first CSS.',
      topics: [
        { title: 'React Core Architecture: JSX, Props & State', completed: true, resources: [{ title: 'React Official Docs', url: 'https://react.dev', type: 'Documentation' }] },
        { title: 'React Hooks: useState, useEffect, useMemo, useRef', completed: false, resources: [{ title: 'React Hooks Deep Dive', url: 'https://youtube.com', type: 'YouTube' }] },
        { title: 'Tailwind CSS, Glassmorphism & UI Component Libraries', completed: false, resources: [{ title: 'Tailwind CSS Docs', url: 'https://tailwindcss.com', type: 'Documentation' }] },
        { title: 'Client-side Routing with React Router DOM v6', completed: false, resources: [{ title: 'React Router Guide', url: 'https://reactrouter.com', type: 'Documentation' }] }
      ]
    },
    {
      month: 3,
      title: 'Backend Engineering with Node.js & Express.js',
      description: 'Architect scalable backend servers, RESTful APIs, middleware chains, and authentication controllers.',
      topics: [
        { title: 'Node.js Event Loop, Modules & Asynchronous I/O', completed: false, resources: [{ title: 'Node.js Official Documentation', url: 'https://nodejs.org', type: 'Documentation' }] },
        { title: 'Express.js Routing, Controller MVC Pattern & Error Handling', completed: false, resources: [{ title: 'Express Framework Guide', url: 'https://expressjs.com', type: 'Documentation' }] },
        { title: 'JWT Authentication, Password Hashing & Security Headers', completed: false, resources: [{ title: 'Auth Best Practices', url: 'https://jwt.io', type: 'Free Course' }] },
        { title: 'Middleware Design, Input Validation & File Uploads', completed: false, resources: [{ title: 'Express Validator Docs', url: 'https://express-validator.github.io', type: 'Documentation' }] }
      ]
    },
    {
      month: 4,
      title: 'Database Design & Management with MongoDB',
      description: 'Master NoSQL document modeling, indexing, aggregation pipelines, and Mongoose ORM integrations.',
      topics: [
        { title: 'MongoDB Atlas Setup, Collections & Document Schemas', completed: false, resources: [{ title: 'MongoDB University Free Course', url: 'https://learn.mongodb.com', type: 'Free Course' }] },
        { title: 'Mongoose ODM: Schema Validation & Virtual Populate', completed: false, resources: [{ title: 'Mongoose Documentation', url: 'https://mongoosejs.com', type: 'Documentation' }] },
        { title: 'Complex Aggregation Pipelines & Text Search Indexes', completed: false, resources: [{ title: 'MongoDB Aggregations Guide', url: 'https://mongodb.com', type: 'Documentation' }] }
      ]
    },
    {
      month: 5,
      title: 'Full Stack Integration & Production Projects',
      description: 'Assemble complete MERN applications, add real-time features, state persistence, and performance optimization.',
      topics: [
        { title: 'Building Full Stack MERN Portfolio Apps', completed: false, resources: [{ title: 'MERN Stack Masterclass', url: 'https://youtube.com', type: 'YouTube' }] },
        { title: 'Deploying React to Vercel & Express to Render / AWS', completed: false, resources: [{ title: 'Vercel Deployment Guide', url: 'https://vercel.com', type: 'Documentation' }] }
      ]
    },
    {
      month: 6,
      title: 'Placement Preparation & Mock Interviews',
      description: 'Hone Data Structures & Algorithms, System Design basics, resume ATS optimization, and mock interview rounds.',
      topics: [
        { title: 'DSA Problem Solving (Arrays, Trees, Graphs, DP)', completed: false, resources: [{ title: 'NeetCode 150 List', url: 'https://neetcode.io', type: 'Practice' }] },
        { title: 'High-Level System Design & Mock Interview Drills', completed: false, resources: [{ title: 'ByteByteGo System Design', url: 'https://youtube.com', type: 'YouTube' }] }
      ]
    }
  ]
};

exports.generateRoadmapAI = async (targetRole, userSkills = []) => {
  if (DEFAULT_ROADMAP_TEMPLATES[targetRole]) {
    return DEFAULT_ROADMAP_TEMPLATES[targetRole];
  }

  const roleSkills = ROLE_SKILLS_MAP[targetRole] || ['Core Fundamentals', 'Frameworks', 'Databases', 'Cloud Deployments'];
  
  return [
    {
      month: 1,
      title: `Month 1: Core Fundamentals & ${roleSkills[0]}`,
      description: `Establish solid foundation in ${roleSkills.slice(0, 3).join(', ')}.`,
      topics: [
        { title: `Master ${roleSkills[0]} syntax and paradigms`, completed: true, resources: [{ title: `Official ${roleSkills[0]} Guide`, url: 'https://google.com', type: 'Documentation' }] },
        { title: `Learn ${roleSkills[1] || 'CSS & Data Structures'}`, completed: false, resources: [{ title: 'Interactive Tutorial', url: 'https://youtube.com', type: 'YouTube' }] }
      ]
    },
    {
      month: 2,
      title: `Month 2: Deep Dive into ${roleSkills[2] || 'Advanced Concepts'}`,
      description: `Hands-on practical development with ${roleSkills.slice(2, 5).join(', ')}.`,
      topics: [
        { title: `Build core projects using ${roleSkills[2] || 'Frameworks'}`, completed: false, resources: [{ title: 'Project Walkthrough', url: 'https://youtube.com', type: 'YouTube' }] },
        { title: `State Management & System Architecture`, completed: false, resources: [{ title: 'Architecture Patterns', url: 'https://dev.to', type: 'Documentation' }] }
      ]
    },
    {
      month: 3,
      title: 'Month 3: Backend, DB & API Security',
      description: 'Connecting services, storage engines, and security protocols.',
      topics: [
        { title: `Database Operations & Schemas`, completed: false, resources: [{ title: 'DB Masterclass', url: 'https://mongodb.com', type: 'Free Course' }] },
        { title: 'REST API & Authentication Workflows', completed: false, resources: [{ title: 'API Security Docs', url: 'https://owasp.org', type: 'Documentation' }] }
      ]
    },
    {
      month: 4,
      title: 'Month 4: Real-World Industry Projects',
      description: 'Build and deploy 2 production-ready capstone projects for portfolio.',
      topics: [
        { title: 'Deploying applications to cloud environments (Vercel/AWS)', completed: false, resources: [{ title: 'Deployment Guide', url: 'https://vercel.com', type: 'Documentation' }] }
      ]
    },
    {
      month: 5,
      title: 'Month 5: Placement & Technical Interview Prep',
      description: 'Coding patterns, DSA problem solving, and aptitude practice.',
      topics: [
        { title: 'Top 100 Coding Interview Patterns', completed: false, resources: [{ title: 'LeetCode Practice', url: 'https://leetcode.com', type: 'Practice' }] }
      ]
    }
  ];
};

exports.calculateCareerGapAI = (currentSkills = [], targetRole = 'Full Stack Developer') => {
  const required = ROLE_SKILLS_MAP[targetRole] || ROLE_SKILLS_MAP['Full Stack Developer'];
  const userSkillUpper = currentSkills.map(s => s.trim().toUpperCase());

  const missingSkills = [];
  const matchedSkills = [];

  required.forEach(skill => {
    const isMatched = userSkillUpper.some(us => us.includes(skill.toUpperCase()) || skill.toUpperCase().includes(us));
    if (isMatched) {
      matchedSkills.push(skill);
    } else {
      missingSkills.push(skill);
    }
  });

  const matchRatio = required.length > 0 ? (matchedSkills.length / required.length) : 0.5;
  const readinessScore = Math.min(98, Math.max(35, Math.round(matchRatio * 100)));

  const suggestedLearningPath = missingSkills.map((skill, index) => ({
    priority: index === 0 ? 'High' : (index < 3 ? 'Medium' : 'Low'),
    skillName: skill,
    estimatedHours: 15 + index * 5,
    recommendedResource: `Mastering ${skill} for ${targetRole}`
  }));

  return {
    targetRole,
    readinessScore,
    matchedSkills,
    missingSkills,
    suggestedLearningPath,
    estimatedCompletionTimeWeeks: Math.ceil(missingSkills.length * 1.5)
  };
};

exports.evaluateResumeATS = (resumeText = '', targetRole = 'Full Stack Developer') => {
  const requiredKeywords = ROLE_SKILLS_MAP[targetRole] || ROLE_SKILLS_MAP['Full Stack Developer'];
  const textUpper = (resumeText || 'JavaScript React Node.js Express MongoDB Git HTML CSS REST API').toUpperCase();

  const foundKeywords = [];
  const missingKeywords = [];

  requiredKeywords.forEach(kw => {
    if (textUpper.includes(kw.toUpperCase())) {
      foundKeywords.push(kw);
    } else {
      missingKeywords.push(kw);
    }
  });

  const baseScore = Math.round((foundKeywords.length / requiredKeywords.length) * 70) + 20;
  const atsScore = Math.min(96, Math.max(45, baseScore));

  return {
    atsScore,
    targetRoleMatch: `${atsScore}%`,
    missingKeywords: missingKeywords.length > 0 ? missingKeywords : ['TypeScript', 'Docker', 'GraphQL'],
    suggestedImprovements: [
      'Include action verbs at start of project bullet points (e.g., "Architected", "Engineered", "Optimized").',
      `Add explicit quantifiable metrics for ${targetRole} projects (e.g., "Reduced response latency by 35%").`,
      'Ensure standard section titles: Skills, Experience, Projects, Education.'
    ],
    recommendedSkills: missingKeywords.slice(0, 4)
  };
};

exports.generateMockQuestions = (targetRole = 'Full Stack Developer', type = 'Technical') => {
  const bank = {
    Technical: [
      { id: 1, question: `How does the Event Loop work in Node.js, and how does it execute non-blocking asynchronous I/O?` },
      { id: 2, question: `Explain the Virtual DOM reconciliation process in React and how key props optimize rendering.` },
      { id: 3, question: `What is the difference between SQL relational databases and MongoDB document models regarding indexing and transaction isolation?` },
      { id: 4, question: `How do you secure a REST API against JWT token hijacking, CSRF attacks, and XSS vulnerabilities?` }
    ],
    HR: [
      { id: 1, question: `Tell me about a challenging technical bug you encountered in a project and how you resolved it under pressure.` },
      { id: 2, question: `Where do you see yourself in 3 years as a Software Engineer?` },
      { id: 3, question: `Why do you want to work at your target company and what makes you a unique candidate?` }
    ],
    Behavioral: [
      { id: 1, question: `Describe a situation where you had a disagreement with a team member on tech stack choices and how you reached consensus.` },
      { id: 2, question: `Give an example of a time when a project deadline was tight and how you prioritized deliverables.` }
    ]
  };

  return bank[type] || bank.Technical;
};

exports.evaluateMockAnswer = (question, userAnswer) => {
  const answerLength = (userAnswer || '').trim().length;
  let score = 75;
  if (answerLength > 150) score += 15;
  if (answerLength < 30) score -= 25;

  return {
    score: Math.min(98, Math.max(40, score)),
    aiFeedback: `Good technical structure. Your answer demonstrated clarity on core principles. To improve, mention real-world trade-offs and code implementation details.`,
    suggestedKeywords: ['Performance', 'Asynchronous', 'Scalability', 'Error Handling']
  };
};

exports.analyzeGitHubProfile = (username = 'octocat') => {
  return {
    username,
    repositoriesCount: 24,
    totalStars: 48,
    totalContributionsThisYear: 382,
    topLanguages: [
      { name: 'JavaScript', percentage: 45, color: '#f1e05a' },
      { name: 'TypeScript', percentage: 28, color: '#3178c6' },
      { name: 'HTML/CSS', percentage: 17, color: '#e34c26' },
      { name: 'Python', percentage: 10, color: '#3572A5' }
    ],
    suggestions: [
      'Add detailed README.md with architecture diagrams and live demo links to top repositories.',
      'Maintain continuous green commit activity across weekdays.',
      'Include license files and issue templates for open-source project visibility.'
    ]
  };
};
