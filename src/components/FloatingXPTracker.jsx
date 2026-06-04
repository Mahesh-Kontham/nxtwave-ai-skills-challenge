import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flame, Award, Zap, ArrowRight } from 'lucide-react';
import { FORM_LINK } from '../constants';

export default function FloatingXPTracker() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [xp, setXp] = useState(0);
  const [level, setLevel] = useState("AI Novice");
  const [toast, setToast] = useState(null);
  const [unlockedMilestones, setUnlockedMilestones] = useState({
    roadmap: false,
    projects: false,
    gamification: false,
    certificate: false,
    faq: false,
  });

  const handleRegister = () => {
    window.open(FORM_LINK, "_blank");
  };

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);

      // Trigger gamified XP awards based on scroll depth (sections unlocked)
      const sections = {
        roadmap: document.getElementById('roadmap'),
        projects: document.getElementById('projects'),
        gamification: document.getElementById('gamification'),
        certificate: document.getElementById('certification'),
        faq: document.getElementById('faq'),
      };

      let newXp = 0;
      let unlockedCopy = { ...unlockedMilestones };
      let toastMsg = null;

      if (sections.roadmap && window.scrollY > sections.roadmap.offsetTop - 300 && !unlockedMilestones.roadmap) {
        unlockedCopy.roadmap = true;
        toastMsg = "🎯 Unlocked: 7-Day Curricular Roadmap (+50 XP)";
      }
      if (sections.projects && window.scrollY > sections.projects.offsetTop - 300 && !unlockedMilestones.projects) {
        unlockedCopy.projects = true;
        toastMsg = "💼 Unlocked: AI Placement Projects (+100 XP)";
      }
      if (sections.gamification && window.scrollY > sections.gamification.offsetTop - 300 && !unlockedMilestones.gamification) {
        unlockedCopy.gamification = true;
        toastMsg = "🔥 Unlocked: Leaderboard & Streaks (+150 XP)";
      }
      if (sections.certificate && window.scrollY > sections.certificate.offsetTop - 300 && !unlockedMilestones.certificate) {
        unlockedCopy.certificate = true;
        toastMsg = "🎓 Unlocked: Live Certificate Preview (+200 XP)";
      }
      if (sections.faq && window.scrollY > sections.faq.offsetTop - 300 && !unlockedMilestones.faq) {
        unlockedCopy.faq = true;
        toastMsg = "💡 Unlocked: Final Placement Objections Answered (+100 XP)";
      }

      // Calculate total XP based on milestones met
      if (unlockedCopy.roadmap) newXp += 50;
      if (unlockedCopy.projects) newXp += 100;
      if (unlockedCopy.gamification) newXp += 150;
      if (unlockedCopy.certificate) newXp += 200;
      if (unlockedCopy.faq) newXp += 100;

      if (newXp !== xp) {
        setXp(newXp);
        setUnlockedMilestones(unlockedCopy);
        if (toastMsg) {
          setToast(toastMsg);
          // Auto clear toast
          setTimeout(() => setToast(null), 4000);
        }
      }

      // Update levels
      if (newXp >= 600) setLevel("AI Pioneer");
      else if (newXp >= 500) setLevel("Resume Optimizer");
      else if (newXp >= 300) setLevel("App Builder");
      else if (newXp >= 150) setLevel("Prompt Specialist");
      else if (newXp >= 50) setLevel("AI Enthusiast");
      else setLevel("AI Novice");
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [unlockedMilestones, xp]);

  return (
    <>
      {/* Top Floating XP Bar */}
      <div className="fixed top-0 left-0 w-full z-50 glass-panel-heavy border-b border-slate-800/80 px-4 py-2.5 md:py-3 transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2.5 md:space-x-4">
            <span className="text-lg md:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-indigo-400">
              🚀 AI CHALLENGE
            </span>
            <div className="hidden sm:flex items-center bg-slate-900/80 border border-slate-800 rounded-full px-2.5 py-0.5 text-xs text-slate-300 font-medium">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-1.5 animate-pulse"></span>
              Live: Cohort #4 Starts in 7 Days
            </div>
          </div>

          <div className="flex items-center space-x-4 md:space-x-6">
            {/* Gamified XP Indicator */}
            <div className="flex items-center space-x-2 bg-slate-950/80 border border-cyan-500/25 rounded-full px-3 py-1 text-xs md:text-sm glow-cyan">
              <Zap className="w-4 h-4 text-cyan-400 fill-cyan-400/20" />
              <span className="font-semibold text-cyan-300 font-mono">{xp} XP</span>
              <span className="text-slate-500">|</span>
              <span className="text-slate-300 hidden xs:inline">{level}</span>
            </div>

            {/* Streak Counter */}
            <div className="flex items-center space-x-1.5 bg-slate-950/80 border border-orange-500/25 rounded-full px-3 py-1 text-xs md:text-sm fire-glow">
              <Flame className="w-4 h-4 text-orange-500 fill-orange-500/20 animate-pulse" />
              <span className="font-bold text-orange-400 font-mono">7d Streak</span>
            </div>

            {/* Register CTA (Desktop Only) */}
            <button
              onClick={handleRegister}
              className="hidden md:flex items-center justify-center space-x-2 bg-gradient-to-r from-cyan-500 to-indigo-500 hover:from-cyan-400 hover:to-indigo-400 text-white font-semibold text-sm px-4 py-1.5 rounded-full transition-all duration-300 shadow-lg shadow-indigo-500/20 active:scale-95"
            >
              <span>Register Free</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scroll Progress Bar */}
        <div className="absolute bottom-0 left-0 h-0.5 bg-slate-800 w-full">
          <div 
            className="h-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-amber-500 transition-all duration-100" 
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </div>

      {/* Gamified Toast Notifications */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: -20, x: '-50%' }}
            className="fixed bottom-20 md:bottom-6 left-1/2 z-50 w-[90%] max-w-md bg-slate-900/95 border-2 border-cyan-400/40 rounded-xl px-4 py-3 shadow-2xl shadow-cyan-500/10 flex items-center space-x-3 backdrop-blur-md"
          >
            <div className="bg-cyan-500/10 p-2 rounded-lg border border-cyan-500/30">
              <Award className="w-5 h-5 text-cyan-400" />
            </div>
            <p className="text-sm font-semibold text-slate-100">{toast}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sticky bottom CTA for Mobile/Tablet */}
      <div className="fixed bottom-0 left-0 w-full z-45 md:hidden p-3 bg-gradient-to-t from-slate-950 via-slate-950/95 to-slate-950/0 border-t border-slate-900/60 backdrop-blur-sm">
        <div className="flex items-center justify-between space-x-3 bg-slate-900/90 border border-slate-800 rounded-2xl p-2.5 max-w-lg mx-auto">
          <div className="pl-2">
            <div className="flex items-center space-x-1">
              <span className="w-2 h-2 bg-rose-500 rounded-full animate-ping"></span>
              <span className="text-xs font-bold text-slate-200">18 Seats Left</span>
            </div>
            <p className="text-[10px] text-slate-400 mt-0.5 font-medium">1,432 registered today</p>
          </div>

          <button
            onClick={handleRegister}
            className="flex-1 flex items-center justify-center space-x-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-extrabold text-sm py-2 px-4 rounded-xl transition-all duration-300 shadow-lg shadow-orange-500/20 active:scale-95 animate-pulse-glow"
          >
            <span>⚡ CLAIM FREE SPOT</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </>
  );
}
