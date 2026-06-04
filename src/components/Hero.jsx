import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Users, Award, ShieldCheck, PlayCircle, Flame } from 'lucide-react';
import { FORM_LINK, COHORT_START_DATE } from '../constants';

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [regCount, setRegCount] = useState(1432);

  function calculateTimeLeft() {
    const difference = +new Date(COHORT_START_DATE) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { days: 0, hours: 23, minutes: 59, seconds: 59 }; // Fallback reset loop
    }
    return timeLeft;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Dynamic registration counter tick-up to trigger social proof & urgency
    const countTimer = setInterval(() => {
      setRegCount(prev => {
        if (prev < 1494) {
          return prev + Math.floor(Math.random() * 2) + 1;
        }
        return 1494; // Caps just before 1500 to maintain scarcity
      });
    }, 8000);

    return () => {
      clearInterval(timer);
      clearInterval(countTimer);
    };
  }, []);

  const handleRegister = () => {
    window.open(FORM_LINK, "_blank");
  };

  return (
    <section className="relative pt-24 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-hero-mesh">
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] rounded-full bg-indigo-500/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
        {/* AP/TS Local Cohort Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center space-x-2 bg-slate-900/80 border border-indigo-500/30 rounded-full px-4 py-1.5 mb-6 text-xs md:text-sm text-indigo-300 shadow-md font-semibold"
        >
          <Sparkles className="w-4 h-4 text-cyan-400 animate-spin" style={{ animationDuration: '3s' }} />
          <span>AP & TS Tier-2/Tier-3 Colleges placement initiative</span>
        </motion.div>

        {/* Main Pitch / Hook */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] max-w-5xl mx-auto"
        >
          Master AI in Just 7 Days —{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-violet-400 to-amber-400">
            Even If You're Starting From Zero
          </span>
        </motion.h1>

        {/* Subtitle touching Gen Z Placement Fears */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
        >
          Afraid of the tech slowdown? 93% of companies now prioritize developers who write with AI. Master ChatGPT, prompt engineering, and deploy functional AI projects in 7 days.{' '}
          <strong className="text-white">Build a CV that gets you hired.</strong>
        </motion.p>

        {/* Action Controls & Timers Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 max-w-xl mx-auto"
        >
          {/* Main Call To Action */}
          <button
            onClick={handleRegister}
            className="group w-full flex items-center justify-center space-x-3 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 hover:from-amber-400 hover:to-red-400 text-slate-950 font-black text-lg sm:text-xl py-4 px-8 rounded-2xl transition-all duration-300 shadow-xl shadow-orange-500/25 active:scale-98 animate-pulse-glow"
          >
            <span>⚡ CLAIM YOUR FREE SPOT NOW</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.2 }}
              className="text-2xl"
            >
              👉
            </motion.span>
          </button>

          {/* Seats Fill & Timer Panel */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Countdown widget */}
            <div className="glass-panel rounded-xl p-3 flex flex-col justify-center items-center">
              <span className="text-[10px] text-indigo-300 font-bold uppercase tracking-wider mb-2">
                Challenge Registration Closes In
              </span>
              <div className="flex space-x-3 text-center">
                <div className="flex flex-col">
                  <span className="text-xl font-bold font-mono text-cyan-400">{String(timeLeft.days).padStart(2, '0')}</span>
                  <span className="text-[9px] text-slate-400 uppercase">Days</span>
                </div>
                <span className="text-slate-600 text-xl font-mono">:</span>
                <div className="flex flex-col">
                  <span className="text-xl font-bold font-mono text-cyan-400">{String(timeLeft.hours).padStart(2, '0')}</span>
                  <span className="text-[9px] text-slate-400 uppercase">Hrs</span>
                </div>
                <span className="text-slate-600 text-xl font-mono">:</span>
                <div className="flex flex-col">
                  <span className="text-xl font-bold font-mono text-cyan-400">{String(timeLeft.minutes).padStart(2, '0')}</span>
                  <span className="text-[9px] text-slate-400 uppercase">Mins</span>
                </div>
                <span className="text-slate-600 text-xl font-mono">:</span>
                <div className="flex flex-col">
                  <span className="text-xl font-bold font-mono text-rose-400">{String(timeLeft.seconds).padStart(2, '0')}</span>
                  <span className="text-[9px] text-slate-400 uppercase">Secs</span>
                </div>
              </div>
            </div>

            {/* Capacity gauge */}
            <div className="glass-panel rounded-xl p-3 flex flex-col justify-center">
              <div className="flex justify-between items-center text-[10px] font-bold text-slate-300 mb-1.5 uppercase">
                <span className="flex items-center text-amber-400">
                  <Flame className="w-3.5 h-3.5 mr-1 fill-amber-500/20" /> SEATS FILLING FAST
                </span>
                <span className="font-mono text-rose-400">{regCount} / 1500 FILLED</span>
              </div>
              <div className="h-2 bg-slate-950 rounded-full overflow-hidden border border-slate-800">
                <motion.div
                  initial={{ width: '0%' }}
                  animate={{ width: `${(regCount / 1500) * 100}%` }}
                  transition={{ duration: 1 }}
                  className="h-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-rose-500"
                />
              </div>
              <p className="text-[10px] text-slate-400 text-left mt-2 flex items-center justify-center font-semibold">
                <Users className="w-3.5 h-3.5 text-cyan-400 mr-1.5" />
                <span>63 students joined in the last 3 hours</span>
              </p>
            </div>
          </div>
        </motion.div>

        {/* Value Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-12 md:mt-16 pt-8 border-t border-slate-900/60 max-w-4xl mx-auto"
        >
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest text-center mb-6">
            Trusted by students across AP & TS colleges
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-center opacity-85 text-slate-300 font-semibold text-xs md:text-sm">
            <div className="flex items-center justify-center bg-slate-900/40 border border-slate-800/80 rounded-xl px-4 py-2.5 space-x-2">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              <span>100% Free Initiative</span>
            </div>
            <div className="flex items-center justify-center bg-slate-900/40 border border-slate-800/80 rounded-xl px-4 py-2.5 space-x-2">
              <Award className="w-5 h-5 text-amber-400" />
              <span>Verified Certificate</span>
            </div>
            <div className="flex items-center justify-center bg-slate-900/40 border border-slate-800/80 rounded-xl px-4 py-2.5 space-x-2">
              <Users className="w-5 h-5 text-indigo-400" />
              <span>1500+ Expected Enrolls</span>
            </div>
            <div className="flex items-center justify-center bg-slate-900/40 border border-slate-800/80 rounded-xl px-4 py-2.5 space-x-2">
              <PlayCircle className="w-5 h-5 text-cyan-400" />
              <span>Zero Prior Coding Required</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
