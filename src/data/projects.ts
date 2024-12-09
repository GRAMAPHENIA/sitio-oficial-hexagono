// src/data/projects.ts
import type { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    id: 0,
    title: "Lutheria",
    description: "Página corporativa",
    imageSrc: "/portfolio/corporativa.webp",
    altText: "Lutheria",
    url: "https://next-page-luthier.vercel.app/",
  },
  {
    id: 1,
    title: "Adulma",
    description: "Página corporativa",
    imageSrc: "/portfolio/corporativa.webp",
    altText: "El Metodo ADULMA",
    url: "https://elmetodoadulma.com",
  },
  {
    id: 2,
    title: "Babushka",
    description: "Landing Page",
    imageSrc: "/portfolio/landing.webp",
    altText: "Birdie Borda",
    url: "https://www.babushka.cloud",
  },
  // TODO: Agrega más proyectos
];
