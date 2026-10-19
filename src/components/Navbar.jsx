import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, FileText } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Approach', href: '#approach' },
  { label: 'Projects', href: '#projects' },
  { label: 'Journey', href: '#journey' },
  { label: 'Leadership', href: '#leadership' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar = ({ onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-canvas/90 backdrop-blur-md border-b border-line py-3 shadow-soft'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Monogram & Identity */}
        <a
          href="#top"
          onClick={(e) => handleNavClick(e, '#top')}
          className="flex items-center gap-3 group focus:outline-none"
          aria-label="Rishu Khatak Portfolio Home"
        >
          <div className="w-10 h-10 rounded-full bg-ink flex items-center justify-center text-canvas font-serif font-semibold text-sm transition-transform duration-300 group-hover:scale-105 shadow-sm">
            {personalInfo.initials}
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-bold tracking-tight text-ink text-base sm:text-lg leading-tight group-hover:text-accent-teal transition-colors">
              {personalInfo.name}
            </span>
            <span className="font-sans text-[10px] sm:text-[11px] tracking-widest-plus uppercase text-ink-muted font-medium font-mono">
              {personalInfo.role}
            </span>
          </div>
        </a>

        {/* Center / Right: Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-1 bg-surface/80 border border-line px-3 py-1.5 rounded-full shadow-soft" aria-label="Main Navigation">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? 'text-ink font-semibold'
                    : 'text-ink-muted hover:text-ink hover:bg-canvas/60'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavTab"
                    className="absolute inset-0 bg-canvas rounded-full shadow-sm -z-10 border border-line"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right CTA & Status Pill */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Resume Viewer Quick Trigger */}
          {onOpenResume && (
            <button
              type="button"
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-surface border border-line text-xs font-semibold text-ink hover:border-ink/30 transition-colors shadow-sm"
              title="View PDF Resume"
            >
              <FileText className="w-3.5 h-3.5 text-accent-teal" />
              <span>Resume</span>
            </button>
          )}

          {/* Availability Status */}
          <div className="hidden 2xl:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-800 text-xs font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
            </span>
            <span>{personalInfo.availability}</span>
          </div>

          {/* Connect CTA Button */}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-ink text-canvas text-xs sm:text-sm font-medium tracking-wide transition-all duration-200 hover:bg-ink-dark hover:shadow-lift group"
          >
            <span>Let's Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="xl:hidden p-2 rounded-lg text-ink hover:bg-surface border border-line focus:outline-none"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="xl:hidden bg-canvas/98 border-b border-line shadow-editorial px-4 pt-4 pb-6 overflow-hidden"
          >
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-800 text-xs font-medium w-full mb-2">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-600 inline-block"></span>
                  <span>{personalInfo.availability}</span>
                </div>
                {onOpenResume && (
                  <button
                    type="button"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenResume();
                    }}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-accent-teal"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>View Resume (PDF)</span>
                  </button>
                )}
              </div>

              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-surface text-ink font-semibold border border-line'
                        : 'text-ink-muted hover:text-ink hover:bg-surface/50'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}

              <div className="pt-3 border-t border-line mt-2">
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-ink text-canvas text-sm font-medium shadow-sm hover:bg-ink-dark"
                >
                  <span>Let's Connect</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
