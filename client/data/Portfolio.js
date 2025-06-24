export const portfolioConfig = {
    name: "Shangesh S",
    title: "Full Stack Developer",
    description: "I am a Passionate Full Stack Developer and Gen AI Developer",
    location: "Bengaluru, Karnataka, India",
    email: "shangeshsshangeshs@gmail.com",
    resumeUrl: "/Shangesh_Resume.pdf",

    // Social Media Links
    socialLinks: {
        twitter: "https://twitter.com/shangesh_s",
        linkedin: "https://www.linkedin.com/in/shangesh-s",
        github: "https://github.com/shangesh-tech",
    },

    // SEO Information
    seo: {
        ogImage: "https://shangesh-tech.vercel.app/og-image.png",
        url: "https://shangesh.vercel.app",
        keywords: [
            "shangesh",
            "shangesh s",
            "Shangesh S",
            "shangesh portfolio",
            "shangesh kalvium",
            "portfolio",
            "web developer",
            "web",
            "web dev",
            "developer",
            "PROGRAMMER ",
            "programmer ",
            "shangesh developer",
        ],
        authors: [
            {
                name: "Shangesh S",
                url: "https://github.com/shangesh-tech",
            },
        ],
    },

    // About Information
    about: {
        bio: "I am a Full Stack Web Developer from Bengaluru, Karnataka, India. I'm passionate about crafting web projects and contributing to open-source communities. I specialize in modern JavaScript frameworks and responsive CSS design, focusing on creating pixel-perfect, user-friendly interfaces. With strong attention to detail and efficient delivery, I build seamless web experiences that combine functionality with elegant design.",
        hobbies: [
            "Coding",
            "Playing Games",
            "Reading Financial & Tech News",
            "Creating Cool Projects & Deployed to production",
        ],
        personalInfo: {
            language: "English UK",
            nationality: "India",
            gender: "Male",
        },
    },

    // Skills and Roles
    skills: {
        roles: [
            "Full Stack Developer",
            "Gen AI Developer"
        ],
        programmingLanguages: [
            {
                name: "HTML5",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
            },
            {
                name: "CSS3",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
            },
            {
                name: "JavaScript",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
            },
            {
                name: "TypeScript",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
            },
            {
                name: "Python",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
            },
            {
                name: "Solidity",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg",
            }
        ],
        frameworks: [
            {
                name: "React",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
            },
            {
                name: "Next.js",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
            },
            {
                name: "Tailwind CSS",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
            },
            {
                name: "Bootstrap",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
            },
            {
                name: "Node.js",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
            },
            {
                name: "Express.js",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
            },
            {
                name: "FastAPI",
                icon: "https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png",
            },
            {
                name: "Streamlit",
                icon: "https://streamlit.io/images/brand/streamlit-logo-secondary-colormark-darktext.svg",
            }
        ],
        databases: [
            {
                name: "PostgreSQL",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
            },
            {
                name: "MongoDB",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
            },
            {
                name: "Firebase",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
            },
            {
                name: "Supabase",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
            },
            {
                name: "Pinecone",
                icon: "https://avatars.githubusercontent.com/u/54333248?s=200&v=4",
            }

        ],
        tools: [
            {
                name: "Git",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
            },
            {
                name: "GitHub",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
            },
            {
                name: "VS Code",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
            },
            {
                name: "Docker",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
            },
            {
                name: "Figma",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
            },
            {
                name: "GitLab",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg",
            },
            {
                name: "Vercel",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
            }
        ],
    },
    education: [
        {
            degree: "BTech in Computer Science and Engineering",
            institution: "Alliance University",
            location: "Bengaluru, Karnataka, India",
            period: "July 2024 - 2028",
            description:
                "I am currently Studying Bachelor of Technology in Computer Science and Engineering form Alliance University, Bengaluru. The program has provided me with a well-rounded education, covering both theoretical foundations and practical applications of computer science.",
        },
    ],

    projects: [
        {
            title: "InkWell- A Modern Full Stack Blog Platform.",
            description:
                "Engineered a high-performance blog platform using Next.js 15, implementing server-side rendering, static generation and serverless architecture deployed on Vercel to achieve 99% Google Lighthouse performance score and 0.6s initial page load times.",
            tags: ["Nextjs", "Tailwind CSS", "MongoDB", "Mongoose", "Cloudinary"],
            link: "https://inkwell-gilt.vercel.app",
            github: "https://github.com/shangesh-tech/inkwell",
            category: "fullstack",
            year: "2025"
        },
        {
            title: "Fin-Pay: Enterprise Virtual Banking System",
            description:
                "Built a secure MERN-based virtual banking application with end-to-end encryption deployed on Vercel, processing 10K+ transactions at 99.95% success rate and Optimized MongoDB performance via indexing and aggregation pipelines and maintaining sub- 200ms API response times",
            tags: ["Reactjs", "Tailwind CSS", "Nodejs", "Expressjs", "MongoDB", "Mongoose"],
            link: "https://fin-pay-six.vercel.app",
            github: "https://github.com/shangesh-tech/FinPay",
            category: "fullstack",
            year: "2024"
        },
        {
            title: "MERN-Food: Full-Scale Food Delivery Platform",
            description:
                "Developed a comprehensive MERN-based food delivery application with advanced features like order tracking, payment integration, and Admin Dashboard, deployed on onRender and optimized for performance and scalability.",
            tags: ["Reactjs", "Tailwind CSS", "Nodejs", "Expressjs", "MongoDB", "Mongoose"],
            link: "https://mern-food-frontend-6ywd.onrender.com/",
            github: "https://github.com/shangesh-tech/Mern_food",
            category: "fullstack",
            year: "2024"
        },
        {
            title: "Solana-AI - No-code Solana smart contract Generator",
            description: "Solana-AI is a web application that uses AI to generate Solana smart contracts based on natural language descriptions. Simply describe the functionality you want, and this will generate the complete Anchor Rust code for your Solana program.",
            tags: ["Nextjs", "Tailwind CSS", "Groq SDK", "llama3.3 70b", "Vercel"],
            link: "https://solana-ai-gray.vercel.app/",
            github: "https://github.com/shangesh-tech/No-Code_Solana_development_AI",
            category: "genai",
            year: "2025"
        },
        {
            title: "Stockify - AI-Powered Portfolio Creation and Stock Analysis Assistant",
            description: "Stockify is a personalized AI-powered portfolio creation and stock analysis assistant designed to help users build sustainable long-term wealth through data-driven investment strategies. The platform provides detailed stock analysis, personalized portfolio recommendations, and real-time market insights, empowering users to make confident investment decisions.",
            tags: ["Reactjs", "Tailwind CSS", "Nodejs", "Expressjs", "MongoDB", "Mongoose", "python", "fastapi", "langchain", "vectorstore", "Vercel"],
            link: "https://stockify-pink.vercel.app/",
            github: "https://github.com/shangesh-tech/Stockify",
            category: "genai",
            year: "2025"
        },
        {
            title: "Finance-Analyzer",
            description: "Finance-Analyzer is a web application that uses AI to analyze financial data and provide insights on stocks, bonds, and other financial instruments.",
            tags: ["python", "fastapi", "langchain", "vectorstore", "streamlit", "Vercel"],
            link: "https://finance-analyzers.streamlit.app/",
            github: "https://github.com/shangesh-tech/Finance-Analyzer",
            category: "genai",
            year: "2025"
        }

    ],
    freelanceProjects: [
        {
            title: "The Infra",
            description: "Crafting Spaces That Inspire - A professional website for a construction and infrastructure company.",
            link: "https://theinfra.in/",
            image: "/projects/theinfra.jpg",
            year: "2025"
        },
        {
            title: "Grammar - Interior Design",
            description: "Elegant Interior Design Studio. Transform your living spaces with premium furniture collections that blend style, comfort, and functionality.",
            link: "https://grammar-fawn.vercel.app/",
            image: "/projects/grammar.jpg",
            year: "2025"
        },
        {
            title: "Perimeter Control System",
            description: "A leader in providing cutting-edge electric fencing solutions. Delivering safe, effective, and reliable perimeter security that meets the highest standards of excellence.",
            link: "https://www.perimetercontrolsystem.in/",
            image: "/projects/perimeter.jpg",
            year: "2025"
        }
    ],
};
