import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skillsData } from '../data/portfolioData';
import { Sparkles, Code2, Users, FileSpreadsheet, Globe } from 'lucide-react';
import { SectionSakura } from './SakuraElements';

export const SkillsMatrix = () => {
  const [activeTab, setActiveTab] = useState('all');

  const filteredItems = activeTab === 'all'
    ? skillsData.items
    : skillsData.items.filter((item) => item.category === activeTab);

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'marketing':
      case 'management':
        return <Users className="w-3.5 h-3.5 text-accent-coral" />;
      case 'analytics':
      case 'technical':
        return <Code2 className="w-3.5 h-3.5 text-accent-coral" />;
      case 'productivity':
        return <FileSpreadsheet className="w-3.5 h-3.5 text-accent-teal" />;
      case 'languages':
        return <Globe className="w-3.5 h-3.5 text-accent-teal" />;
      default:
        return <Sparkles className="w-3.5 h-3.5 text-accent-teal" />;
    }
  };

  return (
    <section
      id="skills"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-surface/70 to-transparent overflow-hidden"
    >
      {/* Decorative Layer: Sakura clusters & drifting petals in viewport margins */}
      <SectionSakura position="left" type="cluster" className="top-12 opacity-75" />
      <SectionSakura position="right" type="petals" className="bottom-16 opacity-70" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="text-xs sm:text-sm tracking-widest-plus uppercase text-accent-teal font-semibold">
            {skillsData.kicker}
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-semibold text-ink tracking-tight mt-2 mb-4">
            {skillsData.headline}
          </h2>
          <p className="text-sm sm:text-base text-ink-muted leading-relaxed">
            {skillsData.subhead}
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-2 mb-12"
          role="tablist"
        >
          {skillsData.categories.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveTab(cat.id)}
                className={`relative px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'text-canvas bg-ink shadow-sm'
                    : 'text-ink-muted bg-surface border border-line hover:text-ink hover:border-ink/30'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`ml-1.5 text-[11px] font-mono ${isActive ? 'text-canvas/80' : 'text-ink-muted/70'}`}>
                  ({cat.count})
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* Filtered Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.div
                layout
                key={item.name}
                initial={{ opacity: 0, y: 20, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.12 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.45, delay: (idx % 6) * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="bg-surface border border-line p-5 sm:p-6 rounded-2xl shadow-soft hover:shadow-lift transition-all hover:border-ink/25 group flex flex-col justify-between"
              >
                <div>
                  {/* Top Category Badge & Tag */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider font-semibold px-2 py-0.5 rounded bg-canvas border border-line/70 text-ink-muted">
                      {getCategoryIcon(item.category)}
                      {item.categoryLabel}
                    </span>
                    {item.proficiency && (
                      <span className="text-[11px] font-semibold text-accent-coral px-2 py-0.5 rounded bg-accent-coral-light/60">
                        {item.proficiency}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-xl font-semibold text-ink mb-2 group-hover:text-accent-teal transition-colors">
                    {item.name}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-ink-muted leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                {/* Footer contextual tag */}
                <div className="pt-3 border-t border-line/60 flex items-center justify-between text-[11px] text-ink-muted font-medium">
                  <span>{item.tag}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
