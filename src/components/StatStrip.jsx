import React from 'react';
import { motion } from 'framer-motion';
import { statistics } from '../data/portfolioData';

export const StatStrip = () => {
  return (
    <section className="relative z-10 bg-gradient-to-b from-transparent via-surface/70 to-transparent py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto bg-surface/80 backdrop-blur-sm border border-line/70 rounded-3xl p-6 sm:p-8 shadow-soft">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 divide-y md:divide-y-0 md:divide-x divide-line/70">
          {statistics.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.55, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className={`flex flex-col items-start ${idx > 0 ? 'pt-6 md:pt-0 md:pl-6' : ''}`}
            >
              <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-ink tracking-tight mb-1">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm font-semibold text-ink leading-snug">
                {stat.label}
              </span>
              <span className="text-[11px] sm:text-xs text-ink-muted uppercase tracking-wider font-medium mt-0.5">
                {stat.sublabel}
              </span>
              <span className="text-[11px] text-ink-muted/80 mt-1">
                {stat.detail}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
