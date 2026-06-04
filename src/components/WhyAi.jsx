import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Award, Zap, AlertTriangle, CheckCircle, HelpCircle } from 'lucide-react';

export default function WhyAi() {
  const stats = [
    {
      icon: <TrendingUp className="w-6 h-6 text-cyan-400" />,
      value: "93%",
      title: "Recruiters Demand AI Skills",
      desc: "Tech companies are passing on profiles without generative AI capabilities. Knowing how to prompt is the new baseline."
    },
    {
      icon: <Zap className="w-6 h-6 text-amber-400" />,
      value: "10x",
      title: "Faster Project Delivery",
      desc: "AI-skilled students build mockups, landing pages, and debug applications in minutes, saving dozens of hours of manual labor."
    },
    {
      icon: <Award className="w-6 h-6 text-violet-400" />,
      value: "+40%",
      title: "Placement Packages Premium",
      desc: "Freshers who showcase AI projects on LinkedIn command significantly higher salaries and off-campus opportunities."
    }
  ];

  return (
    <section id="why-ai" className="py-20 bg-slate-950/40 relative">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full bg-violet-500/5 blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">The AI Shift is Here</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-3 tracking-tight">
            Why AI Skills Are No Longer Optional
          </h2>
          <p className="text-slate-400 mt-4 leading-relaxed">
            The placement landscape in 2026 has changed. Traditional coding tests are giving way to practical execution. Students who can build with AI get hired first.
          </p>
        </div>

        {/* Statistic Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card rounded-2xl p-6 flex flex-col justify-between"
            >
              <div>
                <div className="bg-slate-900/80 w-12 h-12 rounded-xl flex items-center justify-center border border-slate-800 mb-5">
                  {stat.icon}
                </div>
                <div className="text-4xl font-extrabold font-mono bg-clip-text text-transparent bg-gradient-to-r from-slate-100 to-slate-300">
                  {stat.value}
                </div>
                <h3 className="text-lg font-bold text-slate-100 mt-2">{stat.title}</h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-2.5 leading-relaxed">{stat.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comparative Layout (Traditional Student vs AI-Enabled Student) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Traditional Student */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-slate-950/60 border border-slate-900 rounded-3xl p-6 md:p-8 flex flex-col justify-between relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full blur-2xl" />
            <div>
              <div className="flex items-center space-x-2 text-rose-500 mb-6 bg-rose-500/10 border border-rose-500/20 rounded-full px-3 py-1 w-max text-xs font-bold">
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>The Outdated Way</span>
              </div>
              <h3 className="text-xl md:text-2xl font-extrabold text-slate-200">The Traditional Student</h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-3 leading-relaxed">
                Stuck using outdated curricula, building identical portfolio templates, and wasting hours fixing configuration bugs manually.
              </p>
              
              <ul className="mt-8 space-y-4 text-xs sm:text-sm text-slate-400">
                <li className="flex items-start space-x-3">
                  <span className="text-rose-500 text-base mt-0.5">✖</span>
                  <span>Spends 5+ hours trying to resolve simple runtime environment setup errors.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-rose-500 text-base mt-0.5">✖</span>
                  <span>Creates generic HTML/CSS landing pages that look outdated and fail to impress recruiters.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-rose-500 text-base mt-0.5">✖</span>
                  <span>Struggles to optimize resume ATS keywords, getting filtered before interviews.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-rose-500 text-base mt-0.5">✖</span>
                  <span>Unaware of how prompt guidelines, Claude, or v0 can accelerate development.</span>
                </li>
              </ul>
            </div>
            <div className="mt-8 pt-6 border-t border-slate-900 text-xs font-bold text-rose-500 flex justify-between items-center">
              <span>PLACEMENT MATCH RATE</span>
              <span className="font-mono text-sm bg-rose-550/10 px-2 py-0.5 rounded">LOW (UNDER 12%)</span>
            </div>
          </motion.div>

          {/* AI-Enabled Student */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-slate-900/30 border border-cyan-500/20 rounded-3xl p-6 md:p-8 flex flex-col justify-between relative overflow-hidden group shadow-lg shadow-cyan-500/5"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl animate-pulse" />
            <div>
              <div className="flex items-center space-x-2 text-cyan-400 mb-6 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-3 py-1 w-max text-xs font-bold">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>The Future Ready Way</span>
              </div>
              <h3 className="text-xl md:text-2xl font-extrabold text-white">The AI-Powered Student</h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-3 leading-relaxed">
                Speeds through manual bugs using AI co-pilots, uses modern tools to code ideas in minutes, and builds standout LinkedIn projects.
              </p>
              
              <ul className="mt-8 space-y-4 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start space-x-3">
                  <span className="text-cyan-400 text-base mt-0.5">✔</span>
                  <span>Fixes complex coding issues instantly using Claude & custom prompt tutors.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-cyan-400 text-base mt-0.5">✔</span>
                  <span>Launches visually stunning, modern Web Apps and projects using UI engines like v0.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-cyan-400 text-base mt-0.5">✔</span>
                  <span>Uses AI matching to tailor resumes for individual Job Descriptions (JDs) automatically.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-cyan-400 text-base mt-0.5">✔</span>
                  <span>Leverages automation agents to do the repetitive work of 3 engineers.</span>
                </li>
              </ul>
            </div>
            <div className="mt-8 pt-6 border-t border-slate-900 text-xs font-bold text-cyan-400 flex justify-between items-center">
              <span>PLACEMENT MATCH RATE</span>
              <span className="font-mono text-sm bg-cyan-500/10 px-2 py-0.5 rounded animate-pulse">EXTREMELY HIGH (91%+)</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
