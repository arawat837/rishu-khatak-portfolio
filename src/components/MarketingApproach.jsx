import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Target, Megaphone, BarChart3, Award, Sparkles, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { marketingApproachData } from '../data/portfolioData';
import { SectionSakura } from './SakuraElements';

export const MarketingApproach = () => {
  const [activePillarIndex, setActivePillarIndex] = useState(null);

  // Map icon component for each pillar
  const pillarIcons = [
    <Target className="w-5 h-5 text-accent-teal" />,
    <Megaphone className="w-5 h-5 text-accent-coral" />,
    <BarChart3 className="w-5 h-5 text-accent-teal" />,
    <Award className="w-5 h-5 text-accent-coral" />,
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
        ease: [0.21, 0.47, 0.32, 0.98],
      },
    },
  };

  return (
    <section
      id="approach"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-surface/50 border-t border-line overflow-hidden"
    >
      {/* Decorative Layer: Delicate Sakura line art in right margin */}
      <SectionSakura position="right" type="line-art" className="top-12 opacity-60" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-canvas border border-line text-xs font-mono font-medium text-accent-coral mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{marketingApproachData.kicker}</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-semibold text-ink tracking-tight mb-4">
            {marketingApproachData.headline}
          </h2>

          <p className="text-sm sm:text-base text-ink-muted leading-relaxed max-w-2xl mx-auto">
            {marketingApproachData.subhead}
          </p>
        </motion.div>

        {/* 4 Pillars Interactive Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-20 mb-14"
        >
          {marketingApproachData.pillars.map((pillar, idx) => {
            const isHovered = activePillarIndex === idx;
            const accentBorder = pillar.accent === 'teal' ? 'hover:border-accent-teal/50' : 'hover:border-accent-coral/50';
            const accentBg = pillar.accent === 'teal' ? 'bg-accent-teal/10' : 'bg-accent-coral/10';

            return (
              <motion.div
                key={pillar.title}
                variants={cardVariants}
                onMouseEnter={() => setActivePillarIndex(idx)}
                onMouseLeave={() => setActivePillarIndex(null)}
                className={`bg-surface border border-line p-6 sm:p-7 rounded-2xl shadow-soft hover:shadow-lift hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group cursor-default relative overflow-hidden ${accentBorder}`}
              >
                {/* Background subtle gradient sheen on hover */}
                <div
                  className={`absolute -top-24 -right-24 w-48 h-48 rounded-full pointer-events-none blur-2xl transition-opacity duration-500 ${accentBg} ${
                    isHovered ? 'opacity-80' : 'opacity-0'
                  }`}
                />

                <div className="relative z-10">
                  {/* Top Bar: Number Badge & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded-md bg-canvas text-ink-muted border border-line">
                      {pillar.number}
                    </span>
                    <div
                      className={`w-10 h-10 rounded-xl bg-canvas flex items-center justify-center border border-line shadow-sm transition-all duration-300 group-hover:scale-110 ${
                        pillar.accent === 'teal'
                          ? 'group-hover:border-accent-teal/40 group-hover:bg-accent-teal/5'
                          : 'group-hover:border-accent-coral/40 group-hover:bg-accent-coral/5'
                      }`}
                    >
                      {pillarIcons[idx]}
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-serif text-xl sm:text-2xl font-semibold text-ink mb-1 group-hover:text-accent-teal transition-colors tracking-tight">
                    {pillar.title}
                  </h3>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-accent-coral/90 block mb-3 font-mono">
                    {pillar.subtitle}
                  </span>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-ink-muted leading-relaxed mb-6 font-normal">
                    {pillar.description}
                  </p>
                </div>

                {/* Trait Pills */}
                <div className="pt-4 border-t border-line/60 relative z-10">
                  <div className="flex flex-wrap gap-1.5">
                    {pillar.traits.map((trait) => (
                      <span
                        key={trait}
                        className="text-[11px] font-medium px-2 py-0.5 rounded bg-canvas text-ink-muted border border-line/80 group-hover:border-ink/20 group-hover:text-ink transition-colors"
                      >
                        {trait}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Strategic Marketing Quote & Differentiator Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-canvas border border-line rounded-2xl p-6 sm:p-8 shadow-soft flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden"
        >
          <div className="max-w-2xl">
            <span className="text-xs font-mono font-bold tracking-widest-plus uppercase text-accent-teal block mb-2">
              THE CORE PERSPECTIVE
            </span>
            <blockquote className="font-serif italic text-base sm:text-lg text-ink font-normal leading-relaxed">
              "{marketingApproachData.quote}"
            </blockquote>
          </div>

          <div className="flex-shrink-0 flex items-center gap-3 bg-surface border border-line px-4 py-3 rounded-xl shadow-sm">
            <div className="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-700">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-semibold text-ink">Analytical &amp; Creative</div>
              <div className="text-[11px] text-ink-muted font-mono">Data Rigor + Brand Story</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MarketingApproach;
