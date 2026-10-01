import React, { useState, useEffect } from 'react';
import {
  FileText,
  Mail,
  Phone,
  MapPin,
  TrendingUp,
  Database,
  Table,
  BarChart2,
  CheckCircle2,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = personalInfo.titles[currentTitleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayedText !== currentTitle) {
      // Typing forward
      timeout = setTimeout(() => {
        setDisplayedText(currentTitle.slice(0, displayedText.length + 1));
      }, 70);
    } else if (!isDeleting && displayedText === currentTitle) {
      // Pause at full word
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
    } else if (isDeleting && displayedText !== '') {
      // Deleting back
      timeout = setTimeout(() => {
        setDisplayedText(currentTitle.slice(0, displayedText.length - 1));
      }, 40);
    } else if (isDeleting && displayedText === '') {
      // Move to next title
      setIsDeleting(false);
      setCurrentTitleIndex((prev) => (prev + 1) % personalInfo.titles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentTitleIndex]);

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background Gradients & Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-600/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[300px] bg-emerald-600/10 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Bio & Core Info */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs font-medium mb-6 shadow-sm shadow-emerald-900/30">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
              <span>{personalInfo.status}</span>
            </div>

            {/* Candidate Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-3">
              Hi, I'm <span className="text-gradient-cyan">{personalInfo.name}</span>
            </h1>

            {/* Dynamic Typewriter Heading */}
            <div className="h-10 sm:h-12 flex items-center mb-6">
              <span className="text-xl sm:text-2xl lg:text-3xl font-mono font-semibold text-slate-300">
                &gt; {displayedText}
                <span className="inline-block w-2.5 h-6 bg-cyan-400 ml-1 animate-pulse align-middle" />
              </span>
            </div>

            {/* Profile Summary */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 max-w-2xl">
              {personalInfo.summary}
            </p>

            {/* Quick Contact & Location Badges */}
            <div className="flex flex-wrap items-center gap-3 mb-8 text-xs text-slate-400">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white/5 border border-white/10">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>{personalInfo.location}</span>
              </div>
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white/5 border border-white/10 hover:border-cyan-400/50 hover:text-cyan-300 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <span>{personalInfo.email}</span>
              </a>
              <a
                href={`tel:${personalInfo.phone}`}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white/5 border border-white/10 hover:border-cyan-400/50 hover:text-cyan-300 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-cyan-400" />
                <span>{personalInfo.phone}</span>
              </a>
            </div>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-cyan-400 to-emerald-400 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] transition-all"
              >
                <span>View Analytics Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700 hover:border-cyan-400/50 font-medium text-sm transition-all shadow-sm"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </button>

              <a
                href="#contact"
                className="flex items-center gap-1.5 px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 text-sm font-medium transition-all"
              >
                <span>Contact Direct</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Analytics Dashboard Preview Card */}
          <div className="lg:col-span-5 w-full">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-2xl blur-lg opacity-25 group-hover:opacity-40 transition duration-1000" />

              {/* Main Analytics Panel Card */}
              <div className="relative glass-panel rounded-2xl p-6 border border-white/15 shadow-2xl bg-[#0b1222]/90">
                {/* Panel Header */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                    <span className="text-xs font-mono text-slate-400 ml-2">data_pipeline.py</span>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-950 text-cyan-400 border border-cyan-800/50">
                    LIVE METRICS
                  </span>
                </div>

                {/* KPI Micro Cards */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-slate-900/90 border border-white/5">
                    <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
                      <span>Internship Experience</span>
                      <TrendingUp className="w-3.5 h-3.5 text-cyan-400" />
                    </div>
                    <div className="text-xl font-bold text-white">Login 360</div>
                    <div className="text-[11px] text-cyan-400/90">Data Analytics Intern</div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900/90 border border-white/5">
                    <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
                      <span>Economics Degree</span>
                      <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                    </div>
                    <div className="text-xl font-bold text-white">6.1 CGPA</div>
                    <div className="text-[11px] text-emerald-400/90">Rajah Serfoji Govt. College</div>
                  </div>
                </div>

                {/* Analytical Pipeline Mock Flow */}
                <div className="p-4 rounded-xl bg-slate-950/70 border border-white/5 mb-4">
                  <div className="text-xs font-mono text-cyan-300 mb-3 flex items-center justify-between">
                    <span>ANALYTICAL WORKFLOW</span>
                    <span className="text-emerald-400 text-[10px]">VERIFIED</span>
                  </div>
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center justify-between text-slate-300">
                      <span className="flex items-center gap-2">
                        <Database className="w-3.5 h-3.5 text-cyan-400" />
                        <span>Data Ingestion & SQL Queries</span>
                      </span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    </div>
                    <div className="flex items-center justify-between text-slate-300">
                      <span className="flex items-center gap-2">
                        <Table className="w-3.5 h-3.5 text-indigo-400" />
                        <span>Pandas & NumPy Preprocessing</span>
                      </span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    </div>
                    <div className="flex items-center justify-between text-slate-300">
                      <span className="flex items-center gap-2">
                        <TrendingUp className="w-3.5 h-3.5 text-amber-400" />
                        <span>Statistical Trend Discovery</span>
                      </span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    </div>
                    <div className="flex items-center justify-between text-slate-300">
                      <span className="flex items-center gap-2">
                        <BarChart2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Power BI & Excel Dashboards</span>
                      </span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    </div>
                  </div>
                </div>

                {/* Footer Badges */}
                <div className="flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-white/5 font-mono">
                  <span>Python · SQL · Power BI · Stats</span>
                  <span className="text-emerald-400">Ready for Interview</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
