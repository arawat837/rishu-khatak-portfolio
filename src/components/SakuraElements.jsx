import React, { useId, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

/**
 * Shared SVG Defs for authentic Japanese Sakura gradients & soft botanical shading.
 * Uses unique instance IDs so multiple SVGs on the page never collide.
 */
const SakuraDefs = ({ uid }) => (
  <defs>
    {/* Primary Petal Radial Gradient: Soft cream-blush center to warm terracotta-rose edge */}
    <radialGradient id={`sakura-petal-${uid}`} cx="50%" cy="82%" r="78%" fx="50%" fy="85%">
      <stop offset="0%" stopColor="#477B76" stopOpacity="0.18" />
      <stop offset="22%" stopColor="#E8C5B8" stopOpacity="0.48" />
      <stop offset="68%" stopColor="#C9826F" stopOpacity="0.34" />
      <stop offset="100%" stopColor="#C9826F" stopOpacity="0.16" />
    </radialGradient>

    {/* Secondary / Inner Layer Petal Gradient for depth */}
    <linearGradient id={`sakura-inner-${uid}`} x1="50%" y1="100%" x2="50%" y2="0%">
      <stop offset="0%" stopColor="#C9826F" stopOpacity="0.38" />
      <stop offset="55%" stopColor="#E8C5B8" stopOpacity="0.28" />
      <stop offset="100%" stopColor="#C9826F" stopOpacity="0.12" />
    </linearGradient>

    {/* Unopened Bud Gradient */}
    <linearGradient id={`sakura-bud-${uid}`} x1="0%" y1="100%" x2="100%" y2="0%">
      <stop offset="0%" stopColor="#477B76" stopOpacity="0.45" />
      <stop offset="45%" stopColor="#C9826F" stopOpacity="0.42" />
      <stop offset="100%" stopColor="#E8C5B8" stopOpacity="0.55" />
    </linearGradient>

    {/* Sage-Teal Botanical Leaf / Calyx Gradient */}
    <linearGradient id={`sakura-leaf-${uid}`} x1="0%" y1="100%" x2="100%" y2="0%">
      <stop offset="0%" stopColor="#477B76" stopOpacity="0.42" />
      <stop offset="100%" stopColor="#477B76" stopOpacity="0.15" />
    </linearGradient>
  </defs>
);

/**
 * Reusable Single Notched Sakura Petal (Centered at 0,0 radiating up to y = -43)
 * Features the classic symmetrical cherry-blossom silhouette with a delicate V-cleft at the tip.
 */
const NotchedPetal = ({ uid, scale = 1 }) => (
  <g transform={scale !== 1 ? `scale(${scale})` : undefined}>
    {/* Main notched cherry blossom petal silhouette */}
    <path
      d="M 0 0 C -7.5 -8.5, -18.5 -19.5, -16.8 -32.5 C -15.2 -40.5, -8.2 -44.2, -2.8 -42.4 C -1.3 -41.8, -0.5 -38.4, 0 -37.2 C 0.5 -38.4, 1.3 -41.8, 2.8 -42.4 C 8.2 -44.2, 15.2 -40.5, 16.8 -32.5 C 18.5 -19.5, 7.5 -8.5, 0 0 Z"
      fill={`url(#sakura-petal-${uid})`}
      stroke="#17212B"
      strokeWidth="1.05"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Subtle inner petal blush contour */}
    <path
      d="M 0 -2.5 C -4.2 -9.5, -11.2 -18, -9.8 -28.5 C -8.8 -33.5, -4.2 -35.8, 0 -32.2 C 4.2 -35.8, 8.8 -33.5, 9.8 -28.5 C 11.2 -18, 4.2 -9.5, 0 -2.5 Z"
      fill={`url(#sakura-inner-${uid})`}
    />
    {/* Delicate botanical veins */}
    <path
      d="M 0 -4 C -0.3 -14, -0.8 -23, -1.6 -32.5"
      stroke="#C9826F"
      strokeWidth="0.65"
      strokeOpacity="0.65"
      strokeLinecap="round"
    />
    <path
      d="M 0 -6.5 C -3.2 -15, -6.5 -22.5, -8.8 -30.5"
      stroke="#C9826F"
      strokeWidth="0.55"
      strokeOpacity="0.5"
      strokeLinecap="round"
    />
    <path
      d="M 0 -6.5 C 3.2 -15, 6.5 -22.5, 8.8 -30.5"
      stroke="#C9826F"
      strokeWidth="0.55"
      strokeOpacity="0.5"
      strokeLinecap="round"
    />
  </g>
);

