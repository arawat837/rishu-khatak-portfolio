import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { CustomCursor } from './components/CustomCursor';
import { Hero } from './components/Hero';
import { StatStrip } from './components/StatStrip';
import { ProfileIntro } from './components/ProfileIntro';
import { HRApproach } from './components/HRApproach';
import { JourneyTimeline } from './components/JourneyTimeline';
import { LeadershipFeature } from './components/LeadershipFeature';
import { CaseStudyEvent } from './components/CaseStudyEvent';
import { CaseStudyResearch } from './components/CaseStudyResearch';
import { SkillsMatrix } from './components/SkillsMatrix';
import { EducationPedigree } from './components/EducationPedigree';
import { BeyondResume } from './components/BeyondResume';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';
import { ResumeModal } from './components/ResumeModal';

export function App() {
  const [toastMessage, setToastMessage] = useState(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  return (
    <div className="relative min-h-screen bg-canvas text-ink bg-grain selection:bg-accent-coral/20 selection:text-ink">
      {/* Desktop custom cursor */}
      <CustomCursor />

      {/* Sticky top navigation */}
      <div id="top" />
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <StatStrip />
        <ProfileIntro />
        <HRApproach />
        <JourneyTimeline />
        <LeadershipFeature />
        <CaseStudyEvent />
        <CaseStudyResearch />
        <SkillsMatrix />
        <EducationPedigree />
        <BeyondResume />
        <ContactSection
          onNotify={showToast}
          onOpenResume={() => setIsResumeOpen(true)}
        />
      </main>

      {/* Dark Footer */}
      <Footer />

      {/* High-End Resume PDF Modal Viewer */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      {/* Toast Notification */}
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
    </div>
  );
}

export default App;
