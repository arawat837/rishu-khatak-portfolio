import React from 'react';
import { motion } from 'framer-motion';
import { beyondResumeData } from '../data/portfolioData';
import { Trophy, Shield, Terminal, Heart, Compass, Activity, Grid } from 'lucide-react';
import { SectionSakura } from './SakuraElements';

export const BeyondResume = () => {
  const sportIcons = [
    <Trophy className="w-5 h-5 text-accent-coral" />,
    <Shield className="w-5 h-5 text-accent-teal" />,
    <Terminal className="w-5 h-5 text-accent-coral" />,
  ];

  const interestIcons = [
    <Heart className="w-4 h-4 text-accent-teal" />,
    <Compass className="w-4 h-4 text-accent-coral" />,
    <Activity className="w-4 h-4 text-accent-teal" />,
    <Grid className="w-4 h-4 text-accent-coral" />,
  ];

  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-surface/70 to-transparent overflow-hidden">
      {/* Subtle Sakura flower & cluster accents in viewport margins */}
      <SectionSakura position="right" type="flower" className="top-12 opacity-75" />
      <SectionSakura position="left" type="cluster" className="bottom-12 opacity-70" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
        >
          <div>
            <span className="text-xs sm:text-sm tracking-widest-plus uppercase text-accent-teal font-semibold">
              {beyondResumeData.kicker}
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-semibold text-ink tracking-tight mt-2">
              {beyondResumeData.headline}
            </h2>
          </div>
          <p className="text-sm sm:text-base text-ink-muted max-w-md font-normal leading-relaxed">
            {beyondResumeData.subhead}
          </p>
        </motion.div>

        {/* Sports & Extracurriculars Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {beyondResumeData.sports.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-surface border border-line p-6 rounded-2xl shadow-soft hover:shadow-lift transition-all hover:border-ink/20 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-canvas border border-line">
                    {sportIcons[idx]}
                  </div>
                  <span className="text-xs font-mono font-semibold text-accent-teal px-2.5 py-0.5 rounded bg-canvas border border-line">
                    {item.date}
                  </span>
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider font-semibold text-ink-muted block mb-1">
                  {item.category}
                </span>
                <h3 className="font-serif text-xl font-semibold text-ink mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interests Grid */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.65, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="p-8 rounded-2xl bg-surface border border-line shadow-soft"
        >
          <div className="flex items-center gap-2 mb-6">
            <span className="text-xs font-mono uppercase tracking-widest text-ink-muted font-bold">
              Personal Pursuits &amp; Mindset:
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {beyondResumeData.interests.map((interest, idx) => (
              <div
                key={interest.name}
                className="p-4 rounded-xl bg-canvas border border-line/80 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-serif text-lg font-semibold text-ink">
                      {interest.name}
                    </span>
                    <div className="p-1.5 rounded-lg bg-surface border border-line">
                      {interestIcons[idx]}
                    </div>
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-accent-coral font-semibold block mb-2">
                    {interest.category}
                  </span>
                  <p className="text-xs text-ink-muted leading-relaxed">
                    {interest.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
