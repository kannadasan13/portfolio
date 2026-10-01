import React from 'react';
import { GraduationCap, Calendar, MapPin, BookOpen, Compass } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <span className="text-xs font-mono text-cyan-400 tracking-wider uppercase bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-800/40 mb-3">
            Academic Background
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & Theoretical Foundations
          </h2>
          <p className="text-sm text-slate-400 max-w-2xl mt-3">
            Strong academic base in economics providing quantitative discipline, analytical intuition, and data-driven problem solving.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full mt-4" />
        </div>

        {/* Education Timeline */}
        <div className="max-w-3xl mx-auto">
          {educationData.map((edu, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 relative shadow-xl hover:border-cyan-500/40 transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 mb-6 border-b border-white/10">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-amber-950/60 text-amber-400 border border-amber-800/40 mt-1">
                    <GraduationCap className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                      {edu.degree}
                    </h3>
                    <div className="text-sm text-cyan-300 font-medium mb-1">
                      {edu.institution}
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-slate-400">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:items-end gap-1.5 self-start sm:self-auto">
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900 border border-white/10 text-xs font-mono text-slate-300">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{edu.period}</span>
                  </div>
                  <div className="px-3 py-1 rounded-lg bg-emerald-950/70 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-bold">
                    CGPA: {edu.cgpa} / 10
                  </div>
                </div>
              </div>

              {/* Highlights */}
              <div className="mb-6 space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                  <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
                  Academic Focus & Analytical Core
                </h4>
                <div className="space-y-2.5">
                  {edu.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                      <span className="leading-relaxed">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Synergy Highlight Box */}
              <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/20 flex items-start gap-3">
                <Compass className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-xs font-bold text-cyan-300 uppercase tracking-wide mb-1 font-mono">
                    The Economics & Data Bridge
                  </h5>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {edu.synergyWithData}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
