import React from 'react';
import { motion } from 'framer-motion';
import { editorialNarrative } from '../data/portfolioData';
import { Binary, ShieldCheck, Users, Sparkles } from 'lucide-react';
import { SectionSakura } from './SakuraElements';

export const ProfileIntro = () => {
  const icons = [
    <Users className="w-5 h-5 text-accent-teal" />,
    <ShieldCheck className="w-5 h-5 text-accent-coral" />,
    <Binary className="w-5 h-5 text-accent-teal" />,
  ];

  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto overflow-hidden">
      {/* Decorative Layer: Safe Zone in top-left margin */}
      <SectionSakura position="left" type="cluster" className="-top-6 opacity-60" />

      {/* Section Header */}
      <div className="mb-14 relative z-10">
        <span className="text-xs sm:text-sm tracking-widest-plus uppercase text-accent-teal font-semibold font-mono">
          {editorialNarrative.kicker}
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl font-semibold text-ink tracking-tight mt-2">
          {editorialNarrative.headline}
        </h2>
      </div>

      {/* Two Column Narrative */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-16 relative z-10">
        {/* Left Column: Personal HR Perspective Statement Card */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-6 bg-surface border border-line p-8 sm:p-10 rounded-3xl shadow-soft relative z-20 overflow-hidden"
        >
          <div className="w-12 h-1 bg-accent-coral mb-6 rounded-full" />
          <blockquote className="font-serif text-2xl sm:text-3xl text-ink font-normal leading-snug mb-6">
            &ldquo;{editorialNarrative.quote}&rdquo;
          </blockquote>
          <p className="text-xs sm:text-sm text-ink-muted uppercase tracking-wider font-semibold font-mono">
            Professional Focus • Human Resources
          </p>
          <div className="mt-4 pt-4 border-t border-line/60 flex items-center justify-between text-xs text-ink-muted">
            <span className="font-medium text-ink">UPES MBA (Human Resource)</span>
            <span>DU B.Sc. (Hons.) CS</span>
          </div>
        </motion.div>

        {/* Right Column: First-Person HR Narrative */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-6 flex flex-col gap-6 text-base sm:text-lg text-ink-muted leading-relaxed font-normal relative z-10"
        >
          {editorialNarrative.paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
          <div className="p-4 rounded-2xl bg-canvas border border-line text-sm text-ink font-medium flex items-center gap-3 shadow-xs">
            <span className="w-2.5 h-2.5 rounded-full bg-accent-teal inline-block shrink-0"></span>
            <span>
              <strong>Professional Perspective:</strong> {editorialNarrative.differentiator}
            </span>
          </div>
        </motion.div>
      </div>

      {/* Three Pillars Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-20">
        {editorialNarrative.pillarsSummary.map((pillar, idx) => (
          <motion.div
            key={pillar.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            className="bg-surface border border-line p-6 rounded-2xl shadow-soft hover:shadow-lift transition-all hover:border-ink/20 group"
          >
            <div className="w-10 h-10 rounded-xl bg-surface-subtle flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
              {icons[idx]}
            </div>
            <h3 className="font-serif text-lg font-semibold text-ink mb-2">
              {pillar.title}
            </h3>
            <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
              {pillar.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
