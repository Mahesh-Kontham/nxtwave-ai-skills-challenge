import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Tag, ExternalLink, Code } from 'lucide-react';
import { MOCK_PROJECTS } from '../constants';

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-950/40 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">Tangible Outcomes</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-3 tracking-tight">
            Projects That Make Your Resume Stand Out
          </h2>
          <p className="text-slate-400 mt-4 leading-relaxed">
            Recruiters ignore dry bullet points. They hire builders. In 7 days, you will build 4 production-grade AI tools to showcase on GitHub and LinkedIn.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {MOCK_PROJECTS.map((proj, idx) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card rounded-2xl p-6 flex flex-col justify-between group cursor-default"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-slate-900 border border-slate-850 rounded-xl flex items-center justify-center text-2xl shadow-inner group-hover:scale-110 transition-transform">
                    {proj.image}
                  </div>
                  <span className="text-[10px] font-bold text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-full">
                    {proj.marketValue}
                  </span>
                </div>

                {/* Info */}
                <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {proj.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-2.5 leading-relaxed">
                  {proj.description}
                </p>
              </div>

              {/* Footer specs */}
              <div className="mt-6 pt-5 border-t border-slate-900/60 flex items-center justify-between text-xs text-slate-450 font-semibold">
                <div className="flex items-center space-x-1.5">
                  <Code className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{proj.difficulty}</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <Clock className="w-3.5 h-3.5 text-slate-500" />
                  <span>Build: {proj.timeToBuild}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
