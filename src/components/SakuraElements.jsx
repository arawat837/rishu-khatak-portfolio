import React from 'react';
import { motion } from 'framer-motion';

/**
 * 1. Single Sakura Flower Bloom (SVG)
 * Thin-line delicate blossom with soft terracotta fill and ink lines.
 */
export const SakuraFlower = ({ className = '', size = 44, rotation = 0, opacity = 0.75 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`pointer-events-none select-none ${className}`}
    style={{ transform: `rotate(${rotation}deg)`, opacity }}
    aria-hidden="true"
  >
    <g transform="translate(50, 50)">
      {[0, 72, 144, 216, 288].map((angle, i) => (
        <g key={i} transform={`rotate(${angle})`}>
          <path
            d="M 0 0 C -14 -18, -16 -36, -6 -44 C -2 -47, 0 -42, 2 -42 C 4 -42, 6 -47, 10 -44 C 20 -36, 18 -18, 0 0 Z"
            fill="#C9826F"
            fillOpacity="0.2"
            stroke="#17212B"
            strokeWidth="1.1"
            strokeLinejoin="round"
          />
          <path
            d="M 0 -8 C 0 -22, 1 -32, 2 -38"
            stroke="#C9826F"
            strokeWidth="0.75"
            strokeOpacity="0.6"
          />
        </g>
      ))}
      <circle cx="0" cy="0" r="4" fill="#477B76" fillOpacity="0.35" stroke="#17212B" strokeWidth="0.9" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
        <line
          key={i}
          x1="0"
          y1="0"
          x2={5.5 * Math.cos((angle * Math.PI) / 180)}
          y2={5.5 * Math.sin((angle * Math.PI) / 180)}
          stroke="#17212B"
          strokeWidth="0.75"
        />
      ))}
    </g>
  </svg>
);

/**
 * 2. Sakura Cluster (2-3 flowers grouped organically)
 */
export const SakuraCluster = ({ className = '', size = 90, flip = false, opacity = 0.7 }) => (
  <svg
    width={size}
    height={size * 0.8}
    viewBox="0 0 140 110"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`pointer-events-none select-none ${className}`}
    style={{ transform: flip ? 'scaleX(-1)' : undefined, opacity }}
    aria-hidden="true"
  >
    {/* Delicate connecting twig */}
    <path
      d="M 130 95 C 100 80, 70 70, 40 45"
      stroke="#17212B"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <path
      d="M 75 72 C 85 55, 95 40, 105 35"
      stroke="#17212B"
      strokeWidth="1"
      strokeLinecap="round"
    />
    {/* Bud */}
    <ellipse cx="105" cy="35" rx="3" ry="5" transform="rotate(30 105 35)" fill="#477B76" fillOpacity="0.4" stroke="#17212B" strokeWidth="0.8" />

    {/* Flower 1 (Primary) */}
    <g transform="translate(45, 45) scale(0.65)">
      {[0, 72, 144, 216, 288].map((angle, i) => (
        <g key={i} transform={`rotate(${angle})`}>
          <path
            d="M 0 0 C -12 -16, -14 -32, -5 -38 C -1 -40, 0 -36, 1 -36 C 2 -36, 3 -40, 7 -38 C 16 -32, 14 -16, 0 0 Z"
            fill="#C9826F"
            fillOpacity="0.22"
            stroke="#17212B"
            strokeWidth="1.1"
          />
        </g>
      ))}
      <circle cx="0" cy="0" r="3.5" fill="#477B76" fillOpacity="0.4" stroke="#17212B" strokeWidth="0.8" />
    </g>

    {/* Flower 2 (Secondary) */}
    <g transform="translate(85, 68) scale(0.48) rotate(35)">
      {[0, 72, 144, 216, 288].map((angle, i) => (
        <g key={i} transform={`rotate(${angle})`}>
          <path
            d="M 0 0 C -12 -16, -14 -32, -5 -38 C -1 -40, 0 -36, 1 -36 C 2 -36, 3 -40, 7 -38 C 16 -32, 14 -16, 0 0 Z"
            fill="#C9826F"
            fillOpacity="0.18"
            stroke="#17212B"
            strokeWidth="1.2"
          />
        </g>
      ))}
      <circle cx="0" cy="0" r="3" fill="#477B76" fillOpacity="0.4" stroke="#17212B" strokeWidth="0.8" />
    </g>

    {/* Drifting Petal */}
    <g transform="translate(20, 25) rotate(-20) scale(0.4)">
      <path
        d="M 12 28 C 4 21, 2 11, 7 5 C 9 3, 11 5, 12 5 C 13 5, 15 3, 17 5 C 22 11, 20 21, 12 28 Z"
        fill="#C9826F"
        fillOpacity="0.25"
        stroke="#17212B"
        strokeWidth="1.2"
      />
    </g>
  </svg>
);

