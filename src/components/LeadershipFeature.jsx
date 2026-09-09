import React from 'react';
import { motion } from 'framer-motion';
import { leadershipData } from '../data/portfolioData';
import { Shield, Users, MessageSquare, Compass, CheckCircle2, Flame, MapPin, Calendar } from 'lucide-react';
import { SectionSakura } from './SakuraElements';

export const LeadershipFeature = () => {
  const iconMap = {
    Shield: <Shield className="w-5 h-5 text-accent-teal" />,
    Users: <Users className="w-5 h-5 text-accent-coral" />,
    MessageSquare: <MessageSquare className="w-5 h-5 text-accent-teal" />,
    Compass: <Compass className="w-5 h-5 text-accent-coral" />,
    CheckCircle2: <CheckCircle2 className="w-5 h-5 text-accent-teal" />,
    Flame: <Flame className="w-5 h-5 text-accent-coral" />,
  };

  return (
    <section id="leadership" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-surface/60 border-t border-line overflow-hidden">
      {/* Decorative Layer: Safe Zone in right margin */}
      <SectionSakura position="right" type="flower" className="top-12 opacity-50" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <span className="text-xs sm:text-sm tracking-widest-plus uppercase text-accent-coral font-semibold font-mono">
              {leadershipData.kicker}
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-semibold text-ink tracking-tight mt-2">
              {leadershipData.headline}
            </h2>
          </div>
          <p className="text-sm sm:text-base text-ink-muted max-w-md font-normal leading-relaxed">
            {leadershipData.subhead}
          </p>
        </div>

        {/* Feature Hero Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="bg-surface border border-line p-8 sm:p-10 rounded-3xl shadow-lift mb-12 relative z-20 overflow-hidden"
        >
          {/* Header Metadata */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-line mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-ink text-canvas flex items-center justify-center font-serif font-bold text-lg shadow-sm">
                NCC
              </div>
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-ink">
                  {leadershipData.role}
                </h3>
                <p className="text-xs text-ink-muted uppercase tracking-wider font-semibold font-mono">
                  National Cadet Corps • Pilani
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs font-medium text-ink-muted font-mono">
              <span className="inline-flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-accent-teal" />
                {leadershipData.period}
              </span>
              <span className="inline-flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-accent-coral" />
                {leadershipData.location}
              </span>
            </div>
          </div>

          {/* Narrative Summary in First Person */}
          <p className="text-base sm:text-lg text-ink-muted leading-relaxed mb-8 max-w-4xl">
            {leadershipData.summary}
          </p>

          {/* Transferable Qualities Grid in First Person */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {leadershipData.pillars.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="p-5 rounded-2xl bg-canvas border border-line/80 hover:border-ink/20 transition-colors"
              >
                <div className="flex items-center gap-3 mb-2.5">
                  <div className="p-2 rounded-xl bg-surface border border-line">
                    {iconMap[item.icon]}
                  </div>
                  <h4 className="font-serif font-semibold text-ink text-base">
                    {item.title}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
