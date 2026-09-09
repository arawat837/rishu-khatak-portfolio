import React from 'react';
import { motion } from 'framer-motion';
import { hrApproachData } from '../data/portfolioData';
import { HeartHandshake, Compass, CalendarCheck2, LineChart } from 'lucide-react';
import { SectionSakura } from './SakuraElements';

export const HRApproach = () => {
  const icons = [
    <HeartHandshake className="w-5 h-5 text-accent-teal" />,
    <Compass className="w-5 h-5 text-accent-coral" />,
    <CalendarCheck2 className="w-5 h-5 text-accent-teal" />,
    <LineChart className="w-5 h-5 text-accent-coral" />,
  ];

  return (
    <section id="approach" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-surface/50 border-t border-line overflow-hidden">
      {/* Decorative Layer: Safe Zone in right margin */}
      <SectionSakura position="right" type="line-art" className="top-12 opacity-60" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs sm:text-sm tracking-widest-plus uppercase text-accent-coral font-semibold font-mono">
            {hrApproachData.kicker}
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-semibold text-ink tracking-tight mt-2 mb-4">
            {hrApproachData.headline}
          </h2>
          <p className="text-sm sm:text-base text-ink-muted leading-relaxed">
            {hrApproachData.subhead}
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-20">
          {hrApproachData.pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-surface border border-line p-6 sm:p-7 rounded-2xl shadow-soft hover:shadow-lift hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header: Number & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded bg-surface-subtle text-ink-muted border border-line">
                    {pillar.number}
                  </span>
                  <div className="w-9 h-9 rounded-lg bg-canvas flex items-center justify-center border border-line group-hover:border-ink/20 transition-colors">
                    {icons[idx]}
                  </div>
                </div>

                {/* Title & Subtitle */}
                <h3 className="font-serif text-2xl font-semibold text-ink mb-1 group-hover:text-accent-teal transition-colors">
                  {pillar.title}
                </h3>
                <span className="text-xs font-semibold uppercase tracking-wider text-ink-muted/80 block mb-4">
                  {pillar.subtitle}
                </span>

                {/* Description */}
                <p className="text-xs sm:text-sm text-ink-muted leading-relaxed mb-6 font-normal">
                  {pillar.description}
                </p>
              </div>

              {/* Trait Pills */}
              <div className="pt-4 border-t border-line/60">
                <div className="flex flex-wrap gap-1.5">
                  {pillar.traits.map((trait) => (
                    <span
                      key={trait}
                      className="text-[11px] font-medium px-2 py-0.5 rounded bg-canvas text-ink-muted border border-line/80"
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
