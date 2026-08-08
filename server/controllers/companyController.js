const SAMPLE_COMPANIES = [
  {
    _id: 'google',
    name: 'Google',
    logo: 'https://www.google.com/favicon.ico',
    tier: 'Tier 1 MAANG Product',
    avgSalary: '32 - 45 LPA',
    requiredSkills: ['Data Structures & Algorithms', 'System Design', 'C++', 'Java', 'Python', 'Distributed Systems'],
    interviewRounds: [
      { roundName: 'Round 1: Online Assessment', description: '2 LeetCode Hard DSA coding questions on Graphs/DP (90 mins).', duration: '90 mins' },
      { roundName: 'Round 2-4: Technical Telephonic / Onsite', description: 'In-depth Problem Solving, Code Efficiency, Space/Time Complexity analysis.', duration: '45 mins each' },
      { roundName: 'Round 5: Leadership & Googleyness', description: 'Behavioral scenarios, team conflict management, ethical decision making.', duration: '45 mins' }
    ],
    codingPatterns: ['Sliding Window', 'Two Pointers', 'Graph BFS/DFS', 'Dynamic Programming', 'Trie Construction'],
    aptitudeTopics: ['Probability', 'Combinatorics', 'Puzzles', 'Logical Reasoning'],
    topQuestions: [
      {
        question: 'Trapping Rain Water',
        category: 'Coding',
        difficulty: 'Hard',
        solution: 'Use two-pointer technique storing leftMax and rightMax heights.',
        codeSnippet: 'int trap(vector<int>& height) {\n  int l = 0, r = height.size()-1, lMax=0, rMax=0, ans=0;\n  while(l<r) {\n    if(height[l]<height[r]) {\n      height[l]>=lMax ? lMax=height[l] : ans+=lMax-height[l];\n      l++;\n    } else {\n      height[r]>=rMax ? rMax=height[r] : ans+=rMax-height[r];\n      r--;\n    }\n  }\n  return ans;\n}'
      },
      {
        question: 'LRU Cache Design',
        category: 'Coding / System Design',
        difficulty: 'Medium-Hard',
        solution: 'Combine a Doubly Linked List with a Hash Map for O(1) get and put operations.',
        codeSnippet: 'class LRUCache {\n  unordered_map<int, list<pair<int,int>>::iterator> m;\n  list<pair<int,int>> l;\n  int cap;\n  // Implementation...\n};'
      }
    ]
  },
  {
    _id: 'amazon',
    name: 'Amazon',
    logo: 'https://www.amazon.com/favicon.ico',
    tier: 'Tier 1 MAANG Product',
    avgSalary: '28 - 38 LPA',
    requiredSkills: ['Data Structures & Algorithms', 'Object Oriented Design', 'Amazon Leadership Principles', 'Java', 'AWS Services'],
    interviewRounds: [
      { roundName: 'Round 1: Online Assessment (OA)', description: '2 Coding Questions + Work Simulation Assessment + Work Style Survey.', duration: '120 mins' },
      { roundName: 'Round 2-3: Technical Deep Dive', description: 'Data structures coding + Object Oriented Design (OOD) + Leadership Principles.', duration: '60 mins' },
      { roundName: 'Round 4: Bar Raiser Round', description: 'High bar technical problem solving & deep probe into Leadership Principles.', duration: '60 mins' }
    ],
    codingPatterns: ['Topological Sort', 'Heap / Priority Queue', 'Monotonic Stack', 'Binary Search'],
    aptitudeTopics: ['Work Simulation scenarios', 'Data Interpretation', 'Logical Reasoning'],
    topQuestions: [
      {
        question: 'Merge K Sorted Lists',
        category: 'Coding',
        difficulty: 'Hard',
        solution: 'Use a Min-Heap (Priority Queue) to store head nodes of all lists.',
        codeSnippet: 'ListNode* mergeKLists(vector<ListNode*>& lists) {\n  auto cmp = [](ListNode* a, ListNode* b){ return a->val > b->val; };\n  priority_queue<ListNode*, vector<ListNode*>, decltype(cmp)> pq(cmp);\n  for(auto l : lists) if(l) pq.push(l);\n  ListNode dummy(0); ListNode* tail = &dummy;\n  while(!pq.empty()) {\n    auto top = pq.top(); pq.pop();\n    tail->next = top; tail = tail->next;\n    if(top->next) pq.push(top->next);\n  }\n  return dummy.next;\n}'
      }
    ]
  },
  {
    _id: 'microsoft',
    name: 'Microsoft',
    logo: 'https://www.microsoft.com/favicon.ico',
    tier: 'Tier 1 MAANG Product',
    avgSalary: '26 - 36 LPA',
    requiredSkills: ['C# / Java / C++', 'DSA', 'Operating Systems', 'System Design', 'Azure'],
    interviewRounds: [
      { roundName: 'Round 1: Codility Online Assessment', description: '3 Coding questions ranging from Array manipulation to Trees/Graphs.', duration: '90 mins' },
      { roundName: 'Round 2-3: Technical Interviews', description: 'Coding on Whiteboard/CoderPad + CS Fundamentals (OS, DBMS, Computer Networks).', duration: '60 mins' },
      { roundName: 'Round 4: AA (Appropriate Authority) Round', description: 'Technical design + Culture fit + Behavioral questions.', duration: '60 mins' }
    ],
    codingPatterns: ['Tree Traversal (DFS/BFS)', 'Matrix Search', 'Linked List Reversal', 'String Matching'],
    aptitudeTopics: ['Quantitative Aptitude', 'OS Memory Management', 'SQL Queries'],
    topQuestions: [
      {
        question: 'Spiral Matrix Traversal',
        category: 'Coding',
        difficulty: 'Medium',
        solution: 'Maintain top, bottom, left, and right boundaries and contract them inward.',
        codeSnippet: 'vector<int> spiralOrder(vector<vector<int>>& matrix) {\n  vector<int> res;\n  int top=0, bottom=matrix.size()-1, left=0, right=matrix[0].size()-1;\n  while(top<=bottom && left<=right) {\n    for(int i=left; i<=right; i++) res.push_back(matrix[top][i]); top++;\n    for(int i=top; i<=bottom; i++) res.push_back(matrix[i][right]); right--;\n    if(top<=bottom) { for(int i=right; i>=left; i--) res.push_back(matrix[bottom][i]); bottom--; }\n    if(left<=right) { for(int i=bottom; i>=top; i--) res.push_back(matrix[i][left]); left++; }\n  }\n  return res;\n}'
      }
    ]
  },
  {
    _id: 'zoho',
    name: 'Zoho',
    logo: 'https://www.zoho.com/favicon.ico',
    tier: 'Product Super-Unicorn',
    avgSalary: '8 - 15 LPA',
    requiredSkills: ['C / Java', 'Object Oriented Programming', 'Advanced Matrix Problems', 'Design Patterns'],
    interviewRounds: [
      { roundName: 'Round 1: C Programming & Aptitude', description: 'Pointers, Arrays, Loops, Output Prediction, Aptitude.', duration: '90 mins' },
      { roundName: 'Round 2: Basic Programming', description: '5 String & Array pattern printing/problem solving tasks.', duration: '180 mins' },
      { roundName: 'Round 3: Advanced Programming', description: 'Develop full working application (e.g., Railway Reservation, Vending Machine).', duration: '180 mins' },
      { roundName: 'Round 4: Technical & HR Interview', description: 'OOP concepts, project deep dive, culture fit.', duration: '45 mins' }
    ],
    codingPatterns: ['Pattern Printing', 'String Parsing', 'Matrix Operations', 'Class Design'],
    aptitudeTopics: ['Pointers in C', 'Recursion Output', 'Time & Work', 'Speed & Distance'],
    topQuestions: [
      {
        question: 'Sub-string Searching without built-in library',
        category: 'Coding',
        difficulty: 'Medium',
        solution: 'Implement KMP or 2-pointer string search.',
        codeSnippet: 'int strStr(string haystack, string needle) {\n  int n = haystack.length(), m = needle.length();\n  for(int i = 0; i <= n - m; i++) {\n    int j = 0;\n    while(j < m && haystack[i+j] == needle[j]) j++;\n    if(j == m) return i;\n  }\n  return -1;\n}'
      }
    ]
  },
  {
    _id: 'tcs',
    name: 'TCS (Digital / Prime)',
    logo: 'https://www.tcs.com/favicon.ico',
    tier: 'IT Services Leader',
    avgSalary: '7 - 11 LPA',
    requiredSkills: ['Java / Python / C++', 'SQL', 'Aptitude & Verbal', 'Web Fundamentals'],
    interviewRounds: [
      { roundName: 'Round 1: TCS NQT Exam', description: 'Numerical, Verbal, Reasoning Ability + Hands-on Coding (2 Questions).', duration: '165 mins' },
      { roundName: 'Round 2: Technical + Managerial + HR Interview', description: 'Resume projects, basic SQL queries, DBMS, OOPs, relocation flexibility.', duration: '45 mins' }
    ],
    codingPatterns: ['Arrays & Strings', 'Mathematical Series', 'Basic Recursion', 'Sorting'],
    aptitudeTopics: ['Permutations & Combinations', 'Data Interpretation', 'Error Correction'],
    topQuestions: [
      {
        question: 'Count Frequency of Elements in Array',
        category: 'Coding',
        difficulty: 'Easy',
        solution: 'Use Hash Map or frequency array.',
        codeSnippet: 'void countFreq(int arr[], int n) {\n  unordered_map<int, int> mp;\n  for (int i = 0; i < n; i++) mp[arr[i]]++;\n  for (auto x : mp) cout << x.first << " -> " << x.second << endl;\n}'
      }
    ]
  }
];

exports.getCompanies = async (req, res) => {
  try {
    res.json({ success: true, companies: SAMPLE_COMPANIES });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.getCompanyById = async (req, res) => {
  try {
    const { id } = req.params;
    const company = SAMPLE_COMPANIES.find(c => c._id === id.toLowerCase() || c.name.toLowerCase() === id.toLowerCase()) || SAMPLE_COMPANIES[0];
    res.json({ success: true, company });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
