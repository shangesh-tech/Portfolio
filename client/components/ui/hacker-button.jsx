import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

const HackerButton = ({ text, onClick, className }) => {
    const [displayText, setDisplayText] = useState(text);
    const [isHovered, setIsHovered] = useState(false);

    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*';

    useEffect(() => {
        let interval;
        if (isHovered) {
            let iterations = 0;
            const maxIterations = 10;
            interval = setInterval(() => {
                setDisplayText(prevText => {
                    return prevText
                        .split('')
                        .map((char, index) => {
                            if (index < iterations) {
                                return text[index];
                            }
                            return characters[Math.floor(Math.random() * characters.length)];
                        })
                        .join('');
                });

                iterations += 1 / 3;
                if (iterations >= maxIterations) {
                    clearInterval(interval);
                    setDisplayText(text);
                }
            }, 50);
        } else {
            setDisplayText(text);
        }

        return () => clearInterval(interval);
    }, [isHovered, text]);

    return (
        <motion.button
            className={`group relative inline-flex items-center justify-center px-6 py-3 bg-indigo-600 text-white rounded-lg overflow-hidden transition-all duration-300 hover:bg-indigo-700 ${className}`}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            onClick={onClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <span className="relative flex items-center gap-2">
                <Download className="w-5 h-5" />
                <span className="font-mono">{displayText}</span>
            </span>
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-indigo-600/0 via-indigo-600/30 to-indigo-600/0"
                animate={{
                    x: ['-100%', '100%'],
                }}
                transition={{
                    repeat: Infinity,
                    duration: 1.5,
                    ease: 'linear',
                }}
            />
        </motion.button>
    );
};

export default HackerButton; 