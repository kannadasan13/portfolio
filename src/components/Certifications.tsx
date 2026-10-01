import React from 'react';
import { Award, CheckCircle2, ShieldCheck } from 'lucide-react';
import { certificationsData } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 relative bg-[#080d19]/80 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <span className="text-xs font-mono text-cyan-400 tracking-wider uppercase bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-800/40 mb-3">
            Formal Credentials
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Verified Certifications
          </h2>
          <p className="text-sm text-slate-400 max-w-2xl mt-3">
            Industry training programs validating data analysis and software fundamentals.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full mt-4" />
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certificationsData.map((cert, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-6 sm:p-7 border border-white/10 flex flex-col justify-between group hover:border-cyan-500/40 transition-all relative overflow-hidden"
            >
              {/* Corner Badge */}
              <div className="absolute top-0 right-0">
                <div className="bg-gradient-to-l from-cyan-500/20 to-transparent py-1 px-4 text-[10px] font-mono text-cyan-300 border-b border-l border-cyan-500/20 rounded-bl-xl">
                  {cert.year}
                </div>
              </div>

              <div>
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-cyan-950/80 text-cyan-400 border border-cyan-800/40 group-hover:scale-105 transition-transform">
                    <Award className="w-6 h-6" />
                  </div>
                  <div className="pr-12">
                    <span className="text-[11px] font-mono text-emerald-400 block mb-0.5">
                      {cert.badge}
                    </span>
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {cert.name}
                    </h3>
                    <p className="text-xs text-slate-300 font-medium">
                      {cert.organization}
                    </p>
                  </div>
                </div>

                {/* Covered Competencies */}
                <div className="pt-2 mb-6">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-2.5">
                    Competencies Validated
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skillsCovered.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/5 text-slate-300 border border-white/10 flex items-center gap-1.5"
                      >
                        <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Status Bar */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs">
                <span className="flex items-center gap-1.5 text-emerald-400 font-mono text-[11px]">
                  <ShieldCheck className="w-4 h-4" />
                  Credential Documented
                </span>
                <span className="text-slate-400 font-mono text-[11px]">
                  Issued {cert.year}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
