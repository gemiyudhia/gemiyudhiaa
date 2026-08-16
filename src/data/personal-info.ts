export interface PersonalInfo {
  name: string;
  title: string;
  description: string;
  email: string;
  linkedin: string;
  github: string;
  instagram: string;
  profileImage: string;
}

export const personalInfo: PersonalInfo = {
  name: "Gemi Yudhia",
  title: "Frontend Developer",
  description:
    "Mahasiswa Teknik Informatika tingkat akhir di Universitas Teuku Umar yang fokus membangun antarmuka web yang rapi dan mudah dipakai.",
  email: "gemiyudhiaa@gmail.com",
  linkedin: "https://linkedin.com/in/gemiyudhia",
  github: "https://github.com/gemiyudhia",
  instagram: "https://instagram.com/yuudhia",
  profileImage: "/images/gemi.png",
};

export const focusAreas: string[] = [
  "Frontend Development — Next.js, TypeScript, Tailwind CSS",
  "UI/UX Design",
  "Computer Vision",
];
