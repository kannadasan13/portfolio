import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  Copy,
  Check,
  AlertCircle,
  Clock,
  Sparkles
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) errs.message = 'Please enter your message or inquiry';
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitted(true);
  };

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
    formData.subject || 'Data Analyst Inquiry'
  )}&body=${encodeURIComponent(
    `Hello Kannadasan,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`
  )}`;

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <span className="text-xs font-mono text-cyan-400 tracking-wider uppercase bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-800/40 mb-3">
            Direct Communication
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Get in Touch
          </h2>
          <p className="text-sm text-slate-400 max-w-2xl mt-3">
            Open for Data Analyst, Business Analyst, and Analytics Intern positions. Available for immediate onboarding and relocation.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto">
          {/* Left Column: Direct Contact Information Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                <span>Contact Details</span>
              </h3>

              {/* Email Card */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-white/5 flex items-center justify-between group">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-cyan-950 text-cyan-400 border border-cyan-800/40">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block">Direct Email</span>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(personalInfo.email, 'email')}
                  className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10"
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Phone Card */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-white/5 flex items-center justify-between group">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-emerald-950 text-emerald-400 border border-emerald-800/40">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block">Phone & WhatsApp</span>
                    <a
                      href={`tel:${personalInfo.phone}`}
                      className="text-sm font-semibold text-white group-hover:text-emerald-300 transition-colors"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(personalInfo.phone, 'phone')}
                  className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10"
                  title="Copy phone number"
                  aria-label="Copy phone number"
                >
                  {copiedPhone ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-white/5 flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-amber-950 text-amber-400 border border-amber-800/40">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400 block">Location</span>
                  <div className="text-sm font-semibold text-white">
                    {personalInfo.location}
                  </div>
                </div>
              </div>

              {/* Availability Notice */}
              <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/20 text-xs text-slate-300 space-y-2">
                <div className="flex items-center gap-1.5 text-cyan-300 font-mono font-semibold">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Immediate Availability</span>
                </div>
                <p className="leading-relaxed">
                  Ready to join for entry-level Data Analyst, Business Intelligence, or analytics internship roles.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Accessible Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 bg-[#090e1d]/90">
              <h3 className="text-xl font-bold text-white mb-2">Send a Message</h3>
              <p className="text-xs text-slate-400 mb-6">
                Recruiters and hiring managers can reach out directly using this form.
              </p>

              {isSubmitted ? (
                <div className="p-6 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">Inquiry Prepared!</h4>
                    <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
                      Thank you, <strong className="text-emerald-300">{formData.name}</strong>. You can send this message directly via your email client below:
                    </p>
                  </div>
                  <div className="pt-2 flex flex-wrap justify-center gap-3">
                    <a
                      href={mailtoUrl}
                      className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 font-bold text-xs flex items-center gap-2 shadow-lg shadow-cyan-500/25"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Launch Default Email App</span>
                    </a>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ name: '', email: '', subject: '', message: '' });
                      }}
                      className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-semibold"
                    >
                      Reset Form
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-xs font-mono text-slate-300 mb-1.5">
                        Your Name / Organization <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. John Doe / Tech Recruiter"
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all ${
                          errors.name ? 'border-rose-500' : 'border-white/10'
                        }`}
                      />
                      {errors.name && (
                        <p className="mt-1 text-[11px] text-rose-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-mono text-slate-300 mb-1.5">
                        Your Email Address <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="recruiter@company.com"
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all ${
                          errors.email ? 'border-rose-500' : 'border-white/10'
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-[11px] text-rose-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-xs font-mono text-slate-300 mb-1.5">
                      Subject / Role Title
                    </label>
                    <input
                      type="text"
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Opportunity: Junior Data Analyst / Analytics Intern"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-mono text-slate-300 mb-1.5">
                      Message / Job Details <span className="text-rose-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share details about the role, team, or schedule an interview..."
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all resize-none ${
                        errors.message ? 'border-rose-500' : 'border-white/10'
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-[11px] text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 hover:brightness-110 shadow-lg shadow-cyan-500/25 transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Inquiry to Kannadasan</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
