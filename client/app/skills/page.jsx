'use client'
import { Badge } from "@/components/ui/badge";
import {
    LightbulbIcon,
    Code,
    Library,
    Wrench,
    Eye,
    Database
} from "lucide-react";
import { motion } from "framer-motion";
import { portfolioConfig } from "@/data/Portfolio";
import { useState } from "react";

const SkillsPage = () => {
    const [hoveredSkill, setHoveredSkill] = useState(null);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    const categories = [
        {
            title: "Programming Languages",
            icon: <Code className="w-5 h-5 text-primary" />,
            items: portfolioConfig.skills.programmingLanguages,
            color: "from-blue-500/20 to-indigo-500/20",
            textColor: "text-blue-600 dark:text-blue-400"
        },
        {
            title: "Frameworks & Libraries",
            icon: <Library className="w-5 h-5 text-primary" />,
            items: portfolioConfig.skills.frameworks,
            color: "from-violet-500/20 to-purple-500/20",
            textColor: "text-violet-600 dark:text-violet-400"
        },
        {
            title: "Databases",
            icon: <Database className="w-5 h-5 text-primary" />,
            items: portfolioConfig.skills.databases,
            color: "from-green-500/20 to-lime-500/20",
            textColor: "text-green-600 dark:text-green-400"
        },
        {
            title: "Tools & Technologies",
            icon: <Wrench className="w-5 h-5 text-primary" />,
            items: portfolioConfig.skills.tools,
            color: "from-amber-500/20 to-orange-500/20",
            textColor: "text-amber-600 dark:text-amber-400"
        },

    ];

    return (
        <div className="container mx-auto px-4 py-12 md:py-16 max-w-6xl mt-20">
            <motion.div
                className="space-y-16"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                {/* Header */}
                <motion.div className="text-center" variants={itemVariants}>
                    <Badge variant="outline" className="mb-4 px-4 py-1.5 text-sm font-medium border-primary/20">
                        <LightbulbIcon className="w-4 h-4 mr-1" />
                        Skills & Expertise
                    </Badge>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">My Technical Skills</h1>
                    <p className="text-foreground/70 max-w-2xl mx-auto">
                        I specialize in building modern web applications using JavaScript, TypeScript, React, and Next.js.
                        Here's a comprehensive overview of my technical expertise and tools I work with.
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
                                <h2 className="text-2xl font-bold">Overview</h2>
                            </div>
                            <p className="text-foreground/80 leading-relaxed mb-4">
                                With a solid foundation in HTML5, CSS3, JavaScript and React js and Next js and Tailwind css ,  I focus on building
                                responsive and user-friendly web applications. My expertise extends to modern frameworks
                                and libraries, enabling me to create efficient, scalable solutions.

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
                                            animate={{ width: "95%" }}
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
                                            animate={{ width: "70%" }}
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
                    <motion.div key={categoryIndex} variants={itemVariants} className="space-y-6">
                        <div className="flex items-center gap-2 border-b border-border pb-2">
                            {category.icon}
                            <h2 className="text-2xl font-bold">{category.title}</h2>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                            {category.items.map((skill, skillIndex) => (
                                <motion.div
                                    key={skillIndex}
                                    className="relative bg-card/30 backdrop-blur-sm rounded-xl border border-border/40 overflow-hidden transition-all"
                                    whileHover={{
                                        y: -5,
                                        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                                        borderColor: "rgba(var(--primary), 0.3)"
                                    }}
                                    onHoverStart={() => setHoveredSkill(`${categoryIndex}-${skillIndex}`)}
                                    onHoverEnd={() => setHoveredSkill(null)}
                                >
                                    {/* Background gradient */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity`} />

                                    <div className="relative p-5 flex flex-col items-center text-center">
                                        {skill.icon ? (
                                            <img
                                                src={skill.icon}
                                                alt={skill.name}
                                                className="h-12 w-12 object-contain mb-4"
                                            />
                                        ) : (
                                            <div className={`h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 ${category.textColor}`}>
                                                <span className="font-bold text-lg">{skill.name.charAt(0)}</span>
                                            </div>
                                        )}

                                        <h3 className="font-medium text-base">{skill.name}</h3>

                                        {/* Animated indicator dot */}
                                        <motion.div
                                            className="absolute top-2 right-2 h-2 w-2 rounded-full bg-primary"
                                            initial={{ scale: 0 }}
                                            animate={{
                                                scale: hoveredSkill === `${categoryIndex}-${skillIndex}` ? 1 : 0,
                                                backgroundColor: hoveredSkill === `${categoryIndex}-${skillIndex}` ? "var(--primary)" : "transparent"
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
    );
};

export default SkillsPage;
