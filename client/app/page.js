"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import {
  ArrowUpRight,
  Building2,
  ChevronDown,
  ExternalLink,
  FileCode2,
  FileText,
  Gauge,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Medal,
  Package,
  Phone,
  ShieldCheck,
  Trophy,
  Twitter,
  Zap,
} from "lucide-react";

import {
  portfolioConfig,
  projectCategories,
  tagColor,
} from "@/data/Portfolio";
import profilePic from "@/public/profile_pic.jpg";
import ScrambleText from "@/components/ui/scramble-text";
import HackerButton from "@/components/ui/hacker-button";
import BackgroundPaths from "@/components/ui/background-paths";
import NeoCursor from "@/components/ui/neo-cursor";
import Preloader from "@/components/ui/preloader";

/**
 * Icons are named in data/Portfolio.js and resolved here, so the data file
 * stays free of component imports.
 */
const ICONS = {
  Building2,
  FileCode2,
  Gauge,
  Github,
  Linkedin,
  Mail,
  Medal,
  Package,
  Phone,
  ShieldCheck,
  Trophy,
  Zap,
};

function Icon({ name, className }) {
  const Cmp = ICONS[name] ?? FileCode2;
  return <Cmp className={className} aria-hidden="true" />;
}

/* ==========================================================================
   Shared motion
   ========================================================================== */

const rise = {
  hidden: { y: 40, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 90, damping: 16 },
  },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

const viewport = { once: true, amount: 0.15 };

/* ==========================================================================
   Page
   ========================================================================== */

