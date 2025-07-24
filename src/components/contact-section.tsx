import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/data/personal-info";

export function ContactSection() {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: "text-blue-400",
      borderColor: "hover:border-blue-400/50",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "linkedin.com/in/gemiyudhia",
      href: personalInfo.linkedin,
      color: "text-purple-400",
      borderColor: "hover:border-purple-400/50",
    },
    {
      icon: Github,
      title: "GitHub",
      value: "github.com/gemiyudhia",
      href: personalInfo.github,
      color: "text-pink-400",
      borderColor: "hover:border-pink-400/50",
    },
  ];

  return (
    <section id="kontak" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Ayo Bekerja Sama
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          Saya selalu terbuka untuk diskusi tentang proyek baru, peluang kerja
          sama, atau sekadar berbagi ide. Mari terhubung dan ciptakan sesuatu
          yang luar biasa bersama!
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
          <Button
            asChild
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-10 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <Link href={`mailto:${personalInfo.email}`}>
              <Mail className="h-5 w-5 mr-2" />
              Kirim Email
            </Link>
          </Button>
          <Button
            variant="outline"
            asChild
            className="border-2 border-gray-600 hover:bg-gray-700 bg-transparent hover:border-blue-400 px-10 py-6 text-lg rounded-full transition-all duration-300 hover:text-white"
          >
            <Link href={personalInfo.linkedin}>
              <Linkedin className="h-5 w-5 mr-2" />
              LinkedIn
            </Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon;
            return (
              <div
                key={index}
                className={`p-6 rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700 ${method.borderColor} transition-colors duration-300 cursor-pointer`}
              >
                <IconComponent
                  className={`h-8 w-8 ${method.color} mx-auto mb-4`}
                />
                <h3 className="font-semibold mb-2">{method.title}</h3>
                <p className="text-gray-400">{method.value}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
