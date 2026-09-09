import React from 'react';
import { motion } from 'framer-motion';
import { caseStudyResearch } from '../data/portfolioData';
import { Search, Filter, Cpu, CheckSquare } from 'lucide-react';
import { SectionSakura } from './SakuraElements';

export const CaseStudyResearch = () => {
  const stepIcons = [
    <Search className="w-4 h-4 text-accent-teal" />,
    <Filter className="w-4 h-4 text-accent-coral" />,
    <Cpu className="w-4 h-4 text-accent-teal" />,
    <CheckSquare className="w-4 h-4 text-accent-coral" />,
  ];

  return (
    <section id="projects" className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto overflow-hidden">
      {/* Subtle Sakura petal drift on left edge */}
      <SectionSakura position="left" type="petals" className="top-8" />

      {/* Case Study Card */}
      <div className="bg-surface border border-line rounded-3xl p-8 sm:p-12 shadow-soft relative z-10 overflow-hidden">
        {/* Header Ribbon */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <span className="text-xs sm:text-sm tracking-widest-plus uppercase text-accent-coral font-semibold">
            {caseStudyResearch.kicker}
          </span>
          <span className="text-xs font-mono font-medium px-3 py-1 rounded-full bg-canvas border border-line text-ink-muted">
            {caseStudyResearch.period}
          </span>
        </div>

        {/* Title & Context */}
        <div className="max-w-3xl mb-8">
          <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-ink tracking-tight mb-2">
            {caseStudyResearch.title}
          </h3>
          <p className="text-base sm:text-lg text-accent-teal font-serif italic mb-4">
            {caseStudyResearch.subtitle}
          </p>
          <p className="text-xs sm:text-sm text-ink-muted uppercase tracking-wider font-semibold">
            {caseStudyResearch.context}
          </p>
        </div>

        {/* Overview Box in First Person */}
        <div className="bg-canvas border border-line p-6 rounded-2xl mb-12">
          <span className="text-xs font-mono font-semibold text-accent-coral uppercase tracking-wider block mb-1">
            Research Scope &amp; My Exploration
          </span>
          <p className="text-sm sm:text-base text-ink leading-relaxed">
            {caseStudyResearch.overview}
          </p>
        </div>

        {/* Analytical Flow: Detect -> Classify -> Prioritize -> Resolve */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-xs font-mono uppercase tracking-widest text-ink-muted font-bold">
              Analytical Framework:
            </span>
            <span className="text-xs font-semibold text-accent-coral">
              Detect &rarr; Classify &rarr; Prioritize &rarr; Resolve
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {caseStudyResearch.workflow.map((item, idx) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-surface-subtle/50 border border-line p-5 rounded-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs font-bold text-accent-coral">
                      STEP {item.step}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-ink px-2 py-0.5 rounded bg-canvas border border-line/60">
                      {stepIcons[idx]}
                      {item.action}
                    </span>
                  </div>
                  <h4 className="font-serif font-semibold text-ink text-base mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs text-ink-muted leading-relaxed">
                    {item.summary}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Transferable Strengths to Analytical Problem Solving */}
        <div className="pt-8 border-t border-line">
          <span className="text-xs font-mono uppercase tracking-widest text-ink-muted font-bold block mb-4">
            Transferable Analytical &amp; Technical Strengths:
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {caseStudyResearch.transferableStrengths.map((item) => (
              <div
                key={item.label}
                className="p-4 rounded-xl bg-canvas border border-line/80 flex flex-col justify-start"
              >
                <span className="text-xs font-semibold text-ink mb-1">
                  {item.label}
                </span>
                <span className="text-[11px] text-ink-muted leading-relaxed">
                  {item.desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