/**
 * Reusable Detailed Stamen Crown (Radiating curved filaments + pollen anthers + central pistil)
 */
const StamenCrown = () => {
  const angles = [0, 24, 48, 72, 96, 120, 144, 168, 192, 216, 240, 264, 288, 312, 336];
  return (
    <g>
      {/* Star-shaped central nectary / calyx shadow */}
      <circle
        cx="0"
        cy="0"
        r="5.2"
        fill="#C9826F"
        fillOpacity="0.28"
      />
      {/* Radiating stamen filaments with alternating lengths */}
      {angles.map((angle, i) => {
        const len = i % 2 === 0 ? 13.5 : 9.8;
        const curveOffset = i % 2 === 0 ? 1.8 : -1.4;
        return (
          <g key={angle} transform={`rotate(${angle})`}>
            <path
              d={`M 0 -2.2 Q ${curveOffset} ${-len * 0.58} 0 ${-len}`}
              stroke="#17212B"
              strokeWidth="0.65"
              strokeOpacity="0.78"
              strokeLinecap="round"
            />
            <circle
              cx="0"
              cy={-len}
              r={i % 2 === 0 ? 1.25 : 1.0}
              fill={i % 2 === 0 ? '#C9826F' : '#E8C5B8'}
              stroke="#17212B"
              strokeWidth="0.55"
            />
          </g>
        );
      })}
      {/* Center pistil ring */}
      <circle
        cx="0"
        cy="0"
        r="3.4"
        fill="#477B76"
        fillOpacity="0.48"
        stroke="#17212B"
        strokeWidth="0.85"
      />
      <circle cx="0" cy="0" r="1.3" fill="#E8C5B8" fillOpacity="0.85" />
    </g>
  );
};

/**
 * Reusable Sage Botanical Leaf
 */
const BotanicalLeaf = ({ uid, transform = '' }) => (
  <g transform={transform}>
    <path
      d="M 0 0 C -6 -10, -7 -24, 0 -34 C 7 -24, 6 -10, 0 0 Z"
      fill={`url(#sakura-leaf-${uid})`}
      stroke="#17212B"
      strokeWidth="0.9"
      strokeLinejoin="round"
    />
    <path
      d="M 0 -1 L 0 -31 M 0 -10 L -3.5 -15 M 0 -16 L 3.8 -21 M 0 -22 L -3 -26"
      stroke="#17212B"
      strokeWidth="0.6"
      strokeOpacity="0.65"
      strokeLinecap="round"
    />
  </g>
);

/**
 * Reusable Sakura Bud with Sage Calyx Sepals
 */
const SakuraBud = ({ uid, transform = '' }) => (
  <g transform={transform}>
    {/* Blush bud body */}
    <path
      d="M 0 0 C -5.5 -5, -6.5 -15, 0 -22 C 6.5 -15, 5.5 -5, 0 0 Z"
      fill={`url(#sakura-bud-${uid})`}
      stroke="#17212B"
      strokeWidth="0.95"
      strokeLinejoin="round"
    />
    {/* Fold line near tip */}
    <path
      d="M -1.2 -20.5 C -0.5 -15, 0.5 -11, 1.8 -7"
      stroke="#C9826F"
      strokeWidth="0.6"
      strokeOpacity="0.7"
      strokeLinecap="round"
    />
    {/* Sage-teal calyx cup clasping base */}
    <path
      d="M -4.2 -4.5 C -2.5 -1, 0 1, 0 2 C 0 1, 2.5 -1, 4.2 -4.5 C 2 -2.5, 1 -5.5, 0 -7.5 C -1 -5.5, -2 -2.5, -4.2 -4.5 Z"
      fill="#477B76"
      fillOpacity="0.55"
      stroke="#17212B"
      strokeWidth="0.8"
      strokeLinejoin="round"
    />
  </g>
);

/**
 * Reusable Full 5-Petal Sakura Blossom Group
 */
