import React, { useState } from 'react';
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';
import { BarChart3, Activity } from 'lucide-react';

const monthlyTrendData = [
  { period: 'Jan', volume: 4200, target: 3800, variance: 400 },
  { period: 'Feb', volume: 5100, target: 4500, variance: 600 },
  { period: 'Mar', volume: 6800, target: 5600, variance: 1200 },
  { period: 'Apr', volume: 7200, target: 7000, variance: 200 },
  { period: 'May', volume: 8400, target: 7500, variance: 900 },
  { period: 'Jun', volume: 9100, target: 8200, variance: 900 },
  { period: 'Jul', volume: 9800, target: 8900, variance: 900 },
  { period: 'Aug', volume: 10500, target: 9400, variance: 1100 }
];

const categoryDistributionData = [
  { category: 'Segment A', actual: 340, benchmark: 280 },
  { category: 'Segment B', actual: 480, benchmark: 420 },
  { category: 'Segment C', actual: 290, benchmark: 310 },
  { category: 'Segment D', actual: 610, benchmark: 540 },
  { category: 'Segment E', actual: 440, benchmark: 390 }
];

const statisticalDistributionData = [
  { bin: '0-20', frequency: 45, expected: 50 },
  { bin: '21-40', frequency: 120, expected: 115 },
  { bin: '41-60', frequency: 310, expected: 290 },
  { bin: '61-80', frequency: 215, expected: 230 },
  { bin: '81-100', frequency: 85, expected: 90 }
];

