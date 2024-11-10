import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import type { Project } from "@/types/portfolio";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="p-6 shadow-md mx-4 lg:mx-0">
      <CardContent className="flex flex-col justify-between items-center h-full border p-4 rounded-lg">
        <Image
          src={project.imageSrc}
          alt={project.altText}
          className="w-auto h-40 m-auto"
          width={400}
          height={400}
        />
        <CardTitle className="mt-4 ">{project.title}</CardTitle>
        <p className="text-gray-600">{project.description}</p>

        {/* El botón ahora usa Link directamente con el href del proyecto */}
        <Link
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          passHref
        >
          <Button className="mt-10">Ver sitio</Button>
        </Link>
      </CardContent>
    </Card>
  );
}
