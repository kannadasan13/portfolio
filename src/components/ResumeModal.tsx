import React, { useState } from 'react';
import { X, Download, Printer, Copy, Check, FileText, Mail, Phone, MapPin } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const resumeText = `
KANNADASAN
Data Analytics
Thanjavur, Tamil Nadu | ${personalInfo.phone} | ${personalInfo.email}

PROFILE SUMMARY
${personalInfo.summary}

SKILLS
• Python    • Pandas    • NumPy
• Statistics    • Data Analysis    • Data Cleaning
• MS Excel    • PowerPoint    • SQL
• Power BI

EXPERIENCE
Data Analytics Intern — Login 360
June 2026 – August 2026
● Analyzed datasets using Python (Pandas, NumPy) to identify trends and support data-driven decisions.
● Performed data cleaning and preprocessing to ensure accuracy and consistency for analysis.
● Applied statistical techniques to summarize findings and presented insights to the team.

EDUCATION
Bachelor of Arts in Economics (B.A. Economics)
Rajah Serfoji Govt. College, Thanjavur
2022 – 2025 | CGPA: 6.1

CERTIFICATIONS
● Application Developer – Web & Mobile, N.S.D.C Skill India, 2022
● Data Analytics – Login 360, 2026

LANGUAGES
Tamil, English
    `.trim();

    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownloadTxt = () => {
    const resumeText = `KANNADASAN
Data Analytics
Thanjavur, Tamil Nadu | ${personalInfo.phone} | ${personalInfo.email}

PROFILE SUMMARY
${personalInfo.summary}

SKILLS
• Python    • Pandas    • NumPy
• Statistics    • Data Analysis    • Data Cleaning
• MS Excel    • PowerPoint    • SQL
• Power BI

EXPERIENCE
Data Analytics Intern — Login 360
June 2026 – August 2026
● Analyzed datasets using Python (Pandas, NumPy) to identify trends and support data-driven decisions.
● Performed data cleaning and preprocessing to ensure accuracy and consistency for analysis.
● Applied statistical techniques to summarize findings and presented insights to the team.

EDUCATION
Bachelor of Arts in Economics (B.A. Economics)
Rajah Serfoji Govt. College, Thanjavur
2022 – 2025 | CGPA: 6.1

CERTIFICATIONS
● Application Developer – Web & Mobile, N.S.D.C Skill India, 2022
● Data Analytics – Login 360, 2026

LANGUAGES
Tamil, English
`;
    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Kannadasan_Data_Analytics_Resume.txt';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto glass-panel bg-[#090e1c] rounded-2xl border border-white/20 shadow-2xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Action Bar Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-5 mb-6 border-b border-white/10 no-print">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-cyan-400" />
            <h2 className="text-lg font-bold text-white">Official Resume Viewer</h2>
            <span className="text-xs font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/50">
              ATS-Optimized
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-medium text-slate-300 border border-white/10 transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-300">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Copy Text</span>
                </>
              )}
            </button>

            <button
              onClick={handleDownloadTxt}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-medium text-slate-300 border border-white/10 transition-colors"
            >
              <Download className="w-3.5 h-3.5 text-cyan-400" />
              <span>Download (.txt)</span>
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold transition-all shadow-sm shadow-cyan-500/25"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 ml-2"
              aria-label="Close resume viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Formatted ATS Resume Document */}
        <div className="bg-slate-950 p-6 sm:p-10 rounded-xl border border-white/10 text-slate-200 font-sans print-container">
          {/* Header */}
          <div className="text-center pb-6 mb-6 border-b border-white/15">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-wide uppercase mb-1">
              KANNADASAN
            </h1>
            <p className="text-sm font-semibold text-cyan-400 mb-2">Data Analytics</p>
            <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-1 text-xs text-slate-400 font-mono">
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-cyan-400" />
                Thanjavur, Tamil Nadu
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Phone className="w-3 h-3 text-cyan-400" />
                +91 89460 68909
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Mail className="w-3 h-3 text-cyan-400" />
                dasan9377@gmail.com
              </span>
            </div>
          </div>

          {/* Profile Summary */}
          <div className="mb-6">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 pb-1 mb-2 border-b border-white/10">
              Profile Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed text-justify">
              Data Analytics enthusiast with a B.A. in Economics and hands-on internship experience analyzing data using Python. Skilled in Pandas and NumPy for data manipulation, and applying statistical methods to derive insights. Eager to leverage an analytical, economics-driven mindset to solve real-world business problems.
            </p>
          </div>

          {/* Skills */}
          <div className="mb-6">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 pb-1 mb-2 border-b border-white/10">
              Skills
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs text-slate-300">
              <div>• Python</div>
              <div>• Pandas</div>
              <div>• NumPy</div>
              <div>• Statistics</div>
              <div>• Data Analysis</div>
              <div>• Data Cleaning</div>
              <div>• MS Excel</div>
              <div>• PowerPoint</div>
              <div>• SQL</div>
              <div>• Power BI</div>
            </div>
          </div>

          {/* Experience */}
          <div className="mb-6">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 pb-1 mb-2 border-b border-white/10">
              Experience
            </h2>
            <div>
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="text-sm font-bold text-white">
                  Data Analytics Intern — <span className="text-cyan-300">Login 360</span>
                </h3>
                <span className="text-xs font-mono text-slate-400">June 2026 – August 2026</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-xs text-slate-300 leading-relaxed">
                <li>Analyzed datasets using Python (Pandas, NumPy) to identify trends and support data-driven decisions.</li>
                <li>Performed data cleaning and preprocessing to ensure accuracy and consistency for analysis.</li>
                <li>Applied statistical techniques to summarize findings and presented insights to the team.</li>
              </ul>
            </div>
          </div>

          {/* Education */}
          <div className="mb-6">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 pb-1 mb-2 border-b border-white/10">
              Education
            </h2>
            <div>
              <div className="flex justify-between items-baseline mb-0.5">
                <h3 className="text-sm font-bold text-white">
                  Bachelor of Arts in Economics (B.A. Economics)
                </h3>
                <span className="text-xs font-mono text-slate-400">2022 – 2025</span>
              </div>
              <div className="flex justify-between items-baseline text-xs text-slate-300">
                <span>Rajah Serfoji Govt. College, Thanjavur</span>
                <span className="font-mono text-emerald-400 font-semibold">CGPA: 6.1</span>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="mb-6">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 pb-1 mb-2 border-b border-white/10">
              Certifications
            </h2>
            <ul className="list-disc list-inside space-y-1 text-xs text-slate-300">
              <li>Application Developer – Web & Mobile, N.S.D.C Skill India, 2022</li>
              <li>Data Analytics – Login 360, 2026</li>
            </ul>
          </div>

          {/* Languages */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 pb-1 mb-2 border-b border-white/10">
              Languages
            </h2>
            <p className="text-xs text-slate-300">Tamil, English</p>
          </div>
        </div>
      </div>
    </div>
  );
};