/**
 * 3. Single / Double Drifting Sakura Petals
 */
export const SakuraPetals = ({ className = '', size = 26, rotation = 15, opacity = 0.65 }) => (
  <svg
    width={size}
    height={size * 1.25}
    viewBox="0 0 40 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`pointer-events-none select-none ${className}`}
    style={{ transform: `rotate(${rotation}deg)`, opacity }}
    aria-hidden="true"
  >
    <path
      d="M 20 48 C 6 36, 4 18, 12 8 C 16 5, 19 8, 20 8 C 21 8, 24 5, 28 8 C 36 18, 34 36, 20 48 Z"
      fill="#C9826F"
      fillOpacity="0.24"
      stroke="#17212B"
      strokeWidth="1.1"
      strokeLinejoin="round"
    />
    <path
      d="M 20 40 C 20 28, 20 18, 20 12"
      stroke="#C9826F"
      strokeWidth="0.75"
      strokeOpacity="0.5"
    />
  </svg>
);

/**
 * 4. Minimal Editorial Botanical Line Art (for headings and dividers)
 */
export const SakuraMinimalLineArt = ({ className = '', width = 120, height = 30, flip = false, opacity = 0.5 }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 160 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`pointer-events-none select-none ${className}`}
    style={{ transform: flip ? 'scaleX(-1)' : undefined, opacity }}
    aria-hidden="true"
  >
    <path
      d="M 5 25 C 45 10, 95 30, 155 15"
      stroke="#17212B"
      strokeWidth="0.9"
      strokeLinecap="round"
    />
    <path
      d="M 55 18 C 65 8, 75 8, 80 12"
      stroke="#17212B"
      strokeWidth="0.75"
    />
    <circle cx="80" cy="12" r="2" fill="#477B76" fillOpacity="0.5" stroke="#17212B" strokeWidth="0.6" />
    <path
      d="M 115 22 C 122 14, 130 16, 134 20"
      stroke="#17212B"
      strokeWidth="0.75"
    />
    <ellipse cx="134" cy="20" rx="1.5" ry="3" transform="rotate(30 134 20)" fill="#C9826F" fillOpacity="0.4" stroke="#17212B" strokeWidth="0.6" />
  </svg>
);

/**
 * 5. Full Flowing Sakura Branch (Used in Hero, Journey, Contact)
 */
