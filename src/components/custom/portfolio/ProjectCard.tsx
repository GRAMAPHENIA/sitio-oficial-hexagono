import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import type { Project } from "@/types/portfolio";
import { Button } from "@/components/ui/button";
import { exo2 } from "@/styles/fonts";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="p-6 shadow-md">
      <CardContent className={`${exo2.className} border p-4 rounded-lg text-slate-600`}>
        <CardTitle className="mt-10 mb-2 text-4xl">{project.title}</CardTitle>
        <p className="text-gray-600 mb-10">{project.description}</p>
        <p className="text-xl text-gray-500 dark:text-gray-300 max-w-sm md:max-w-md lg:max-w-lg mb-16">
        Descubrí lo que nuestros clientes tienen para decir sobre su experiencia
        con nuestros servicios.
      </p>
        <Image
          src={project.imageSrc}
          alt={project.altText}
          className="w-auto h-28 m-auto"
          width={400}
          height={400}
        />
        {/* El botón ahora usa Link directamente con el href del proyecto */}
        <Link
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          passHref
        >
          <Button className="my-10">Ver sitio</Button>
        </Link>
      </CardContent>
    </Card>
  );
}
