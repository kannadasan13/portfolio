import React from 'react';
import { X, CheckCircle2, Layers, Sparkles } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto glass-panel bg-[#0b1222]/95 rounded-2xl border border-white/20 p-6 sm:p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 pr-8">
          <span className="inline-block px-2.5 py-1 rounded text-xs font-mono bg-cyan-950/80 text-cyan-300 border border-cyan-800/50 mb-2">
            {project.category}
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-1">
            {project.title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">{project.subtitle}</p>
        </div>

        {/* Technologies Used Bar */}
        <div className="flex flex-wrap gap-2 mb-6 pb-4 border-b border-white/10">
          {project.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/5 text-cyan-300 border border-cyan-500/20"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Business Problem & Context */}
        <div className="space-y-6 text-sm text-slate-300">
          <div className="p-4 rounded-xl bg-slate-900/80 border border-white/5">
            <h3 className="font-semibold text-white text-sm mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-rose-400 inline-block" />
              Business Problem
            </h3>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-300">
              {project.businessProblem}
            </p>
            {project.datasetContext && (
              <p className="mt-2 text-xs text-slate-400 italic">
                <strong className="text-slate-300 not-italic">Dataset Context:</strong>{' '}
                {project.datasetContext}
              </p>
            )}
          </div>

          {/* Analytical Process Steps */}
          <div>
            <h3 className="font-bold text-white text-sm mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4 text-cyan-400" />
              Analytical Methodology & Execution Steps
            </h3>
            <div className="space-y-3">
              {project.analyticalProcess.map((step, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-white/5 border border-white/5"
                >
                  <div className="w-6 h-6 rounded-lg bg-cyan-950 text-cyan-300 font-mono text-xs flex items-center justify-center flex-shrink-0 border border-cyan-800/40">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-xs sm:text-sm mb-0.5">
                      {step.step}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Insights & Findings */}
          <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/20">
            <h3 className="font-bold text-emerald-300 text-sm mb-2.5 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              Key Insights & Documented Findings
            </h3>
            <ul className="space-y-2">
              {project.keyInsights.map((insight, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>{insight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Outcome & Impact */}
          <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-500/20">
            <h3 className="font-bold text-cyan-300 text-sm mb-1">
              Final Project Outcome
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.outcome}
            </p>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="mt-6 pt-4 border-t border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold rounded-lg bg-slate-800 text-slate-200 hover:bg-slate-700 transition-colors"
          >
            Close Overview
          </button>
        </div>
      </div>
    </div>
  );
};
