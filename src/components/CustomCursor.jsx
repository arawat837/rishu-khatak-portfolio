import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch device
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target;
      const isInteractive =
        target.closest('a') ||
        target.closest('button') ||
        target.closest('input') ||
        target.closest('textarea') ||
        target.closest('[role="button"]') ||
        target.classList.contains('cursor-pointer');

      setIsPointer(!!isInteractive);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* Primary dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-ink"
        animate={{
          x: position.x - 3,
          y: position.y - 3,
          scale: isPointer ? 0 : 1,
          opacity: isVisible ? 0.75 : 0,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 400, mass: 0.1 }}
        style={{ width: 6, height: 6 }}
      />

      {/* Subtle outer follower ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full border border-ink/40 bg-accent-teal/5 backdrop-blur-[0.5px]"
        animate={{
          x: position.x - (isPointer ? 22 : 14),
          y: position.y - (isPointer ? 22 : 14),
          width: isPointer ? 44 : 28,
          height: isPointer ? 44 : 28,
          borderColor: isPointer ? 'rgba(71, 123, 118, 0.6)' : 'rgba(23, 33, 43, 0.25)',
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 250, mass: 0.15 }}
      />
    </>
  );
};
