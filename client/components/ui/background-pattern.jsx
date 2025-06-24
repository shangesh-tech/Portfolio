import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const BackgroundPattern = ({ theme }) => {
    const [particles, setParticles] = useState([]);

    // Generate particles only on the client side after initial render
    useEffect(() => {
        const generatedParticles = Array.from({ length: 20 }).map((_, i) => ({
            id: i,
            width: Math.random() * 4 + 2,
            height: Math.random() * 4 + 2,
            left: Math.random() * 100,
            top: Math.random() * 100,
            xMove: Math.random() * 50 - 25,
            yMove: Math.random() * 50 - 25,
            duration: Math.random() * 5 + 8,
        }));

        setParticles(generatedParticles);
    }, []);

    return (
        <div className="absolute inset-0 -z-10 overflow-hidden">
            {/* Light theme pattern */}
            <div className={`absolute inset-0 transition-opacity duration-500 ${theme === 'light' ? 'opacity-100' : 'opacity-0'}`}>
                <svg
                    className="absolute top-0 left-0 w-full h-full"
                    width="100%"
                    height="100%"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <pattern id="lightDots" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
                            <circle cx="2" cy="2" r="1" fill="rgba(79, 70, 229, 0.07)" />
                        </pattern>
                        <pattern id="lightGrid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(79, 70, 229, 0.05)" strokeWidth="0.5" />
                        </pattern>
                        <linearGradient id="lightGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="rgba(79, 70, 229, 0.2)" />
                            <stop offset="50%" stopColor="rgba(147, 51, 234, 0.1)" />
                            <stop offset="100%" stopColor="rgba(79, 70, 229, 0.2)" />
                        </linearGradient>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#lightDots)" />
                    <rect width="100%" height="100%" fill="url(#lightGrid)" />
                    <motion.circle
                        cx="70%"
                        cy="20%"
                        r="300"
                        fill="url(#lightGlow)"
                        animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0.3, 0.4, 0.3],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                    <motion.circle
                        cx="30%"
                        cy="70%"
                        r="250"
                        fill="url(#lightGlow)"
                        animate={{
                            scale: [1.1, 1, 1.1],
                            opacity: [0.4, 0.3, 0.4],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                </svg>
            </div>

            {/* Dark theme pattern */}
            <div className={`absolute inset-0 transition-opacity duration-500 ${theme === 'dark' ? 'opacity-100' : 'opacity-0'}`}>
                <svg
                    className="absolute top-0 left-0 w-full h-full"
                    width="100%"
                    height="100%"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <pattern id="darkDots" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
                            <circle cx="2" cy="2" r="1" fill="rgba(79, 70, 229, 0.15)" />
                        </pattern>
                        <pattern id="darkGrid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(79, 70, 229, 0.1)" strokeWidth="0.5" />
                        </pattern>
                        <linearGradient id="darkGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="rgba(79, 70, 229, 0.3)" />
                            <stop offset="50%" stopColor="rgba(147, 51, 234, 0.2)" />
                            <stop offset="100%" stopColor="rgba(79, 70, 229, 0.3)" />
                        </linearGradient>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#darkDots)" />
                    <rect width="100%" height="100%" fill="url(#darkGrid)" />
                    <motion.circle
                        cx="65%"
                        cy="30%"
                        r="300"
                        fill="url(#darkGlow)"
                        animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0.3, 0.4, 0.3],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                    <motion.circle
                        cx="25%"
                        cy="65%"
                        r="250"
                        fill="url(#darkGlow)"
                        animate={{
                            scale: [1.1, 1, 1.1],
                            opacity: [0.4, 0.3, 0.4],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                </svg>
            </div>

            {/* Floating particles - only rendered client-side after initial hydration */}
            <div className="absolute inset-0">
                {particles.map((particle) => (
                    <motion.div
                        key={particle.id}
                        className="absolute rounded-full bg-indigo-500/20 dark:bg-indigo-400/30"
                        style={{
                            width: `${particle.width}px`,
                            height: `${particle.height}px`,
                            left: `${particle.left}%`,
                            top: `${particle.top}%`,
                        }}
                        animate={{
                            x: [0, particle.xMove],
                            y: [0, particle.yMove],
                            opacity: [0.2, 0.5, 0.2],
                        }}
                        transition={{
                            duration: particle.duration,
                            repeat: Infinity,
                            repeatType: "reverse",
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default BackgroundPattern; 