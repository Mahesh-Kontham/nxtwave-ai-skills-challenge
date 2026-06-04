import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Flame, ShieldCheck, HelpCircle, Sparkles, ArrowRight } from 'lucide-react';
import { FORM_LINK, COHORT_START_DATE } from '../constants';

export default function FinalCTA() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

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
      timeLeft = { days: 0, hours: 23, minutes: 59, seconds: 59 };
    }
    return timeLeft;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleRegister = () => {
    window.open(FORM_LINK, "_blank");
  };

  return (
    <section className="py-20 bg-hero-mesh relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F19]/0 via-[#0B0F19] to-slate-950" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 relative z-10 text-center">
        {/* Urgent High-conversion Banner Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800 rounded-3xl p-8 md:p-14 shadow-2xl relative"
        >
          {/* Sparkles icon */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-gradient-to-tr from-amber-500 to-orange-500 rounded-full flex items-center justify-center text-slate-950 font-bold shadow-lg fire-glow">
            🔥
          </div>

          <span className="text-xs font-black text-amber-400 uppercase tracking-widest block mb-4 mt-2">
            LIMITED TO FIRST 1,500 REGISTRATIONS
          </span>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight max-w-3xl mx-auto">
            Don't Let Another Placement Opportunity Pass You By
          </h2>

          <p className="text-sm md:text-base text-slate-300 mt-6 max-w-2xl mx-auto leading-relaxed">
            The next tech slowdown doesn't have to be your story. Acquire real AI skills, build functional apps, optimize your LinkedIn profile, and stand out before recruiters do their final screening.
          </p>

          {/* Value ticks */}
          <div className="my-10 grid grid-cols-2 md:grid-cols-4 gap-4 items-center justify-center text-xs md:text-sm font-bold text-slate-200 text-left max-w-3xl mx-auto">
            <div className="flex items-center space-x-2 bg-slate-950/40 p-2.5 rounded-xl border border-slate-900">
              <span className="text-cyan-400">✓</span>
              <span>100% Free Access</span>
            </div>
            <div className="flex items-center space-x-2 bg-slate-950/40 p-2.5 rounded-xl border border-slate-900">
              <span className="text-cyan-400">✓</span>
              <span>No Prior Coding Need</span>
            </div>
            <div className="flex items-center space-x-2 bg-slate-950/40 p-2.5 rounded-xl border border-slate-900">
              <span className="text-cyan-400">✓</span>
              <span>4 Resume AI Projects</span>
            </div>
            <div className="flex items-center space-x-2 bg-slate-950/40 p-2.5 rounded-xl border border-slate-900">
              <span className="text-cyan-400">✓</span>
              <span>Verified Certificate</span>
            </div>
          </div>

          {/* Action Control Button */}
          <div className="max-w-md mx-auto">
            <button
              onClick={handleRegister}
              className="group w-full flex items-center justify-center space-x-3 bg-gradient-to-r from-cyan-500 via-indigo-500 to-violet-500 hover:from-cyan-400 hover:to-violet-400 text-white font-extrabold text-base sm:text-lg py-4 px-8 rounded-2xl transition-all duration-300 shadow-xl shadow-cyan-500/20 active:scale-98 animate-pulse-glow"
            >
              <span>⚡ CLAIM YOUR SPOT NOW (FREE)</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Closing details & Scarcity Timer */}
          <div className="mt-8 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 text-xs text-slate-400 font-semibold border-t border-slate-900/60 pt-6">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 bg-rose-500 rounded-full animate-ping"></span>
              <span className="text-rose-400 font-extrabold">Only 18 spots remaining for AP/TS cohort</span>
            </div>
            <div className="flex items-center space-x-1.5 font-mono">
              <span>Time left:</span>
              <span className="text-cyan-400 font-extrabold">{String(timeLeft.days).padStart(2, '0')}d</span>
              <span>:</span>
              <span className="text-cyan-400 font-extrabold">{String(timeLeft.hours).padStart(2, '0')}h</span>
              <span>:</span>
              <span className="text-cyan-400 font-extrabold">{String(timeLeft.minutes).padStart(2, '0')}m</span>
              <span>:</span>
              <span className="text-rose-400 font-extrabold">{String(timeLeft.seconds).padStart(2, '0')}s</span>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
