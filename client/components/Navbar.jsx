"use client"
import { cn } from "@/lib/utils";
import {
    motion,
    useMotionValue,
    useSpring,
    useTransform,
    AnimatePresence,
} from 'framer-motion';
import {
    useEffect,
    useRef,
    useState,
} from 'react';

import {
    FolderGit2,
    HomeIcon,
    LightbulbIcon,
    Mail,
    User,
} from 'lucide-react';

import Link from "next/link";
import { usePathname } from "next/navigation";
import BackgroundPattern from "@/components/ui/background-pattern";

// Animation Constants
const MAGNIFICATION = 90;
const DISTANCE = 160;
const PANEL_HEIGHT = 75;
const SPRING_OPTIONS = { mass: 0.2, stiffness: 180, damping: 25 };
const DEFAULT_ICON_SIZE = 42;

const Navbar = () => {
    const pathname = usePathname();
    const mouseX = useMotionValue(Infinity);
    const [isInDock, setIsInDock] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [theme, setTheme] = useState("light");
    const navbarRef = useRef(null);

    const navItems = [
        {
            title: 'Home',
            icon: <HomeIcon className='h-full w-full' />,
            href: '/',
            description: 'Back to home page',
        },
        {
            title: 'About',
            icon: <User className='h-full w-full' />,
            href: '/about',
            description: 'Learn about me',
        },
        {
            title: 'Skills',
            icon: <LightbulbIcon className='h-full w-full' />,
            href: '/skills',
            description: 'My technical expertise',
        },
        {
            title: 'Projects',
            icon: <FolderGit2 className='h-full w-full' />,
            href: '/projects',
            description: 'View my work',
        },
        {
            title: 'Contact',
            icon: <Mail className='h-full w-full' />,
            href: '/contact',
            description: 'Get in touch',
        }
    ];

    // Theme management
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedTheme = localStorage.getItem("theme");
            if (storedTheme) {
                setTheme(storedTheme);
                document.documentElement.classList.toggle("dark", storedTheme === "dark");
            } else {
                const systemPreference = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
                setTheme(systemPreference);
                document.documentElement.classList.toggle("dark", systemPreference === "dark");
            }
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        document.documentElement.classList.toggle("dark", newTheme === "dark");
        localStorage.setItem("theme", newTheme);
    };

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    const navbarVariants = {
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 30
            }
        },
        hidden: {
            y: -20,
            opacity: 0,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 30
            }
        }
    };

    return (
        <>
            <BackgroundPattern theme={theme} />
            <motion.div
                className="fixed top-5 right-0 left-0 px-0 sm:px-5 m-auto w-full sm:w-fit bg-transparent z-[999]"
                initial="visible"
                animate={isVisible ? "visible" : "hidden"}
                variants={navbarVariants}
                ref={navbarRef}
            >
                <motion.div className='mx-0 sm:mx-2 flex max-w-full items-end justify-center'>
                    <motion.div
                        onMouseEnter={() => setIsInDock(true)}
                        onMouseLeave={() => {
                            setIsInDock(false);
                            mouseX.set(Infinity);
                        }}
                        onMouseMove={({ pageX }) => mouseX.set(pageX)}
                        className='mx-auto flex gap-2 sm:gap-4 bg-gray-50/90 dark:bg-neutral-900/90 backdrop-blur-md items-end pb-3 pt-1.5 px-4 sm:px-6 rounded-full border border-gray-200/30 dark:border-neutral-800/50 shadow-lg shadow-black/5 dark:shadow-white/5'
                        style={{
                            height: PANEL_HEIGHT,
                            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
                        }}
                        role='navigation'
                        aria-label='Main navigation'
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.4, type: 'spring' }}
                    >
                        {navItems.map((item, idx) => (
                            <DockItem
                                key={idx}
                                mouseX={mouseX}
                                isInDock={isInDock}
                                isActive={pathname === item.href}
                                href={item.href}
                                title={item.title}
                                description={item.description}
                                index={idx}
                            >
                                {item.icon}
                            </DockItem>
                        ))}

                        {/* Theme Toggle */}
                        <motion.button
                            onClick={toggleTheme}
                            className="p-2 rounded-full bg-white/20 dark:bg-gray-900/20 backdrop-blur-md border border-gray-200/30 dark:border-gray-800/30 shadow-md hover:shadow-lg transition-all duration-300 self-center ml-2 mt-3"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
                        >
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={theme}
                                    initial={{ rotate: -180, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: 180, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {theme === "light" ? (
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                        </svg>
                                    ) : (
                                        <svg className="w-5 h-5 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
                                        </svg>
                                    )}
                                </motion.div>
                            </AnimatePresence>
                        </motion.button>
                    </motion.div>
                </motion.div>
            </motion.div>
        </>
    );
};

