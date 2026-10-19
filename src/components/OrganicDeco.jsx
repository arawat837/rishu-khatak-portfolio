import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

export const OrganicDeco = ({ className = '', variant = 'curve-1' }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 75,
    damping: 24,
    restDelta: 0.001,
  });

  const opacity = useTransform(smoothProgress, [0, 0.25, 0.5, 0.75, 1], [0, 0.75, 1, 0.75, 0]);
  const y = useTransform(smoothProgress, [0, 0.5, 1], [45, 0, -45]);
  const scale = useTransform(smoothProgress, [0, 0.5, 1], [0.88, 1.03, 0.9]);
  const rotate = useTransform(smoothProgress, [0, 0.5, 1], [-6, 0, 6]);

  if (variant === 'curve-1') {
    return (
      <motion.svg
        ref={ref}
        style={{ opacity, y, scale, rotate }}
        className={`pointer-events-none select-none text-accent-coral/30 ${className}`}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M10 180 C 60 110, 140 190, 190 20"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeDasharray="4 4"
        />
        {/* Delicate notched sakura petal resting along the curve */}
        <g transform="translate(105, 132) rotate(28) scale(0.42)">
          <path
            d="M 0 0 C -7.5 -8.5, -18.5 -19.5, -16.8 -32.5 C -15.2 -40.5, -8.2 -44.2, -2.8 -42.4 C -1.3 -41.8, -0.5 -38.4, 0 -37.2 C 0.5 -38.4, 1.3 -41.8, 2.8 -42.4 C 8.2 -44.2, 15.2 -40.5, 16.8 -32.5 C 18.5 -19.5, 7.5 -8.5, 0 0 Z"
            fill="currentColor"
            fillOpacity="0.45"
            stroke="currentColor"
            strokeWidth="2"
          />
        </g>
        <circle cx="190" cy="20" r="3" fill="currentColor" />
        <circle cx="10" cy="180" r="2.5" fill="currentColor" />
      </motion.svg>
    );
  }

  if (variant === 'curve-2') {
    return (
      <motion.svg
        ref={ref}
        style={{ opacity, y, scale, rotate }}
        className={`pointer-events-none select-none text-accent-teal/25 ${className}`}
        viewBox="0 0 240 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M10 30 C 90 10, 120 160, 230 140"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <path
          d="M30 60 C 110 40, 140 180, 220 160"
          stroke="currentColor"
          strokeWidth="1"
          strokeOpacity="0.55"
        />
        {/* Subtle botanical leaf accent */}
        <g transform="translate(115, 86) rotate(-35) scale(0.45)">
          <path
            d="M 0 0 C -6 -10, -7 -24, 0 -34 C 7 -24, 6 -10, 0 0 Z"
            fill="currentColor"
            fillOpacity="0.35"
            stroke="currentColor"
            strokeWidth="1.8"
          />
        </g>
      </motion.svg>
    );
  }

  return (
    <motion.svg
      ref={ref}
      style={{ opacity, y, scale, rotate }}
      className={`pointer-events-none select-none text-accent-coral/25 ${className}`}
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="80" cy="80" r="70" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
      <circle cx="80" cy="80" r="45" stroke="currentColor" strokeWidth="0.75" />
      <circle cx="80" cy="80" r="3" fill="currentColor" />
    </motion.svg>
  );
};