const FullBlossomGroup = ({ uid, transform = '', showLeaves = false }) => (
  <g transform={transform}>
    {/* Optional sage sepals/leaves peeking from behind the petals */}
    {showLeaves && (
      <>
        <BotanicalLeaf uid={uid} transform="rotate(36) translate(0, -14) scale(0.85)" />
        <BotanicalLeaf uid={uid} transform="rotate(-108) translate(0, -13) scale(0.75)" />
      </>
    )}
    {/* Soft subtle under-petals for depth */}
    {[36, 108, 180, 252, 324].map((angle) => (
      <g key={`under-${angle}`} transform={`rotate(${angle}) scale(0.78)`} opacity="0.45">
        <NotchedPetal uid={uid} />
      </g>
    ))}
    {/* Primary 5 Notched Sakura Petals */}
    {[0, 72, 144, 216, 288].map((angle) => (
      <g key={`main-${angle}`} transform={`rotate(${angle})`}>
        <NotchedPetal uid={uid} />
      </g>
    ))}
    {/* Detailed Stamen Crown */}
    <StamenCrown />
  </g>
);

/**
 * Reusable Side-Profile Cupping Blossom
 */
const SideCuppedBlossom = ({ uid, transform = '' }) => (
  <g transform={transform}>
    {/* Back petals */}
    <g transform="rotate(-28) scale(0.72, 0.85)" opacity="0.75">
      <NotchedPetal uid={uid} />
    </g>
    <g transform="rotate(26) scale(0.72, 0.85)" opacity="0.75">
      <NotchedPetal uid={uid} />
    </g>
    {/* Stamen tuft */}
    {[-18, -9, 0, 9, 18].map((a, idx) => (
      <g key={a} transform={`rotate(${a})`}>
        <path
          d="M 0 -8 Q 1 -20 0 -30"
          stroke="#17212B"
          strokeWidth="0.65"
          strokeLinecap="round"
        />
        <circle cx="0" cy="-30" r="1.15" fill={idx % 2 === 0 ? '#C9826F' : '#E8C5B8'} stroke="#17212B" strokeWidth="0.5" />
      </g>
    ))}
    {/* Front cupping petals */}
    <g transform="rotate(-10) scale(0.82, 0.78)">
      <NotchedPetal uid={uid} />
    </g>
    <g transform="rotate(12) scale(0.78, 0.74)">
      <NotchedPetal uid={uid} />
    </g>
    {/* Calyx receptacle at base */}
    <path
      d="M -6 -2 C -4 4, -1.5 7, 0 9 C 1.5 7, 4 4, 6 -2 C 3 0, 1.5 -3, 0 -5 C -1.5 -3, -3 0, -6 -2 Z"
      fill="#477B76"
      fillOpacity="0.6"
      stroke="#17212B"
      strokeWidth="0.85"
      strokeLinejoin="round"
    />
  </g>
);

/**
 * 1. Single Sakura Flower Bloom (SVG)
 * High-craft 5-petal notched cherry blossom with layered inner depth, stamen crown, and sage leaves.
 */
export const SakuraFlower = ({ className = '', size = 48, rotation = 0, opacity = 0.82 }) => {
  const rawId = useId();
  const uid = rawId.replace(/:/g, '');

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 110 110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
      style={{ transform: `rotate(${rotation}deg)`, opacity }}
      aria-hidden="true"
    >
      <SakuraDefs uid={uid} />
      <FullBlossomGroup uid={uid} transform="translate(55, 55) scale(1.08)" showLeaves={true} />
    </svg>
  );
};

/**
 * 2. Sakura Cluster (Organic twig with full blossom, 3/4 blossom, buds, leaves, and drifting petals)
 */
