export interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
  demo: string;
  featured: boolean;
  gradient: string;
}

export const projectsData: Project[] = [
  {
    title: "E-Commerce Platform",
    description:
      "Platform e-commerce modern dengan AI recommendation engine dan real-time analytics dashboard.",
    image: "/placeholder.svg?height=300&width=400",
    tech: ["React", "Node.js", "MongoDB", "Stripe", "AI/ML"],
    github: "#",
    demo: "#",
    featured: true,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Task Management App",
    description:
      "Aplikasi kolaborasi tim dengan real-time updates, advanced analytics, dan AI-powered insights.",
    image: "/placeholder.svg?height=300&width=400",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Socket.io"],
    github: "#",
    demo: "#",
    featured: true,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Weather Dashboard",
    description:
      "Dashboard cuaca interaktif dengan machine learning predictions dan beautiful data visualizations.",
    image: "/placeholder.svg?height=300&width=400",
    tech: ["React", "Chart.js", "Weather API", "TensorFlow.js"],
    github: "#",
    demo: "#",
    featured: false,
    gradient: "from-green-500 to-teal-500",
  },
  {
    title: "Social Media Analytics",
    description:
      "Platform analytics untuk social media dengan sentiment analysis dan trend predictions.",
    image: "/placeholder.svg?height=300&width=400",
    tech: ["Vue.js", "Python", "FastAPI", "Redis"],
    github: "#",
    demo: "#",
    featured: false,
    gradient: "from-orange-500 to-red-500",
  },
];
