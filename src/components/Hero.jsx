import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ChevronDown, GraduationCap, Shield, FileText } from 'lucide-react';
import { personalInfo, heroBadges } from '../data/portfolioData';
import { HeroSakura, SectionSakura } from './SakuraElements';

export const Hero = ({ onOpenResume }) => {
  const badgeIcons = [
    <GraduationCap className="w-3.5 h-3.5 text-accent-teal" />,
    <GraduationCap className="w-3.5 h-3.5 text-accent-coral" />,
    <Shield className="w-3.5 h-3.5 text-accent-teal" />,
  ];

  return (
    <section
      id="about"
      className="relative min-h-[90vh] sm:min-h-screen flex flex-col justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Subtle Scroll-Triggered Sakura Branch (Top Right) & Drifting Petals (Bottom Left) */}
      <HeroSakura />
      <SectionSakura position="left" type="petals" className="bottom-16 opacity-65" />

      <div className="max-w-5xl mx-auto w-full relative z-10 flex flex-col items-start">
        {/* Editorial Top Kicker */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-2 text-ink-muted text-xs sm:text-sm tracking-widest-plus uppercase font-medium mb-6"
        >
          <span className="w-8 h-[1px] bg-accent-coral inline-block"></span>
          <span>{personalInfo.role}</span>
          <span className="w-8 h-[1px] bg-accent-coral inline-block"></span>
        </motion.div>

        {/* Large Editorial Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.75, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-ink font-semibold leading-[1.08] sm:leading-[1.05] mb-8"
        >
          Rishu Khatak —{' '}
          <span className="block mt-1 sm:mt-2">
            Where Brand,{' '}
            <span className="font-serif italic font-normal text-accent-coral">
              Campaigns &amp;
            </span>
          </span>
          <span className="block mt-1 sm:mt-2">
            <span className="font-serif italic font-normal text-accent-teal">
              Data Analytics
            </span>{' '}
            Meet.
          </span>
        </motion.h1>

        {/* Credential Badges Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.65, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-8"
        >
          {heroBadges.map((badge, idx) => (
            <div
              key={badge.label}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface border border-line text-xs font-medium text-ink shadow-sm hover:border-ink/30 transition-colors"
            >
              {badgeIcons[idx]}
              <span className="font-semibold text-ink">{badge.label}</span>
              <span className="text-ink-muted/60 text-[11px]">•</span>
              <span className="text-ink-muted text-[11px]">{badge.institute}</span>
            </div>
          ))}
        </motion.div>

        {/* First-Person Positioning Statement */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.65, delay: 0.26, ease: [0.16, 1, 0.3, 1] }}
          className="text-base sm:text-lg md:text-xl text-ink-muted max-w-3xl leading-relaxed font-normal mb-10"
        >
          {personalInfo.bio}
        </motion.p>

        {/* Hero Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.65, delay: 0.34, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto"
        >
          <a
            href="#approach"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-ink text-canvas text-sm font-medium tracking-wide shadow-soft hover:bg-ink-dark hover:shadow-lift transition-all group"
          >
            <span>Explore My Approach</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          {onOpenResume && (
            <button
              type="button"
              onClick={onOpenResume}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-surface border border-line text-ink text-sm font-medium hover:bg-surface-subtle hover:border-ink/30 transition-all shadow-sm group"
            >
              <FileText className="w-4 h-4 text-accent-teal transition-transform group-hover:scale-110" />
              <span>View Resume (PDF)</span>
            </button>
          )}

          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-transparent text-ink-muted hover:text-ink text-sm font-medium transition-all"
          >
            <span>Initiate Conversation</span>
            <ChevronDown className="w-4 h-4" />
          </a>
        </motion.div>
      </div>

      {/* Subtle Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-16 sm:mt-24 flex flex-col items-center justify-center text-ink-muted text-[11px] tracking-widest-plus uppercase font-medium relative z-10"
      >
        <span className="mb-2">EXPLORE MY JOURNEY</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-4 h-4 text-accent-teal" />
        </motion.div>
      </motion.div>
    </section>
  );
};
