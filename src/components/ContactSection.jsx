import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { contactData, personalInfo } from '../data/portfolioData';
import { Mail, Phone, Linkedin, Download, Copy, Check, Send, ArrowUpRight, FileText, ExternalLink } from 'lucide-react';
import { SectionSakura } from './SakuraElements';

export const ContactSection = ({ onNotify, onOpenResume }) => {
  const [copiedField, setCopiedField] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedField(fieldName);
      if (onNotify) {
        onNotify(fieldName === 'email' ? 'Email copied' : 'Phone number copied');
      }
      setTimeout(() => setCopiedField(null), 2500);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setIsSubmitted(true);
    if (onNotify) {
      onNotify('Thank you for reaching out! Form recorded.');
    }
  };

  return (
    <section id="contact" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto overflow-hidden">
      {/* Concluding Sakura branch composition */}
      <SectionSakura position="right" type="branch" className="-top-8 opacity-70" />

      {/* Section Header */}
      <div className="max-w-2xl mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-teal-light border border-accent-teal/20 text-accent-teal-dark text-xs font-semibold uppercase tracking-wider mb-4">
          <span className="w-2 h-2 rounded-full bg-accent-teal inline-block"></span>
          <span>OPEN TO HR OPPORTUNITIES</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-5xl font-semibold text-ink tracking-tight mb-4">
          {contactData.headline}
        </h2>
        <p className="text-base sm:text-lg text-ink-muted leading-relaxed font-normal">
          {contactData.subhead}
        </p>
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start relative z-10">
        {/* Left Column: Direct Channels & Redesigned Resume Card */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-surface border border-line p-6 sm:p-8 rounded-3xl shadow-soft">
            <span className="text-xs font-mono uppercase tracking-widest text-ink-muted font-bold block mb-6">
              Direct Communication:
            </span>

            {/* Channels */}
            <div className="space-y-4">
              {/* Email */}
              <div className="p-4 rounded-2xl bg-canvas border border-line/80 flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-medium text-ink-muted">
                    <Mail className="w-3.5 h-3.5 text-accent-teal" />
                    <span>Email Address</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy(personalInfo.email, 'email')}
                    className="text-xs text-accent-teal hover:text-ink font-medium inline-flex items-center gap-1 focus:outline-none"
                    title="Copy Email"
                  >
                    {copiedField === 'email' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700 font-semibold">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="font-serif text-lg font-semibold text-ink hover:text-accent-teal transition-colors break-all"
                >
                  {personalInfo.email}
                </a>
              </div>

              {/* Phone */}
              <div className="p-4 rounded-2xl bg-canvas border border-line/80 flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-medium text-ink-muted">
                    <Phone className="w-3.5 h-3.5 text-accent-coral" />
                    <span>Phone Number</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy(personalInfo.phone, 'phone')}
                    className="text-xs text-accent-coral hover:text-ink font-medium inline-flex items-center gap-1 focus:outline-none"
                    title="Copy Phone Number"
                  >
                    {copiedField === 'phone' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700 font-semibold">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <a
                  href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                  className="font-serif text-lg font-semibold text-ink hover:text-accent-coral transition-colors"
                >
                  {personalInfo.phone}
                </a>
              </div>

              {/* LinkedIn */}
              <div className="p-4 rounded-2xl bg-canvas border border-line/80 flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-medium text-ink-muted">
                    <Linkedin className="w-3.5 h-3.5 text-accent-teal" />
                    <span>LinkedIn</span>
                  </div>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-accent-teal hover:text-ink font-medium inline-flex items-center gap-0.5"
                  >
                    <span>Open</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-serif text-lg font-semibold text-ink hover:text-accent-teal transition-colors"
                >
                  {personalInfo.linkedinDisplay}
                </a>
              </div>
            </div>
          </div>

          {/* Redesigned Official Resume Document Card */}
          <div className="bg-surface border border-line p-6 sm:p-7 rounded-3xl shadow-soft">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono uppercase tracking-widest text-ink-muted font-bold">
                {contactData.resumeCard.badge}
              </span>
              <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-accent-teal/10 text-accent-teal-dark border border-accent-teal/20 font-semibold">
                {contactData.resumeCard.formatBadge}
              </span>
            </div>
            <h3 className="font-serif text-2xl font-semibold text-ink mb-1">
              {contactData.resumeCard.title}
            </h3>
            <p className="text-xs sm:text-sm text-ink-muted mb-6 leading-relaxed">
              {contactData.resumeCard.description}
            </p>

            {/* Primary Action: VIEW RESUME ↗ */}
            <div className="space-y-3">
              <button
                type="button"
                onClick={onOpenResume}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-ink text-canvas text-sm font-semibold hover:bg-ink-dark transition-all shadow-md group"
              >
                <FileText className="w-4 h-4 text-accent-teal transition-transform group-hover:scale-110" />
                <span>VIEW RESUME ↗</span>
              </button>

              {/* Secondary Download Actions */}
              <div className="flex items-center justify-between gap-2 pt-2 border-t border-line/60">
                <a
                  href={personalInfo.pdfUrl}
                  download="Resume-Rishu.pdf"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent-teal hover:text-ink transition-colors py-1"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF ↓</span>
                </a>

                <a
                  href={personalInfo.docxUrl}
                  download="Resume-Rishu.docx"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-ink-muted hover:text-ink transition-colors py-1"
                  title="Download DOCX file"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download DOCX</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Send an Inquiry Form */}
        <div className="lg:col-span-7 bg-surface border border-line p-8 sm:p-10 rounded-3xl shadow-soft">
          <span className="text-xs font-mono uppercase tracking-widest text-ink-muted font-bold block mb-2">
            Send a Note
          </span>
          <h3 className="font-serif text-2xl font-semibold text-ink mb-2">
            Initiate Direct Dialogue
          </h3>
          <p className="text-xs sm:text-sm text-ink-muted mb-8 leading-relaxed">
            Inquiries regarding HR roles, campus talent opportunities, organizational initiatives, or academic dialogue.
          </p>

          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-8 rounded-2xl bg-canvas border border-line text-center flex flex-col items-center justify-center"
            >
              <div className="w-12 h-12 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-700 mb-4">
                <Check className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-2xl font-semibold text-ink mb-2">
                Thank You, {formData.name || 'Friend'}!
              </h4>
              <p className="text-sm text-ink-muted max-w-md mb-6 leading-relaxed">
                Your message details have been noted. You can also connect directly via{' '}
                <a href={`mailto:${personalInfo.email}`} className="text-accent-teal font-semibold underline">
                  {personalInfo.email}
                </a>{' '}
                or LinkedIn.
              </p>
              <button
                type="button"
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({ name: '', email: '', organization: '', message: '' });
                }}
                className="px-5 py-2 rounded-full border border-line text-xs font-semibold text-ink hover:bg-surface"
              >
                Send Another Note
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono font-bold uppercase tracking-wider text-ink-muted mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Eleanor Vance"
                    className="w-full px-4 py-3 rounded-xl bg-canvas border border-line text-sm text-ink focus:border-accent-teal focus:ring-1 focus:ring-accent-teal transition-all placeholder:text-ink-muted/50"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono font-bold uppercase tracking-wider text-ink-muted mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@organization.com"
                    className="w-full px-4 py-3 rounded-xl bg-canvas border border-line text-sm text-ink focus:border-accent-teal focus:ring-1 focus:ring-accent-teal transition-all placeholder:text-ink-muted/50"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="org" className="block text-xs font-mono font-bold uppercase tracking-wider text-ink-muted mb-2">
                  Organization / Topic
                </label>
                <input
                  type="text"
                  id="org"
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  placeholder="e.g. Campus Talent Team / Early-Career Opportunity"
                  className="w-full px-4 py-3 rounded-xl bg-canvas border border-line text-sm text-ink focus:border-accent-teal focus:ring-1 focus:ring-accent-teal transition-all placeholder:text-ink-muted/50"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-mono font-bold uppercase tracking-wider text-ink-muted mb-2">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share context regarding your team, role opportunities, or academic inquiries..."
                  className="w-full px-4 py-3 rounded-xl bg-canvas border border-line text-sm text-ink focus:border-accent-teal focus:ring-1 focus:ring-accent-teal transition-all placeholder:text-ink-muted/50 resize-y"
                />
              </div>

              <div className="pt-2 flex items-center justify-between flex-wrap gap-4">
                <span className="text-[11px] text-ink-muted/80">
                  Direct response within 24–48 hours.
                </span>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-ink text-canvas text-sm font-medium hover:bg-ink-dark transition-all shadow-sm group"
                >
                  <span>Send Message</span>
                  <Send className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
