import { Vollkorn } from "next/font/google";
import ProjectCard from "@/components/custom/portfolio/ProjectCard";
import { projects } from "@/data/projects";

// Configuración de la fuente Vollkorn
const vollkorn = Vollkorn({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Portfolio() {
  return (
    <section className="flex flex-col justify-center items-center text-center mt-24">
      <h2 className={`${vollkorn.className} text-4xl lg:text-7xl font-black text-slate-600 dark:text-slate-300`}>
        Portafolio
      </h2>
      <p className="text-xl text-gray-500 dark:text-gray-300 max-w-sm md:max-w-md lg:max-w-lg mb-16">
        Conoce cómo nuestros proyectos destacan por la calidad y creatividad en cada solución de diseño y desarrollo web.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} /> 
        ))}
      </div>
    </section>
  );
}
