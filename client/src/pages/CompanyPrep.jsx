import React, { useState } from 'react';
import { 
  Building2, ChevronRight, Code2, BookOpen, BrainCircuit, 
  DollarSign, Clock, CheckCircle2, Copy 
} from 'lucide-react';
import GlassCard from '../components/GlassCard';
import { useTheme } from '../context/ThemeContext';

export const CompanyPrep = () => {
  const { showToast } = useTheme();

  const [selectedCompany, setSelectedCompany] = useState('google');

  const companyData = {
    google: {
      name: 'Google',
      tier: 'Tier 1 MAANG Product',
      salary: '32 - 45 LPA',
      skills: ['Data Structures & Algorithms', 'System Design', 'C++', 'Java', 'Python', 'Distributed Systems'],
      rounds: [
        { name: 'Round 1: Online Assessment (OA)', desc: '2 LeetCode Hard DSA coding questions on Graphs/DP.', duration: '90 mins' },
        { name: 'Round 2-4: Technical Telephonic / Onsite', desc: 'In-depth Problem Solving, Code Efficiency, Space/Time Complexity analysis.', duration: '45 mins each' },
        { name: 'Round 5: Leadership & Googleyness', desc: 'Behavioral scenarios, team conflict management, ethical decision making.', duration: '45 mins' }
      ],
      patterns: ['Sliding Window', 'Two Pointers', 'Graph BFS/DFS', 'Dynamic Programming', 'Trie Construction'],
      questions: [
        {
          title: 'Trapping Rain Water',
          diff: 'Hard',
          desc: 'Given n non-negative integers representing an elevation map where width of each bar is 1, compute how much water it can trap after raining.',
          code: `int trap(vector<int>& height) {
    int l = 0, r = height.size()-1, lMax=0, rMax=0, ans=0;
    while(l<r) {
        if(height[l]<height[r]) {
            height[l]>=lMax ? lMax=height[l] : ans+=lMax-height[l];
            l++;
        } else {
            height[r]>=rMax ? rMax=height[r] : ans+=rMax-height[r];
            r--;
        }
    }
    return ans;
}`
        },
        {
          title: 'LRU Cache System Design & Implementation',
          diff: 'Medium-Hard',
          desc: 'Design a data structure that follows the constraints of a Least Recently Used (LRU) cache with O(1) time complexity.',
          code: `class LRUCache {
    unordered_map<int, list<pair<int,int>>::iterator> m;
    list<pair<int,int>> l;
    int cap;
public:
    LRUCache(int capacity) : cap(capacity) {}
    int get(int key) {
        if(m.find(key) == m.end()) return -1;
        l.splice(l.begin(), l, m[key]);
        return m[key]->second;
    }
};`
        }
      ]
    },
    amazon: {
      name: 'Amazon',
      tier: 'Tier 1 MAANG Product',
      salary: '28 - 38 LPA',
      skills: ['Data Structures', 'Object Oriented Design', '16 Leadership Principles', 'Java', 'AWS'],
      rounds: [
        { name: 'Round 1: Online Assessment (OA)', desc: '2 Coding questions + Work Simulation Assessment.', duration: '120 mins' },
        { name: 'Round 2-3: Technical Interviews', desc: 'DSA coding + Object Oriented Design (OOD) + Leadership Principles.', duration: '60 mins' },
        { name: 'Round 4: Bar Raiser Round', desc: 'High bar technical problem solving & deep probe into Leadership Principles.', duration: '60 mins' }
      ],
      patterns: ['Topological Sort', 'Heap / Priority Queue', 'Monotonic Stack', 'Binary Search'],
      questions: [
        {
          title: 'Merge K Sorted Lists',
          diff: 'Hard',
          desc: 'You are given an array of k linked-lists, each linked-list is sorted in ascending order. Merge all the linked-lists into one sorted linked-list.',
          code: `ListNode* mergeKLists(vector<ListNode*>& lists) {
    auto cmp = [](ListNode* a, ListNode* b){ return a->val > b->val; };
    priority_queue<ListNode*, vector<ListNode*>, decltype(cmp)> pq(cmp);
    for(auto l : lists) if(l) pq.push(l);
    ListNode dummy(0); ListNode* tail = &dummy;
    while(!pq.empty()) {
        auto top = pq.top(); pq.pop();
        tail->next = top; tail = tail->next;
        if(top->next) pq.push(top->next);
    }
    return dummy.next;
}`
        }
      ]
    },
    zoho: {
      name: 'Zoho',
      tier: 'Product Super-Unicorn',
      salary: '8 - 15 LPA',
      skills: ['C / Java', 'OOPs Architecture', 'Matrix Manipulation', 'Design Patterns'],
      rounds: [
        { name: 'Round 1: C Programming & Aptitude', desc: 'Pointers, Arrays, Loops, Output Prediction, Aptitude.', duration: '90 mins' },
        { name: 'Round 2: Basic Programming', desc: '5 String & Array pattern printing/problem solving tasks.', duration: '180 mins' },
        { name: 'Round 3: Advanced Application Design', desc: 'Develop full working application (e.g., Railway Reservation, Vending Machine).', duration: '180 mins' }
      ],
      patterns: ['Pattern Printing', 'String Parsing', 'Matrix Operations', 'Class Design'],
      questions: [
        {
          title: 'Sub-string Searching without built-in library',
          diff: 'Medium',
          desc: 'Find the first occurrence of needle in haystack without string functions.',
          code: `int strStr(string haystack, string needle) {
    int n = haystack.length(), m = needle.length();
    for(int i = 0; i <= n - m; i++) {
        int j = 0;
        while(j < m && haystack[i+j] == needle[j]) j++;
        if(j == m) return i;
    }
    return -1;
}`
        }
      ]
    }
  };

  const currentComp = companyData[selectedCompany] || companyData['google'];

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      {/* Company Selector Header */}
      <GlassCard className="border border-indigo-500/30 bg-slate-900/80">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl font-bold font-outfit text-white">Target Company Interview Preparation</h1>
              <p className="text-xs text-slate-400">Company-specific interview patterns, rounds, and frequent questions</p>
            </div>
          </div>

          <div className="flex space-x-2">
            {['google', 'amazon', 'zoho'].map((key) => (
              <button 
                key={key}
                onClick={() => setSelectedCompany(key)}
                className={`px-4 py-2 rounded-xl text-xs font-bold capitalize transition-all ${
                  selectedCompany === key 
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/20' 
                    : 'bg-slate-950 text-slate-400 border border-slate-800 hover:text-slate-200'
                }`}
              >
                {key}
              </button>
            ))}
          </div>
        </div>

        {/* Company Quick Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 pt-4 border-t border-slate-800">
          <div>
            <span className="text-[11px] text-slate-400">Company Category:</span>
            <p className="text-xs font-bold text-cyan-400 mt-0.5">{currentComp.tier}</p>
          </div>
          <div>
            <span className="text-[11px] text-slate-400">Average CTC Package:</span>
            <p className="text-xs font-bold text-emerald-400 mt-0.5">{currentComp.salary}</p>
          </div>
          <div>
            <span className="text-[11px] text-slate-400">Core Evaluation Skills:</span>
            <p className="text-xs font-bold text-purple-300 mt-0.5 truncate">{currentComp.skills.slice(0, 3).join(', ')}</p>
          </div>
        </div>
      </GlassCard>

      {/* Interview Rounds Timeline */}
      <GlassCard>
        <h3 className="text-sm font-bold text-slate-200 mb-4 flex items-center">
          <Clock className="w-4 h-4 text-indigo-400 mr-2" /> Interview Process & Rounds Breakdown
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {currentComp.rounds.map((round, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/60 relative">
              <span className="text-[10px] font-mono text-cyan-400 font-bold bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/30">
                {round.duration}
              </span>
              <h4 className="text-xs font-bold text-white mt-2">{round.name}</h4>
              <p className="text-xs text-slate-400 mt-1">{round.desc}</p>
            </div>
          ))}
        </div>
      </GlassCard>

      {/* Frequent Coding Questions & Solutions */}
      <div className="space-y-4">
        <h3 className="text-base font-bold text-slate-100 flex items-center">
          <Code2 className="w-5 h-5 text-amber-400 mr-2" /> Most Frequently Asked {currentComp.name} Questions
        </h3>

        {currentComp.questions.map((q, idx) => (
          <GlassCard key={idx} className="border-l-4 border-l-amber-500 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className={`px-2.5 py-0.5 rounded text-[10px] font-bold ${
                  q.diff === 'Hard' ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30' : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                }`}>
                  {q.diff}
                </span>
                <h4 className="text-sm font-bold text-white">{q.title}</h4>
              </div>

              <button 
                onClick={() => {
                  navigator.clipboard.writeText(q.code);
                  showToast('Code snippet copied to clipboard!', 'success');
                }}
                className="text-xs text-slate-400 hover:text-white flex items-center space-x-1"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>Copy Code</span>
              </button>
            </div>

            <p className="text-xs text-slate-300">{q.desc}</p>

            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 font-mono text-xs text-cyan-300 overflow-x-auto">
              <pre>{q.code}</pre>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
};

export default CompanyPrep;
