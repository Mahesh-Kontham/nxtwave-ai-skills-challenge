import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Code, CheckCircle, Smartphone, Terminal, AwardIcon, ShieldAlert } from 'lucide-react';
import { ROADMAP_DAYS } from '../constants';

export default function Roadmap() {
  const [activeDay, setActiveDay] = useState(1);

  const activeDayData = ROADMAP_DAYS.find(d => d.day === activeDay) || ROADMAP_DAYS[0];

  return (
    <section id="roadmap" className="py-20 bg-slate-900/20 relative">
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-violet-400 uppercase tracking-widest">Bite-sized & Gamified</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-3 tracking-tight">
            The 7-Day Curriculum Roadmap
          </h2>
          <p className="text-slate-400 mt-4 leading-relaxed">
            Just 30 minutes a day. Designed to take you from absolute beginner to building and deploying real AI products that recruiters want to see.
          </p>
        </div>

        {/* Day Selector - Horizontal/Grid Scroll */}
        <div className="flex overflow-x-auto pb-4 md:pb-6 snap-x scrollbar-thin scrollbar-thumb-slate-800 scrollbar-track-transparent space-x-3 mb-10 justify-start lg:justify-between max-w-5xl mx-auto px-2">
          {ROADMAP_DAYS.map((dayObj) => {
            const isActive = dayObj.day === activeDay;
            return (
              <button
                key={dayObj.day}
                onClick={() => setActiveDay(dayObj.day)}
                className={`snap-center flex-shrink-0 flex items-center justify-between space-x-3 px-5 py-3 rounded-2xl border text-sm font-bold transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-indigo-900/60 to-cyan-950/60 border-cyan-500/50 text-cyan-400 glow-cyan font-black'
                    : 'bg-slate-950/40 border-slate-900 text-slate-400 hover:text-slate-200 hover:border-slate-800'
                }`}
              >
                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-mono font-extrabold ${
                  isActive ? 'bg-cyan-500 text-slate-950' : 'bg-slate-900 text-slate-400'
                }`}>
                  {dayObj.day}
                </div>
                <span>Day {dayObj.day}</span>
              </button>
            );
          })}
        </div>

        {/* Focus Panel - Animates on Active Day Change */}
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDay}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="glass-panel-heavy rounded-3xl p-6 md:p-10 border border-slate-800 relative overflow-hidden"
            >
              {/* Abstract Background Design */}
              <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${activeDayData.color} opacity-[0.04] rounded-full blur-3xl pointer-events-none`} />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Text Context - Left side */}
                <div className="lg:col-span-7">
                  <div className="flex items-center space-x-3">
                    <span className="text-xs font-black text-slate-400 uppercase tracking-widest bg-slate-900 border border-slate-800 px-3 py-1 rounded-md">
                      MODULE {activeDayData.day} OF 7
                    </span>
                    <span className="text-xs font-bold text-amber-400 flex items-center bg-amber-500/10 px-3 py-1 rounded-md">
                      💎 +{activeDayData.xp} XP
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-extrabold mt-4 text-white">
                    {activeDayData.title}
                  </h3>
                  <p className="text-sm font-semibold text-cyan-400 mt-1">
                    {activeDayData.subtitle}
                  </p>
                  
                  <p className="text-sm md:text-base text-slate-350 mt-6 leading-relaxed">
                    {activeDayData.description}
                  </p>

                  {/* Tools list */}
                  <div className="mt-8">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                      TOOLS YOU WILL MASTER
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {activeDayData.tools.map((tool, tIdx) => (
                        <span
                          key={tIdx}
                          className="bg-slate-950/80 border border-slate-850 text-slate-300 text-xs font-semibold px-3 py-1.5 rounded-lg shadow-sm"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Outcome card - Right side */}
                <div className="lg:col-span-5">
                  <div className="bg-slate-950/80 border border-slate-850 rounded-2xl p-6 relative">
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-amber-500 text-slate-950 font-black rounded-full flex items-center justify-center shadow-lg transform rotate-12">
                      ✓
                    </div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                      DAILY PORTFOLIO WORK
                    </span>
                    <h4 className="text-lg font-black text-white mt-2 mb-4">
                      Practical Challenge Outcome
                    </h4>
                    
                    <div className="bg-slate-900/60 border border-slate-850/80 rounded-xl p-4 flex items-center space-x-3 mb-6">
                      <div className="p-2.5 bg-cyan-500/10 rounded-lg text-cyan-400 border border-cyan-500/20">
                        <Code className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 font-medium">Build Target</p>
                        <p className="text-sm font-bold text-slate-100 mt-0.5">{activeDayData.project}</p>
                      </div>
                    </div>

                    <p className="text-xs text-slate-400 leading-relaxed">
                      By completing this module, you gain immediate points toward your level status. Show your streak to recruiters to prove consistent builder habits.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
