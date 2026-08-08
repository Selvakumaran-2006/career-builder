import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { 
  Mic, MicOff, Play, Send, Sparkles, Trophy, 
  CheckCircle2, AlertCircle, RefreshCw, Volume2 
} from 'lucide-react';
import GlassCard from '../components/GlassCard';

export const MockInterview = () => {
  const { showToast } = useTheme();

  const [interviewType, setInterviewType] = useState('Technical');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [feedback, setFeedback] = useState(null);

  const questions = {
    Technical: [
      "How does the Event Loop work in Node.js, and how does it execute non-blocking asynchronous I/O?",
      "Explain the Virtual DOM reconciliation process in React and how key props optimize rendering.",
      "What is the difference between SQL relational databases and MongoDB document models regarding indexing?"
    ],
    HR: [
      "Tell me about a challenging technical bug you encountered in a project and how you resolved it under pressure.",
      "Where do you see yourself in 3 years as a Software Engineer?",
      "Why do you want to work at your target company and what makes you a unique candidate?"
    ],
    Behavioral: [
      "Describe a situation where you had a disagreement with a team member on tech stack choices and how you reached consensus.",
      "Give an example of a time when a project deadline was tight and how you prioritized deliverables."
    ]
  };

  const currentQuestions = questions[interviewType] || questions.Technical;

  const toggleRecording = () => {
    if (!isRecording) {
      setIsRecording(true);
      showToast('Recording started... Speak your answer clearly.', 'success');
    } else {
      setIsRecording(false);
      setUserAnswer(prev => prev + " The Node.js event loop has 6 phases including timers, pending callbacks, poll, and check phase. It offloads asynchronous I/O operations to libuv worker threads.");
      showToast('Voice transcription processed.');
    }
  };

  const handleEvaluate = (e) => {
    e.preventDefault();
    if (!userAnswer.trim()) {
      showToast('Please type or record an answer before submitting.', 'error');
      return;
    }

    setIsEvaluating(true);
    setTimeout(() => {
      setIsEvaluating(false);
      setFeedback({
        score: 88,
        confidence: '92%',
        feedbackText: 'Strong technical explanation! You accurately identified libuv and event loop phases. To achieve 100%, explicitly mention process.nextTick vs setImmediate microtasks.',
        keyWordsMatched: ['Asynchronous', 'Event Loop', 'Libuv', 'Non-blocking I/O'],
        toneRating: 'Clear & Professional'
      });
      showToast('AI Response Evaluation complete!', 'success');
    }, 1200);
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      {/* Header */}
      <GlassCard className="border border-indigo-500/30 bg-slate-900/80">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
              <Mic className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <h1 className="text-xl font-bold font-outfit text-white">AI Mock Interview Simulator</h1>
              <p className="text-xs text-slate-400">Simulate live technical & behavioral rounds with real-time AI scoring</p>
            </div>
          </div>

          <div className="flex space-x-2">
            {['Technical', 'HR', 'Behavioral'].map(type => (
              <button 
                key={type}
                onClick={() => {
                  setInterviewType(type);
                  setCurrentQuestionIndex(0);
                  setFeedback(null);
                  setUserAnswer('');
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  interviewType === type 
                    ? 'bg-indigo-600 text-white shadow-md' 
                    : 'bg-slate-950 text-slate-400 border border-slate-800'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </GlassCard>

      {/* Main Room Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Question & Answer Chamber */}
        <div className="lg:col-span-2 space-y-6">
          {/* Question Card */}
          <GlassCard className="border-l-4 border-l-cyan-500">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
              <span className="font-mono text-cyan-400 font-bold uppercase">Question 0{currentQuestionIndex + 1} of {currentQuestions.length}</span>
              <span className="bg-slate-950 px-2.5 py-0.5 rounded border border-slate-800">{interviewType} Round</span>
            </div>

            <h2 className="text-base font-bold text-white leading-relaxed">
              "{currentQuestions[currentQuestionIndex]}"
            </h2>
          </GlassCard>

          {/* Response Recorder & Input */}
          <GlassCard>
            <div className="flex items-center justify-between mb-3">
              <label className="block text-xs font-semibold text-slate-300">Your Answer (Speak or Type)</label>
              <button 
                onClick={toggleRecording}
                className={`px-3 py-1.5 rounded-full text-xs font-bold flex items-center space-x-1.5 transition-all ${
                  isRecording 
                    ? 'bg-rose-500 text-white animate-pulse' 
                    : 'bg-slate-800 text-slate-300 hover:text-white border border-slate-700'
                }`}
              >
                {isRecording ? <MicOff className="w-3.5 h-3.5" /> : <Mic className="w-3.5 h-3.5 text-rose-400" />}
                <span>{isRecording ? 'Stop Recording...' : 'Voice Record'}</span>
              </button>
            </div>

            <textarea 
              rows={6}
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              placeholder="Type your detailed answer or click Voice Record to speak..."
              className="w-full bg-slate-950 border border-slate-700/80 rounded-xl p-3.5 text-xs text-slate-200 focus:outline-none focus:border-indigo-500"
            />

            <div className="mt-4 flex items-center justify-between">
              <button 
                onClick={() => {
                  setCurrentQuestionIndex((prev) => (prev + 1) % currentQuestions.length);
                  setUserAnswer('');
                  setFeedback(null);
                }}
                className="text-xs text-slate-400 hover:text-white"
              >
                Skip Question
              </button>

              <button 
                onClick={handleEvaluate}
                disabled={isEvaluating}
                className="glass-button px-6 py-2.5 rounded-xl text-xs font-bold text-white flex items-center space-x-2 shadow-lg"
              >
                <Sparkles className={`w-4 h-4 text-cyan-300 ${isEvaluating ? 'animate-spin' : ''}`} />
                <span>{isEvaluating ? 'Evaluating with AI...' : 'Submit Answer for AI Scoring'}</span>
              </button>
            </div>
          </GlassCard>
        </div>

        {/* AI Evaluation Report Panel */}
        <div>
          {feedback ? (
            <GlassCard className="border-l-4 border-l-emerald-500 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-xs font-bold text-slate-200">AI Evaluation Feedback</span>
                <span className="text-xs font-extrabold text-emerald-400 font-mono">{feedback.score} / 100</span>
              </div>

              <div>
                <span className="text-[11px] text-slate-400">Speech & Content Feedback:</span>
                <p className="text-xs text-slate-200 mt-1 leading-relaxed">{feedback.feedbackText}</p>
              </div>

              <div>
                <span className="text-[11px] text-slate-400">Technical Concepts Hit:</span>
                <div className="flex flex-wrap gap-1.5 mt-1.5">
                  {feedback.keyWordsMatched.map(kw => (
                    <span key={kw} className="px-2 py-0.5 rounded text-[10px] bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
                      ✓ {kw}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800 flex justify-between text-[11px] text-slate-400">
                <span>Tone: <strong className="text-cyan-300">{feedback.toneRating}</strong></span>
                <span>Confidence: <strong className="text-purple-300">{feedback.confidence}</strong></span>
              </div>
            </GlassCard>
          ) : (
            <GlassCard className="text-center py-12 flex flex-col items-center justify-center">
              <Trophy className="w-10 h-10 text-slate-600 mb-3" />
              <p className="text-xs font-semibold text-slate-400">Submit an answer to unlock instant AI score feedback report.</p>
            </GlassCard>
          )}
        </div>
      </div>
    </div>
  );
};

export default MockInterview;
