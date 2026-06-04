import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Flame, Award, Zap, Users, Search, Trophy, Medal } from 'lucide-react';
import { MOCK_LEADERBOARD } from '../constants';

export default function Gamification() {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredLeaderboard = MOCK_LEADERBOARD.filter(
    student => 
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      student.college.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const badges = [
    { title: "Prompt Ninja", icon: "🥷", desc: "Unlock Day 2" },
    { title: "Visual Designer", icon: "🎨", desc: "Unlock Day 3" },
    { title: "Automation King", icon: "⚡", desc: "Unlock Day 4" },
    { title: "Project Hero", icon: "🚀", desc: "Unlock Day 5" },
  ];

  return (
    <section id="gamification" className="py-20 bg-slate-900/20 relative">
      <div className="absolute top-10 left-10 w-[300px] h-[300px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">Learn Like a Game</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-3 tracking-tight">
            Designed for Completion, Inspired by Duolingo
          </h2>
          <p className="text-slate-400 mt-4 leading-relaxed">
            Most online courses have a 5% completion rate. We gamified the entire challenge. Complete daily tasks, maintain your streak, climb the ranks, and earn badges.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
          {/* Duolingo Inspired Stats Sidebar - Left */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            {/* Duolingo Streak Board */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-panel rounded-3xl p-6 relative overflow-hidden flex flex-col justify-between h-full"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/10 rounded-full blur-2xl pointer-events-none" />
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">DAILY COMPOSURE</span>
                  <span className="flex items-center space-x-1 font-mono text-xs font-extrabold text-orange-400 bg-orange-500/10 border border-orange-500/25 px-2 py-0.5 rounded-md fire-glow">
                    <Flame className="w-3.5 h-3.5 fill-orange-500/20" /> <span>ACTIVE</span>
                  </span>
                </div>

                <div className="mt-8 flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-2xl bg-orange-500/15 border border-orange-500/35 flex items-center justify-center text-4xl shadow-inner fire-glow animate-pulse">
                    🔥
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-white">7-Day Streak</h3>
                    <p className="text-xs text-slate-400 mt-1">Keep learning daily to prevent your streak from freezing.</p>
                  </div>
                </div>

                {/* Day-by-day indicators */}
                <div className="mt-8 grid grid-cols-7 gap-1 text-center font-bold text-xs">
                  {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, idx) => (
                    <div key={idx} className="flex flex-col items-center">
                      <span className="text-[10px] text-slate-400 mb-1.5">{day}</span>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center border font-mono ${
                        idx < 4 
                          ? 'bg-gradient-to-br from-orange-500 to-amber-500 border-orange-400 text-slate-950 font-black shadow-md fire-glow' 
                          : idx === 4 
                            ? 'bg-slate-900 border-cyan-500/40 text-cyan-400 animate-pulse'
                            : 'bg-slate-950 border-slate-850 text-slate-500'
                      }`}>
                        {idx < 4 ? '🔥' : idx === 4 ? '⚡' : 'o'}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-900/60 flex items-center justify-between text-xs text-slate-400">
                <span>XP EARNED THIS WEEK</span>
                <span className="font-extrabold text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-lg flex items-center font-mono">
                  <Zap className="w-3.5 h-3.5 mr-1 fill-cyan-500/20" /> 650 XP
                </span>
              </div>
            </motion.div>

            {/* Achievement Badges widget */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass-panel rounded-3xl p-6"
            >
              <h3 className="text-sm font-bold text-slate-300 uppercase tracking-wider mb-4 flex items-center">
                <Medal className="w-4 h-4 mr-2 text-violet-400" /> CHALLENGE LEVEL BADGES
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {badges.map((badge, bIdx) => (
                  <div key={bIdx} className="bg-slate-950/60 border border-slate-900 rounded-xl p-3 flex items-center space-x-2.5">
                    <span className="text-2xl">{badge.icon}</span>
                    <div>
                      <p className="text-xs font-black text-slate-200 leading-tight">{badge.title}</p>
                      <p className="text-[10px] text-slate-500 mt-0.5 leading-none">{badge.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Interactive Leaderboard Card - Right */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass-panel rounded-3xl p-6 md:p-8 flex flex-col justify-between h-full border border-slate-800"
            >
              <div>
                {/* Header info */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-extrabold text-white flex items-center">
                      <Trophy className="w-5 h-5 mr-2 text-amber-400" /> Top College Performers
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">Live ranking of AP & TS students in Cohort #4</p>
                  </div>

                  {/* Search input */}
                  <div className="relative mt-3 sm:mt-0">
                    <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Search college or student..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="bg-slate-950/80 border border-slate-850 rounded-xl pl-9 pr-4 py-1.5 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 w-full sm:w-48 transition-all"
                    />
                  </div>
                </div>

                {/* Leaderboard rows */}
                <div className="space-y-2.5 max-h-[300px] overflow-y-auto scrollbar-thin scrollbar-thumb-slate-850 scrollbar-track-transparent pr-1">
                  {filteredLeaderboard.length > 0 ? (
                    filteredLeaderboard.map((student, idx) => {
                      const isTopThree = student.rank <= 3;
                      return (
                        <div
                          key={student.rank}
                          className="bg-slate-950/60 hover:bg-slate-950 border border-slate-900 hover:border-slate-850 rounded-xl p-3 flex items-center justify-between transition-all"
                        >
                          <div className="flex items-center space-x-3">
                            {/* Rank circle */}
                            <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-mono font-extrabold ${
                              student.rank === 1 
                                ? 'bg-amber-400 text-slate-950 glow-amber' 
                                : student.rank === 2 
                                  ? 'bg-slate-300 text-slate-950' 
                                  : student.rank === 3 
                                    ? 'bg-amber-600 text-slate-950'
                                    : 'bg-slate-900 text-slate-400'
                            }`}>
                              {student.rank}
                            </div>
                            
                            <div>
                              <p className="text-sm font-extrabold text-slate-100">{student.name}</p>
                              <p className="text-[10px] text-indigo-400 font-semibold mt-0.5">{student.college}</p>
                            </div>
                          </div>

                          <div className="flex items-center space-x-4">
                            <span className="hidden xs:inline text-[9px] font-bold bg-slate-900 border border-slate-850 text-slate-400 px-2 py-0.5 rounded">
                              {student.badge}
                            </span>
                            <div className="text-right">
                              <p className="text-xs font-extrabold text-cyan-400 font-mono flex items-center justify-end">
                                <Zap className="w-3 h-3 mr-0.5 fill-cyan-400/20" /> {student.xp}
                              </p>
                              <p className="text-[9px] text-slate-400 mt-0.5">streak: {student.streak}d</p>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <div className="text-center py-8 text-xs text-slate-500">
                      No matching student or college found.
                    </div>
                  )}
                </div>
              </div>

              {/* Callout */}
              <div className="mt-6 pt-5 border-t border-slate-900/60 flex items-center space-x-2 text-slate-400 text-xs font-semibold">
                <Users className="w-4 h-4 text-indigo-400" />
                <span>Join to represent your campus and help rank your college!</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