function DockItem({ mouseX, isInDock, children, isActive, title, href, description, index }) {
    const ref = useRef(null);
    const [hovered, setHovered] = useState(false);

    // Calculate distance from mouse
    const distanceFromMouse = useTransform(mouseX, (val) => {
        const el = ref.current;
        if (!el) return DISTANCE + 1;
        const rect = el.getBoundingClientRect();
        const elementCenter = rect.left + rect.width / 2;
        return Math.abs(val - elementCenter);
    });

    // Calculate width based on distance and dock state
    const widthValue = useTransform(distanceFromMouse, (distance) => {
        // If not in dock, use default size
        if (!isInDock) return DEFAULT_ICON_SIZE;

        // Calculate magnification based on distance
        if (distance > DISTANCE) return DEFAULT_ICON_SIZE;
        const scale = 1 - (distance / DISTANCE);
        return DEFAULT_ICON_SIZE + ((MAGNIFICATION - DEFAULT_ICON_SIZE) * scale);
    });


    const width = useSpring(widthValue, SPRING_OPTIONS);


    const iconSize = useTransform(width, (val) => val * 0.55);


    const elevation = useTransform(width, [DEFAULT_ICON_SIZE, MAGNIFICATION], [0, -8]);

    const tooltipVariants = {
        hidden: {
            opacity: 0,
            y: -5,
            scale: 0.9,
            transition: { duration: 0.15 }
        },
        visible: {
            opacity: 1,
            y: 6,
            scale: 1,
            transition: { duration: 0.2, type: "spring", stiffness: 500 }
        }
    };

    return (
        <Link href={href} aria-label={title}>
            <motion.div
                ref={ref}
                style={{
                    width,
                    y: elevation,
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: elevation }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className={cn(
                    "aspect-square rounded-full relative inline-flex items-center justify-center",
                    "transition-colors duration-200",
                    isActive
                        ? "bg-primary/10 text-primary shadow-inner border border-primary/20"
                        : "bg-gray-200/80 hover:bg-gray-200 dark:bg-neutral-800/80 dark:hover:bg-neutral-700/90 border border-transparent hover:border-gray-300/30 dark:hover:border-neutral-600/30"
                )}
                whileTap={{ scale: 0.95 }}
                aria-current={isActive ? "page" : undefined}
            >
                {/* Enhanced Tooltip - Now below the icon */}
                <AnimatePresence>
                    {hovered && (
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            variants={tooltipVariants}
                            className="absolute top-full left-1/2 min-w-max pointer-events-none mt-2"
                            style={{ x: '-50%' }}
                        >
                            <div className="flex flex-col items-center">
                                <div className="w-2 h-2 rotate-45 bg-gray-800 dark:bg-gray-900 -mb-1 z-10"></div>
                                <div className="px-3 py-1.5 rounded-lg bg-gray-800 dark:bg-gray-900 text-white shadow-lg">
                                    <div className="font-medium text-xs">{title}</div>
                                    <div className="text-[10px] text-gray-300 dark:text-gray-400">{description}</div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Subtle glow effect for active item */}
                {isActive && (
                    <motion.div
                        className="absolute inset-0 rounded-full bg-primary/5 dark:bg-primary/10"
                        animate={{
                            scale: [1, 1.05, 1],
                            opacity: [0.5, 0.8, 0.5]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "reverse"
                        }}
                    />
                )}

                {/* Icon */}
                <motion.div
                    style={{ width: iconSize, height: iconSize }}
                    className={cn(
                        'flex items-center justify-center',
                        isActive ? "text-primary" : "text-gray-700 dark:text-gray-300"
                    )}
                >
                    {children}
                </motion.div>

                {/* Active indicator dot */}
                {isActive && (
                    <motion.div
                        className="absolute -bottom-1 w-1.5 h-1.5 rounded-full bg-primary"
                        layoutId="activeIndicator"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                )}
            </motion.div>
        </Link>
    );
}

export default Navbar;
