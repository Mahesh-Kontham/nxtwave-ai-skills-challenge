import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star, Users } from 'lucide-react';
import { MOCK_TESTIMONIALS } from '../constants';

export default function SocialProof() {
  return (
    <section id="social" className="py-20 bg-slate-900/20 relative">
      <div className="absolute top-10 right-10 w-[300px] h-[300px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">Student Outcomes</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-3 tracking-tight text-white">
            From Tier-2/3 Colleges to Top Off-Campus Roles
          </h2>
          <p className="text-slate-400 mt-4 leading-relaxed">
            See how seniors from Andhra Pradesh and Telangana used AI skills to land high-paying roles, bypass resume filters, and stand out in a competitive placement season.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {MOCK_TESTIMONIALS.map((test, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel rounded-2xl p-6 flex flex-col justify-between relative group hover:border-slate-800 transition-all"
            >
              <Quote className="w-10 h-10 text-slate-900 absolute top-4 right-4 -z-10 group-hover:text-slate-850/50 transition-colors" />
              
              <div>
                {/* Stars */}
                <div className="flex space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                  "{test.text}"
                </p>
              </div>

              {/* Student info */}
              <div className="mt-8 flex items-center space-x-3.5 border-t border-slate-900/60 pt-4">
                <img
                  src={test.avatar}
                  alt={test.name}
                  className="w-10 h-10 rounded-full object-cover border border-slate-800"
                />
                <div>
                  <p className="text-xs font-extrabold text-white">{test.name}</p>
                  <p className="text-[10px] text-slate-400 font-semibold">{test.college}</p>
                  <p className="text-[10px] text-cyan-400 font-bold mt-1 bg-cyan-550/10 px-1.5 py-0.5 rounded w-max">
                    {test.placement}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Counter Callout */}
        <div className="text-center bg-slate-950/60 border border-slate-900 max-w-lg mx-auto rounded-2xl p-4 flex items-center justify-center space-x-3 shadow-lg shadow-indigo-500/[0.02]">
          <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400">
            <Users className="w-5 h-5 animate-pulse" />
          </div>
          <span className="text-xs md:text-sm text-slate-300 font-semibold">
            Join <strong className="text-indigo-400">1,500+ students</strong> preparing to secure their careers next week.
          </span>
        </div>
      </div>
    </section>
  );
}
