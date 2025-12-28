"use client";
import {
  Linkedin,
  Twitter,
  Github,
  Code,
  Rocket,
  CheckCircle,
  ExternalLink,
  Briefcase,
  ChevronDown,
  MousePointer,
  Calendar,
  Circle,
  Dna,
  Globe2,
  GraduationCap,
  Heart,
  Languages,
  User2,
  LightbulbIcon,
  Library,
  Wrench,
  Eye,
  Database,
  Layers,
  Sparkles,
  Phone,
  Send,
  Mail,
  AlertCircle,
  Loader2,
} from "lucide-react";
import logo from "@/public/profile_pic.jpg";
import React, { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { portfolioConfig } from "@/data/Portfolio";
import HackerButton from "@/components/ui/hacker-button";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Home() {
  const [displayText, setDisplayText] = useState("");
  const freelanceRef = useRef(null);
  const isInView = useInView(freelanceRef, { once: false, amount: 0.2 });
  const [hasScrolled, setHasScrolled] = useState(false);

  // Array of roles to cycle through
  const roles = ["Coder", "Designer", "Builder", "Developer"];
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseDuration = 2000;

  // Reset hasScrolled when the component is unmounted
  useEffect(() => {
    return () => setHasScrolled(false);
  }, []);

  // Infinite typing animation - cycles through each role
  useEffect(() => {
    let timeout;
    let currentRoleIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;

    const typeText = () => {
      const currentRole = roles[currentRoleIndex];
      const fullText = `< ${currentRole} />`;

      if (!isDeleting) {
        // Typing
        if (currentCharIndex <= fullText.length) {
          setDisplayText(fullText.substring(0, currentCharIndex));
          currentCharIndex++;
          timeout = setTimeout(typeText, typingSpeed);
        } else {
          // Pause before deleting
          timeout = setTimeout(() => {
            isDeleting = true;
            typeText();
          }, pauseDuration);
        }
      } else {
        // Deleting
        if (currentCharIndex > 0) {
          currentCharIndex--;
          setDisplayText(fullText.substring(0, currentCharIndex));
          timeout = setTimeout(typeText, deletingSpeed);
        } else {
          // Move to next role
          isDeleting = false;
          currentRoleIndex = (currentRoleIndex + 1) % roles.length;
          timeout = setTimeout(typeText, typingSpeed + 200);
        }
      }
    };

    typeText();
    return () => clearTimeout(timeout);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center">
      {/* Hero Section */}
      <motion.main
        id="home"
        className="container mx-auto px-4 pt-24 flex-1 flex flex-col items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center md:items-start space-y-6 w-full order-2 md:order-1 "
          >
            <motion.h1
              className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-500 dark:from-indigo-400 dark:to-violet-400"
              variants={itemVariants}
            >
              {portfolioConfig.name}
            </motion.h1>

            <motion.div
              className="flex flex-col md:flex-row items-center md:items-baseline gap-2 text-xl md:text-2xl"
              variants={itemVariants}
            >
              <span className="font-mono text-indigo-600 dark:text-indigo-400 min-w-[180px] md:min-w-[220px]">
                {displayText}
                <span className="animate-blink">|</span>
              </span>
            </motion.div>

            <motion.p
              className="text-lg text-gray-600 dark:text-gray-400 max-w-xl"
              variants={itemVariants}
            >
              {portfolioConfig.description}
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 mt-8"
              variants={itemVariants}
            >
              <a
                href={portfolioConfig.resumeUrl}
                download
                className="no-underline"
              >
                <HackerButton text="Download CV" />
              </a>

              <div className="flex gap-4">
                {[
                  {
                    icon: Github,
                    href: "https://github.com/shangesh-tech",
                    label: "GitHub",
                    color: "from-gray-600 to-gray-800",
                  },
                  {
                    icon: Linkedin,
                    href: "https://www.linkedin.com/in/shangesh-s",
                    label: "LinkedIn",
                    color: "from-blue-600 to-blue-800",
                  },
                  {
                    icon: Twitter,
                    href: "https://twitter.com/shangesh_s",
                    label: "Twitter",
                    color: "from-sky-500 to-sky-700",
                  },
                ].map((social, index) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative group hover:scale-110 transition-all duration-300"
                  >
                    <div className="p-3 rounded-lg bg-gradient-to-br dark:opacity-80 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm bg-white/90 dark:bg-gray-800/90">
                      <social.icon className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors" />
                    </div>
                    <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-800 dark:bg-gray-700 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {social.label}
                    </span>
                  </Link>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            variants={itemVariants}
            className="w-full flex justify-center items-center order-1 md:order-2 mt-10"
          >
            <motion.div
              className="relative w-10/12 h-10/12 "
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: 0.2,
              }}
            >
              <Image
                src={logo}
                alt="Portfolio Logo"
                className="object-contain rounded-2xl shadow-2xl p-1 "
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <motion.div
                className="absolute inset-0 border-2 border-indigo-500 rounded-2xl"
                animate={{
                  scale: [1, 1.02, 1],
                  rotate: [0, 1, -1, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div variants={containerVariants} className="flex gap-8 my-16">
          {[
            {
              value: portfolioConfig.projects.length + "+",
              label: "Projects",
              icon: <Code className="h-4 w-4" />,
              color: "from-blue-500/20 to-blue-600/5",
            },
            {
              value: "Fresher",
              label: "Exp",
              icon: <Rocket className="h-4 w-4" />,
              color: "from-purple-500/20 to-purple-600/5",
            },
            {
              value: "100%",
              label: "Satisfaction",
              icon: <CheckCircle className="h-4 w-4" />,
              color: "from-green-500/20 to-green-600/5",
            },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className={`flex flex-col items-center p-3.5 rounded-xl bg-gradient-to-br ${stat.color} backdrop-blur-sm border border-border/20 dark:border-white/5 shadow-sm`}
              whileHover={{ y: -5, scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ delay: 0.2 * index }}
            >
              <motion.div
                className="text-primary mb-1"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  delay: index * 0.3,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                }}
              >
                {stat.icon}
              </motion.div>
              <div className="font-bold text-xl">{stat.value}</div>
              <div className="text-xs text-foreground/60">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Down Animation */}
        <motion.div
          className="relative w-full flex flex-col items-center my-16 -mt-6"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.7 }}
        >
          <AnimatePresence>
            {!hasScrolled && (
              <motion.div
                className="flex flex-col items-center gap-2"
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-sm text-foreground/70 font-medium">
                  Scroll Down to Explore
                </span>
                <div className="relative">
                  <motion.div
                    className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-indigo-400/20 to-violet-600/20 rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.3, 0.1, 0.3],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <motion.button
                    onClick={() =>
                      document
                        .getElementById("about")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-violet-600 text-white shadow-lg hover:shadow-xl cursor-pointer overflow-hidden"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      animate={{
                        y: [0, 4, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <ChevronDown className="h-6 w-6" />
                    </motion.div>
                  </motion.button>
                </div>
                <motion.div
                  className="absolute -bottom-12 flex flex-col items-center"
                  animate={{
                    opacity: [0, 1, 0],
                    y: [0, 8, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <MousePointer className="h-4 w-4 text-indigo-500 rotate-90 mb-1" />
                  <span className="text-xs text-foreground/60">Scroll</span>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.main>

      {/* About Section */}
      <AboutSection />

      {/* Skills Section */}
      <SkillsSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Freelance Journey Section */}
      <FreelanceSection
        freelanceRef={freelanceRef}
        isInView={isInView}
        cardVariants={cardVariants}
      />

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}

// ==================== ABOUT SECTION ====================
function AboutSection() {
  const hobbies = portfolioConfig.about.hobbies;
  const personalInfo = portfolioConfig.about.personalInfo;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="about" className="w-full py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          className="space-y-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Header */}
          <motion.div className="text-center" variants={itemVariants}>
            <Badge
              variant="outline"
              className="mb-4 px-4 py-1.5 text-sm font-medium border-primary/20"
            >
              About Me
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get to know me better
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Here you&apos;ll find more information about me, my current
              skills, and what I like to do in my free time.
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Bio Section */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="inline-flex items-center gap-2 mb-2">
                <User2 className="h-5 w-5 text-primary" />
                <h3 className="text-2xl font-bold">Who I Am</h3>
              </div>

              <div className="relative">
                <div className="absolute -left-5 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/80 to-primary/20 rounded-full"></div>
                <p className="text-foreground/80 leading-relaxed">
                  {portfolioConfig.about.bio}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                {/* Personal Info Cards */}
                <div className="bg-card/30 backdrop-blur-sm p-5 rounded-xl border border-border/40 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <Languages className="h-5 w-5 text-primary" />
                    </div>
                    <h4 className="font-medium">Language</h4>
                  </div>
                  <p className="text-foreground/80">{personalInfo.language}</p>
                </div>

                <div className="bg-card/30 backdrop-blur-sm p-5 rounded-xl border border-border/40 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <Globe2 className="h-5 w-5 text-primary" />
                    </div>
                    <h4 className="font-medium">Nationality</h4>
                  </div>
                  <p className="text-foreground/80">
                    {personalInfo.nationality}
                  </p>
                </div>

                <div className="bg-card/30 backdrop-blur-sm p-5 rounded-xl border border-border/40 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <Dna className="h-5 w-5 text-primary" />
                    </div>
                    <h4 className="font-medium">Gender</h4>
                  </div>
                  <p className="text-foreground/80">{personalInfo.gender}</p>
                </div>

                <div className="bg-card/30 backdrop-blur-sm p-5 rounded-xl border border-border/40 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <Calendar className="h-5 w-5 text-primary" />
                    </div>
                    <h4 className="font-medium">Experience</h4>
                  </div>
                  <p className="text-foreground/80">Fresher</p>
                </div>
              </div>
            </motion.div>

            {/* Hobbies & Skills Section */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 mb-4">
                  <Heart className="h-5 w-5 text-primary" />
                  <h3 className="text-2xl font-bold">Hobbies & Interests</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {hobbies.map((hobby, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-3 p-3 bg-card/20 backdrop-blur-sm rounded-lg border border-border/30 hover:border-primary/30 hover:bg-card/30 transition-colors"
                      whileHover={{ scale: 1.02, x: 5 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      <Circle className="h-2 w-2 text-primary" />
                      <span className="text-foreground/80">{hobby}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <div className="inline-flex items-center gap-2 mb-4">
                  <Code className="h-5 w-5 text-primary" />
                  <h3 className="text-2xl font-bold">My Roles</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {portfolioConfig.skills.roles.map((role, index) => (
                    <Badge
                      key={index}
                      className="px-3 py-1.5 bg-primary/10 hover:bg-primary/20 text-primary border-none transition-colors"
                    >
                      {role}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <div className="inline-flex items-center gap-2 mb-4">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  <h3 className="text-2xl font-bold">Education</h3>
                </div>

                {portfolioConfig.education.map((edu, index) => (
                  <motion.div
                    key={index}
                    className="bg-card/30 backdrop-blur-sm p-5 rounded-xl border border-border/40 shadow-sm mb-4"
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <h4 className="font-semibold text-lg">{edu.degree}</h4>
                    <p className="text-primary mt-1">{edu.institution}</p>
                    <div className="flex items-center gap-2 text-sm text-foreground/60 mt-2">
                      <Calendar className="h-4 w-4" />
                      <span>{edu.period}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ==================== SKILLS SECTION ====================
function SkillsSection() {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const categories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-5 h-5 text-primary" />,
      items: portfolioConfig.skills.programmingLanguages,
      color: "from-blue-500/20 to-indigo-500/20",
      textColor: "text-blue-600 dark:text-blue-400",
    },
    {
      title: "Frameworks & Libraries",
      icon: <Library className="w-5 h-5 text-primary" />,
      items: portfolioConfig.skills.frameworks,
      color: "from-violet-500/20 to-purple-500/20",
      textColor: "text-violet-600 dark:text-violet-400",
    },
    {
      title: "Databases",
      icon: <Database className="w-5 h-5 text-primary" />,
      items: portfolioConfig.skills.databases,
      color: "from-green-500/20 to-lime-500/20",
      textColor: "text-green-600 dark:text-green-400",
    },
    {
      title: "Tools & Technologies",
      icon: <Wrench className="w-5 h-5 text-primary" />,
      items: portfolioConfig.skills.tools,
      color: "from-amber-500/20 to-orange-500/20",
      textColor: "text-amber-600 dark:text-amber-400",
    },
  ];

  return (
    <section id="skills" className="w-full py-16 md:py-24 bg-muted/20">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          className="space-y-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {/* Header */}
          <motion.div className="text-center" variants={itemVariants}>
            <Badge
              variant="outline"
              className="mb-4 px-4 py-1.5 text-sm font-medium border-primary/20"
            >
              <LightbulbIcon className="w-4 h-4 mr-1" />
              Skills & Expertise
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              My Technical Skills
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              I specialize in building modern web applications using JavaScript,
              TypeScript, React, and Next.js. Here&apos;s a comprehensive
              overview of my technical expertise and tools I work with.
            </p>
          </motion.div>

          {/* Skills Summary Card */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-primary/5 to-primary/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-primary/10 shadow-sm"
          >
            <div className="flex flex-col md:flex-row gap-6 md:gap-10">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-4">
                  <Eye className="w-5 h-5 text-primary" />
                  <h3 className="text-2xl font-bold">Overview</h3>
                </div>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  With a solid foundation in HTML5, CSS3, JavaScript and React
                  js and Next js and Tailwind css, I focus on building
                  responsive and user-friendly web applications. My expertise
                  extends to modern frameworks and libraries, enabling me to
                  create efficient, scalable solutions.
                </p>
                <div className="flex flex-wrap gap-2 mt-6">
                  {portfolioConfig.skills.roles.map((role, index) => (
                    <Badge
                      key={index}
                      className="px-3 py-1.5 bg-primary/10 hover:bg-primary/20 text-primary border-none transition-colors"
                    >
                      {role}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex-1 flex flex-col justify-center">
                <div className="space-y-4">
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">Full Stack</span>
                      <span className="text-primary">95%</span>
                    </div>
                    <div className="h-2 bg-primary/10 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-primary"
                        initial={{ width: 0 }}
                        whileInView={{ width: "95%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">Gen AI</span>
                      <span className="text-primary">70%</span>
                    </div>
                    <div className="h-2 bg-primary/10 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-primary"
                        initial={{ width: 0 }}
                        whileInView={{ width: "70%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.4 }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Skills Categories */}
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              className="space-y-6"
            >
              <div className="flex items-center gap-2 border-b border-border pb-2">
                {category.icon}
                <h3 className="text-2xl font-bold">{category.title}</h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {category.items.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="relative bg-card/30 backdrop-blur-sm rounded-xl border border-border/40 overflow-hidden transition-all"
                    whileHover={{
                      y: -5,
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                      borderColor: "rgba(var(--primary), 0.3)",
                    }}
                    onHoverStart={() =>
                      setHoveredSkill(`${categoryIndex}-${skillIndex}`)
                    }
                    onHoverEnd={() => setHoveredSkill(null)}
                  >
                    {/* Background gradient */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity`}
                    />

                    <div className="relative p-5 flex flex-col items-center text-center">
                      {skill.icon ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className="h-12 w-12 object-contain mb-4"
                        />
                      ) : (
                        <div
                          className={`h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 ${category.textColor}`}
                        >
                          <span className="font-bold text-lg">
                            {skill.name.charAt(0)}
                          </span>
                        </div>
                      )}

                      <h4 className="font-medium text-base">{skill.name}</h4>

                      {/* Animated indicator dot */}
                      <motion.div
                        className="absolute top-2 right-2 h-2 w-2 rounded-full bg-primary"
                        initial={{ scale: 0 }}
                        animate={{
                          scale:
                            hoveredSkill === `${categoryIndex}-${skillIndex}`
                              ? 1
                              : 0,
                          backgroundColor:
                            hoveredSkill === `${categoryIndex}-${skillIndex}`
                              ? "var(--primary)"
                              : "transparent",
                        }}
                        transition={{ duration: 0.2 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ==================== PROJECTS SECTION ====================
function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState(null);
  const fullStackRef = useRef(null);
  const genAiRef = useRef(null);

  // Filter projects by category
  const fullStackProjects = portfolioConfig.projects.filter(
    (project) => project.category === "fullstack" || !project.category
  );

  const genAiProjects = portfolioConfig.projects.filter(
    (project) => project.category === "genai"
  );

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="projects" className="w-full py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          className="space-y-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {/* Header Section */}
          <motion.div className="text-center" variants={sectionVariants}>
            <Badge
              variant="outline"
              className="mb-4 px-4 py-1.5 text-sm font-medium border-primary/20"
            >
              <Layers className="h-4 w-4 mr-1.5" />
              My Portfolio
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-500 dark:from-indigo-400 dark:to-violet-400">
              Featured Projects
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto text-lg">
              Explore my collection of web applications and websites built with
              modern technologies. Each project represents my passion for
              creating useful, beautiful digital experiences.
            </p>

            <div className="flex justify-center gap-4 mt-8">
              <Button
                onClick={() => scrollToSection(fullStackRef)}
                className="group flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-violet-500 hover:from-indigo-500 hover:to-violet-400"
              >
                <Code className="h-4 w-4 group-hover:rotate-12 transition-transform" />
                Full Stack Projects
              </Button>
              <Button
                onClick={() => scrollToSection(genAiRef)}
                className="group flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400"
              >
                <Sparkles className="h-4 w-4 group-hover:rotate-12 transition-transform" />
                Gen AI Projects
              </Button>
            </div>
          </motion.div>

          {/* Full Stack Projects Section */}
          <motion.div
            ref={fullStackRef}
            className="space-y-8"
            variants={sectionVariants}
          >
            <div className="flex items-center gap-3 mb-10">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center">
                <Code className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-3xl font-bold">Full Stack Projects</h3>
              <div className="h-[1px] flex-grow bg-gradient-to-r from-indigo-500/50 to-transparent"></div>
            </div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
            >
              {fullStackProjects.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  index={index}
                  isHovered={hoveredProject === project.title}
                  setHovered={setHoveredProject}
                  type="fullstack"
                />
              ))}
            </motion.div>
          </motion.div>

          {/* Gen AI Projects Section */}
          <motion.div
            ref={genAiRef}
            className="space-y-8"
            variants={sectionVariants}
          >
            <div className="flex items-center gap-3 mb-10">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-3xl font-bold">Gen AI Projects</h3>
              <div className="h-[1px] flex-grow bg-gradient-to-r from-emerald-500/50 to-transparent"></div>
            </div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
            >
              {genAiProjects.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  index={index}
                  isHovered={hoveredProject === project.title}
                  setHovered={setHoveredProject}
                  type="genai"
                />
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// Project Card Component
function ProjectCard({ project, index, isHovered, setHovered, type }) {
  const isFeatured = index === 0;

  const cardGradient =
    type === "genai"
      ? "from-emerald-500/5 to-teal-500/10"
      : "from-indigo-500/5 to-violet-500/10";

  const accentGradient =
    type === "genai"
      ? "from-emerald-500/80 to-teal-500/40"
      : "from-indigo-500/80 to-violet-500/40";

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: "easeOut", delay: index * 0.1 },
        },
      }}
      whileHover={{
        y: -10,
        transition: { type: "spring", stiffness: 300, damping: 20 },
      }}
      onHoverStart={() => setHovered(project.title)}
      onHoverEnd={() => setHovered(null)}
      layout
      className="h-full"
    >
      <Card
        className={cn(
          "h-full overflow-hidden relative group border border-border/40 backdrop-blur-sm",
          isFeatured ? `bg-gradient-to-br ${cardGradient}` : "bg-card/30"
        )}
      >
        {/* Color accent at top */}
        <div
          className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${accentGradient} transform origin-left transition-transform duration-500 ease-out`}
          style={{
            transform: isHovered ? "scaleX(1)" : "scaleX(0)",
          }}
        />

        {/* Glass effect overlay */}
        <div className="absolute inset-0 bg-white/5 dark:bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <CardHeader>
          <CardTitle className="text-xl font-bold ">
            <span>{project.title}</span>
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          <p className="text-foreground/70">{project.description}</p>

          <div className="flex flex-wrap gap-1.5">
            {project.tags.slice(0, 3).map((tag, idx) => (
              <motion.span
                key={idx}
                className={cn(
                  "text-xs px-2 py-0.5 rounded-full",
                  "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
                )}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {tag}
              </motion.span>
            ))}
            {project.tags.length > 3 && (
              <motion.span
                className="text-xs px-2 py-0.5 rounded-full bg-muted/50"
                whileHover={{ scale: 1.05 }}
              >
                +{project.tags.length - 3} more
              </motion.span>
            )}
          </div>
        </CardContent>

        <CardFooter className="flex justify-between items-center pt-2">
          <div className="text-xs text-foreground/60 flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            <span>{project.year}</span>
          </div>

          <div className="flex items-center gap-2">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="relative z-10"
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({
                    variant: "default",
                    size: "sm",
                  }),
                  "gap-1 group",
                  type === "genai" ? "bg-emerald-600 hover:bg-emerald-500" : ""
                )}
                onClick={(e) => e.stopPropagation()}
              >
                <span>View</span>
                <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </motion.div>

            {project.github && (
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="relative z-10"
              >
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({
                      variant: "outline",
                      size: "icon-sm",
                    }),
                    "h-8 w-8"
                  )}
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github className="h-4 w-4" />
                </a>
              </motion.div>
            )}
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

// ==================== FREELANCE SECTION ====================
function FreelanceSection({ freelanceRef, isInView, cardVariants }) {
  return (
    <section id="freelance" className="w-full py-16 bg-muted/20">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          ref={freelanceRef}
          className="w-full"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                when: "beforeChildren",
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <motion.div className="mb-12 text-center" variants={cardVariants}>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-orange-600 mb-6">
              <Briefcase className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-orange-600">
                Freelance Journey
              </span>
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Delivering exceptional websites for clients that meet their
              specific needs and help their businesses thrive in the digital
              landscape.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {portfolioConfig.freelanceProjects.map((project, index) => (
              <motion.div
                key={project.title}
                className="relative group"
                variants={cardVariants}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 500, damping: 15 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-xl transform rotate-1 scale-[1.01] opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <div className="relative h-full bg-card/40 backdrop-blur-sm rounded-xl overflow-hidden border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="h-48 bg-muted/50 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                    <div
                      className="w-full h-full flex items-center justify-center"
                      style={{
                        background: `linear-gradient(135deg, ${
                          index === 0
                            ? "rgba(251, 146, 60, 0.2)"
                            : index === 1
                            ? "rgba(79, 70, 229, 0.2)"
                            : "rgba(16, 185, 129, 0.2)"
                        } 0%, ${
                          index === 0
                            ? "rgba(251, 113, 133, 0.3)"
                            : index === 1
                            ? "rgba(139, 92, 246, 0.3)"
                            : "rgba(6, 182, 212, 0.3)"
                        } 100%)`,
                      }}
                    >
                      <div className="text-white font-bold text-lg text-center p-4 relative z-10">
                        {project.title}
                      </div>
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-foreground/70 text-sm mb-4">
                      {project.description}
                    </p>

                    <div className="mt-auto flex justify-between items-center">
                      <span className="text-xs text-foreground/60">
                        {project.year}
                      </span>

                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm font-medium text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 transition-colors"
                        whileHover={{ x: 3 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span>Visit Site</span>
                        <ExternalLink className="h-3.5 w-3.5" />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ==================== CONTACT SECTION ====================
function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState("idle");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("submitting");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "8cdd260e-e747-4f57-80e0-7e386227d2be",
          name: formState.name,
          email: formState.email,
          message: formState.message,
          subject: `New contact from ${formState.name} via Portfolio`,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setFormStatus("success");
        setFormState({ name: "", email: "", message: "" });
        setTimeout(() => setFormStatus("idle"), 5000);
      } else {
        setFormStatus("error");
        setTimeout(() => setFormStatus("idle"), 5000);
      }
    } catch (error) {
      console.error(error);
      setFormStatus("error");
      setTimeout(() => setFormStatus("idle"), 5000);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const formStatusMessage = {
    submitting: "Sending your message...",
    success: "Message sent successfully!",
    error: "There was an error sending your message. Please try again.",
  };

  return (
    <section id="contact" className="w-full py-16 md:py-24">
      <div className="container max-w-6xl mx-auto px-4">
        <motion.div
          className="space-y-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Header Section */}
          <motion.div className="text-center" variants={itemVariants}>
            <Badge
              variant="outline"
              className="mb-4 px-4 py-1.5 text-sm font-medium border-primary/20"
            >
              <Phone className="h-4 w-4 mr-1.5" />
              Get In Touch
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Contact Me</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto text-lg">
              Have a project in mind or just want to chat? Feel free to reach
              out. I'm always open to discussing new projects, creative ideas or
              opportunities to be part of your vision.
            </p>
          </motion.div>

          <div className="flex gap-10 justify-center">
            <motion.div variants={itemVariants} className="w-full max-w-xl">
              <Card className="border shadow-lg bg-card/30 backdrop-blur-sm border-indigo-500">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold flex items-center">
                    <Send className="h-5 w-5 mr-2 text-primary" />
                    Send Me a Message
                  </CardTitle>
                  <CardDescription>
                    Fill out the form below and I'll get back to you as soon as
                    possible.
                  </CardDescription>
                </CardHeader>

                <form onSubmit={handleSubmit}>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium">
                        Your Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        className="bg-card/50"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        disabled={
                          formStatus === "submitting" ||
                          formStatus === "success"
                        }
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium">
                        Your Email
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        className="bg-card/50"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        disabled={
                          formStatus === "submitting" ||
                          formStatus === "success"
                        }
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm font-medium">
                        Your Message
                      </Label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        placeholder="I'd like to discuss a project..."
                        className="w-full min-h-[120px] rounded-md border border-input bg-card/50 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
                        value={formState.message}
                        onChange={handleChange}
                        required
                        disabled={
                          formStatus === "submitting" ||
                          formStatus === "success"
                        }
                      />
                    </div>
                  </CardContent>

                  <CardFooter>
                    <div className="w-full space-y-4">
                      <AnimatePresence mode="wait">
                        {formStatus !== "idle" && (
                          <motion.div
                            className={`flex items-center p-3 rounded-md text-sm ${
                              formStatus === "success"
                                ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                                : formStatus === "error"
                                ? "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"
                                : "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
                            }`}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                          >
                            {formStatus === "success" ? (
                              <CheckCircle className="h-4 w-4 mr-2" />
                            ) : formStatus === "error" ? (
                              <AlertCircle className="h-4 w-4 mr-2" />
                            ) : (
                              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                            )}
                            {formStatusMessage[formStatus]}
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <Button
                        type="submit"
                        className="w-full mt-6"
                        disabled={
                          formStatus === "submitting" ||
                          formStatus === "success"
                        }
                      >
                        {formStatus === "submitting" ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send className="ml-2 h-4 w-4" />
                          </>
                        )}
                      </Button>
                    </div>
                  </CardFooter>
                </form>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
