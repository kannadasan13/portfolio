import React from 'react';
import { Briefcase, Award, Cpu, GraduationCap } from 'lucide-react';
import { analyticsSnapshot } from '../data/portfolioData';

export const AnalyticsSnapshot: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Briefcase':
        return <Briefcase className="w-6 h-6 text-cyan-400" />;
      case 'Award':
        return <Award className="w-6 h-6 text-emerald-400" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-violet-400" />;
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6 text-amber-400" />;
      default:
        return <Cpu className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section className="py-12 border-y border-white/5 bg-[#090e1c]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <span className="text-xs font-mono text-cyan-400 tracking-wider uppercase bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-800/40">
            Verified Resume Snapshot
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-2">
            Quantitative Profile Summary
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto mt-1">
            Factual metrics derived directly from verified academic, internship, and certification records.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {analyticsSnapshot.map((metric, idx) => (
            <div
              key={idx}
              className="glass-card rounded-xl p-5 border border-white/10 relative overflow-hidden group hover:border-cyan-500/40"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
                  {getIcon(metric.iconName)}
                </div>
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                  Verified
                </span>
              </div>

              <div className="text-3xl font-extrabold text-white mb-1 tracking-tight font-mono">
                {metric.value}
              </div>

              <div className="text-sm font-semibold text-slate-200 mb-1">
                {metric.label}
              </div>

              <div className="text-xs text-slate-400 leading-snug">
                {metric.subtext}
              </div>

              {/* Bottom decorative bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500/0 via-cyan-500/50 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
