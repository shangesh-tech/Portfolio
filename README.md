# Shangesh S Portfolio
 
A modern, responsive portfolio website built with Next.js 15 and TailwindCSS, showcasing skills, projects, and professional experience.

![Portfolio Preview](client/public/profile_pic.jpg)

## 🌟 Features

- **Modern UI Design**: Sleek interface with animations, transitions, and responsive layout
- **Dark/Light Mode**: Theme toggle with local storage persistence
- **Interactive Components**: Animated navigation, project cards, and skill displays
- **Smooth Animations**: Powered by Framer Motion for seamless transitions
- **Fully Responsive**: Optimized for all device sizes
- **Project Showcase**: Categorized display of full stack and Gen AI projects
- **Freelance Work Section**: Highlighting client projects with elegant cards
- **About & Skills Pages**: Detailed information about background and technical expertise
- **Contact Form**: Easy way for visitors to get in touch
- **SEO Optimized**: Meta tags and optimized structure for better search engine visibility

## 🚀 Technologies Used

- **Framework**: Next.js 15 with App Router
- **UI Library**: React 19
- **Styling**: TailwindCSS 4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **UI Components**: Custom components with Radix UI primitives
- **Performance**: TurboPack for fast development
- **Development**: ESLint for code quality

## 📋 Project Structure

```
Portfolio-nextjs/
  ├── client/
  │   ├── app/                # Next.js app router
  │   │   ├── about/          # About page
  │   │   ├── contact/        # Contact page
  │   │   ├── projects/       # Projects showcase
  │   │   ├── skills/         # Skills display
  │   │   ├── page.js         # Homepage
  │   │   └── layout.js       # Root layout
  │   ├── components/         # Reusable components
  │   │   ├── ui/             # UI components
  │   │   └── Navbar.jsx      # Navigation bar
  │   ├── data/               # Data configuration
  │   │   └── Portfolio.js    # Portfolio content
  │   ├── lib/                # Utility functions
  │   └── public/             # Static assets
```

## 🛠️ Setup and Installation

1. **Clone the repository**

```bash
git clone https://github.com/shangesh-tech/Portfolio-nextjs.git
cd Portfolio-nextjs
```

2. **Install dependencies**

```bash
cd client
npm install
```

3. **Run the development server**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

4. **Build for production**

```bash
npm run build
npm run start
```

## 📝 Customization

To personalize this portfolio:

1. Edit `client/data/Portfolio.js` to update personal information, skills, projects, and other content
2. Replace images in the `client/public/` directory
3. Modify theme colors in `client/app/globals.css` or through TailwindCSS configuration

## 🔧 Key Components

- **Navbar**: Interactive navigation with theme toggle and animated icons
- **Project Cards**: Showcasing projects with hover animations
- **Skill Icons**: Visual representation of technical skills
- **Freelance Section**: Client project showcase with gradient cards
- **Background Patterns**: Dynamic animated backgrounds
- **Scroll Animation**: Smooth scrolling between sections

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Mobile devices
- Tablets
- Laptops/Desktops
- Large screens

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

- **Shangesh S** - [GitHub](https://github.com/shangesh-tech) | [LinkedIn](https://www.linkedin.com/in/shangesh-s) | [Twitter](https://twitter.com/shangesh_s)

---

Built with ❤️ by Shangesh S