export default function Home() {
  return (
    <>
      <Preloader />
      <NeoCursor />
      <main className="min-h-screen bg-[var(--color-background)] overflow-x-hidden relative">
        <Hero />
        <Ticker />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Achievements />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

/* ==========================================================================
   Hero
   ========================================================================== */

const SOCIALS = [
  {
    icon: Github,
    label: "GitHub",
    href: portfolioConfig.socialLinks.github,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: portfolioConfig.socialLinks.linkedin,
  },
  {
    icon: Twitter,
    label: "Twitter",
    href: portfolioConfig.socialLinks.twitter,
  },
  {
    icon: Mail,
    label: "Email",
    href: `mailto:${portfolioConfig.email}`,
  },
];

function Hero() {
  const typed = useTypedRoles(portfolioConfig.typedRoles);

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex flex-col overflow-hidden pt-28 pb-10 px-6 bg-gradient-to-br from-[#120826] via-[#09090b] to-[#0a0514]"
    >
      {/* Ambient dot field */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none dot-grid"
        style={{ color: "#fff" }}
      />

      {/* Soft colour blooms */}
      <div className="absolute -top-32 -left-24 w-[28rem] h-[28rem] rounded-full bg-[#7c3aed]/25 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-40 -right-20 w-[30rem] h-[30rem] rounded-full bg-[#db2777]/20 blur-[130px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto flex-1 flex flex-col justify-center">
        <motion.div
          initial="hidden"
          animate="show"
          variants={stagger}
          className="grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-12 lg:gap-14 items-center w-full"
        >
          {/* Left — identity */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
            <motion.span
              variants={rise}
              className="neo-badge shadow-none border-white/25 text-white bg-white/10 mb-6"
            >
              {portfolioConfig.role}
            </motion.span>

            <motion.h1
              variants={rise}
              className="text-5xl md:text-7xl font-[var(--font-heading)] font-black leading-[1.12] tracking-tighter text-white mb-5 pb-1"
            >
              {portfolioConfig.name}
              <span className="text-[var(--color-primary)]">.</span>
            </motion.h1>

            <motion.div
              variants={rise}
              className="mb-6 min-h-[3.25rem] flex items-center"
            >
              <span className="inline-flex items-center bg-[var(--color-surface)] text-[var(--color-text-primary)] font-[var(--font-code)] text-lg md:text-2xl font-bold px-4 py-2 rounded-lg border-2 border-[var(--color-border)] shadow-[4px_4px_0_rgba(0,0,0,0.45)]">
                <span className="text-[var(--color-secondary)]">&lt;&nbsp;</span>
                {typed}
                <span className="animate-caret text-[var(--color-primary)]">▌</span>
                <span className="text-[var(--color-secondary)]">&nbsp;/&gt;</span>
              </span>
            </motion.div>

            <motion.p
              variants={rise}
              className="text-base md:text-lg text-white/80 font-medium leading-relaxed max-w-xl mb-10"
            >
              {portfolioConfig.description}
            </motion.p>

            <motion.div
              variants={rise}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
            >
              <HackerButton
                text="Download CV"
                href={portfolioConfig.resumeUrl}
                download={portfolioConfig.resumeFileName}
                className="text-base px-7 py-3.5"
              />

              <a
                href="#projects"
                className="neo-btn-outline bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-black text-base px-7 py-3.5"
              >
                View Projects
              </a>
            </motion.div>

            <motion.div
              variants={rise}
              className="flex items-center justify-center lg:justify-start gap-3 mt-8"
            >
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="group relative p-3 rounded-xl bg-white/10 backdrop-blur-sm border-2 border-white/40 shadow-[3px_3px_0_rgba(0,0,0,0.5)] hover:bg-white hover:border-white hover:shadow-[5px_5px_0_rgba(0,0,0,0.5)] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
                >
                  <social.icon className="w-5 h-5 text-white group-hover:text-black transition-colors" />
                  <span className="absolute -bottom-9 left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-white text-black text-xs font-bold font-[var(--font-code)] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border-2 border-black">
                    {social.label}
                  </span>
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right — portrait */}
          <motion.div
            variants={rise}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <motion.div
              className="relative w-[19rem] sm:w-[26rem] lg:w-[34rem] max-w-full"
              animate={{ y: [0, -16, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Pulsing bloom behind the frame */}
              <motion.div
                className="absolute -inset-8 rounded-[3rem] bg-[var(--color-secondary)]/30 blur-3xl pointer-events-none"
                animate={{ opacity: [0.3, 0.75, 0.3], scale: [0.94, 1.06, 0.94] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              />

              <div className="relative rounded-[2rem] border-4 border-white bg-[var(--color-surface)] shadow-[16px_16px_0_rgba(0,0,0,0.55)] overflow-hidden">
                <Image
                  src={profilePic}
                  alt={`${portfolioConfig.name}, ${portfolioConfig.role}`}
                  className="w-full h-auto object-cover"
                  priority
                  sizes="(max-width: 640px) 19rem, (max-width: 1024px) 26rem, 34rem"
                />
              </div>

              {/* Accent frame, drifting against the float */}
              <motion.div
                className="absolute inset-0 rounded-[2rem] border-4 border-[var(--color-secondary)] pointer-events-none"
                animate={{ rotate: [0, 1.6, -1.6, 0], scale: [1, 1.03, 1] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Second frame, counter-rotating for depth */}
              <motion.div
                className="absolute inset-0 rounded-[2rem] border-2 border-[var(--color-primary)]/70 pointer-events-none"
                animate={{ rotate: [0, -2.2, 2.2, 0], scale: [1.025, 1, 1.025] }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </motion.div>
        </motion.div>

      </div>

      <ScrollCue />
    </section>
  );
}

/** Persistent nudge toward the next section, pinned to the base of the hero. */
function ScrollCue() {
  return (
    <motion.div
      className="relative z-10 hidden md:flex flex-col items-center gap-3 mt-8 shrink-0"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0, transition: { delay: 1.2 } }}
    >
      <span className="text-xs font-[var(--font-code)] font-bold uppercase tracking-[0.25em] text-white/70">
        Scroll to explore
      </span>
      <button
        type="button"
        onClick={() =>
          document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
        }
        aria-label="Scroll to the about section"
        className="w-12 h-12 rounded-full flex items-center justify-center bg-[var(--color-primary)] text-white border-2 border-white shadow-[4px_4px_0_rgba(0,0,0,0.5)] hover:bg-[var(--color-accent)] transition-colors"
      >
        <motion.span
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6" />
        </motion.span>
      </button>
    </motion.div>
  );
}

/** Types each role in, holds, deletes, then moves to the next — forever. */
function useTypedRoles(roles) {
  const [text, setText] = useState("");

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setText(roles[0]);
      return;
    }

    let timer;
    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let live = true;

    const tick = () => {
      if (!live) return;
      const full = roles[roleIndex];

      if (!deleting) {
        if (charIndex <= full.length) {
          setText(full.slice(0, charIndex));
          charIndex += 1;
          timer = setTimeout(tick, 90);
        } else {
          timer = setTimeout(() => {
            deleting = true;
            tick();
          }, 1900);
        }
      } else if (charIndex > 0) {
        charIndex -= 1;
        setText(full.slice(0, charIndex));
        timer = setTimeout(tick, 45);
      } else {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        timer = setTimeout(tick, 260);
      }
    };

    tick();
    return () => {
      live = false;
      clearTimeout(timer);
    };
  }, [roles]);

  return text;
}

/* ==========================================================================
   Ticker
   ========================================================================== */

function Ticker() {
  const words = [
    "Solidity",
    "Foundry",
    "ERC-4337",
    "Gas Optimization",
    "Next.js",
    "Docker",
    "CI/CD",
    "OpenZeppelin",
    "Node.js",
    "Fuzz Testing",
  ];
  const strip = [...words, ...words];

  return (
    <div className="bg-[var(--color-primary)] border-y-4 border-[var(--color-border)] py-4 overflow-hidden">
      <div className="flex w-max animate-marquee" aria-hidden="true">
        {strip.map((word, i) => (
          <span
            key={i}
            className="flex items-center gap-6 px-6 text-white font-[var(--font-code)] font-bold uppercase tracking-widest text-sm whitespace-nowrap"
          >
            {word}
            <span className="w-2 h-2 rotate-45 bg-white" />
          </span>
        ))}
      </div>
      <span className="sr-only">{words.join(", ")}</span>
    </div>
  );
}

/* ==========================================================================
   About — stats, statement, terminal
   ========================================================================== */

function About() {
  return (
    <section
      id="about"
      className="pb-24 pt-16 max-w-[1400px] mx-auto px-6 relative z-10"
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mx-auto mb-20"
      >
        {portfolioConfig.stats.map((stat) => (
          <motion.div
            key={stat.label}
            variants={rise}
            className="neo-card p-8 lg:p-10 flex flex-col justify-between bg-[var(--color-surface)] cursor-crosshair min-h-[220px]"
          >
            <span className="w-14 h-14 flex items-center justify-center rounded-xl bg-[var(--color-primary)]/10 border-2 border-[var(--color-border)] shadow-[2px_2px_0_var(--color-shadow)]">
              <Icon name={stat.icon} className="w-7 h-7 text-[var(--color-primary)]" />
            </span>
            <div>
              <div className="text-5xl lg:text-6xl font-[var(--font-heading)] font-black text-[var(--color-text-primary)] mb-3">
                {stat.value}
              </div>
              <div className="text-sm font-[var(--font-heading)] text-[var(--color-text-muted)] font-bold uppercase tracking-widest leading-tight">
                {stat.label}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Who am I? */}
      <motion.div
        variants={rise}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="neo-card p-8 md:p-12 bg-[var(--color-surface)] max-w-5xl mx-auto mb-24"
      >
        <div className="flex items-center gap-3 mb-6">
          <span className="h-[3px] w-8 bg-[var(--color-primary)]" />
          <span className="text-sm font-black uppercase tracking-[0.3em] font-[var(--font-code)] text-[var(--color-text-muted)]">
            Who am I?
          </span>
        </div>
        <p className="text-lg md:text-xl font-medium leading-relaxed text-[var(--color-text-primary)]">
          {portfolioConfig.about.bio}
        </p>
      </motion.div>

      <motion.div
        variants={rise}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="text-center max-w-5xl mx-auto mb-24"
      >
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-[var(--font-heading)] font-black text-[var(--color-text-primary)] leading-[1.08] mb-8">
          You don&apos;t need more code.
          <br />
          You need code that{" "}
          <span className="text-[var(--color-primary)]">survives the audit.</span>
        </h2>
        <p className="text-[var(--color-text-muted)] text-xl md:text-2xl font-bold max-w-3xl mx-auto leading-relaxed">
          {portfolioConfig.about.manifesto}
        </p>
      </motion.div>

      <Terminal />

      {/* Education */}
      <motion.div
        variants={rise}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="max-w-6xl mx-auto mt-12"
      >
        {portfolioConfig.education.map((edu) => (
          <div
            key={edu.degree}
            className="neo-card p-8 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-[var(--color-surface)]"
          >
            <div className="flex items-start gap-4">
              <GraduationCap className="w-8 h-8 text-[var(--color-primary)] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl md:text-2xl font-[var(--font-heading)] font-black text-[var(--color-text-primary)]">
                  {edu.degree}
                </h3>
                <p className="text-[var(--color-text-muted)] font-bold">
                  {edu.institution} · {edu.track}
                </p>
              </div>
            </div>
            <div className="flex flex-col md:items-end gap-2">
              <span className="neo-badge bg-[var(--color-primary)] text-white">
                {edu.period}
              </span>
              <span className="flex items-center gap-1 text-sm font-[var(--font-code)] font-bold text-[var(--color-text-muted)]">
                <MapPin className="w-4 h-4" /> {edu.location}
              </span>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

/** Types the resume summary out line by line once the card scrolls into view. */
function Terminal() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const lines = portfolioConfig.about.terminal;
  const [shown, setShown] = useState("");

  useEffect(() => {
    if (!inView) return;

    const full = lines.join("\n");

    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setShown(full);
      return;
    }

    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setShown(full.slice(0, i));
      if (i >= full.length) clearInterval(id);
    }, 14);

    return () => clearInterval(id);
  }, [inView, lines]);

  return (
    <div ref={ref} className="max-w-6xl mx-auto">
      <div className="neo-card overflow-hidden w-full">
        <div className="flex items-center px-4 py-3 bg-[var(--color-border)] border-b-4 border-[var(--color-border)]">
          <div className="flex gap-2">
            <span className="w-4 h-4 rounded-full bg-[var(--color-accent)] border border-black/20" />
            <span className="w-4 h-4 rounded-full bg-[#F5A623] border border-black/20" />
            <span className="w-4 h-4 rounded-full bg-[var(--color-secondary)] border border-black/20" />
          </div>
          <div className="mx-auto font-[var(--font-code)] font-bold text-sm tracking-widest text-[#FFF5F0]">
            shangesh@dev: ~
          </div>
        </div>

        <div className="p-6 md:p-10 lg:p-12 font-[var(--font-code)] bg-[var(--color-background)]">
          <div className="text-[var(--color-primary)] font-bold mb-6 text-lg md:text-xl">
            $: cat resume.txt
          </div>
          <pre className="whitespace-pre-wrap font-[var(--font-code)] font-bold leading-relaxed overflow-x-auto text-sm md:text-base lg:text-lg text-[var(--color-text-primary)] min-h-[320px]">
            {shown}
            <span className="animate-caret text-[var(--color-primary)]">▌</span>
          </pre>
        </div>
      </div>
    </div>
  );
}

/* ==========================================================================
   Experience
   ========================================================================== */

function Experience() {
  return (
    <section
      id="experience"
      className="py-24 max-w-[1400px] mx-auto px-6 relative z-10 overflow-hidden"
    >
      <div className="absolute inset-6 z-0 opacity-50 rounded-3xl overflow-hidden">
        <BackgroundPaths />
      </div>

      <div className="relative z-10">
        <motion.h2
          variants={rise}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="text-4xl md:text-6xl lg:text-7xl font-[var(--font-heading)] font-black mb-16 md:mb-20 text-center tracking-tight text-[var(--color-text-primary)]"
        >
          MY WORK:{" "}
          <span className="text-[var(--color-primary)] block md:inline">
            EXPERIENCE
          </span>
        </motion.h2>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {portfolioConfig.experience.map((job, i) => (
            <motion.article
              key={job.company}
              variants={rise}
              className={`group relative overflow-hidden h-full flex flex-col bg-[var(--color-background)]/85 backdrop-blur-md border-4 border-[var(--color-border)] rounded-2xl shadow-[8px_8px_0_var(--color-shadow)] p-8 md:p-10 hover:-translate-y-2 hover:translate-x-2 transition-transform duration-300 ${
                i === portfolioConfig.experience.length - 1 &&
                portfolioConfig.experience.length % 2 === 1
                  ? "lg:col-span-2"
                  : ""
              }`}
            >
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-[var(--color-primary)]/10 rounded-full blur-2xl group-hover:bg-[var(--color-secondary)]/20 transition-colors duration-500" />

              <span className="inline-block w-fit px-4 py-2 mb-6 bg-[var(--color-primary)] text-white font-[var(--font-code)] font-bold text-sm border-2 border-[var(--color-border)] rounded-lg shadow-[2px_2px_0_var(--color-shadow)] -rotate-2">
                {job.period}
              </span>

              <h3 className="text-2xl lg:text-3xl font-[var(--font-heading)] font-black text-[var(--color-text-primary)] mb-3 leading-tight group-hover:text-[var(--color-primary)] transition-colors">
                {job.title}
              </h3>

              <div className="flex flex-wrap items-center gap-3 text-[var(--color-text-muted)] text-lg font-bold mb-8">
                <span className="text-[var(--color-secondary)]">@</span>
                {job.company}
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-border)]" />
                <span className="text-base">{job.location}</span>
              </div>

              <ul className="space-y-4 text-[var(--color-text-primary)] font-medium leading-relaxed">
                {job.highlights.map((point) => (
                  <li key={point} className="flex items-start gap-4">
                    <span className="flex-shrink-0 mt-2 w-2 h-2 rounded-sm border border-[var(--color-border)] bg-[var(--color-accent)] rotate-45" />
                    <span className="text-[1.02rem] opacity-90">{point}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t-2 border-dashed border-[var(--color-border)]">
                {job.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-[var(--font-code)] font-bold px-2 py-1 rounded border-2 border-[var(--color-border)] shadow-[2px_2px_0_var(--color-border)] text-white"
                    style={{ backgroundColor: tagColor(skill) }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ==========================================================================
   Projects
   ========================================================================== */

function Projects() {
  const [filter, setFilter] = useState("All");

  const shown = useMemo(
    () =>
      filter === "All"
        ? portfolioConfig.projects
        : portfolioConfig.projects.filter((p) => p.category === filter),
    [filter]
  );

  return (
    <section
      id="projects"
      className="py-24 max-w-[1400px] mx-auto px-6 relative z-10 w-full"
    >
      <motion.h2
        variants={rise}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="text-4xl md:text-6xl lg:text-7xl font-[var(--font-heading)] font-black mb-12 text-center leading-tight text-[var(--color-text-primary)]"
      >
        Things I&apos;ve{" "}
        <span className="text-[var(--color-primary)] block md:inline">Built.</span>
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-3 mb-16">
        {projectCategories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setFilter(cat)}
            aria-pressed={filter === cat}
            className={`px-5 py-2 font-[var(--font-code)] text-sm font-bold uppercase tracking-wider border-2 border-[var(--color-border)] rounded-full transition-all ${
              filter === cat
                ? "bg-[var(--color-primary)] text-white shadow-[4px_4px_0_var(--color-shadow)] -translate-y-0.5"
                : "bg-[var(--color-surface)] text-[var(--color-text-primary)] shadow-[2px_2px_0_var(--color-shadow)] hover:-translate-y-0.5 hover:shadow-[4px_4px_0_var(--color-shadow)]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.div
        key={filter}
        variants={stagger}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
      >
        {shown.map((project) => (
          <motion.article
            key={project.title}
            variants={rise}
            className="flex flex-col justify-between h-full bg-[var(--color-surface)] border-4 border-[var(--color-border)] rounded-2xl p-6 shadow-[8px_8px_0_var(--color-shadow)] hover:-translate-y-2 hover:shadow-[12px_12px_0_var(--color-shadow)] transition-all duration-300"
          >
            <div>
              <div className="flex justify-between items-start gap-3 mb-4">
                <span className="text-[var(--color-primary)] font-[var(--font-code)] text-xs font-bold uppercase tracking-widest bg-[var(--color-primary)]/10 px-3 py-1 rounded border border-[var(--color-primary)]">
                  {project.category}
                </span>

                <div className="flex gap-3 flex-shrink-0">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.title} source on GitHub`}
                      className="text-[var(--color-text-primary)] hover:text-[var(--color-secondary)] transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {project.docs && (
                    <a
                      href={project.docs}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.title} documentation`}
                      className="text-[var(--color-text-primary)] hover:text-[var(--color-secondary)] transition-colors"
                    >
                      <FileText className="w-5 h-5" />
                    </a>
                  )}
                  {project.npm && (
                    <a
                      href={project.npm}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.title} on npm`}
                      className="text-[var(--color-text-primary)] hover:text-[var(--color-secondary)] transition-colors"
                    >
                      <Package className="w-5 h-5" />
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open ${project.title}`}
                      className="text-[var(--color-text-primary)] hover:text-[var(--color-secondary)] transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-xl lg:text-2xl font-[var(--font-heading)] font-black text-[var(--color-text-primary)] mb-3 leading-tight">
                {project.title}
              </h3>

              <p className="text-[var(--color-text-muted)] font-medium mb-4 leading-relaxed">
                {project.description}
              </p>

              {project.highlights?.length > 0 && (
                <ul className="space-y-2 mb-6">
                  {project.highlights.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="flex-shrink-0 mt-2 w-1.5 h-1.5 rotate-45 bg-[var(--color-accent)]" />
                      <span className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t-2 border-dashed border-[var(--color-border)]">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-[var(--font-code)] font-bold text-white px-2 py-1 rounded shadow-[2px_2px_0_var(--color-border)] border-2 border-[var(--color-border)]"
                  style={{ backgroundColor: tagColor(tag) }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </motion.div>

      <FreelanceStrip />
    </section>
  );
}

function FreelanceStrip() {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      className="mt-24"
    >
      <motion.h3
        variants={rise}
        className="text-2xl md:text-3xl font-[var(--font-heading)] font-black text-[var(--color-text-primary)] mb-8 flex items-center gap-4"
      >
        <span className="w-4 h-4 rounded-full border-2 border-[var(--color-border)] bg-[var(--color-secondary)] shadow-[2px_2px_0_var(--color-shadow)]" />
        Client work
      </motion.h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {portfolioConfig.freelanceProjects.map((item) => (
          <motion.a
            key={item.title}
            variants={rise}
            href={item.link}
            target="_blank"
            rel="noreferrer"
            className="group neo-card p-6 bg-[var(--color-surface)] flex flex-col gap-3"
          >
            <div className="flex items-center justify-between">
              <span className="font-[var(--font-code)] text-xs font-bold uppercase tracking-widest text-[var(--color-text-muted)]">
                {item.year}
              </span>
              <ArrowUpRight className="w-5 h-5 text-[var(--color-text-primary)] group-hover:text-[var(--color-primary)] group-hover:rotate-45 transition-all" />
            </div>
            <h4 className="text-lg font-[var(--font-heading)] font-black text-[var(--color-text-primary)]">
              {item.title}
            </h4>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
              {item.description}
            </p>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}

/* ==========================================================================
   Skills
   ========================================================================== */

const ACCENT_DOT = {
  primary: "bg-[var(--color-primary)]",
  secondary: "bg-[var(--color-secondary)]",
  accent: "bg-[var(--color-accent)]",
};

function Skills() {
  return (
    <section
      id="skills"
      className="py-24 relative overflow-hidden z-10 w-full bg-[var(--color-surface)] border-y-4 border-[var(--color-border)]"
    >
      <div className="max-w-[1400px] mx-auto px-6 relative z-10 w-full">
        <motion.h2
          variants={rise}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="text-4xl md:text-6xl lg:text-7xl font-[var(--font-heading)] font-black text-[var(--color-text-primary)] leading-[1.1] mb-16 text-center"
        >
          The <span className="text-[var(--color-secondary)]">Stack</span>
        </motion.h2>

        <motion.p
          variants={rise}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="text-center text-[var(--color-text-muted)] font-bold text-lg max-w-2xl mx-auto -mt-10 mb-16"
        >
          What I reach for, grouped by the job it does.
        </motion.p>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {portfolioConfig.skills.map((group) => (
            <motion.div
              key={group.title}
              variants={rise}
              className="neo-card p-8 bg-[var(--color-background)] cursor-crosshair"
            >
              <h3 className="text-xl md:text-2xl font-[var(--font-heading)] font-black mb-6 flex items-center gap-3 text-[var(--color-text-primary)]">
                <span
                  className={`w-4 h-4 rounded-full border-2 border-[var(--color-border)] shadow-[2px_2px_0_var(--color-shadow)] ${
                    ACCENT_DOT[group.accent] ?? ACCENT_DOT.primary
                  }`}
                />
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <span key={item} className="neo-chip">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ==========================================================================
   Achievements
   ========================================================================== */

function Achievements() {
  return (
    <section
      id="achievements"
      className="py-28 bg-gradient-to-b from-[#09090b] via-[#121214] to-[#09090b] relative overflow-hidden border-b-4 border-[var(--color-border)]"
    >
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none dot-grid" style={{ color: "#fff" }} />

      <div className="max-w-[1400px] mx-auto px-6 text-center relative z-10">
        <motion.h2
          variants={rise}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="text-4xl md:text-6xl lg:text-7xl font-[var(--font-heading)] font-black mb-16 text-white tracking-tight"
        >
          Key <span className="text-[var(--color-accent)]">Achievements</span>
        </motion.h2>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl mx-auto justify-items-center"
        >
          {portfolioConfig.achievements.map((item) => {
            const Tag = item.link ? "a" : "div";
            const linkProps = item.link
              ? { href: item.link, target: "_blank", rel: "noopener noreferrer" }
              : {};

            return (
              <motion.div key={item.title} variants={rise} className="w-full max-w-[380px]">
                <Tag
                  {...linkProps}
                  className="group w-full h-[280px] border-4 border-[var(--color-border)] shadow-[8px_8px_0_var(--color-shadow)] p-8 rounded-[2rem] transition-all duration-300 flex flex-col items-start justify-center text-left hover:-translate-y-2 hover:shadow-[12px_12px_0_var(--color-shadow)]"
                  style={{ backgroundColor: item.color }}
                >
                  <div className="flex justify-between w-full items-start">
                    <span className="mb-4 bg-white/25 p-3 rounded-2xl border-4 border-black/10 group-hover:scale-110 transition-transform">
                      <Icon name={item.icon} className="w-8 h-8 text-black" />
                    </span>
                    {item.link && (
                      <ArrowUpRight className="w-6 h-6 text-black group-hover:rotate-45 transition-transform" />
                    )}
                  </div>

                  <h3 className="text-lg lg:text-xl font-[var(--font-heading)] font-black text-black mb-3 leading-tight">
                    {item.title}
                  </h3>
                  <p className="font-[var(--font-code)] font-bold text-black/90 text-xs leading-relaxed">
                    {item.description}
                  </p>
                </Tag>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

/* ==========================================================================
   Contact
   ========================================================================== */

const CONTACT_LINKS = [
  { icon: Mail, label: "Email Me", href: `mailto:${portfolioConfig.email}` },
  {
    icon: Phone,
    label: "Call Me",
    href: `tel:${portfolioConfig.phone.replace(/\s/g, "")}`,
  },
  { icon: Linkedin, label: "LinkedIn", href: portfolioConfig.socialLinks.linkedin },
  { icon: Github, label: "GitHub", href: portfolioConfig.socialLinks.github },
];

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [errorMsg, setErrorMsg] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    if (status === "sending") return;

    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) throw new Error(data.error || "Something went wrong.");

      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message || "Something went wrong.");
    }
  };

  const set = (key) => (e) => {
    if (status !== "idle") setStatus("idle");
    setForm((f) => ({ ...f, [key]: e.target.value }));
  };

  const field =
    "w-full bg-[var(--color-background)] border-4 border-[var(--color-border)] p-4 rounded-xl font-bold text-[var(--color-text-primary)] focus:outline-none focus:ring-4 focus:ring-[var(--color-primary)] placeholder:text-[var(--color-text-muted)]";
  const labelClass =
    "text-sm font-[var(--font-code)] font-bold text-[var(--color-text-primary)] uppercase tracking-widest";

  return (
    <section
      id="contact"
      className="py-28 bg-[var(--color-surface)] border-t-[6px] border-[var(--color-border)]"
    >
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="neo-card p-8 md:p-14 lg:p-20 bg-gradient-to-br from-[#FFB37A] via-[#FF7D81] to-[#A270FF]">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="flex-1 w-full text-left">
              <h2 className="text-5xl lg:text-7xl font-[var(--font-heading)] font-black mb-8 text-black leading-[1.05]">
                Ready to
                <br />
                ship.
              </h2>
              <p className="text-black/80 font-bold mb-12 leading-relaxed text-lg md:text-xl max-w-xl">
                Open to blockchain and full-stack roles, freelance builds, or a
                conversation about contract design and gas budgets.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {CONTACT_LINKS.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="group flex items-center justify-center gap-3 bg-[var(--color-background)] border-4 border-[var(--color-border)] p-4 rounded-2xl shadow-[4px_4px_0_var(--color-shadow)] hover:shadow-[6px_6px_0_var(--color-shadow)] hover:-translate-y-1 hover:-translate-x-1 transition-all font-bold font-[var(--font-code)] text-[var(--color-text-primary)]"
                  >
                    <item.icon className="w-5 h-5 text-[var(--color-primary)] group-hover:scale-125 transition-transform" />
                    <span>{item.label}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="flex-1 w-full">
              <form onSubmit={onSubmit} className="neo-card p-8 md:p-10 bg-[var(--color-surface)] grid gap-6">
                <h3 className="text-2xl md:text-3xl font-[var(--font-heading)] font-black text-[var(--color-text-primary)]">
                  Say hello
                </h3>

                <div className="space-y-2">
                  <label htmlFor="name" className={labelClass}>
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={set("name")}
                    placeholder="Ada Lovelace"
                    className={field}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className={labelClass}>
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={set("email")}
                    placeholder="ada@example.com"
                    className={field}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className={labelClass}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={form.message}
                    onChange={set("message")}
                    placeholder="Let's build something..."
                    className={`${field} h-[150px] resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="neo-btn w-full text-lg py-4 shadow-[8px_8px_0_var(--color-shadow)] disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? "Sending…" : "Send message"}
                </button>

                <p
                  role="status"
                  aria-live="polite"
                  className={`text-sm font-[var(--font-code)] font-bold text-center ${
                    status === "sent"
                      ? "text-[var(--color-primary)]"
                      : "text-[var(--color-secondary)]"
                  }`}
                >
                  {status === "sent" &&
                    "Message sent — I'll reply to the address you gave."}
                  {status === "error" && errorMsg}
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   Footer
   ========================================================================== */

function Footer() {
  return (
    <footer className="py-12 bg-[var(--color-surface)] border-t-[6px] border-[var(--color-border)] text-center">
      <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-3xl md:text-4xl font-[var(--font-heading)] font-black text-[var(--color-text-primary)] tracking-tighter">
          <ScrambleText text="Shangesh S" speed={30} />
          <span className="text-[var(--color-primary)]">.</span>
        </div>

        <p className="text-[var(--color-text-primary)] font-bold text-lg">
          Designed &amp; built by
          <span className="text-white bg-[var(--color-primary)] border-[3px] border-[var(--color-border)] px-3 py-1 ml-2 rounded-[1rem] shadow-[3px_3px_0_var(--color-shadow)] -rotate-2 inline-block">
            Shangesh S
          </span>
        </p>

        <p className="text-[var(--color-text-muted)] font-[var(--font-code)] font-bold tracking-widest uppercase">
          © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
