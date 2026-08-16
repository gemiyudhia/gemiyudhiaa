import { ArrowUpRight } from "lucide-react";
import { projectsData } from "@/data/projects";

const WorkCard = () => {
  return (
    <section className="max-w-2xl mx-auto px-6 py-16 sm:py-24">
      <h1 className="font-mono text-sm uppercase tracking-wider text-graphite mb-10">
        Projects
      </h1>

      <ol className="divide-y divide-hairline border-t border-b border-hairline">
        {projectsData.map((project, index) => (
          <li key={project.title} className="py-6">
            <div className="flex items-baseline gap-x-3">
              <span className="font-mono text-xs text-graphite shrink-0">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h2 className="text-base sm:text-lg text-ink">
                {project.title}
              </h2>
            </div>

            <p className="mt-2 ml-8 text-sm text-graphite leading-relaxed max-w-md">
              {project.description}
            </p>

            <div className="mt-3 ml-8 flex flex-wrap items-center gap-x-3 gap-y-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="font-mono text-[11px] uppercase tracking-wide text-moss bg-moss-soft px-2 py-0.5"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-4 ml-8 flex items-center gap-x-5 font-mono text-xs">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline pb-0.5 text-ink flex items-center gap-x-1"
              >
                GitHub <ArrowUpRight size={12} />
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline pb-0.5 text-graphite hover:text-ink flex items-center gap-x-1"
                >
                  Demo <ArrowUpRight size={12} />
                </a>
              )}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default WorkCard;
