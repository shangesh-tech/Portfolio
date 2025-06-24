'use client'
import { Calendar, Circle, Code, CodepenIcon, Dna, Globe2, GraduationCap, Heart, Languages, User2 } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { portfolioConfig } from "@/data/Portfolio";

const Page = () => {
    const hobbies = portfolioConfig.about.hobbies;
    const personalInfo = portfolioConfig.about.personalInfo;

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <div className="container mx-auto mt-10 px-4 py-16 md:py-24 max-w-5xl">
            <motion.div
                className="space-y-16"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                {/* Header */}
                <motion.div className="text-center" variants={itemVariants}>
                    <Badge variant="outline" className="mb-4 px-4 py-1.5 text-sm font-medium border-primary/20">
                        About Me
                    </Badge>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Get to know me better</h1>
                    <p className="text-foreground/70 max-w-2xl mx-auto">
                        Here you'll find more information about me, my current skills, and what I like to do in my free time.
                    </p>
                </motion.div>

                {/* Main Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    {/* Bio Section */}
                    <motion.div variants={itemVariants} className="space-y-6">
                        <div className="inline-flex items-center gap-2 mb-2">
                            <User2 className="h-5 w-5 text-primary" />
                            <h2 className="text-2xl font-bold">Who I Am</h2>
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
                                    <h3 className="font-medium">Language</h3>
                                </div>
                                <p className="text-foreground/80">{personalInfo.language}</p>
                            </div>

                            <div className="bg-card/30 backdrop-blur-sm p-5 rounded-xl border border-border/40 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="bg-primary/10 p-2 rounded-lg">
                                        <Globe2 className="h-5 w-5 text-primary" />
                                    </div>
                                    <h3 className="font-medium">Nationality</h3>
                                </div>
                                <p className="text-foreground/80">{personalInfo.nationality}</p>
                            </div>

                            <div className="bg-card/30 backdrop-blur-sm p-5 rounded-xl border border-border/40 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="bg-primary/10 p-2 rounded-lg">
                                        <Dna className="h-5 w-5 text-primary" />
                                    </div>
                                    <h3 className="font-medium">Gender</h3>
                                </div>
                                <p className="text-foreground/80">{personalInfo.gender}</p>
                            </div>

                            <div className="bg-card/30 backdrop-blur-sm p-5 rounded-xl border border-border/40 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="bg-primary/10 p-2 rounded-lg">
                                        <Calendar className="h-5 w-5 text-primary" />
                                    </div>
                                    <h3 className="font-medium">Experience</h3>
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
                                <h2 className="text-2xl font-bold">Hobbies & Interests</h2>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {hobbies.map((hobby, index) => (
                                    <motion.div
                                        key={index}
                                        className="flex items-center gap-3 p-3 bg-card/20 backdrop-blur-sm rounded-lg border border-border/30 hover:border-primary/30 hover:bg-card/30 transition-colors"
                                        whileHover={{ scale: 1.02, x: 5 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
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
                                <h2 className="text-2xl font-bold">My Roles</h2>
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
                                <h2 className="text-2xl font-bold">Education</h2>
                            </div>

                            {portfolioConfig.education.map((edu, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-card/30 backdrop-blur-sm p-5 rounded-xl border border-border/40 shadow-sm mb-4"
                                    whileHover={{ y: -5 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                >
                                    <h3 className="font-semibold text-lg">{edu.degree}</h3>
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
    );
};

export default Page;
