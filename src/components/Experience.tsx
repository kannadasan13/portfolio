import React from 'react';
import { Briefcase, Calendar, CheckCircle2, Terminal } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative bg-[#080d19]/80 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <span className="text-xs font-mono text-cyan-400 tracking-wider uppercase bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-800/40 mb-3">
            Industry Practice
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Internship & Practical Experience
          </h2>
          <p className="text-sm text-slate-400 max-w-2xl mt-3">
            Direct real-world experience handling datasets, cleaning pipelines, and delivering insights to stakeholders.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full mt-4" />
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto">
          {experienceData.map((exp, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 relative overflow-hidden shadow-xl"
            >
              {/* Top Accent Strip */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-400" />

              {/* Header: Role, Company & Period */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-white/10">
                <div className="flex items-start gap-3.5">
                  <div className="p-3 rounded-xl bg-cyan-950/80 text-cyan-400 border border-cyan-800/50 mt-1">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm">
                      <span className="font-semibold text-cyan-300">{exp.company}</span>
                      <span className="text-slate-500">•</span>
                      <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/5 text-slate-300">
                        {exp.type}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-white/10 text-xs font-mono text-slate-300 self-start sm:self-center">
                  <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Responsibilities */}
              <div className="mb-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  Key Responsibilities & Deliverables
                </h4>
                <div className="space-y-3">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <div key={rIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Outcomes */}
              <div className="mb-6 p-4 rounded-xl bg-slate-900/60 border border-white/5">
                <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 mb-2">
                  Documented Outcomes
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {exp.keyOutcomes.map((outcome, oIdx) => (
                    <div
                      key={oIdx}
                      className="p-3 rounded-lg bg-white/5 border border-white/5 text-xs text-slate-300"
                    >
                      {outcome}
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Employed */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-slate-400 mr-2">Technologies Used:</span>
                {exp.technologies.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-xs font-mono px-2.5 py-1 rounded-md bg-cyan-950/60 text-cyan-300 border border-cyan-800/40"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