export const SakuraCluster = ({ className = '', size = 105, flip = false, opacity = 0.8 }) => {
  const rawId = useId();
  const uid = rawId.replace(/:/g, '');

  return (
    <svg
      width={size}
      height={size * 0.84}
      viewBox="0 0 180 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
      style={{ transform: flip ? 'scaleX(-1)' : undefined, opacity }}
      aria-hidden="true"
    >
      <SakuraDefs uid={uid} />

      {/* Organic curving woody twig */}
      <path
        d="M 170 132 C 138 116, 108 92, 62 66 C 44 55, 28 48, 14 44"
        stroke="#17212B"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M 116 98 C 122 76, 134 55, 148 38"
        stroke="#17212B"
        strokeWidth="1.15"
        strokeLinecap="round"
      />
      <path
        d="M 78 76 C 68 95, 54 110, 40 120"
        stroke="#17212B"
        strokeWidth="0.95"
        strokeLinecap="round"
      />

      {/* Sage leaves along twig */}
      <BotanicalLeaf uid={uid} transform="translate(105, 90) rotate(-48) scale(0.65)" />
      <BotanicalLeaf uid={uid} transform="translate(55, 62) rotate(130) scale(0.58)" />

      {/* Two unopened blush buds with sage calyxes */}
      <SakuraBud uid={uid} transform="translate(148, 38) rotate(38) scale(0.9)" />
      <SakuraBud uid={uid} transform="translate(14, 44) rotate(-68) scale(0.78)" />

      {/* Side-profile cupping blossom */}
      <SideCuppedBlossom uid={uid} transform="translate(40, 120) rotate(-135) scale(0.55)" />

      {/* Secondary 3/4 Blossom */}
      <FullBlossomGroup
        uid={uid}
        transform="translate(112, 88) rotate(28) scale(0.56, 0.48)"
        showLeaves={false}
      />

      {/* Primary Open Sakura Blossom */}
      <FullBlossomGroup
        uid={uid}
        transform="translate(66, 62) rotate(-12) scale(0.76)"
        showLeaves={true}
      />

      {/* Drifting notched petals */}
      <g transform="translate(26, 22) rotate(-32) scale(0.42)">
        <NotchedPetal uid={uid} />
      </g>
      <g transform="translate(92, 26) rotate(45) scale(0.34, 0.28)">
        <NotchedPetal uid={uid} />
      </g>
    </svg>
  );
};

/**
 * 3. Wind-Swept Multi-Petal Drifting Composition
 */
export const SakuraPetals = ({ className = '', size = 36, rotation = 15, opacity = 0.78 }) => {
  const rawId = useId();
  const uid = rawId.replace(/:/g, '');

  return (
    <svg
      width={size}
      height={size * 1.25}
      viewBox="0 0 80 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
      style={{ transform: `rotate(${rotation}deg)`, opacity }}
      aria-hidden="true"
    >
      <SakuraDefs uid={uid} />

      {/* Subtle wind-drift whisper line */}
      <path
        d="M 14 78 C 28 58, 46 44, 66 20"
        stroke="#C9826F"
        strokeWidth="0.65"
        strokeDasharray="2 3"
        strokeOpacity="0.45"
        strokeLinecap="round"
      />

      {/* Primary foreground notched petal */}
      <g transform="translate(34, 54) rotate(24) scale(0.88)">
        <NotchedPetal uid={uid} />
      </g>

      {/* Secondary fluttering petal in 3/4 perspective */}
      <g transform="translate(56, 78) rotate(-38) scale(0.62, 0.48)">
        <NotchedPetal uid={uid} />
      </g>

      {/* Tiny distant drifting petal */}
      <g transform="translate(22, 86) rotate(52) scale(0.42, 0.35)" opacity="0.75">
        <NotchedPetal uid={uid} />
      </g>
    </svg>
  );
};

/**
 * 4. Minimal Editorial Botanical Line Art (for section headings and dividers)
 */
export const SakuraMinimalLineArt = ({
  className = '',
  width = 140,
  height = 42,
  flip = false,
  opacity = 0.72,
}) => {
  const rawId = useId();
  const uid = rawId.replace(/:/g, '');

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 180 54"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
      style={{ transform: flip ? 'scaleX(-1)' : undefined, opacity }}
      aria-hidden="true"
    >
      <SakuraDefs uid={uid} />

      {/* Graceful S-curve stem */}
      <path
        d="M 8 36 C 52 14, 108 42, 168 18"
        stroke="#17212B"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
      <path
        d="M 58 24 C 70 12, 82 10, 92 14"
        stroke="#17212B"
        strokeWidth="0.85"
        strokeLinecap="round"
      />
      <path
        d="M 118 28 C 128 38, 138 40, 148 36"
        stroke="#17212B"
        strokeWidth="0.85"
        strokeLinecap="round"
      />

      {/* Sage leaves */}
      <BotanicalLeaf uid={uid} transform="translate(38, 26) rotate(-55) scale(0.45)" />
      <BotanicalLeaf uid={uid} transform="translate(148, 36) rotate(110) scale(0.42)" />

      {/* Emerging Sakura Buds */}
      <SakuraBud uid={uid} transform="translate(92, 14) rotate(68) scale(0.58)" />
      <SakuraBud uid={uid} transform="translate(168, 18) rotate(65) scale(0.52)" />

      {/* Delicate Open Blossom on stem */}
      <FullBlossomGroup uid={uid} transform="translate(64, 24) rotate(15) scale(0.42)" />

      {/* Floating Petal */}
      <g transform="translate(132, 16) rotate(48) scale(0.28)">
        <NotchedPetal uid={uid} />
      </g>
    </svg>
  );
};

