import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, ChevronRight, Activity } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Visual Showcase', href: '#showcase' },
    { label: 'Workflow', href: '#workflow' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#070a13]/85 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/40 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-600 via-cyan-500 to-emerald-400 p-[1px] shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-[#090e1c] rounded-[11px] flex items-center justify-center">
              <span className="font-mono font-bold text-cyan-400 text-lg">K</span>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                {personalInfo.name}
              </span>
              <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-mono bg-cyan-950/60 text-cyan-300 border border-cyan-800/40">
                <Activity className="w-2.5 h-2.5 mr-1 text-cyan-400 animate-pulse" />
                ANALYTICS
              </span>
            </div>
            <p className="text-[11px] text-slate-400 hidden sm:block">Economics & Data Specialist</p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3 py-1.5 text-xs xl:text-sm font-medium text-slate-300 hover:text-cyan-400 hover:bg-white/5 rounded-lg transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenResume}
            className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 transition-all hover:border-cyan-400"
          >
            <FileText className="w-4 h-4" />
            <span>Resume</span>
          </button>
          <a
            href="#contact"
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 font-medium hover:brightness-110 shadow-md shadow-cyan-500/25 transition-all"
          >
            <span>Get in Touch</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={onOpenResume}
            className="sm:hidden px-2.5 py-1.5 text-xs font-semibold rounded-md bg-cyan-500/10 text-cyan-400 border border-cyan-500/30"
          >
            Resume
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0f1d]/95 backdrop-blur-xl border-b border-white/10 px-4 pt-3 pb-6 animate-fadeIn">
          <nav className="flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-slate-200 hover:text-cyan-400 hover:bg-white/5 rounded-lg"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 px-4 text-sm font-semibold rounded-lg bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950"
              >
                Connect With Me
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
