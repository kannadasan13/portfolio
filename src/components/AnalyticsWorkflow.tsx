import React, { useState } from 'react';
import {
  HelpCircle,
  Download,
  Sparkles,
  Compass,
  TrendingUp,
  LayoutDashboard,
  Presentation,
  CheckCircle2
} from 'lucide-react';
import { workflowSteps } from '../data/portfolioData';

export const AnalyticsWorkflow: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);

  const getWorkflowIcon = (name: string) => {
    switch (name) {
      case 'HelpCircle':
        return <HelpCircle className="w-5 h-5 text-cyan-400" />;
      case 'Download':
        return <Download className="w-5 h-5 text-blue-400" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-emerald-400" />;
      case 'Compass':
        return <Compass className="w-5 h-5 text-violet-400" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-amber-400" />;
      case 'LayoutDashboard':
        return <LayoutDashboard className="w-5 h-5 text-cyan-300" />;
      case 'Presentation':
        return <Presentation className="w-5 h-5 text-rose-400" />;
      default:
        return <HelpCircle className="w-5 h-5 text-cyan-400" />;
    }
  };

  const selectedStepData =
    workflowSteps.find((s) => s.stepNumber === activeStep) || workflowSteps[0];

  return (
    <section id="workflow" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <span className="text-xs font-mono text-cyan-400 tracking-wider uppercase bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-800/40 mb-3">
            Systematic Methodology
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            End-to-End Analytical Workflow
          </h2>
          <p className="text-sm text-slate-400 max-w-2xl mt-3">
            A structured 7-phase methodology transforming ambiguous business questions into verified, data-backed operational decisions.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full mt-4" />
        </div>

        {/* Step Progression Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5 mb-10">
          {workflowSteps.map((step) => {
            const isActive = step.stepNumber === activeStep;
            return (
              <button
                key={step.stepNumber}
                onClick={() => setActiveStep(step.stepNumber)}
                className={`p-3 rounded-xl border text-left transition-all ${
                  isActive
                    ? 'bg-cyan-500/15 border-cyan-400 shadow-lg shadow-cyan-500/10'
                    : 'bg-slate-900/60 border-white/5 hover:border-white/20 text-slate-400 hover:text-slate-200'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`text-xs font-mono px-2 py-0.5 rounded font-bold ${
                      isActive ? 'bg-cyan-400 text-slate-950' : 'bg-white/5 text-slate-400'
                    }`}
                  >
                    0{step.stepNumber}
                  </span>
                  {getWorkflowIcon(step.iconName)}
                </div>
                <div
                  className={`text-xs font-bold truncate ${
                    isActive ? 'text-white' : 'text-slate-300'
                  }`}
                >
                  {step.title}
                </div>
                <div className="text-[10px] text-slate-400 truncate">{step.subtitle}</div>
              </button>
            );
          })}
        </div>

        {/* Deep Dive Card for Selected Step */}
        <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/10 relative overflow-hidden bg-[#0a1020]/90">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-cyan-950 text-cyan-400 flex items-center justify-center font-mono font-bold text-sm border border-cyan-800/40">
                  {selectedStepData.stepNumber}
                </span>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Phase {selectedStepData.stepNumber}: {selectedStepData.title}
                  </h3>
                  <p className="text-xs text-cyan-400 font-mono">
                    {selectedStepData.subtitle}
                  </p>
                </div>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed">
                {selectedStepData.description}
              </p>

              {/* Tools Employed in this step */}
              <div className="pt-2">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-2">
                  Tools & Capabilities Applied
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedStepData.tools.map((tool, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-mono px-3 py-1 rounded-md bg-cyan-950/70 text-cyan-300 border border-cyan-800/40 flex items-center gap-1.5"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right illustration / navigation helper */}
            <div className="lg:col-span-4 p-5 rounded-xl bg-slate-900/80 border border-white/5 flex flex-col justify-between">
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wide block mb-3">
                Workflow Progress
              </span>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-slate-300">Phase Completion</span>
                  <span className="text-cyan-400">
                    {Math.round((selectedStepData.stepNumber / workflowSteps.length) * 100)}%
                  </span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-400 to-emerald-400 transition-all duration-300"
                    style={{
                      width: `${(selectedStepData.stepNumber / workflowSteps.length) * 100}%`
                    }}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                <button
                  disabled={activeStep === 1}
                  onClick={() => setActiveStep((prev) => Math.max(1, prev - 1))}
                  className="px-3 py-1.5 rounded-lg text-xs font-mono bg-white/5 hover:bg-white/10 text-slate-300 disabled:opacity-30 disabled:pointer-events-none"
                >
                  &larr; Prev Step
                </button>
                <button
                  disabled={activeStep === workflowSteps.length}
                  onClick={() => setActiveStep((prev) => Math.min(workflowSteps.length, prev + 1))}
                  className="px-3 py-1.5 rounded-lg text-xs font-mono bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/30 disabled:opacity-30 disabled:pointer-events-none flex items-center gap-1"
                >
                  Next Step &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
