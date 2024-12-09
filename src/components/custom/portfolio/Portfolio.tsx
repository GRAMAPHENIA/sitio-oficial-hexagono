// Ruta: components/custom/portfolio/Portfolio.tsx

import ProjectCard from "@/components/custom/portfolio/ProjectCard";
import { projects } from "@/data/projects";
import { vollkorn } from "@/styles/fonts";

export default function Portfolio() {
  return (
    <section
      className="flex flex-col justify-center items-center text-center mb-40 max-w-7xl"
      aria-labelledby="portfolio-title"
    >
      {/* Título de la sección */}
      <h2
        id="portfolio-title"
        className={`${vollkorn.className} text-4xl lg:text-7xl font-black text-slate-600 dark:text-slate-300 mb-20`}
      >
        Portafolio
      </h2>

      {/* Contenedor de los proyectos */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full"
        role="list"
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
