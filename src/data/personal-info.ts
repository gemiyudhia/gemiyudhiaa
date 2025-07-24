export interface PersonalInfo {
  name: string;
  title: string;
  description: string;
  email: string;
  linkedin: string;
  github: string;
  profileImage: string;
}

export interface Stats {
  projects: string;
  experience: string;
  clients: string;
}

export interface Approach {
  title: string;
  description: string;
  color: string;
  dotColor: string;
}

export const personalInfo: PersonalInfo = {
  name: "Gemi Yudhia",
  title: "Frontend Developer",
  description:
    "Passionate dalam menciptakan solusi digital yang inovatif dan user-friendly",
  email: "gemiyudhiaa@gmail.com",
  linkedin: "https://linkedin.com/in/gemiyudhia",
  github: "https://github.com/gemiyudhia",
  profileImage: "/placeholder.svg?height=200&width=200",
};

export const approaches: Approach[] = [
  {
    title: "User-Centered Design",
    description:
      "Selalu mengutamakan pengalaman pengguna dalam setiap keputusan desain dan development.",
    color: "text-blue-400",
    dotColor: "bg-blue-400",
  },
  {
    title: "Clean Code",
    description:
      "Menulis kode yang readable, maintainable, dan mengikuti best practices industry.",
    color: "text-purple-400",
    dotColor: "bg-purple-400",
  },
  {
    title: "Continuous Learning",
    description:
      "Selalu update dengan teknologi terbaru dan trend development modern.",
    color: "text-pink-400",
    dotColor: "bg-pink-400",
  },
];
