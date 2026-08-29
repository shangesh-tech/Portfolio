"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*<>/\\{}[]";

/**
 * Resolves text one character at a time out of random glyphs.
 * Drives the hover treatment on nav links, buttons and section labels.
 *
 * @param {string}  text      the settled string
 * @param {boolean} active    scramble while true, settle when false
 * @param {number}  speed     ms per frame
 * @param {number}  revealFor frames each character stays scrambled
 */
export function useScramble(text, active, { speed = 40, revealFor = 3 } = {}) {
  const [output, setOutput] = useState(text);
  const frameRef = useRef(0);
  const rafRef = useRef(null);

  // Keep the settled text in sync when the label itself changes.
  useEffect(() => {
    if (!active) setOutput(text);
  }, [text, active]);

  useEffect(() => {
    if (!active) {
      setOutput(text);
      frameRef.current = 0;
      return;
    }

    // Respect a reader's reduced-motion preference: settle immediately.
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setOutput(text);
      return;
    }

    frameRef.current = 0;
    const id = setInterval(() => {
      const frame = frameRef.current;
      const settled = frame / revealFor;

      setOutput(
        text
          .split("")
          .map((char, i) => {
            if (char === " ") return " ";
            if (i < settled) return text[i];
            return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
          })
          .join("")
      );

      frameRef.current += 1;
      if (settled >= text.length) {
        clearInterval(id);
        setOutput(text);
      }
    }, speed);

    rafRef.current = id;
    return () => clearInterval(id);
  }, [active, text, speed, revealFor]);

  return output;
}

/**
 * Wraps `useScramble` with its own hover state. Renders a <span> by default;
 * pass `as` to render a different element.
 */
export default function ScrambleText({
  text,
  as: Tag = "span",
  className = "",
  speed = 40,
  revealFor = 3,
  trigger = "hover",
  ...rest
}) {
  const [active, setActive] = useState(false);
  const output = useScramble(text, active, { speed, revealFor });

  const start = useCallback(() => setActive(true), []);
  const stop = useCallback(() => setActive(false), []);

  // `mount` scrambles once on first paint instead of on hover.
  useEffect(() => {
    if (trigger !== "mount") return;
    setActive(true);
    const id = setTimeout(() => setActive(false), text.length * speed * 4);
    return () => clearTimeout(id);
  }, [trigger, text, speed]);

  const handlers =
    trigger === "hover"
      ? { onMouseEnter: start, onMouseLeave: stop, onFocus: start, onBlur: stop }
      : {};

  return (
    <Tag className={className} {...handlers} {...rest}>
      {output}
    </Tag>
  );
}
