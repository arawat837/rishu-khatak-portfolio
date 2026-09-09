import React from 'react';

export const OrganicDeco = ({ className = '', variant = 'curve-1' }) => {
  if (variant === 'curve-1') {
    return (
      <svg
        className={`pointer-events-none select-none text-accent-coral/25 ${className}`}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M10 180 C 60 110, 140 190, 190 20"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />
        <circle cx="190" cy="20" r="3" fill="currentColor" />
        <circle cx="10" cy="180" r="2.5" fill="currentColor" />
      </svg>
    );
  }

  if (variant === 'curve-2') {
    return (
      <svg
        className={`pointer-events-none select-none text-accent-teal/20 ${className}`}
        viewBox="0 0 240 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M10 30 C 90 10, 120 160, 230 140"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M30 60 C 110 40, 140 180, 220 160"
          stroke="currentColor"
          strokeWidth="1"
          strokeOpacity="0.5"
        />
      </svg>
    );
  }

  return (
    <svg
      className={`pointer-events-none select-none text-accent-coral/20 ${className}`}
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="80" cy="80" r="70" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
      <circle cx="80" cy="80" r="45" stroke="currentColor" strokeWidth="0.75" />
      <circle cx="80" cy="80" r="3" fill="currentColor" />
    </svg>
  );
};
