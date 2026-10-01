import React from 'react';
import {
  Brain,
  TrendingUp,
  LineChart,
  Award,
  BookOpen,
  CheckCircle,
  Lightbulb,
  Compass
} from 'lucide-react';
import { educationData } from '../data/portfolioData';

export const About: React.FC = () => {
  const edu = educationData[0];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-mono text-cyan-400 tracking-wider uppercase bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-800/40 mb-3">
            About Kannadasan
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Bridging Economic Theory with Data-Driven Decisions
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Natural Narrative */}
          <div className="lg:col-span-7 space-y-6 text-slate-300 leading-relaxed text-sm sm:text-base">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Brain className="w-5 h-5 text-cyan-400" />
                <span>Analytical Mindset Grounded in Economics</span>
              </h3>
              <p>
                I graduated with a <strong className="text-white">Bachelor of Arts in Economics</strong> from Rajah Serfoji Govt. College, Thanjavur (2022–2025). During my studies, I was fascinated by how statistical trends, supply-demand balances, and economic indicators govern business outcomes.
              </p>
              <p>
                To translate that theoretical intuition into practical computation, I undertook dedicated data analytics training and an internship at <strong className="text-cyan-300">Login 360</strong>. There, I worked directly with <strong className="text-white">Python, Pandas, NumPy, and statistical methods</strong> to clean messy datasets, detect underlying trends, and formulate data-backed recommendations for the team.
              </p>
              <p>
                My philosophy is straightforward: <em className="text-slate-200">raw numbers only create value when transformed into actionable business clarity</em>. Combining an economics-driven perspective with modern analytics tools enables me to look beyond surfaces and identify the real "why" behind operational metrics.
              </p>
            </div>

            {/* Core Competency Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="glass-card p-5 rounded-xl border border-white/10">
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="p-2 rounded-lg bg-cyan-950/80 text-cyan-400 border border-cyan-800/40">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <h4 className="font-semibold text-white text-sm">Trend & Statistical Analysis</h4>
                </div>
                <p className="text-xs text-slate-400 leading-normal">
                  Applying descriptive statistics, variance analysis, and distribution checks to extract meaningful patterns from noisy datasets.
                </p>
              </div>

              <div className="glass-card p-5 rounded-xl border border-white/10">
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="p-2 rounded-lg bg-emerald-950/80 text-emerald-400 border border-emerald-800/40">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <h4 className="font-semibold text-white text-sm">Data Cleaning & Quality</h4>
                </div>
                <p className="text-xs text-slate-400 leading-normal">
                  Ensuring strict schema fidelity, handling null values systematically, deduplicating records, and guaranteeing accuracy before downstream analysis.
                </p>
              </div>

              <div className="glass-card p-5 rounded-xl border border-white/10">
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="p-2 rounded-lg bg-violet-950/80 text-violet-400 border border-violet-800/40">
                    <LineChart className="w-4 h-4" />
                  </div>
                  <h4 className="font-semibold text-white text-sm">Business Intelligence</h4>
                </div>
                <p className="text-xs text-slate-400 leading-normal">
                  Building interactive dashboards with Power BI and MS Excel to communicate KPIs and executive metrics clearly to non-technical stakeholders.
                </p>
              </div>

              <div className="glass-card p-5 rounded-xl border border-white/10">
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="p-2 rounded-lg bg-amber-950/80 text-amber-400 border border-amber-800/40">
                    <Lightbulb className="w-4 h-4" />
                  </div>
                  <h4 className="font-semibold text-white text-sm">Economics Intuition</h4>
                </div>
                <p className="text-xs text-slate-400 leading-normal">
                  Grounded in opportunity cost, market incentives, and distinguishing genuine causation from mere spurious correlation.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Key Details & Economics Synergy Box */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Profile Summary Card */}
            <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <h4 className="text-sm font-mono font-semibold text-cyan-400 uppercase tracking-wider">
                  Candidate Overview
                </h4>
                <span className="text-[11px] px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800/50">
                  Fresher / Entry-Level
                </span>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex justify-between py-1.5 border-b border-white/5">
                  <span className="text-slate-400">Target Roles:</span>
                  <span className="font-medium text-slate-200 text-right">
                    Data Analyst, BI Analyst, Reporting Analyst
                  </span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-white/5">
                  <span className="text-slate-400">Education:</span>
                  <span className="font-medium text-slate-200 text-right">
                    B.A. Economics (6.1 CGPA)
                  </span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-white/5">
                  <span className="text-slate-400">Internship:</span>
                  <span className="font-medium text-slate-200 text-right">
                    Data Analytics Intern @ Login 360
                  </span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-white/5">
                  <span className="text-slate-400">Location:</span>
                  <span className="font-medium text-slate-200 text-right">
                    Thanjavur, Tamil Nadu
                  </span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-white/5">
                  <span className="text-slate-400">Languages:</span>
                  <span className="font-medium text-slate-200 text-right">
                    Tamil (Native), English (Professional)
                  </span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-slate-400">Work Authorization:</span>
                  <span className="font-medium text-emerald-400 text-right">
                    Immediate / Relocation Ready
                  </span>
                </div>
              </div>
            </div>

            {/* The Economics Edge Spotlight */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#0c182d] to-[#0d2238] border border-cyan-500/25 relative overflow-hidden shadow-lg">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Compass className="w-24 h-24 text-cyan-400" />
              </div>
              <div className="flex items-center gap-2 mb-3">
                <BookOpen className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-mono font-bold text-cyan-300 uppercase tracking-wider">
                  The Economics Advantage
                </span>
              </div>
              <h4 className="text-base font-bold text-white mb-2">
                Why Economics + Analytics is a Rare Asset
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                {edu.synergyWithData}
              </p>
              <div className="flex items-center gap-2 text-[11px] font-mono text-cyan-300 bg-cyan-950/60 p-2.5 rounded-lg border border-cyan-800/40">
                <Award className="w-4 h-4 flex-shrink-0 text-emerald-400" />
                <span>Analytical Rigor + Commercial Context</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
