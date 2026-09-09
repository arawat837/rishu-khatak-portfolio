import React from 'react';
import { motion } from 'framer-motion';
import { journeyData } from '../data/portfolioData';
import { Calendar, CheckCircle2 } from 'lucide-react';
import { JourneySakuraHeader, SectionSakura, SakuraFlower, SakuraPetals } from './SakuraElements';

export const JourneyTimeline = () => {
  return (
    <section id="journey" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto overflow-hidden">
      {/* Main Sakura Feature Composition at the start of Growth Chapter */}
      <JourneySakuraHeader />
      <SectionSakura position="right" type="cluster" className="top-1/3 opacity-55" />
      <SectionSakura position="left" type="petals" className="bottom-20 opacity-60" />

      {/* Chapter Transition Header */}
      <div className="text-center max-w-2xl mx-auto mb-20 relative z-10">
        <span className="text-xs sm:text-sm tracking-widest-plus uppercase text-accent-teal font-semibold font-mono block mb-2">
          {journeyData.kicker}
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl font-semibold text-ink tracking-tight mb-4">
          {journeyData.headline}
        </h2>
        <p className="text-sm sm:text-base text-ink-muted leading-relaxed max-w-xl mx-auto">
          {journeyData.subhead}
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative z-10">
        {/* Central Vertical Line */}
        <div className="absolute top-0 bottom-0 left-4 md:left-1/2 w-[2px] bg-line md:-translate-x-1/2" />

        <div className="flex flex-col gap-12 sm:gap-16">
          {journeyData.milestones.map((item, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <motion.div
                key={item.title + item.period}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className={`relative flex flex-col md:flex-row items-start ${
                  isEven ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Center Node */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-canvas border-2 border-accent-teal flex items-center justify-center z-20 shadow-sm mt-1">
                  <div className="w-2.5 h-2.5 rounded-full bg-accent-coral" />
                </div>

                {/* Card Container (z-20 to ensure it is always above background) */}
                <div
                  className={`ml-12 md:ml-0 md:w-[45%] ${
                    isEven ? 'md:pr-10' : 'md:pl-10'
                  } w-full relative z-20`}
                >
                  <div className="bg-surface border border-line p-6 sm:p-7 rounded-2xl shadow-soft hover:shadow-lift transition-all hover:border-ink/20">
                    {/* Period & Badge Header */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded bg-canvas border border-line text-ink font-mono">
                        <Calendar className="w-3 h-3 text-accent-teal" />
                        {item.period}
                      </span>
                      <span className="text-[10px] font-mono uppercase tracking-wider font-semibold px-2 py-0.5 rounded bg-surface-subtle text-ink-muted">
                        {item.badge}
                      </span>
                    </div>

                    {/* Title & Institution */}
                    <h3 className="font-serif text-xl sm:text-2xl font-semibold text-ink leading-snug mb-1">
                      {item.title}
                    </h3>
                    <div className="flex items-center justify-between text-xs sm:text-sm text-ink-muted font-medium mb-4">
                      <span>{item.institution}</span>
                      <span className="text-accent-teal font-semibold font-mono">{item.status}</span>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-ink-muted leading-relaxed mb-4">
                      {item.description}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-1.5 pt-3 border-t border-line/60">
                      {item.highlights.map((h, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2 text-xs text-ink">
                          <CheckCircle2 className="w-3.5 h-3.5 text-accent-teal mt-0.5 shrink-0" />
                          <span className="leading-snug">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
