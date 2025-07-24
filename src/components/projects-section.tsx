import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projectsData } from "@/data/projects";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Project Saya
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Berikut adalah beberapa proyek yang telah saya kerjakan, menampilkan
            berbagai teknologi dan solusi kreatif.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <Card
              key={index}
              className={`group bg-gray-800/50 border-gray-700 hover:border-gray-600 transition-all duration-500 hover:transform hover:scale-[1.02] backdrop-blur-sm overflow-hidden ${
                project.featured ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <CardHeader className="p-0 relative overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
                ></div>
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-white mb-3 text-xl group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="outline"
                      className="border-gray-600 text-gray-300 hover:border-blue-400 hover:text-blue-400 transition-colors duration-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="border-gray-600 hover:bg-gray-700 bg-transparent hover:border-blue-400 transition-all duration-300 flex-1 hover:text-white text-white"
                  >
                    <Link href={project.github}>
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Link>
                  </Button>
                  <Button
                    size="sm"
                    asChild
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 flex-1"
                  >
                    <Link href={project.demo}>
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