/**
 * 5. Full Flowing Sakura Branch (Used in Hero, Journey, Contact, and Ambient Backdrop)
 * Rich multi-forked botanical illustration with 3 open blossoms, side-cupped flower, buds, leaves, and drifting petals.
 */
export const SakuraBranch = ({ className = '', flip = false, opacity = 0.85 }) => {
  const rawId = useId();
  const uid = rawId.replace(/:/g, '');

  return (
    <svg
      viewBox="0 0 420 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
      style={{ transform: flip ? 'scaleX(-1)' : undefined, opacity }}
      aria-hidden="true"
    >
      <SakuraDefs uid={uid} />

      {/* Main organic woody bough tapering from top-right to mid-left */}
      <path
        d="M 420 28 C 355 48, 298 86, 232 82 C 168 78, 118 114, 58 148 C 38 159, 22 166, 8 170"
        stroke="#17212B"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      {/* Secondary bark texture line along main bough */}
      <path
        d="M 420 31 C 358 51, 302 88, 235 84 C 185 81, 142 104, 98 128"
        stroke="#C9826F"
        strokeWidth="0.9"
        strokeOpacity="0.45"
        strokeLinecap="round"
      />

      {/* Upper Forking Twig */}
      <path
        d="M 312 68 C 282 42, 244 28, 198 34 C 178 36, 162 44, 148 52"
        stroke="#17212B"
        strokeWidth="1.35"
        strokeLinecap="round"
      />

      {/* Lower Central Drooping Twig */}
      <path
        d="M 224 82 C 206 116, 178 152, 144 178 C 128 190, 112 198, 96 204"
        stroke="#17212B"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
      {/* Sub-fork on lower twig */}
      <path
        d="M 182 138 C 198 156, 216 168, 236 174"
        stroke="#17212B"
        strokeWidth="0.95"
        strokeLinecap="round"
      />

      {/* Outer Left Delicate Tip Twig */}
      <path
        d="M 108 120 C 86 96, 62 84, 36 82"
        stroke="#17212B"
        strokeWidth="1.05"
        strokeLinecap="round"
      />

      {/* Botanical Sage Leaves at branch nodes */}
      <BotanicalLeaf uid={uid} transform="translate(275, 54) rotate(-52) scale(0.76)" />
      <BotanicalLeaf uid={uid} transform="translate(195, 118) rotate(138) scale(0.7)" />
      <BotanicalLeaf uid={uid} transform="translate(132, 106) rotate(-38) scale(0.68)" />
      <BotanicalLeaf uid={uid} transform="translate(72, 140) rotate(155) scale(0.62)" />

      {/* Unopened Sakura Buds at twig tips */}
      <SakuraBud uid={uid} transform="translate(148, 52) rotate(-115) scale(0.92)" />
      <SakuraBud uid={uid} transform="translate(36, 82) rotate(-85) scale(0.84)" />
      <SakuraBud uid={uid} transform="translate(8, 170) rotate(-110) scale(0.78)" />
      <SakuraBud uid={uid} transform="translate(96, 204) rotate(-122) scale(0.82)" />

      {/* Side-profile Cupping Blossom on lower sub-fork */}
      <SideCuppedBlossom uid={uid} transform="translate(236, 174) rotate(108) scale(0.66)" />

      {/* Blossom 1 — Grand Hero Sakura Bloom at main fork */}
      <FullBlossomGroup
        uid={uid}
        transform="translate(254, 78) rotate(8) scale(0.96)"
        showLeaves={true}
      />

      {/* Blossom 2 — Mid-Branch Open Bloom */}
      <FullBlossomGroup
        uid={uid}
        transform="translate(148, 102) rotate(-18) scale(0.78)"
        showLeaves={true}
      />

      {/* Blossom 3 — Upper Twig 3/4 Perspective Bloom */}
      <FullBlossomGroup
        uid={uid}
        transform="translate(216, 34) rotate(24) scale(0.62, 0.52)"
        showLeaves={false}
      />

      {/* Blossom 4 — Lower Drooping Twig Bloom */}
      <FullBlossomGroup
        uid={uid}
        transform="translate(152, 172) rotate(32) scale(0.58)"
        showLeaves={false}
      />

      {/* Wind-Swept Detached Petals Drifting Across the Frame */}
      <g transform="translate(106, 168) rotate(38) scale(0.54)">
        <NotchedPetal uid={uid} />
      </g>
      <g transform="translate(64, 198) rotate(-26) scale(0.46, 0.36)">
        <NotchedPetal uid={uid} />
      </g>
      <g transform="translate(46, 122) rotate(52) scale(0.42)">
        <NotchedPetal uid={uid} />
      </g>
      <g transform="translate(184, 224) rotate(-42) scale(0.38)">
        <NotchedPetal uid={uid} />
      </g>
      <g transform="translate(292, 146) rotate(28) scale(0.44, 0.34)">
        <NotchedPetal uid={uid} />
      </g>
    </svg>
  );
};

