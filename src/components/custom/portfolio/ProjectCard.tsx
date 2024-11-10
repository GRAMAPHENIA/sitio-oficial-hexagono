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
    <Card className="p-6 shadow-md w-[390px]">
      <CardContent className=" border p-4 rounded-lg">
        <CardTitle className="mt-10 mb-2 text-4xl">{project.title}</CardTitle>
        <p className="text-gray-600 mb-10">{project.description}</p>
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
