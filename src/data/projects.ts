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
    description: "Webisite untuk menjual produk online.",
    image: "/images/online-store.jpeg",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase", "Zustand"],
    github: "https://github.com/gemiyudhia/onlinestore",
    demo: "https://toko-online-mu.vercel.app/",
    featured: true,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Movies List",
    description: "Website untuk menampilkan daftar film.",
    image: "/images/movie-project.jpeg",
    tech: ["React", "Tailwind Css"],
    github: "https://github.com/gemiyudhia/new-movie-project",
    demo: "https://movie-project-sandy-nu.vercel.app/",
    featured: true,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Socialfy",
    description: "Website sosial media",
    image: "/images/socialfy.png",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase"],
    github: "https://github.com/gemiyudhia/socialfy",
    demo: "https://socialfy-kohl.vercel.app/",
    featured: false,
    gradient: "from-green-500 to-teal-500",
  },
  {
    title: "Talky",
    description: "Website yang bisa chatingan dengan orang lain",
    image: "/images/talky.jpeg",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase", "Socket.io"],
    github: "https://github.com/gemiyudhia/talky",
    demo: "https://talky-three.vercel.app/",
    featured: false,
    gradient: "from-orange-500 to-red-500",
  },
];