/**
 * Hero Sakura Component
 * Scroll-linked: blooms on initial load, then smoothly drifts & fades out as the user scrolls past the Hero,
 * and reappears seamlessly when scrolling back up.
 */
export const HeroSakura = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 85,
    damping: 26,
    restDelta: 0.001,
  });

  // Top-right primary branch scroll transforms
  const branchOpacity = useTransform(smoothProgress, [0, 0.55, 0.88], [0.92, 0.45, 0]);
  const branchY = useTransform(smoothProgress, [0, 0.88], [0, -95]);
  const branchX = useTransform(smoothProgress, [0, 0.88], [0, 45]);
  const branchRotate = useTransform(smoothProgress, [0, 0.88], [0, 9]);
  const branchScale = useTransform(smoothProgress, [0, 0.88], [1, 0.88]);

  // Bottom-left secondary cluster & petal drift scroll transforms
  const clusterOpacity = useTransform(smoothProgress, [0, 0.48, 0.8], [0.78, 0.35, 0]);
  const clusterY = useTransform(smoothProgress, [0, 0.8], [0, -65]);
  const clusterX = useTransform(smoothProgress, [0, 0.8], [0, -35]);
  const clusterRotate = useTransform(smoothProgress, [0, 0.8], [0, -8]);
  const clusterScale = useTransform(smoothProgress, [0, 0.8], [1, 0.86]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Primary Top-Right Hero Branch */}
      <motion.div
        style={{
          opacity: branchOpacity,
          y: branchY,
          x: branchX,
          rotate: branchRotate,
          scale: branchScale,
        }}
        className="absolute -top-4 -right-4 sm:top-2 sm:right-2 w-72 sm:w-96 md:w-[430px] origin-top-right"
      >
        <motion.div
          initial={{ opacity: 0, x: 40, y: -20, rotate: -5, scale: 0.92 }}
          animate={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        >
          <SakuraBranch className="w-full h-auto" opacity={1} />
        </motion.div>
      </motion.div>

      {/* Secondary Bottom-Left Sakura Cluster & Drifting Petals */}
      <motion.div
        style={{
          opacity: clusterOpacity,
          y: clusterY,
          x: clusterX,
          rotate: clusterRotate,
          scale: clusterScale,
        }}
        className="absolute bottom-6 left-2 sm:left-8 origin-bottom-left scale-75 sm:scale-95 md:scale-100"
      >
        <motion.div
          initial={{ opacity: 0, x: -30, y: 20, rotate: 6, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
          className="flex items-end gap-3"
        >
          <SakuraCluster size={125} flip={true} opacity={0.9} />
          <SakuraPetals size={34} rotation={-22} opacity={0.8} className="-mb-2" />
        </motion.div>
      </motion.div>
    </div>
  );
};

/**
 * Section Decorative Sakura Container with Continuous Scroll-Linked Appear & Disappear
 * Smoothly blooms into view as the section enters the viewport, reaches peak bloom near the center,
 * and gracefully recedes and fades out as the user scrolls past.
 */
export const SectionSakura = ({
  position = 'right',
  type = 'petals',
  className = '',
}) => {
  const ref = useRef(null);
  const isRight = position === 'right';

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001,
  });

  // Appear smoothly on enter -> full bloom in middle -> disappear smoothly on exit
  const opacity = useTransform(
    smoothProgress,
    [0, 0.22, 0.5, 0.78, 1],
    [0, 0.75, 0.9, 0.75, 0]
  );
  const y = useTransform(
    smoothProgress,
    [0, 0.22, 0.5, 0.78, 1],
    [70, 15, 0, -15, -70]
  );
  const x = useTransform(
    smoothProgress,
    [0, 0.22, 0.5, 0.78, 1],
    isRight ? [35, 8, 0, 8, 35] : [-35, -8, 0, -8, -35]
  );
  const scale = useTransform(
    smoothProgress,
    [0, 0.22, 0.5, 0.78, 1],
    [0.8, 0.96, 1.04, 0.96, 0.82]
  );
  const rotate = useTransform(
    smoothProgress,
    [0, 0.22, 0.5, 0.78, 1],
    isRight ? [10, 2, 0, -3, -10] : [-10, -2, 0, 3, 10]
  );

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y, x, scale, rotate }}
      className={`absolute z-0 pointer-events-none select-none scale-75 sm:scale-90 md:scale-100 ${
        isRight ? 'right-2 sm:right-6' : 'left-2 sm:left-6'
      } ${className}`}
      aria-hidden="true"
    >
      {type === 'flower' && (
        <SakuraFlower size={68} rotation={isRight ? 15 : -25} opacity={1} />
      )}
      {type === 'bloom' && (
        <div className="flex flex-col items-center gap-2">
          <SakuraFlower size={64} rotation={isRight ? 18 : -18} opacity={1} />
          <SakuraPetals size={30} rotation={isRight ? -28 : 28} opacity={0.85} />
        </div>
      )}
      {type === 'cluster' && (
        <SakuraCluster size={120} flip={!isRight} opacity={1} />
      )}
      {type === 'branch' && (
        <SakuraBranch className="w-60 sm:w-80" flip={!isRight} opacity={1} />
      )}
      {type === 'line-art' && (
        <SakuraMinimalLineArt width={155} flip={!isRight} opacity={1} />
      )}
      {type === 'petals' && (
        <div className="flex flex-col gap-4 items-center">
          <SakuraPetals size={36} rotation={isRight ? 22 : -32} opacity={1} />
          <SakuraPetals size={26} rotation={isRight ? -38 : 18} opacity={0.85} />
        </div>
      )}
    </motion.div>
  );
};

