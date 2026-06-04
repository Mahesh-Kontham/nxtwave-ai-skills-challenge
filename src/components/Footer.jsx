import React from 'react';
import { ShieldAlert, Info } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 py-12 border-t border-slate-900 px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center space-y-6 text-center">
        {/* Info label */}
        <div className="flex items-center justify-center space-x-2 bg-slate-900 border border-slate-850 px-4 py-2 rounded-xl text-slate-400 max-w-2xl text-[10px] md:text-xs leading-normal">
          <Info className="w-5 h-5 text-indigo-400 flex-shrink-0" />
          <span>
            <strong>Disclaimer:</strong> This 7-Day Challenge is an independent educational program aimed at promoting generative AI literacy. Placement outcomes depend on student performance, academic backgrounds, and interviewer standards.
          </span>
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500 font-medium">
          <a href="#why-ai" className="hover:text-cyan-400 transition-colors">Why AI?</a>
          <a href="#roadmap" className="hover:text-cyan-400 transition-colors">7-Day Curricular Roadmap</a>
          <a href="#projects" className="hover:text-cyan-400 transition-colors">AI Projects</a>
          <a href="#certification" className="hover:text-cyan-400 transition-colors">Rewards</a>
          <a href="#faq" className="hover:text-cyan-400 transition-colors">Placement FAQ</a>
        </div>

        {/* Copyright info */}
        <p className="text-[10px] sm:text-xs text-slate-600">
          © {new Date().getFullYear()} 7-Day AI Skills Challenge Initiative. All Rights Reserved. Designed for maximum placement preparation.
        </p>
      </div>
    </footer>
  );
}
