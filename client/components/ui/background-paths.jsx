"use client";

import { motion } from "framer-motion";

/**
 * Sweeping hairline paths drawn behind a section. Two mirrored fans of
 * 24 strokes each, animated on a long loop so the field never reads static.
 */
function PathFan({ direction = 1 }) {
  const paths = Array.from({ length: 24 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * direction} -${189 + i * 6}C-${380 - i * 5 * direction} -${
      189 + i * 6
    } -${312 - i * 5 * direction} ${216 - i * 6} ${152 - i * 5 * direction} ${
      343 - i * 6
    }C${616 - i * 5 * direction} ${470 - i * 6} ${684 - i * 5 * direction} ${
      875 - i * 6
    } ${684 - i * 5 * direction} ${875 - i * 6}`,
    width: 0.5 + i * 0.03,
    opacity: 0.1 + i * 0.03,
  }));

  return (
    <svg
      className="w-full h-full text-[var(--color-text-primary)]"
      viewBox="0 0 696 316"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {paths.map((path) => (
        <motion.path
          key={path.id}
          d={path.d}
          stroke="currentColor"
          strokeWidth={path.width}
          strokeOpacity={path.opacity}
          initial={{ pathLength: 0.3, opacity: 0.6 }}
          animate={{
            pathLength: 1,
            opacity: [0.3, 0.6, 0.3],
            pathOffset: [0, 1, 0],
          }}
          transition={{
            duration: 20 + Math.random() * 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </svg>
  );
}

export default function BackgroundPaths({ className = "" }) {
  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`} aria-hidden="true">
      <div className="absolute inset-0">
        <PathFan direction={1} />
      </div>
      <div className="absolute inset-0">
        <PathFan direction={-1} />
      </div>
    </div>
  );
}
