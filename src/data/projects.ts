export interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
}

export const projectsData: Project[] = [
  {
    title: "PilahPintar",
    description:
      "Sistem web untuk deteksi jenis sampah dan rekomendasi daur ulang, dikembangkan sebagai skripsi.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "YOLOv8"],
    github: "https://github.com/gemiyudhia", // TODO: ganti ke link repo PilahPintar yang asli
    demo: "https://pilahpintar.vercel.app",
  },
  {
    title: "Talky",
    description: "Aplikasi web untuk chat real-time antar pengguna.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase", "Socket.io"],
    github: "https://github.com/gemiyudhia/talky",
    demo: "https://talky-three.vercel.app/",
  },
  {
    title: "E-Commerce Platform",
    description: "Website untuk menjual produk secara online.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase", "Zustand"],
    github: "https://github.com/gemiyudhia/onlinestore",
    demo: "https://toko-online-mu.vercel.app/",
  },
  {
    title: "Socialfy",
    description: "Website media sosial sederhana.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase"],
    github: "https://github.com/gemiyudhia/socialfy",
    demo: "https://socialfy-kohl.vercel.app/",
  },
  {
    title: "Movies List",
    description: "Website untuk menampilkan daftar film.",
    tech: ["React", "Tailwind CSS"],
    github: "https://github.com/gemiyudhia/new-movie-project",
    demo: "https://movie-project-sandy-nu.vercel.app/",
  },
];
