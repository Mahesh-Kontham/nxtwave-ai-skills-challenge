import React from 'react';
import FloatingXPTracker from './components/FloatingXPTracker';
import Hero from './components/Hero';
import WhyAi from './components/WhyAi';
import Roadmap from './components/Roadmap';
import Projects from './components/Projects';
import Gamification from './components/Gamification';
import Certification from './components/Certification';
import SocialProof from './components/SocialProof';
import HowItWorks from './components/HowItWorks';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#050811] text-slate-100 bg-radial-mesh">
      {/* Floating XP tracker, levels & Mobile sticky CTA */}
      <FloatingXPTracker />

      {/* Main Content Layout */}
      <main className="w-full">
        {/* Section 1: Hero */}
        <Hero />

        {/* Section 2: Why AI Now? */}
        <WhyAi />

        {/* Section 3: What You Will Learn (7-Day Roadmap) */}
        <Roadmap />

        {/* Section 4: What You Will Build (Projects outcome) */}
        <Projects />

        {/* Section 5: Gamification (Duolingo Streaks & Leaderboard) */}
        <Gamification />

        {/* Section 6: Rewards & Certification (Interactive certificate preview) */}
        <Certification />

        {/* Section 7: Social Proof (AP & TS Testimonials) */}
        <SocialProof />

        {/* Section 8: How It Works (3 Steps + WhatsApp Chat Simulator) */}
        <HowItWorks />

        {/* Section 9: FAQ Accordions */}
        <FAQ />

        {/* Section 10: Final Urgency CTA */}
        <FinalCTA />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