export const VisualizationShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'trend' | 'category' | 'stats'>('trend');

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-[#090e1c]/95 border border-cyan-500/40 p-3 rounded-lg shadow-xl text-xs">
          <p className="font-mono text-cyan-300 font-semibold mb-1">{label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={`item-${index}`} style={{ color: entry.color }} className="font-mono">
              {entry.name}: {entry.value.toLocaleString()}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <section id="showcase" className="py-20 relative bg-[#070b16] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-xs font-mono text-cyan-400 tracking-wider uppercase bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-800/40 mb-3">
            Interactive Visual Showcase
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Data Visualization & KPI Dashboard Simulation
          </h2>
          <p className="text-sm text-slate-400 max-w-2xl mt-3">
            Interactive representation of analytical dashboard concepts, KPI metric cards, and variance distributions built with analytical rigor.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full mt-4" />
        </div>

        {/* Dashboard Frame Container */}
        <div className="glass-panel rounded-2xl border border-white/10 overflow-hidden shadow-2xl bg-[#090e1d]/85">
          {/* Top Control Bar */}
          <div className="p-4 sm:p-5 border-b border-white/10 flex flex-wrap items-center justify-between gap-4 bg-slate-900/60">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-cyan-950 text-cyan-400 border border-cyan-800/40">
                <BarChart3 className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-bold text-white text-sm">Analytics Explorer Dashboard</h3>
                <span className="text-[11px] font-mono text-slate-400">
                  Power BI & Python Analytics Simulation
                </span>
              </div>
            </div>

            {/* View Switcher Tabs */}
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-950/80 border border-white/10">
              <button
                onClick={() => setActiveTab('trend')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeTab === 'trend'
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Trend & Variance
              </button>
              <button
                onClick={() => setActiveTab('category')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeTab === 'category'
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Category Comparison
              </button>
              <button
                onClick={() => setActiveTab('stats')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeTab === 'stats'
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Statistical Distribution
              </button>
            </div>
          </div>

          {/* Quick KPI Metric Ribbon */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 border-b border-white/5 bg-slate-950/40">
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/5">
              <span className="text-[11px] text-slate-400 block mb-0.5">Total Observations</span>
              <div className="text-xl font-bold font-mono text-white">51,900</div>
              <span className="text-[10px] text-emerald-400 font-mono">100% Processed</span>
            </div>
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/5">
              <span className="text-[11px] text-slate-400 block mb-0.5">Mean Performance</span>
              <div className="text-xl font-bold font-mono text-white">+14.2%</div>
              <span className="text-[10px] text-cyan-400 font-mono">Above Benchmark</span>
            </div>
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/5">
              <span className="text-[11px] text-slate-400 block mb-0.5">Data Quality Score</span>
              <div className="text-xl font-bold font-mono text-white">99.8%</div>
              <span className="text-[10px] text-emerald-400 font-mono">Zero Null Leakage</span>
            </div>
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/5">
              <span className="text-[11px] text-slate-400 block mb-0.5">Target Variance</span>
              <div className="text-xl font-bold font-mono text-white">+5,600</div>
              <span className="text-[10px] text-cyan-400 font-mono">Cumulative Delta</span>
            </div>
          </div>

          {/* Main Chart Area */}
          <div className="p-6">
            {activeTab === 'trend' && (
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="font-semibold text-white text-sm">
                      Monthly Trend & Benchmark Variance (Python / Power BI Model)
                    </h4>
                    <p className="text-xs text-slate-400">
                      Demonstrates time-series tracking with positive variance indicators across 8 months.
                    </p>
                  </div>
                  <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950/60 px-2.5 py-1 rounded border border-cyan-800/40">
                    Area & Variance Plot
                  </span>
                </div>
                <div className="h-[320px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                      data={monthlyTrendData}
                      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                    >
                      <defs>
                        <linearGradient id="colorVolume" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.6} />
                          <stop offset="95%" stopColor="#06b6d4" stopOpacity={0.0} />
                        </linearGradient>
                        <linearGradient id="colorTarget" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#10b981" stopOpacity={0.4} />
                          <stop offset="95%" stopColor="#10b981" stopOpacity={0.0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                      <XAxis dataKey="period" stroke="#64748b" textAnchor="middle" />
                      <YAxis stroke="#64748b" />
                      <Tooltip content={<CustomTooltip />} />
                      <Legend />
                      <Area
                        type="monotone"
                        dataKey="volume"
                        name="Actual Volume"
                        stroke="#06b6d4"
                        strokeWidth={2}
                        fillOpacity={1}
                        fill="url(#colorVolume)"
                      />
                      <Area
                        type="monotone"
                        dataKey="target"
                        name="Baseline Target"
                        stroke="#10b981"
                        strokeWidth={2}
                        fillOpacity={1}
                        fill="url(#colorTarget)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            )}

            {activeTab === 'category' && (
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="font-semibold text-white text-sm">
                      Category Performance vs Benchmark (Comparative Bar Analysis)
                    </h4>
                    <p className="text-xs text-slate-400">
                      Comparing cross-segment performance against historical benchmarks.
                    </p>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded border border-emerald-800/40">
                    Dual Bar Comparison
                  </span>
                </div>
                <div className="h-[320px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={categoryDistributionData}
                      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                      <XAxis dataKey="category" stroke="#64748b" />
                      <YAxis stroke="#64748b" />
                      <Tooltip content={<CustomTooltip />} />
                      <Legend />
                      <Bar dataKey="actual" name="Actual Units" fill="#06b6d4" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="benchmark" name="Benchmark Units" fill="#6366f1" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            )}

            {activeTab === 'stats' && (
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="font-semibold text-white text-sm">
                      Frequency Distribution & Statistical Normalcy Curve
                    </h4>
                    <p className="text-xs text-slate-400">
                      Evaluating dataset skewness and variance compared to standard distribution curves.
                    </p>
                  </div>
                  <span className="text-[11px] font-mono text-violet-400 bg-violet-950/60 px-2.5 py-1 rounded border border-violet-800/40">
                    Distribution & Line Plot
                  </span>
                </div>
                <div className="h-[320px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={statisticalDistributionData}
                      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                      <XAxis dataKey="bin" stroke="#64748b" />
                      <YAxis stroke="#64748b" />
                      <Tooltip content={<CustomTooltip />} />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="frequency"
                        name="Observed Frequency"
                        stroke="#06b6d4"
                        strokeWidth={3}
                        dot={{ r: 4 }}
                      />
                      <Line
                        type="monotone"
                        dataKey="expected"
                        name="Expected Normal"
                        stroke="#f59e0b"
                        strokeWidth={2}
                        strokeDasharray="5 5"
                        dot={{ r: 3 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            )}
          </div>

          {/* Footer Annotations */}
          <div className="p-4 bg-slate-950/80 border-t border-white/5 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400 font-mono">
            <div className="flex items-center gap-2">
              <Activity className="w-3.5 h-3.5 text-cyan-400" />
              <span>Built to demonstrate Power BI, Excel & Python visualization methodologies</span>
            </div>
            <span className="text-slate-500">Interactive Preview</span>
          </div>
        </div>
      </div>
    </section>
  );
};
