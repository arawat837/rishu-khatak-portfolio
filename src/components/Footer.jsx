import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowUp } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-ink-dark text-canvas border-t border-line/20 pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-line/15">
          {/* Brand Column */}
          <div className="md:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-canvas text-ink flex items-center justify-center font-serif font-bold text-sm">
                {personalInfo.initials}
              </div>
              <div>
                <span className="font-serif text-xl font-bold tracking-tight text-canvas block">
                  {personalInfo.name}
                </span>
                <span className="font-sans text-[10px] tracking-widest uppercase text-canvas/60 font-semibold">
                  {personalInfo.role}
                </span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-canvas/70 max-w-sm leading-relaxed mb-6 font-normal">
              Synthesizing analytical rigor, structured campus leadership, and people-focused HR strategy to build collaborative workplaces.
            </p>
            <p className="text-xs text-accent-teal font-serif italic">
              &ldquo;{personalInfo.tagline}&rdquo;
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-4">
            <span className="text-xs font-mono uppercase tracking-widest text-canvas/50 font-bold block mb-4">
              Navigation Index
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs text-canvas/80">
              <a href="#about" className="hover:text-canvas transition-colors py-1">
                01. About &amp; Profile
              </a>
              <a href="#approach" className="hover:text-canvas transition-colors py-1">
                02. HR Approach
              </a>
              <a href="#journey" className="hover:text-canvas transition-colors py-1">
                03. Journey Timeline
              </a>
              <a href="#leadership" className="hover:text-canvas transition-colors py-1">
                04. NCC Leadership
              </a>
              <a href="#projects" className="hover:text-canvas transition-colors py-1">
                05. Case Studies
              </a>
              <a href="#skills" className="hover:text-canvas transition-colors py-1">
                06. Competency Matrix
              </a>
              <a href="#education" className="hover:text-canvas transition-colors py-1">
                07. Education
              </a>
              <a href="#contact" className="hover:text-canvas transition-colors py-1">
                08. Direct Contact
              </a>
            </div>
          </div>

          {/* Direct Coordinates & Back to Top */}
          <div className="md:col-span-3 flex flex-col justify-between items-start md:items-end">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-canvas/50 font-bold block mb-4 md:text-right">
                Coordinates
              </span>
              <div className="text-xs text-canvas/80 space-y-1 md:text-right">
                <p>{personalInfo.email}</p>
                <p>{personalInfo.phone}</p>
                <p className="text-canvas/60">{personalInfo.location}</p>
              </div>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              className="mt-8 md:mt-0 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-canvas/20 text-canvas text-xs font-medium hover:bg-canvas/10 transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-canvas/50">
          <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
          <p className="font-serif italic text-canvas/60">
            Building a career around people, purpose and progress.
          </p>
        </div>
      </div>
    </footer>
  );
};
