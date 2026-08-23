export interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  githubBackend?: string;
  demo?: string;
}

export const projectsData: Project[] = [
  {
    title: 'Klipa',
    description:
      'Platform marketplace yang menghubungkan content creator dengan clipper untuk mendistribusikan konten video pendek melalui sistem campaign. Project ini mencakup frontend, REST API, autentikasi, manajemen campaign, serta pengelolaan data dan transaksi.',
    tech: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'NestJS',
      'Prisma',
      'PostgreSQL',
    ],
    github: 'https://github.com/gemiyudhia/klipa-frontend',
    githubBackend: 'https://github.com/gemiyudhia/klipa-backend',
    demo: 'https://klipa-psi.vercel.app',
  },
  {
    title: 'PilahPintar',
    description:
      'Aplikasi web yang dapat mendeteksi jenis sampah melalui gambar dan memberikan rekomendasi pengelolaan atau daur ulang berdasarkan hasil deteksi. Project ini dikembangkan sebagai bagian dari skripsi dengan mengintegrasikan model computer vision ke dalam aplikasi web.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'YOLOv8'],
    github: 'https://github.com/gemiyudhia/pilahpintar',
    demo: 'https://pilahpintar.vercel.app',
  },
  {
    title: 'Talky',
    description:
      'Aplikasi chat real-time yang memungkinkan pengguna berkomunikasi secara langsung melalui antarmuka web. Project ini dibuat untuk mempelajari implementasi komunikasi real-time, pengelolaan autentikasi pengguna, serta integrasi layanan backend dan database.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Firebase', 'Socket.io'],
    github: 'https://github.com/gemiyudhia/talky',
    demo: 'https://talky-three.vercel.app/',
  },
  {
    title: 'E-Commerce Platform',
    description:
      'Website e-commerce yang memungkinkan pengguna menjelajahi produk, melihat detail produk, dan mengelola produk yang ingin dibeli. Project ini berfokus pada pengembangan antarmuka e-commerce serta pengelolaan state aplikasi dan data menggunakan layanan backend.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Firebase', 'Zustand'],
    github: 'https://github.com/gemiyudhia/onlinestore',
    demo: 'https://toko-online-mu.vercel.app/',
  },
  {
    title: 'Socialfy',
    description:
      'Aplikasi media sosial sederhana yang memungkinkan pengguna membuat dan berinteraksi dengan konten melalui sebuah platform berbasis web. Project ini dibuat untuk memahami bagaimana fitur autentikasi, penyimpanan data, dan interaksi pengguna dapat diintegrasikan dalam aplikasi web.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Firebase'],
    github: 'https://github.com/gemiyudhia/socialfy',
    demo: 'https://socialfy-kohl.vercel.app/',
  },
  {
    title: 'Movies List',
    description:
      'Aplikasi web untuk menjelajahi dan menampilkan daftar film dengan antarmuka yang sederhana dan responsif. Project ini menjadi salah satu latihan dalam membangun aplikasi React dengan komponen yang reusable dan tampilan yang dapat digunakan dengan nyaman di berbagai ukuran layar.',
    tech: ['React', 'Tailwind CSS'],
    github: 'https://github.com/gemiyudhia/new-movie-project',
    demo: 'https://movie-project-sandy-nu.vercel.app/',
  },
];
