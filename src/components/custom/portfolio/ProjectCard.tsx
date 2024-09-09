// src/components/ProjectCard.tsx
import Image from "next/image";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="p-6 shadow-md mx-4 lg:mx-0">
      <CardContent>
        <Image
          src={project.imageSrc}
          alt={project.altText}
          className="w-full h-40 m-auto"
          width={400}
          height={400}
          style={{
            width: "300px",
            height: "300px",
          }}
        />
        <CardTitle className="mt-4">{project.title}</CardTitle>
        <p className="text-gray-600">{project.description}</p>
      </CardContent>
    </Card>
  );
}
