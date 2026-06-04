import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, CheckCircle, ArrowRight, ShieldCheck, Download } from 'lucide-react';
import { FORM_LINK } from '../constants';

export default function Certification() {
  const [studentName, setStudentName] = useState("Your Name Here");
  const [downloading, setDownloading] = useState(false);
  const [downloadComplete, setDownloadComplete] = useState(false);

  const handleRegister = () => {
    window.open(FORM_LINK, "_blank");
  };

  const triggerDownloadMock = () => {
    if (downloading || downloadComplete) return;
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      setDownloadComplete(true);
      // Reset after 3 seconds
      setTimeout(() => setDownloadComplete(false), 3000);
    }, 2000);
  };

  return (
    <section id="certification" className="py-20 bg-slate-950/40 relative">
      <div className="absolute top-1/4 right-1/4 w-[350px] h-[350px] bg-violet-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
          
          {/* Text content - Left */}
          <div className="lg:col-span-5 text-left">
            <span className="text-xs font-bold text-violet-400 uppercase tracking-widest">Industry Validation</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-3 tracking-tight text-white leading-tight">
              Get Certified in Generative AI Tools
            </h2>
            <p className="text-slate-400 mt-4 leading-relaxed text-sm md:text-base">
              Add a verifiable certificate to your resume and share your accomplishments directly on LinkedIn. Show recruiters that you have practical, hands-on experience with modern tools.
            </p>

            <ul className="mt-8 space-y-4 text-xs sm:text-sm text-slate-300">
              <li className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <span>Verifiable digital certificate of completion</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <span>Resume-ready projects section optimized for ATS screening</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <span>LinkedIn credential badge to boost organic profile views</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <span>Lifetime access to the AI Student community network</span>
              </li>
            </ul>

            {/* Live Name Input */}
            <div className="mt-8 p-4 bg-slate-900/60 border border-slate-850 rounded-2xl max-w-sm">
              <label htmlFor="student-name-input" className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                Type your name to preview certificate:
              </label>
              <input
                id="student-name-input"
                type="text"
                maxLength={25}
                placeholder="Enter your name..."
                value={studentName}
                onChange={(e) => setStudentName(e.target.value || "Your Name Here")}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2 text-sm text-white placeholder-slate-650 focus:outline-none focus:border-cyan-500/50 transition-colors"
              />
            </div>
          </div>

          {/* Certificate Design - Right */}
          <div className="lg:col-span-7 flex flex-col items-center">
            {/* Interactive Mockup Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-2xl bg-gradient-to-tr from-indigo-950 via-slate-950 to-cyan-950 p-[3px] rounded-3xl shadow-2xl shadow-indigo-500/10"
            >
              <div className="bg-[#050811] rounded-[21px] p-6 md:p-10 border border-slate-900/80 relative text-center overflow-hidden">
                {/* Gold border vectors */}
                <div className="absolute top-4 left-4 right-4 bottom-4 border border-amber-500/15 pointer-events-none rounded-xl" />
                <div className="absolute top-6 left-6 right-6 bottom-6 border border-amber-500/5 pointer-events-none rounded-lg" />
                
                {/* Watermark crest */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-amber-500/[0.02] border border-amber-500/[0.04] rounded-full flex items-center justify-center pointer-events-none">
                  <Award className="w-24 h-24 text-amber-500/5" />
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col justify-between h-full min-h-[300px]">
                  {/* Top Header */}
                  <div>
                    <div className="flex items-center justify-center space-x-2 text-amber-400">
                      <Award className="w-6 h-6 animate-pulse" />
                      <span className="text-[10px] font-bold tracking-widest uppercase font-mono">COHORT EXCELLENCE IN AI</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-black mt-3 text-slate-100 tracking-wider font-serif uppercase">
                      Certificate of Achievement
                    </h3>
                  </div>

                  {/* Body text with live name */}
                  <div className="my-8">
                    <p className="text-xs text-slate-400 font-medium">THIS CERTIFICATE IS PROUDLY PRESENTED TO</p>
                    <p className="text-xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-200 mt-3 font-serif py-1 italic">
                      {studentName}
                    </p>
                    <p className="text-[11px] md:text-xs text-slate-350 max-w-md mx-auto mt-4 leading-relaxed">
                      for successfully completing the rigorous 7-day challenge in AI application engineering, mastering ChatGPT, prompt design frameworks, automation pipelines, and building functional applications.
                    </p>
                  </div>

                  {/* Footers signatures */}
                  <div className="grid grid-cols-2 gap-4 pt-6 border-t border-slate-900 max-w-sm mx-auto text-center">
                    <div>
                      <p className="text-xs font-semibold text-slate-300 font-mono italic">AI Cohort Lead</p>
                      <p className="text-[9px] text-slate-500 mt-1 uppercase font-bold tracking-wider">CHALLENGE MENTOR</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-300 font-mono">Verified ID</p>
                      <p className="text-[9px] text-slate-500 mt-1 uppercase font-bold tracking-wider">SECURE-NXT-#04</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Actions for Certificate */}
            <div className="mt-6 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 w-full justify-center max-w-md">
              <button
                onClick={triggerDownloadMock}
                className="flex items-center justify-center space-x-2 bg-slate-900 hover:bg-slate-850 border border-slate-800 text-slate-300 font-bold text-xs py-3 px-5 rounded-xl transition-all"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>
                  {downloading ? "Generating PDF..." : downloadComplete ? "Preview Saved! ✓" : "Download Preview"}
                </span>
              </button>
              
              <button
                onClick={handleRegister}
                className="flex items-center justify-center space-x-2 bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-400 hover:to-cyan-400 text-white font-extrabold text-xs py-3 px-6 rounded-xl transition-all shadow-lg shadow-indigo-500/10"
              >
                <span>Register to Claim Verified Certificate</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
