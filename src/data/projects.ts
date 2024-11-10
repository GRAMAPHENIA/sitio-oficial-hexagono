// src/data/projects.ts
import type { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    title: "Lutheria",
    description: "Sitio web para el Luthier Esteban Di corato",
    imageSrc: "/portfolio/corporativa.webp",
    altText: "Lutheria",
    url: "https://www.dicorato.com.ar",
  },
  {
    title: "El 'Metodo' ADULMA",
    description: "Gimnasia para Adultos Mayores",
    imageSrc: "/portfolio/corporativa.webp",
    altText: "El Metodo ADULMA",
    url: "https://elmetodoadulma.com",
  },
  {
    title: "Babushka",
    description: "Sitio web de artesanías",
    imageSrc: "/portfolio/landing.webp",
    altText: "Birdie Borda",
    url: "https://www.babushka.cloud",
  },
  // TODO: Agrega más proyectos
];
