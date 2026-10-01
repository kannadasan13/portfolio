import React, { useState } from 'react';
import {
  FolderKanban,
  ArrowRight,
  TrendingUp,
  Sparkles,
  Database,
  BarChart3,
  CheckCircle2
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { ProjectItem } from '../types';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const getProjectIcon = (category: string) => {
    if (category.includes('Python')) return <TrendingUp className="w-5 h-5 text-cyan-400" />;
    if (category.includes('Cleaning')) return <Sparkles className="w-5 h-5 text-emerald-400" />;
    if (category.includes('Intelligence') || category.includes('BI'))
      return <BarChart3 className="w-5 h-5 text-amber-400" />;
    if (category.includes('SQL')) return <Database className="w-5 h-5 text-indigo-400" />;
    return <FolderKanban className="w-5 h-5 text-cyan-400" />;
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <span className="text-xs font-mono text-cyan-400 tracking-wider uppercase bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-800/40 mb-3">
            Analytical Case Studies
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Data Analytics Projects & Modules
          </h2>
          <p className="text-sm text-slate-400 max-w-2xl mt-3">
            Real analytical workflows executed during hands-on training and internship at Login 360, utilizing Python, SQL, Power BI, and statistical methods.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full mt-4" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectsData.map((project: ProjectItem) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl p-6 border border-white/10 flex flex-col justify-between group hover:border-cyan-500/40 transition-all"
            >
              <div>
                {/* Header: Category & Icon */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-cyan-950/70 text-cyan-300 border border-cyan-800/50">
                    {project.category}
                  </span>
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:scale-105 transition-transform">
                    {getProjectIcon(project.category)}
                  </div>
                </div>

                {/* Project Title & Subtitle */}
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                  {project.title}
                </h3>
                <p className="text-xs text-slate-400 mb-4 line-clamp-2">
                  {project.subtitle}
                </p>

                {/* Business Problem Box */}
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-white/5 mb-4">
                  <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wide block mb-1">
                    Problem Solved
                  </span>
                  <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed">
                    {project.businessProblem}
                  </p>
                </div>

                {/* Key Insights Preview */}
                <div className="mb-4 space-y-1.5">
                  <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wide block mb-1">
                    Key Findings
                  </span>
                  {project.keyInsights.slice(0, 2).map((insight, iIdx) => (
                    <div key={iIdx} className="flex items-start gap-1.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{insight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 mb-5 pt-3 border-t border-white/5">
                  {project.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full py-2.5 px-4 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 hover:text-cyan-200 border border-cyan-500/30 hover:border-cyan-400 text-xs font-semibold flex items-center justify-center gap-2 transition-all"
                >
                  <span>Explore Full Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Deep Case Study Review */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
};
