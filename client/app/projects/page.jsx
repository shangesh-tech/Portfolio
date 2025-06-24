'use client'
import { Badge } from "@/components/ui/badge";
import { Layers, ExternalLink, Github, Calendar, Code, Sparkles } from "lucide-react";
import { portfolioConfig } from "@/data/Portfolio";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { useState, useRef } from "react";

const ProjectsPage = () => {
    const [hoveredProject, setHoveredProject] = useState(null);
    const fullStackRef = useRef(null);
    const genAiRef = useRef(null);

    // Filter projects by category
    const fullStackProjects = portfolioConfig.projects.filter(
        project => project.category === "fullstack" || !project.category
    );

    const genAiProjects = portfolioConfig.projects.filter(
        project => project.category === "genai"
    );

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const sectionVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: "easeOut" }
        }
    };

    const scrollToSection = (ref) => {
        ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <div className="container mx-auto px-4 py-12 md:py-20 max-w-6xl mt-20">
            <motion.div
                className="space-y-24"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                {/* Header Section */}
                <motion.div className="text-center" variants={sectionVariants}>
                    <Badge variant="outline" className="mb-4 px-4 py-1.5 text-sm font-medium border-primary/20">
                        <Layers className="h-4 w-4 mr-1.5" />
                        My Portfolio
                    </Badge>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-500 dark:from-indigo-400 dark:to-violet-400">
                        Featured Projects
                    </h1>
                    <p className="text-foreground/70 max-w-2xl mx-auto text-lg">
                        Explore my collection of web applications and websites built with modern technologies.
                        Each project represents my passion for creating useful, beautiful digital experiences.
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
                <motion.section
                    ref={fullStackRef}
                    className="space-y-8"
                    variants={sectionVariants}
                    viewport={{ once: true, margin: "-100px" }}
                    whileInView="visible"
                >
                    <div className="flex items-center gap-3 mb-10">
                        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center">
                            <Code className="h-5 w-5 text-white" />
                        </div>
                        <h2 className="text-3xl font-bold">Full Stack Projects</h2>
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
                </motion.section>

                {/* Gen AI Projects Section */}
                <motion.section
                    ref={genAiRef}
                    className="space-y-8"
                    variants={sectionVariants}
                    viewport={{ once: true, margin: "-100px" }}
                    whileInView="visible"
                >
                    <div className="flex items-center gap-3 mb-10">
                        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                            <Sparkles className="h-5 w-5 text-white" />
                        </div>
                        <h2 className="text-3xl font-bold">Gen AI Projects</h2>
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
                </motion.section>
            </motion.div>
        </div>
    );
};

const ProjectCard = ({ project, index, isHovered, setHovered, type }) => {
    // Generate a random featured tag (just for some projects)
    const isFeatured = index === 0;

    const cardGradient = type === "genai"
        ? "from-emerald-500/5 to-teal-500/10"
        : "from-indigo-500/5 to-violet-500/10";

    const accentGradient = type === "genai"
        ? "from-emerald-500/80 to-teal-500/40"
        : "from-indigo-500/80 to-violet-500/40";

    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: "easeOut", delay: index * 0.1 }
                }
            }}
            whileHover={{
                y: -10,
                transition: { type: "spring", stiffness: 300, damping: 20 }
            }}
            onHoverStart={() => setHovered(project.title)}
            onHoverEnd={() => setHovered(null)}
            layout
            className="h-full"
        >
            <Card className={cn(
                "h-full overflow-hidden relative group border border-border/40 backdrop-blur-sm",
                isFeatured ? `bg-gradient-to-br ${cardGradient}` : "bg-card/30"
            )}>
                {/* Color accent at top */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${accentGradient} transform origin-left transition-transform duration-500 ease-out`}
                    style={{
                        transform: isHovered ? 'scaleX(1)' : 'scaleX(0)'
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
                    <p className="text-foreground/70">
                        {project.description}
                    </p>

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
                                        size: "sm"
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
                                            size: "icon-sm"
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
};

export default ProjectsPage;
