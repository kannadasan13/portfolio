import React from 'react';
import { ArrowUp, Mail, Phone, FileText } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-[#050811] text-slate-400 text-xs py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-8 border-b border-white/5">
          {/* Candidate Info */}
          <div className="md:col-span-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-extrabold text-white text-base tracking-tight">
                {personalInfo.name}
              </span>
              <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-800/40">
                DATA ANALYST
              </span>
            </div>
            <p className="text-slate-400 max-w-md text-xs leading-relaxed">
              B.A. Economics graduate with hands-on internship experience in Python, Pandas, NumPy, SQL, and Power BI. Dedicated to extracting actionable business intelligence from data.
            </p>
          </div>

          {/* Quick Links & Actions */}
          <div className="md:col-span-6 flex flex-wrap items-center justify-start md:justify-end gap-3">
            <button
              onClick={onOpenResume}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 transition-colors"
            >
              <FileText className="w-3.5 h-3.5 text-cyan-400" />
              <span>View Resume</span>
            </button>
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-cyan-400" />
              <span>Email</span>
            </a>
            <a
              href={`tel:${personalInfo.phone}`}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-400" />
              <span>Call</span>
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 transition-colors ml-2"
              title="Back to Top"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom copyright notice */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-400">
          <div>
            © {new Date().getFullYear()} Kannadasan. All rights reserved. Thanjavur, Tamil Nadu.
          </div>
          <div className="flex items-center gap-1 font-mono text-slate-400">
            <span>Built with React, TypeScript, Tailwind CSS & Recharts</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
