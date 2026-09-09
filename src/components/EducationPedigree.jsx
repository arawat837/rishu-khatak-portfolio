import React from 'react';
import { motion } from 'framer-motion';
import { educationData } from '../data/portfolioData';
import { MapPin } from 'lucide-react';
import { SectionSakura } from './SakuraElements';

export const EducationPedigree = () => {
  return (
    <section id="education" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto overflow-hidden">
      {/* Subtle Sakura petal drift on left edge */}
      <SectionSakura position="left" type="petals" className="top-10" />

      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16 relative z-10">
        <span className="text-xs sm:text-sm tracking-widest-plus uppercase text-accent-coral font-semibold">
          {educationData.kicker}
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl font-semibold text-ink tracking-tight mt-2 mb-4">
          {educationData.headline}
        </h2>
        <p className="text-sm sm:text-base text-ink-muted leading-relaxed">
          {educationData.subhead}
        </p>
      </div>

      {/* Degrees List */}
      <div className="space-y-6 relative z-10">
        {educationData.degrees.map((deg, idx) => (
          <motion.div
            key={deg.degree + deg.year}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="bg-surface border border-line p-6 sm:p-8 rounded-2xl shadow-soft hover:shadow-lift transition-all hover:border-ink/20"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* Year & Status */}
              <div className="lg:col-span-3 flex flex-col justify-start">
                <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded bg-canvas border border-line text-ink w-fit mb-2">
                  {deg.year}
                </span>
                <span className="text-xs font-semibold text-accent-teal">
                  {deg.status}
                </span>
              </div>

              {/* Degree & Institution */}
              <div className="lg:col-span-4">
                <h3 className="font-serif text-xl sm:text-2xl font-semibold text-ink leading-snug mb-1">
                  {deg.degree}
                </h3>
                <p className="text-sm font-medium text-ink-muted mb-1">
                  {deg.institution}
                </p>
                <div className="flex items-center gap-1.5 text-xs text-ink-muted/80">
                  <MapPin className="w-3 h-3 text-accent-coral" />
                  <span>{deg.location}</span>
                </div>
              </div>

              {/* Curriculum & Context Notes */}
              <div className="lg:col-span-5 flex flex-col gap-2 pt-2 lg:pt-0 lg:border-l lg:border-line lg:pl-6">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-ink-muted font-bold block mb-1">
                    Focus &amp; Curriculum:
                  </span>
                  <p className="text-xs sm:text-sm text-ink leading-relaxed">
                    {deg.focus}
                  </p>
                </div>
                <p className="text-xs text-ink-muted/90 italic mt-1">
                  {deg.notes}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
