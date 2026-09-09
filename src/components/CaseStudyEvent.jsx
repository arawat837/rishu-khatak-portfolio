import React from 'react';
import { motion } from 'framer-motion';
import { caseStudyEvent } from '../data/portfolioData';
import { SectionSakura } from './SakuraElements';

export const CaseStudyEvent = () => {
  return (
    <section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto overflow-hidden">
      {/* Subtle Sakura petal drift on right edge */}
      <SectionSakura position="right" type="petals" className="top-8" />

      {/* Case Study Header Card */}
      <div className="bg-surface border border-line rounded-3xl p-8 sm:p-12 shadow-soft relative z-10 overflow-hidden">
        {/* Header Ribbon */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <span className="text-xs sm:text-sm tracking-widest-plus uppercase text-accent-teal font-semibold">
            {caseStudyEvent.kicker}
          </span>
          <span className="text-xs font-mono font-medium px-3 py-1 rounded-full bg-canvas border border-line text-ink-muted">
            {caseStudyEvent.period}
          </span>
        </div>

        {/* Title & Context */}
        <div className="max-w-3xl mb-8">
          <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-ink tracking-tight mb-2">
            {caseStudyEvent.title}
          </h3>
          <p className="text-base sm:text-lg text-accent-coral font-serif italic mb-4">
            {caseStudyEvent.subtitle}
          </p>
          <p className="text-xs sm:text-sm text-ink-muted uppercase tracking-wider font-semibold">
            {caseStudyEvent.context}
          </p>
        </div>

        {/* What I Worked On Box */}
        <div className="bg-canvas border border-line p-6 rounded-2xl mb-12">
          <span className="text-xs font-mono font-semibold text-accent-teal uppercase tracking-wider block mb-1">
            {caseStudyEvent.myRole}
          </span>
          <p className="text-sm sm:text-base text-ink leading-relaxed">
            {caseStudyEvent.myRoleDescription}
          </p>
        </div>

        {/* 4-Stage Operational Flow: Planning -> Coordination -> Execution -> Reflection */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-xs font-mono uppercase tracking-widest text-ink-muted font-bold">
              Execution Architecture:
            </span>
            <span className="text-xs font-semibold text-accent-teal">
              Planning &rarr; Coordination &rarr; Execution &rarr; Reflection
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {caseStudyEvent.stages.map((stage, idx) => (
              <motion.div
                key={stage.number}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-surface-subtle/50 border border-line p-5 rounded-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs font-bold text-accent-teal">
                      STAGE {stage.number}
                    </span>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-ink-muted px-2 py-0.5 rounded bg-canvas border border-line/60">
                      {stage.name}
                    </span>
                  </div>
                  <h4 className="font-serif font-semibold text-ink text-base mb-2">
                    {stage.title}
                  </h4>
                  <p className="text-xs text-ink-muted leading-relaxed">
                    {stage.details}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* What I Learned Banner */}
        <div className="p-5 rounded-2xl bg-surface-subtle/70 border border-line mb-8">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent-teal block mb-1">
            What I Learned:
          </span>
          <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
            {caseStudyEvent.whatILearned}
          </p>
        </div>

        {/* Transferable Strengths to HR */}
        <div className="pt-6 border-t border-line">
          <span className="text-xs font-mono uppercase tracking-widest text-ink-muted font-bold block mb-4">
            Transferable Strengths Relevant to HR &amp; People Operations:
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {caseStudyEvent.transferableStrengths.map((item) => (
              <div
                key={item.label}
                className="p-3 rounded-xl bg-canvas border border-line/80 text-center flex flex-col justify-center"
              >
                <span className="text-xs font-semibold text-ink mb-0.5">
                  {item.label}
                </span>
                <span className="text-[10px] text-ink-muted leading-tight">
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
