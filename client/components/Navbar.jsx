"use client";

import { useCallback, useEffect, useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import ScrambleText from "@/components/ui/scramble-text";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Wins", href: "#achievements" },
];

const SECTION_IDS = [
  "hero",
  "about",
  "experience",
  "projects",
  "skills",
  "achievements",
  "contact",
];

const NAV_HEIGHT = 80;

export default function Navbar() {
  const [active, setActive] = useState("hero");
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  // The hero is dark in both themes, so the bar inverts while it sits over it.
  const [overHero, setOverHero] = useState(true);

  // Adopt whatever the pre-paint bootstrap script already applied.
  useEffect(() => {
    const current =
      document.documentElement.getAttribute("data-theme") || "light";
    setTheme(current);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next = prev === "light" ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", next);
      try {
        localStorage.setItem("theme", next);
      } catch {
        /* storage unavailable — the choice just won't persist */
      }
      return next;
    });
  }, []);

  // Track the active section and whether the bar still overlaps the hero.
  useEffect(() => {
    const onScroll = () => {
      const probe = window.scrollY + 160;
      let current = "hero";

      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el && probe >= el.offsetTop) current = id;
      }
      setActive(current);

      const hero = document.getElementById("hero");
      const heroBottom = hero ? hero.offsetTop + hero.offsetHeight : 0;
      setOverHero(window.scrollY + NAV_HEIGHT < heroBottom);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Close the mobile sheet on Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const go = (e, href) => {
    e.preventDefault();
    setOpen(false);
    document
      .getElementById(href.slice(1))
      ?.scrollIntoView({ behavior: "smooth" });
  };

  // A solid sheet would defeat the blur, so the mobile panel keeps the glass
  // and only the tint changes with context.
  const shell = overHero
    ? "bg-white/[0.06] border-white/15"
    : "bg-[var(--color-surface)]/65 border-[var(--color-border)]/25";

  const inkClass = overHero ? "text-white" : "text-[var(--color-text-primary)]";
  const hoverInk = overHero
    ? "hover:text-[#c4b5fd]"
    : "hover:text-[var(--color-primary)]";
  const activeInk = overHero ? "text-[#c4b5fd]" : "text-[var(--color-primary)]";
  const dotBg = overHero ? "bg-[#c4b5fd]" : "bg-[var(--color-primary)]";

  const iconButton = overHero
    ? "bg-white/10 border-white/40 text-white hover:bg-white/20"
    : "bg-[var(--color-background)]/70 border-[var(--color-border)]/40 text-[var(--color-text-primary)] hover:bg-[var(--color-background)]";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-40 backdrop-blur-xl backdrop-saturate-150 border-b transition-colors duration-500 ${shell}`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a
          href="#hero"
          onClick={(e) => go(e, "#hero")}
          className={`text-2xl md:text-3xl font-[var(--font-heading)] font-black tracking-tighter transition-colors duration-500 ${inkClass}`}
        >
          <ScrambleText text="Shangesh S" speed={30} />
          <span className={overHero ? "text-[#c4b5fd]" : "text-[var(--color-primary)]"}>
            .
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map((item) => {
            const isActive = active === item.href.slice(1);
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => go(e, item.href)}
                aria-current={isActive ? "page" : undefined}
                className={`font-bold font-[var(--font-code)] text-sm uppercase tracking-wider relative transition-colors duration-300 ${hoverInk} ${
                  isActive ? activeInk : inkClass
                }`}
              >
                <ScrambleText text={item.label} speed={30} revealFor={2} />
                <span
                  className={`absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full transition-all duration-300 ${dotBg} ${
                    isActive ? "opacity-100 scale-100" : "opacity-0 scale-0"
                  }`}
                />
              </a>
            );
          })}

          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
            className={`w-10 h-10 flex items-center justify-center rounded-full border-2 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 ${iconButton}`}
          >
            {theme === "light" ? (
              <Moon className="w-5 h-5" />
            ) : (
              <Sun className="w-5 h-5 text-[var(--color-secondary)]" />
            )}
          </button>

          <a
            href="#contact"
            onClick={(e) => go(e, "#contact")}
            className="neo-btn text-sm shadow-[3px_3px_0_rgba(0,0,0,0.35)]"
          >
            Contact Me
          </a>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
            className={`w-10 h-10 flex items-center justify-center rounded-full border-2 backdrop-blur-sm transition-colors ${iconButton}`}
          >
            {theme === "light" ? (
              <Moon className="w-5 h-5" />
            ) : (
              <Sun className="w-5 h-5 text-[var(--color-secondary)]" />
            )}
          </button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className={`p-2 transition-colors ${inkClass}`}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {open && (
        <div
          className={`md:hidden backdrop-blur-xl border-t px-6 py-6 flex flex-col gap-4 transition-colors ${shell}`}
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => go(e, item.href)}
              className={`font-bold font-[var(--font-code)] uppercase tracking-wider transition-colors ${inkClass} ${hoverInk}`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => go(e, "#contact")}
            className="neo-btn w-full mt-2"
          >
            Contact Me
          </a>
        </div>
      )}
    </nav>
  );
}
