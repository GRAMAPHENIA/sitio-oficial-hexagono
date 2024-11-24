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
    <Card className="dark:bg-[#B6C9DC] shadow-box border-none rounded-[35px]">
      <CardContent
        className={`${exo2.className}  text-slate-600`}
      >
        <CardTitle className="mt-20 text-4xl">{project.title}</CardTitle>
        <p className="text-gray-600 mb-10">{project.description}</p>
        <Image
          src={project.imageSrc}
          alt={project.altText}
          className="w-auto h-20 m-auto mb-10"
          width={400}
          height={400}
        />{" "}
        <p className="text-sm text-gray-500 dark:text-slate-800 max-w-sm md:max-w-md lg:max-w-lg mb-2 text-balance">
          Descubrí lo que nuestros clientes tienen para decir sobre su
          experiencia con nuestros servicios.
        </p>
        {/* El botón ahora usa Link directamente con el href del proyecto */}
        <Link
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          passHref
        >
          <Button className="my-10 dark:bg-muted/90 hover:dark:bg-slate-800/80 ">Ver sitio</Button>
        </Link>
      </CardContent>
    </Card>
  );
}