/**
 * Journey Section Sakura Header Feature
 * Scroll-linked botanical branch at the top of the Journey section that appears & disappears smoothly.
 */
export const JourneySakuraHeader = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001,
  });

  const opacity = useTransform(
    smoothProgress,
    [0, 0.22, 0.5, 0.78, 1],
    [0, 0.75, 0.88, 0.75, 0]
  );
  const y = useTransform(
    smoothProgress,
    [0, 0.22, 0.5, 0.78, 1],
    [65, 14, 0, -14, -65]
  );
  const x = useTransform(
    smoothProgress,
    [0, 0.22, 0.5, 0.78, 1],
    [-35, -8, 0, -8, -35]
  );
  const rotate = useTransform(
    smoothProgress,
    [0, 0.22, 0.5, 0.78, 1],
    [-9, -2, 0, 3, 9]
  );
  const scale = useTransform(
    smoothProgress,
    [0, 0.22, 0.5, 0.78, 1],
    [0.82, 0.96, 1.03, 0.96, 0.84]
  );

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y, x, rotate, scale }}
      className="absolute -top-6 left-0 sm:left-6 w-60 sm:w-80 md:w-96 pointer-events-none select-none z-0 scale-75 sm:scale-90 md:scale-100 origin-top-left"
      aria-hidden="true"
    >
      <SakuraBranch flip={true} opacity={1} />
    </motion.div>
  );
};

/**
 * Single Scroll-Zone Item inside AmbientSakuraBackdrop
 */
const AmbientZoneFlower = ({
  smoothScroll,
  range,
  side = 'left',
  topClass = 'top-1/4',
  peakOpacity = 0.52,
  children,
}) => {
  const [start, mid1, peak, mid2, end] = range;
  const isRight = side === 'right';

  const opacity = useTransform(
    smoothScroll,
    [start, mid1, peak, mid2, end],
    [0, peakOpacity * 0.75, peakOpacity, peakOpacity * 0.75, 0]
  );
  const y = useTransform(
    smoothScroll,
    [start, peak, end],
    [90, 0, -90]
  );
  const x = useTransform(
    smoothScroll,
    [start, mid1, peak, mid2, end],
    isRight ? [45, 10, 0, 10, 45] : [-45, -10, 0, -10, -45]
  );
  const scale = useTransform(
    smoothScroll,
    [start, mid1, peak, mid2, end],
    [0.82, 0.96, 1.05, 0.96, 0.84]
  );
  const rotate = useTransform(
    smoothScroll,
    [start, peak, end],
    isRight ? [12, 0, -12] : [-12, 0, 12]
  );

  return (
    <motion.div
      style={{ opacity, y, x, scale, rotate }}
      className={`absolute ${topClass} ${
        isRight ? '-right-6 sm:right-2 md:right-6' : '-left-6 sm:left-2 md:left-6'
      } scale-75 sm:scale-90 md:scale-100`}
    >
      {children}
    </motion.div>
  );
};

