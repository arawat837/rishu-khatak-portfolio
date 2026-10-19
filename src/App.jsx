import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { CustomCursor } from './components/CustomCursor';
import { Hero } from './components/Hero';
import { StatStrip } from './components/StatStrip';
import { ProfileIntro } from './components/ProfileIntro';
import { MarketingApproach } from './components/MarketingApproach';
import { JourneyTimeline } from './components/JourneyTimeline';
import { LeadershipFeature } from './components/LeadershipFeature';
import { ProjectsShowcase } from './components/ProjectsShowcase';
import { SkillsMatrix } from './components/SkillsMatrix';
import { EducationPedigree } from './components/EducationPedigree';
import { BeyondResume } from './components/BeyondResume';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';
import { ResumeModal } from './components/ResumeModal';
import { AmbientSakuraBackdrop } from './components/SakuraElements';

/**
 * Reusable scroll-aware section wrapper that creates a fluid, continuous
 * scroll-in and scroll-out transition between sections ("pages").
 */
const SmoothSection = ({ children, className = '' }) => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const rawOpacity = useTransform(
    scrollYProgress,
    [0, 0.14, 0.86, 1],
    [0.15, 1, 1, 0.15]
  );
  const rawY = useTransform(
    scrollYProgress,
    [0, 0.16, 0.84, 1],
    [30, 0, 0, -30]
  );

  const opacity = useSpring(rawOpacity, {
    stiffness: 110,
    damping: 26,
    mass: 0.4,
  });
  const y = useSpring(rawY, {
    stiffness: 110,
    damping: 26,
    mass: 0.4,
  });

  return (
    <motion.div
      ref={sectionRef}
      style={{ opacity, y }}
      className={`relative will-change-transform ${className}`}
    >
      {children}
    </motion.div>
  );
};

export function App() {
  const [toastMessage, setToastMessage] = useState(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Smooth Reading Progress Bar
  const { scrollYProgress, scrollY } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setShowScrollTop(latest > 450);
    });
  }, [scrollY]);

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-canvas text-ink bg-grain selection:bg-accent-coral/20 selection:text-ink overflow-x-clip">
      {/* Continuous Viewport-Wide Ambient Sakura Backdrop */}
      <AmbientSakuraBackdrop />

      {/* Sleek Editorial Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-accent-teal via-accent-coral to-accent-teal z-[60] origin-left pointer-events-none"
        style={{ scaleX }}
      />

      {/* Desktop custom cursor */}
      <CustomCursor />

      {/* Sticky top navigation */}
      <div id="top" />
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Sections with Seamless Scroll-Driven Pacing */}
      <main className="relative z-10">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <StatStrip />
        <SmoothSection>
          <ProfileIntro />
        </SmoothSection>
        <SmoothSection>
          <MarketingApproach />
        </SmoothSection>
        <SmoothSection>
          <ProjectsShowcase />
        </SmoothSection>
        <SmoothSection>
          <JourneyTimeline />
        </SmoothSection>
        <SmoothSection>
          <LeadershipFeature />
        </SmoothSection>
        <SmoothSection>
          <SkillsMatrix />
        </SmoothSection>
        <SmoothSection>
          <EducationPedigree />
        </SmoothSection>
        <SmoothSection>
          <BeyondResume />
        </SmoothSection>
        <SmoothSection>
          <ContactSection
            onNotify={showToast}
            onOpenResume={() => setIsResumeOpen(true)}
          />
        </SmoothSection>
      </main>

      {/* Dark Footer */}
      <Footer />

      {/* High-End Resume PDF Modal Viewer */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      {/* Floating Smooth Scroll to Top Pill */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 15 }}
            transition={{ duration: 0.25 }}
            onClick={scrollToTop}
            className="fixed bottom-6 left-6 z-40 flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-surface/90 hover:bg-canvas border border-line shadow-lift text-xs font-mono font-medium text-ink hover:text-accent-teal transition-all group backdrop-blur-md"
            aria-label="Scroll to top of page"
          >
            <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
            <span className="hidden sm:inline">Top</span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Toast Notification */}
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
    </div>
  );
}

export default App;
