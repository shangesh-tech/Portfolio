"use client";

import { useEffect, useState } from "react";

/**
 * A hard-edged dot that trails the pointer and swells over interactive
 * targets. Pointer-only: hidden on touch devices and under reduced motion.
 */
export default function NeoCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);
  const [hot, setHot] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const fine = window.matchMedia("(pointer: fine)").matches;
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || calm) return;

    setEnabled(true);

    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);

      const target = e.target;
      const interactive =
        target instanceof Element &&
        target.closest("a, button, input, textarea, [role='button']");
      setHot(Boolean(interactive));
    };

    const leave = () => setVisible(false);

    window.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("pointerleave", leave);

    return () => {
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerleave", leave);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border-[3px] border-[var(--color-border)] shadow-[2px_2px_0_var(--color-shadow)] hidden lg:block"
      style={{
        width: hot ? 40 : 20,
        height: hot ? 40 : 20,
        backgroundColor: hot ? "var(--color-primary)" : "var(--color-secondary)",
        opacity: visible ? 1 : 0,
        transform: `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`,
        transition:
          "width 180ms ease, height 180ms ease, background-color 180ms ease, opacity 180ms ease",
      }}
    />
  );
}
