"use client";

import { useState } from "react";
import { Download } from "lucide-react";
import { useScramble } from "@/components/ui/scramble-text";

/**
 * Download control whose label resolves out of random glyphs on hover.
 * Renders an <a> when `href` is set so downloads stay a real link.
 */
export default function HackerButton({
  text = "Resume",
  href,
  download,
  onClick,
  className = "",
  variant = "solid",
}) {
  const [hovered, setHovered] = useState(false);
  const label = useScramble(text, hovered, { speed: 35, revealFor: 2 });

  const base = variant === "solid" ? "neo-btn" : "neo-btn-outline";

  const content = (
    <>
      <Download className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
      <span className="font-[var(--font-code)] tabular-nums">{label}</span>
    </>
  );

  const handlers = {
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    onFocus: () => setHovered(true),
    onBlur: () => setHovered(false),
  };

  if (href) {
    return (
      <a
        href={href}
        download={download}
        aria-label={text}
        className={`${base} ${className}`}
        {...handlers}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={text}
      className={`${base} ${className}`}
      {...handlers}
    >
      {content}
    </button>
  );
}
