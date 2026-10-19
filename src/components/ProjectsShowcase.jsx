import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar,
  Building,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Layers,
  Sparkles,
  ExternalLink,
  BarChart,
  Megaphone,
  Palette,
  Terminal,
  ArrowRight,
} from 'lucide-react';
import { projectsShowcaseData } from '../data/portfolioData';
import { SectionSakura } from './SakuraElements';

export const ProjectsShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedProjects, setExpandedProjects] = useState({
    'event-management': true, // Default first project expanded for rich recruiter landing
    'personal-portfolio': false,
    'bug-analytics': false,
  });

  const toggleProjectExpand = (id) => {
    setExpandedProjects((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const expandAll = () => {
    setExpandedProjects({
      'event-management': true,
      'personal-portfolio': true,
      'bug-analytics': true,
    });
  };

  const collapseAll = () => {
    setExpandedProjects({
      'event-management': false,
      'personal-portfolio': false,
      'bug-analytics': false,
    });
  };

  // Filtered projects based on active tab
  const filteredProjects =
    activeCategory === 'all'
      ? projectsShowcaseData.projects
      : projectsShowcaseData.projects.filter(
          (p) => p.category === activeCategory
        );

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'campaigns':
        return <Megaphone className="w-3.5 h-3.5" />;
      case 'digital':
        return <Palette className="w-3.5 h-3.5" />;
      case 'analytics':
        return <Terminal className="w-3.5 h-3.5" />;
      default:
        return <Layers className="w-3.5 h-3.5" />;
    }
  };

  return (
    <section
      id="projects"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Decorative Layer: Delicate Sakura compositions in viewport margins */}
      <SectionSakura position="left" type="petals" className="top-12 opacity-75" />
      <SectionSakura position="right" type="branch" className="top-1/3 opacity-70" />
      <SectionSakura position="left" type="cluster" className="bottom-16 opacity-70" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="relative z-10 text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-line text-xs font-mono font-medium text-accent-coral mb-4 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{projectsShowcaseData.kicker}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.65, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-3xl sm:text-5xl font-semibold text-ink tracking-tight mb-4"
          >
            {projectsShowcaseData.headline}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.65, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className="text-sm sm:text-base text-ink-muted leading-relaxed"
          >
            {projectsShowcaseData.subhead}
          </motion.p>
        </div>

        {/* Interactive Controls Bar: Filter Tabs & Expand/Collapse */}
        <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-4 border-b border-line">
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 bg-surface/80 border border-line p-1.5 rounded-2xl shadow-soft">
            {projectsShowcaseData.categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`relative px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 flex items-center gap-2 ${
                    isActive
                      ? 'text-ink font-semibold'
                      : 'text-ink-muted hover:text-ink hover:bg-canvas/60'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeProjectTabIndicator"
                      className="absolute inset-0 bg-canvas rounded-xl shadow-sm border border-line -z-10"
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                      isActive
                        ? 'bg-ink text-canvas'
                        : 'bg-canvas text-ink-muted border border-line/60'
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Global Expand / Collapse Trigger */}
          <div className="flex items-center gap-2 text-xs font-mono text-ink-muted">
            <button
              type="button"
              onClick={expandAll}
              className="hover:text-accent-teal transition-colors underline decoration-line/80 underline-offset-4"
            >
              Expand All Details
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={collapseAll}
              className="hover:text-accent-coral transition-colors underline decoration-line/80 underline-offset-4"
            >
              Compact View
            </button>
          </div>
        </div>

        {/* Project Cards List */}
        <div className="relative z-10 space-y-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const isExpanded = !!expandedProjects[project.id];
              const isTeal = project.accent === 'teal';

              return (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.12 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.55, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-surface border border-line rounded-3xl p-6 sm:p-10 shadow-soft hover:shadow-lift transition-all duration-300 relative overflow-hidden group"
                >
                {/* Header Ribbon: Category, Number & Period */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                  <div className="flex items-center gap-2">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-wider uppercase border shadow-sm ${
                        isTeal
                          ? 'bg-accent-teal-light text-accent-teal-dark border-accent-teal/30'
                          : 'bg-accent-coral-light text-accent-coral-dark border-accent-coral/30'
                      }`}
                    >
                      {getCategoryIcon(project.category)}
                      {project.categoryLabel}
                    </span>
                    <span className="font-mono text-xs font-bold text-ink-muted/80">
                      // 0{index + 1}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono text-ink-muted">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{project.period}</span>
                  </div>
                </div>

                {/* Title, Subtitle & Context */}
                <div className="max-w-4xl mb-6">
                  <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-ink tracking-tight mb-2 group-hover:text-accent-teal transition-colors">
                    {project.title}
                  </h3>
                  <p
                    className={`text-base sm:text-lg font-serif italic mb-3 ${
                      isTeal ? 'text-accent-teal' : 'text-accent-coral'
                    }`}
                  >
                    {project.subtitle}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-ink-muted">
                    <span className="inline-flex items-center gap-1.5 font-medium">
                      <Building className="w-3.5 h-3.5 text-ink-muted/70" />
                      {project.organization}
                    </span>
                    <span>•</span>
                    <span className="font-mono text-xs font-semibold text-ink">
                      Role: {project.role}
                    </span>
                  </div>
                </div>

                {/* Key Metrics Highlight Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mb-8">
                  {project.metrics.map((metric, mIdx) => (
                    <div
                      key={mIdx}
                      className="bg-canvas border border-line/80 rounded-2xl p-4 flex flex-col justify-between shadow-sm group/metric hover:border-ink/20 transition-colors"
                    >
                      <div className="font-serif text-2xl sm:text-3xl font-bold text-ink mb-0.5">
                        {metric.value}
                      </div>
                      <div className="text-xs font-semibold text-ink-muted">
                        {metric.label}
                      </div>
                      <div className="text-[10px] font-mono text-ink-muted/70 mt-1">
                        {metric.sublabel}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Overview & Core Challenge Narrative */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
                  <div className="bg-canvas/80 border border-line p-5 rounded-2xl">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent-teal block mb-1.5">
                      Scope &amp; Overview
                    </span>
                    <p className="text-xs sm:text-sm text-ink leading-relaxed">
                      {project.overview}
                    </p>
                  </div>

                  <div className="bg-canvas/80 border border-line p-5 rounded-2xl">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent-coral block mb-1.5">
                      The Strategic Challenge
                    </span>
                    <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                      {project.challenge}
                    </p>
                  </div>
                </div>

                {/* Expandable Case Study Deep Dive */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      {/* 4-Stage Execution Architecture */}
                      <div className="pt-4 mb-8">
                        <div className="flex items-center gap-2 mb-4">
                          <span className="text-xs font-mono uppercase tracking-widest text-ink-muted font-bold">
                            Operational Architecture:
                          </span>
                          <span
                            className={`text-xs font-semibold ${
                              isTeal ? 'text-accent-teal' : 'text-accent-coral'
                            }`}
                          >
                            Stage 01 &rarr; Stage 02 &rarr; Stage 03 &rarr; Stage 04
                          </span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
                          {project.executionArchitecture.map((stage) => (
                            <div
                              key={stage.step}
                              className="bg-surface-subtle/60 border border-line p-4 rounded-xl flex flex-col justify-between hover:bg-surface-subtle transition-colors"
                            >
                              <div>
                                <div className="flex items-center justify-between mb-2">
                                  <span
                                    className={`font-mono text-xs font-bold ${
                                      isTeal ? 'text-accent-teal' : 'text-accent-coral'
                                    }`}
                                  >
                                    STAGE {stage.step}
                                  </span>
                                  <span className="text-[10px] font-semibold uppercase tracking-wider text-ink-muted px-2 py-0.5 rounded bg-canvas border border-line/60">
                                    {stage.phase}
                                  </span>
                                </div>
                                <h4 className="font-serif font-semibold text-ink text-sm mb-1.5">
                                  {stage.title}
                                </h4>
                                <p className="text-xs text-ink-muted leading-relaxed">
                                  {stage.description}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Transferable Strengths to Marketing & Leadership */}
                      <div className="pt-6 border-t border-line/80 mb-6">
                        <span className="text-xs font-mono uppercase tracking-widest text-ink-muted font-bold block mb-3">
                          Transferable Strengths Relevant to Marketing Strategy:
                        </span>
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
                          {project.marketingStrengths.map((item) => (
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

                      {/* Strategic Key Takeaway Box */}
                      <div className="p-4 sm:p-5 rounded-2xl bg-surface-subtle/80 border border-line mb-6 flex items-start gap-3">
                        <div
                          className={`mt-0.5 p-1.5 rounded-lg text-canvas ${
                            isTeal ? 'bg-accent-teal' : 'bg-accent-coral'
                          }`}
                        >
                          <CheckCircle2 className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-xs font-mono font-bold uppercase tracking-wider text-ink block mb-0.5">
                            Strategic Marketing Takeaway:
                          </span>
                          <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                            {project.keyTakeaway}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Footer Bar: Toggle Button & Tags Cloud */}
                <div className="pt-5 border-t border-line flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  {/* Tag Cloud */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-canvas text-ink-muted border border-line/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Toggle Accordion Action */}
                  <button
                    type="button"
                    onClick={() => toggleProjectExpand(project.id)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-canvas hover:bg-surface-subtle border border-line text-xs font-semibold text-ink transition-colors shadow-sm self-end sm:self-auto"
                    aria-expanded={isExpanded}
                  >
                    <span>{isExpanded ? 'Collapse Architecture' : 'Explore Full Architecture'}</span>
                    {isExpanded ? (
                      <ChevronUp className="w-3.5 h-3.5" />
                    ) : (
                      <ChevronDown className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;
