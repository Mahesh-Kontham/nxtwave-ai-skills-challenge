import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, MessageSquare, Award, ArrowRight } from 'lucide-react';
import { FORM_LINK } from '../constants';
import WhatsAppPreview from './WhatsAppPreview';

export default function HowItWorks() {
  const steps = [
    {
      step: 1,
      icon: <UserCheck className="w-6 h-6 text-cyan-400" />,
      title: "Fill the Registration Form",
      desc: "Takes only 15 seconds. Ensure you provide your active WhatsApp number to receive access credentials."
    },
    {
      step: 2,
      icon: <MessageSquare className="w-6 h-6 text-emerald-400" />,
      title: "Join Private WhatsApp Group",
      desc: "Instantly redirect to our cohort space. Get prompt libraries, schedule updates, and meet peer builders."
    },
    {
      step: 3,
      icon: <Award className="w-6 h-6 text-amber-400" />,
      title: "Complete 20-Min Challenges",
      desc: "Unlock daily XP, submit code-free AI outcomes, maintain your streak, and claim your certificate on Day 7."
    }
  ];

  const handleRegister = () => {
    window.open(FORM_LINK, "_blank");
  };

  return (
    <section id="how-it-works" className="py-20 bg-slate-950/40 relative">
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
          
          {/* Timeline Process - Left */}
          <div className="lg:col-span-7 text-left">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">3 simple steps</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-3 tracking-tight text-white leading-tight">
              How the 7-Day Challenge Works
            </h2>
            <p className="text-slate-400 mt-4 leading-relaxed text-sm md:text-base">
              No complicated setups, no subscription fees. We designed this to fit directly into your busy college routines. Learn, build, and claim credentials.
            </p>

            {/* Vertical timeline */}
            <div className="mt-10 space-y-8 relative pl-6 border-l border-slate-900">
              {steps.map((st) => (
                <motion.div
                  key={st.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: st.step * 0.1 }}
                  className="relative group"
                >
                  {/* Indicator circle */}
                  <div className="absolute -left-[37px] top-0 w-8 h-8 rounded-full bg-slate-950 border border-slate-800 flex items-center justify-center text-xs font-bold text-slate-400 group-hover:border-cyan-500/55 group-hover:text-cyan-400 transition-colors">
                    {st.step}
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-slate-900 border border-slate-850 p-2.5 rounded-xl flex-shrink-0 group-hover:scale-105 transition-transform">
                      {st.icon}
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-black text-slate-100">{st.title}</h3>
                      <p className="text-xs sm:text-sm text-slate-405 mt-1.5 leading-relaxed">{st.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <button
              onClick={handleRegister}
              className="mt-10 flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-black text-sm py-3.5 px-6 rounded-2xl transition-all shadow-lg shadow-orange-500/10 hover-lift"
            >
              <span>⚡ Start Step 1: Register Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Interactive Chat Mockup - Right */}
          <div className="lg:col-span-5 flex justify-center">
            <WhatsAppPreview />
          </div>

        </div>
      </div>
    </section>
  );
}
