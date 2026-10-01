import React, { useState } from 'react';
import {
  FileCode2,
  TableProperties,
  Binary,
  Database,
  BarChart3,
  Sheet,
  Sparkles,
  Search,
  TrendingUp,
  Presentation,
  CheckCircle2
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';
import { SkillItem } from '../types';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Programming',
    'Data Manipulation & Analysis',
    'Databases',
    'Business Intelligence',
    'Statistical Methods'
  ];

  const getIcon = (iconName: string) => {
    const props = { className: 'w-6 h-6' };
    switch (iconName) {
      case 'FileCode2':
        return <FileCode2 {...props} className="w-6 h-6 text-cyan-400" />;
      case 'TableProperties':
        return <TableProperties {...props} className="w-6 h-6 text-blue-400" />;
      case 'Binary':
        return <Binary {...props} className="w-6 h-6 text-indigo-400" />;
      case 'Database':
        return <Database {...props} className="w-6 h-6 text-emerald-400" />;
      case 'BarChart3':
        return <BarChart3 {...props} className="w-6 h-6 text-amber-400" />;
      case 'Sheet':
        return <Sheet {...props} className="w-6 h-6 text-emerald-500" />;
      case 'Sparkles':
        return <Sparkles {...props} className="w-6 h-6 text-purple-400" />;
      case 'Search':
        return <Search {...props} className="w-6 h-6 text-cyan-300" />;
      case 'TrendingUp':
        return <TrendingUp {...props} className="w-6 h-6 text-rose-400" />;
      case 'Presentation':
        return <Presentation {...props} className="w-6 h-6 text-orange-400" />;
      default:
        return <FileCode2 {...props} className="w-6 h-6 text-cyan-400" />;
    }
  };

  const filteredSkills =
    selectedCategory === 'All'
      ? skillsData
      : skillsData.filter((skill) => skill.category === selectedCategory);

  const getLevelBadge = (level: string) => {
    switch (level) {
      case 'Intermediate':
        return (
          <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-cyan-950/80 text-cyan-300 border border-cyan-800/60">
            Intermediate
          </span>
        );
      case 'Working Knowledge':
        return (
          <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-emerald-950/80 text-emerald-300 border border-emerald-800/60">
            Working Knowledge
          </span>
        );
      default:
        return (
          <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-800 text-slate-300 border border-slate-700">
            Familiar
          </span>
        );
    }
  };

  return (
    <section id="skills" className="py-20 relative bg-[#080d19]/80 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-xs font-mono text-cyan-400 tracking-wider uppercase bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-800/40 mb-3">
            Technical Stack
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Categorized Technical Skills
          </h2>
          <p className="text-sm text-slate-400 max-w-2xl mt-3">
            Honest and strictly verified competencies derived from resume and hands-on internship experience. No fabricated percentages.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full mt-4" />
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-white/5'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill: SkillItem, idx) => (
            <div
              key={idx}
              className="glass-card rounded-xl p-5 border border-white/10 flex flex-col justify-between group hover:border-cyan-500/30 transition-all"
            >
              <div>
                {/* Card Top: Icon, Title & Level Badge */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-slate-900/90 border border-white/10 group-hover:scale-105 transition-transform">
                      {getIcon(skill.iconName)}
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-base group-hover:text-cyan-300 transition-colors">
                        {skill.name}
                      </h3>
                      <span className="text-[11px] text-slate-400">{skill.category}</span>
                    </div>
                  </div>
                  <div>{getLevelBadge(skill.level)}</div>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {skill.description}
                </p>
              </div>

              {/* Tags */}
              <div className="pt-3 border-t border-white/5 flex flex-wrap gap-1.5">
                {skill.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/5"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Integrity Notice */}
        <div className="mt-10 p-4 rounded-xl bg-slate-950/60 border border-white/10 flex items-center justify-between flex-wrap gap-3 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <span>
              All listed tools and technologies represent practical hands-on application during academic coursework and Login 360 internship.
            </span>
          </div>
          <span className="text-cyan-400 font-mono text-[11px]">Zero Fabricated Claims</span>
        </div>
      </div>
    </section>
  );
};
