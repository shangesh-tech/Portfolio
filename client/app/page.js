'use client'
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
  MousePointer
} from "lucide-react";
import logo from "@/public/profile_pic.jpg";
import React, { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { portfolioConfig } from "@/data/Portfolio";
import HackerButton from "@/components/ui/hacker-button";
import Link from "next/link";

export default function Home() {
  const [displayText, setDisplayText] = useState('');
  const freelanceRef = useRef(null);
  const isInView = useInView(freelanceRef, { once: false, amount: 0.2 });
  const [hasScrolled, setHasScrolled] = useState(false);

  const text = "< Coder /> < Designer /> < Builder />";
  const typingSpeed = 150;
  const deletingSpeed = 100;
  const pauseDuration = 2000;

  const scrollToFreelance = () => {
    setHasScrolled(true);
    freelanceRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  // Reset hasScrolled when the component is unmounted
  useEffect(() => {
    return () => setHasScrolled(false);
  }, []);

  // Infinite typing animation
  useEffect(() => {
    let timeout;
    let currentIndex = 0;
    let isDeleting = false;
    let isPaused = false;

    const typeText = () => {
      if (!isDeleting) {
        if (currentIndex <= text.length) {
          setDisplayText(text.substring(0, currentIndex));
          currentIndex++;
          timeout = setTimeout(typeText, typingSpeed);
        } else {
          isPaused = true;
          timeout = setTimeout(() => {
            isPaused = false;
            isDeleting = true;
            typeText();
          }, pauseDuration);
        }
      } else {
        if (currentIndex > 0) {
          setDisplayText(text.substring(0, currentIndex));
          currentIndex--;
          timeout = setTimeout(typeText, deletingSpeed);
        } else {
          isDeleting = false;
          timeout = setTimeout(typeText, typingSpeed);
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
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center">
      {/* Main Content */}
      <motion.main
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
              className="flex flex-col items-center space-x-2 text-xl md:text-2xl text-gray-700 dark:text-gray-300"
              variants={itemVariants}
            >
              <p className="text-gray-700 dark:text-gray-300 font-bold block md:w-full">I am a</p>
              <p className="font-mono text-indigo-600 dark:text-indigo-400 md:w-full">
                {displayText}
                <span className="animate-blink">|</span>
              </p>
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
              <a href={portfolioConfig.resumeUrl} download className="no-underline">
                <HackerButton
                  text="Download CV"
                />
              </a>

              <div className="flex gap-4">
                {[
                  { icon: Github, href: "https://github.com/shangesh-tech", label: "GitHub", color: "from-gray-600 to-gray-800" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/shangesh-s", label: "LinkedIn", color: "from-blue-600 to-blue-800" },
                  { icon: Twitter, href: "https://twitter.com/shangesh_s", label: "Twitter", color: "from-sky-500 to-sky-700" }
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
                delay: 0.2
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
        <motion.div
          variants={containerVariants}
          className="flex gap-8 my-16"
        >
          {[
            { value: portfolioConfig.projects.length + "+", label: "Projects", icon: <Code className="h-4 w-4" />, color: "from-blue-500/20 to-blue-600/5" },
            { value: "Fresher", label: "Exp", icon: <Rocket className="h-4 w-4" />, color: "from-purple-500/20 to-purple-600/5" },
            { value: "100%", label: "Satisfaction", icon: <CheckCircle className="h-4 w-4" />, color: "from-green-500/20 to-green-600/5" }
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
                  ease: "easeInOut"
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
                <span className="text-sm text-foreground/70 font-medium">Check Out My Freelance Work</span>
                <div className="relative">
                  <motion.div
                    className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-amber-400/20 to-orange-600/20 rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.3, 0.1, 0.3]
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <motion.button
                    onClick={scrollToFreelance}
                    className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-lg hover:shadow-xl cursor-pointer overflow-hidden"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      animate={{
                        y: [0, 4, 0]
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
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
                    y: [0, 8, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <MousePointer className="h-4 w-4 text-amber-500 rotate-90 mb-1" />
                  <span className="text-xs text-foreground/60">Scroll</span>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Freelance Projects Section */}
        <motion.section
          ref={freelanceRef}
          className="w-full py-16 mt-8"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                when: "beforeChildren",
                staggerChildren: 0.2
              }
            }
          }}
        >
          <motion.div
            className="mb-12 text-center"
            variants={cardVariants}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-orange-600 mb-6">
              <Briefcase className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-orange-600">
                Freelance Journey
              </span>
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Delivering exceptional websites for clients that meet their specific needs
              and help their businesses thrive in the digital landscape.
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
                        background: `linear-gradient(135deg, ${index === 0 ? 'rgba(251, 146, 60, 0.2)' : index === 1 ? 'rgba(79, 70, 229, 0.2)' : 'rgba(16, 185, 129, 0.2)'} 0%, ${index === 0 ? 'rgba(251, 113, 133, 0.3)' : index === 1 ? 'rgba(139, 92, 246, 0.3)' : 'rgba(6, 182, 212, 0.3)'} 100%)`
                      }}
                    >
                      <div className="text-white font-bold text-lg text-center p-4 relative z-10">{project.title}</div>
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
                      <span className="text-xs text-foreground/60">{project.year}</span>

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

          <motion.div
            className="flex justify-center mt-10"
            variants={cardVariants}
          >
            <Link href="/projects" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <span>View All Projects</span>
              <ExternalLink className="h-4 w-4" />
            </Link>
          </motion.div>
        </motion.section>
      </motion.main>
    </div>
  );
}
