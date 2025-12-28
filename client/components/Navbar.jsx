"use client"
import { cn } from "@/lib/utils";
import { useEffect, useState } from 'react';

import {
    Briefcase,
    FolderGit2,
    HomeIcon,
    LightbulbIcon,
    Mail,
    User,
} from 'lucide-react';

import BackgroundPattern from "@/components/ui/background-pattern";

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [theme, setTheme] = useState("light");

    const navItems = [
        {
            title: 'Home',
            icon: <HomeIcon className='w-5 h-5' />,
            href: '#home',
        },
        {
            title: 'About',
            icon: <User className='w-5 h-5' />,
            href: '#about',
        },
        {
            title: 'Experience',
            icon: <Briefcase className='w-5 h-5' />,
            href: '#experience',
        },
        {
            title: 'Skills',
            icon: <LightbulbIcon className='w-5 h-5' />,
            href: '#skills',
        },
        {
            title: 'Projects',
            icon: <FolderGit2 className='w-5 h-5' />,
            href: '#projects',
        },
        {
            title: 'Contact',
            icon: <Mail className='w-5 h-5' />,
            href: '#contact',
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

    // Track active section based on scroll position
    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'skills', 'projects', 'freelance', 'contact'];
            const scrollPosition = window.scrollY + 150;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetHeight = element.offsetHeight;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Initial check
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        document.documentElement.classList.toggle("dark", newTheme === "dark");
        localStorage.setItem("theme", newTheme);
    };

    const scrollToSection = (e, href) => {
        e.preventDefault();
        const targetId = href.replace('#', '');
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <BackgroundPattern theme={theme} />
            <div className="fixed top-5 right-0 left-0 px-4 sm:px-5 m-auto w-full sm:w-fit bg-transparent z-[999]">
                <nav
                    className='mx-auto flex gap-2 sm:gap-3 bg-gray-50/90 dark:bg-neutral-900/90 backdrop-blur-md items-center py-3 px-4 sm:px-6 rounded-full border border-gray-200/30 dark:border-neutral-800/50 shadow-lg'
                    role='navigation'
                    aria-label='Main navigation'
                >
                    {navItems.map((item, idx) => (
                        <NavItem
                            key={idx}
                            isActive={activeSection === item.href.replace('#', '')}
                            href={item.href}
                            title={item.title}
                            onClick={(e) => scrollToSection(e, item.href)}
                        >
                            {item.icon}
                        </NavItem>
                    ))}

                    {/* Theme Toggle */}
                    <button
                        onClick={toggleTheme}
                        className="p-2 ml-2 rounded-full bg-gray-200/80 dark:bg-neutral-800/80 hover:bg-gray-300 dark:hover:bg-neutral-700 transition-colors duration-200"
                        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
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
                    </button>
                </nav>
            </div>
        </>
    );
};

function NavItem({ children, isActive, title, href, onClick }) {
    const [hovered, setHovered] = useState(false);

    return (
        <a href={href} aria-label={title} onClick={onClick}>
            <div
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className={cn(
                    "relative w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200",
                    isActive
                        ? "bg-primary/10 text-primary border border-primary/20"
                        : "bg-gray-200/80 hover:bg-gray-300 dark:bg-neutral-800/80 dark:hover:bg-neutral-700 text-gray-700 dark:text-gray-300"
                )}
                aria-current={isActive ? "page" : undefined}
            >
                {/* Tooltip */}
                {hovered && (
                    <div
                        className="absolute top-full left-1/2 -translate-x-1/2 min-w-max pointer-events-none mt-2"
                    >
                        <div className="flex flex-col items-center">
                            <div className="w-2 h-2 rotate-45 bg-gray-800 dark:bg-gray-900 -mb-1 z-10"></div>
                            <div className="px-3 py-1.5 rounded-lg bg-gray-800 dark:bg-gray-900 text-white shadow-lg">
                                <div className="font-medium text-xs">{title}</div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Icon */}
                <div className="flex items-center justify-center">
                    {children}
                </div>

                {/* Active indicator dot */}
                {isActive && (
                    <div className="absolute -bottom-1 w-1.5 h-1.5 rounded-full bg-primary" />
                )}
            </div>
        </a>
    );
}

export default Navbar;