/**
 * 6. Viewport-Wide Ambient Sakura Backdrop
 * Fixed background layer with overlapping scroll zones from 0 -> 1 so that as the user scrolls
 * down or up the page, background sakura branches, clusters, and drifting petals continuously
 * bloom into view and dissolve seamlessly.
 */
export const AmbientSakuraBackdrop = () => {
  const { scrollYProgress } = useScroll();
  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 65,
    damping: 24,
    restDelta: 0.001,
  });

  return (
    <div
      className="fixed inset-0 pointer-events-none select-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Zone 1 (0.04 -> 0.28): Upper-left cluster + petals emerging after Hero */}
      <AmbientZoneFlower
        smoothScroll={smoothScroll}
        range={[0.04, 0.1, 0.16, 0.22, 0.28]}
        side="left"
        topClass="top-[18%]"
        peakOpacity={0.5}
      >
        <div className="flex flex-col items-start gap-3">
          <SakuraCluster size={130} flip={true} opacity={1} />
          <SakuraPetals size={34} rotation={28} opacity={0.9} className="ml-8" />
        </div>
      </AmbientZoneFlower>

      {/* Zone 2 (0.18 -> 0.44): Mid-right graceful branch blooming during Profile / Marketing Approach */}
      <AmbientZoneFlower
        smoothScroll={smoothScroll}
        range={[0.18, 0.25, 0.31, 0.37, 0.44]}
        side="right"
        topClass="top-[24%]"
        peakOpacity={0.48}
      >
        <SakuraBranch className="w-64 sm:w-80" flip={false} opacity={1} />
      </AmbientZoneFlower>

      {/* Zone 3 (0.34 -> 0.60): Lower-left open blossom & drifting petals during Projects / Journey */}
      <AmbientZoneFlower
        smoothScroll={smoothScroll}
        range={[0.34, 0.41, 0.47, 0.53, 0.6]}
        side="left"
        topClass="top-[52%]"
        peakOpacity={0.52}
      >
        <div className="flex items-center gap-4">
          <SakuraFlower size={72} rotation={-18} opacity={1} />
          <SakuraPetals size={38} rotation={-35} opacity={0.9} />
        </div>
      </AmbientZoneFlower>

      {/* Zone 4 (0.50 -> 0.76): Upper-right cluster + blossom during Journey / Leadership / Skills */}
      <AmbientZoneFlower
        smoothScroll={smoothScroll}
        range={[0.5, 0.57, 0.63, 0.69, 0.76]}
        side="right"
        topClass="top-[32%]"
        peakOpacity={0.5}
      >
        <div className="flex flex-col items-end gap-2">
          <SakuraCluster size={135} flip={false} opacity={1} />
          <SakuraPetals size={32} rotation={-24} opacity={0.85} className="mr-10" />
        </div>
      </AmbientZoneFlower>

      {/* Zone 5 (0.66 -> 0.90): Mid-left flowing sakura branch during Education / Beyond Resume */}
      <AmbientZoneFlower
        smoothScroll={smoothScroll}
        range={[0.66, 0.72, 0.78, 0.84, 0.9]}
        side="left"
        topClass="top-[28%]"
        peakOpacity={0.48}
      >
        <SakuraBranch className="w-64 sm:w-80" flip={true} opacity={1} />
      </AmbientZoneFlower>

      {/* Zone 6 (0.80 -> 1.0): Bottom-right final blossom & petal drift into Contact / Footer */}
      <AmbientZoneFlower
        smoothScroll={smoothScroll}
        range={[0.8, 0.86, 0.92, 0.97, 1.0]}
        side="right"
        topClass="top-[58%]"
        peakOpacity={0.52}
      >
        <div className="flex flex-col items-end gap-3">
          <SakuraFlower size={68} rotation={22} opacity={1} />
          <SakuraPetals size={36} rotation={32} opacity={0.9} />
        </div>
      </AmbientZoneFlower>
    </div>
  );
};
