import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { FAQ_DATA } from '../constants';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-slate-900/20 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold text-violet-400 uppercase tracking-widest">FAQ</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-3 tracking-tight text-white">
            Common Placement & Challenge Doubts
          </h2>
          <p className="text-slate-400 mt-3 text-sm">
            Answers to your primary concerns about eligibility, time requirements, and credentials.
          </p>
        </div>

        {/* Collapsible Accordion Grid */}
        <div className="space-y-4">
          {FAQ_DATA.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-slate-950/60 border border-slate-900 rounded-2xl overflow-hidden transition-all duration-300"
              >
                {/* Accordion header button */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-5 text-left text-sm md:text-base font-extrabold text-slate-100 hover:text-white transition-colors focus:outline-none"
                >
                  <span className="flex items-center pr-4">
                    <HelpCircle className="w-5 h-5 mr-3 text-cyan-400 flex-shrink-0" />
                    {faq.question}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-slate-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                  )}
                </button>

                {/* Collapsible Accordion Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-5 pb-5 pt-0.5 border-t border-slate-900/60">
                        <p className="text-xs sm:text-sm text-slate-350 leading-relaxed pl-8">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