export const SakuraBranch = ({ className = '', flip = false, opacity = 0.7 }) => (
  <svg
    viewBox="0 0 340 260"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`pointer-events-none select-none ${className}`}
    style={{ transform: flip ? 'scaleX(-1)' : undefined, opacity }}
    aria-hidden="true"
  >
    {/* Main organic woody branch */}
    <path
      d="M 340 30 C 265 52, 195 85, 130 75 C 75 65, 45 105, 10 130"
      stroke="#17212B"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    {/* Sub-twigs */}
    <path
      d="M 225 70 C 205 45, 175 35, 150 40"
      stroke="#17212B"
      strokeWidth="1.1"
      strokeLinecap="round"
    />
    <path
      d="M 130 75 C 120 100, 95 130, 80 148"
      stroke="#17212B"
      strokeWidth="1"
      strokeLinecap="round"
    />
    <path
      d="M 65 112 C 48 138, 32 160, 15 170"
      stroke="#17212B"
      strokeWidth="0.85"
      strokeLinecap="round"
    />

    {/* Buds / Sepals */}
    <ellipse cx="150" cy="40" rx="3.5" ry="5.5" transform="rotate(-30 150 40)" fill="#477B76" fillOpacity="0.4" stroke="#17212B" strokeWidth="0.85" />
    <ellipse cx="80" cy="148" rx="3" ry="5" transform="rotate(45 80 148)" fill="#477B76" fillOpacity="0.4" stroke="#17212B" strokeWidth="0.85" />
    <ellipse cx="10" cy="130" rx="3" ry="4.5" transform="rotate(15 10 130)" fill="#477B76" fillOpacity="0.4" stroke="#17212B" strokeWidth="0.85" />

    {/* Blossom 1 - Main Primary */}
    <g transform="translate(198, 75) scale(0.85)">
      {[0, 72, 144, 216, 288].map((angle, i) => (
        <g key={i} transform={`rotate(${angle})`}>
          <path
            d="M 0 0 C -10 -14, -12 -26, -5 -32 C -1 -34, 0 -30, 1 -30 C 2 -30, 3 -34, 7 -32 C 14 -26, 12 -14, 0 0 Z"
            fill="#C9826F"
            fillOpacity="0.22"
            stroke="#17212B"
            strokeWidth="1"
          />
        </g>
      ))}
      <circle cx="0" cy="0" r="3.5" fill="#477B76" fillOpacity="0.5" stroke="#17212B" strokeWidth="0.8" />
    </g>

    {/* Blossom 2 - Secondary */}
    <g transform="translate(115, 74) scale(0.65)">
      {[0, 72, 144, 216, 288].map((angle, i) => (
        <g key={i} transform={`rotate(${angle + 20})`}>
          <path
            d="M 0 0 C -10 -14, -12 -26, -5 -32 C -1 -34, 0 -30, 1 -30 C 2 -30, 3 -34, 7 -32 C 14 -26, 12 -14, 0 0 Z"
            fill="#C9826F"
            fillOpacity="0.18"
            stroke="#17212B"
            strokeWidth="1.1"
          />
        </g>
      ))}
      <circle cx="0" cy="0" r="2.8" fill="#477B76" fillOpacity="0.5" stroke="#17212B" strokeWidth="0.8" />
    </g>

    {/* Detached Petals drifting */}
    <g transform="translate(88, 122) rotate(35) scale(0.55)">
      <path
        d="M 12 28 C 4 21, 2 11, 7 5 C 9 3, 11 5, 12 5 C 13 5, 15 3, 17 5 C 22 11, 20 21, 12 28 Z"
        fill="#C9826F"
        fillOpacity="0.26"
        stroke="#17212B"
        strokeWidth="1.1"
      />
    </g>
    <g transform="translate(48, 86) rotate(-15) scale(0.45)">
      <path
        d="M 12 28 C 4 21, 2 11, 7 5 C 9 3, 11 5, 12 5 C 13 5, 15 3, 17 5 C 22 11, 20 21, 12 28 Z"
        fill="#C9826F"
        fillOpacity="0.2"
        stroke="#17212B"
        strokeWidth="1.1"
      />
    </g>
  </svg>
);

/**
 * Hero Sakura Component
 */
export const HeroSakura = () => (
  <motion.div
    initial={{ opacity: 0, x: 40, y: -20, rotate: -5 }}
    animate={{ opacity: 0.85, x: 0, y: 0, rotate: 0 }}
    transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
    className="absolute -top-6 -right-6 sm:top-4 sm:right-4 w-64 sm:w-80 md:w-96 z-0 pointer-events-none select-none opacity-80"
  >
    <SakuraBranch className="w-full h-auto" />
  </motion.div>
);

/**
 * Section Decorative Container with strict Layering & Safe Zones
 * Positioned cleanly behind content (`z-0`), pointer-events-none.
 */
export const SectionSakura = ({
  position = 'right',
  type = 'petals',
  className = '',
}) => {
  const isRight = position === 'right';

  return (
    <motion.div
      initial={{ opacity: 0, y: 25, x: isRight ? 15 : -15, rotate: isRight ? 8 : -8 }}
      whileInView={{ opacity: 1, y: 0, x: 0, rotate: 0 }}
      viewport={{ once: false, amount: 0.25 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className={`absolute z-0 pointer-events-none select-none hidden md:block ${
        isRight ? 'right-2 sm:right-6' : 'left-2 sm:left-6'
      } ${className}`}
      aria-hidden="true"
    >
      {type === 'flower' && <SakuraFlower size={56} rotation={isRight ? 15 : -25} />}
      {type === 'cluster' && <SakuraCluster size={100} flip={!isRight} />}
      {type === 'branch' && <SakuraBranch className="w-52 sm:w-72" flip={!isRight} />}
      {type === 'line-art' && <SakuraMinimalLineArt width={140} flip={!isRight} />}
      {type === 'petals' && (
        <div className="flex flex-col gap-5 items-center">
          <SakuraPetals size={28} rotation={isRight ? 25 : -35} />
          <SakuraPetals size={20} rotation={isRight ? -40 : 18} />
        </div>
      )}
    </motion.div>
  );
};

/**
 * Journey Section Sakura Feature
 * Main botanical composition at the top of the Journey section.
 */
export const JourneySakuraHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30, y: -15, rotate: -4 }}
      whileInView={{ opacity: 0.85, x: 0, y: 0, rotate: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="absolute -top-6 left-0 sm:left-8 w-60 sm:w-80 pointer-events-none select-none z-0 hidden lg:block opacity-75"
      aria-hidden="true"
    >
      <SakuraBranch flip={true} />
    </motion.div>
  );
};
