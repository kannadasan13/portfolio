import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AnalyticsSnapshot } from './components/AnalyticsSnapshot';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { VisualizationShowcase } from './components/VisualizationShowcase';
import { AnalyticsWorkflow } from './components/AnalyticsWorkflow';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export const App: React.FC = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#070a13] text-slate-100 selection:bg-cyan-500/20 selection:text-cyan-300 relative">
      {/* Top Navbar */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <AnalyticsSnapshot />
        <About />
        <Skills />
        <Projects />
        <VisualizationShowcase />
        <AnalyticsWorkflow />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
      </main>

      {/* Footer */}
      <Footer onOpenResume={() => setIsResumeOpen(true)} />

      {/* Interactive Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
};

export default App;
