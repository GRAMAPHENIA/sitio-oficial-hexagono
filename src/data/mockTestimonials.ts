import type { Testimonial } from "@/types/testimonial";

export const mockTestimonials: Testimonial[] = [
  {
    id: 0,
    specialty: "PRIMERA",
    imageLight: "/bg-avatar-testimonial/bg-avatar-she-one.png",
    imageDark: "/bg-avatar-testimonial/bg-avatar-she-one-dark.png",
    quote:
      "El landing page que crearon es sencillo y directo. Ahora los clientes entienden rápidamente lo que ofrecemos.",
    name: "Nora Makovitz",
    position: "Artesana",
  },
  {
    id: 1,
    specialty: "SEGUNDA",
    imageLight: "/bg-avatar-testimonial/bg-avatar-he.png",
    imageDark: "/bg-avatar-testimonial/bg-avatar-he-dark.png",
    quote:
      "El sitio web ahora muestra bien la calidad de mis instrumentos y atrae más clientes. El diseño es simple y funcional.",
    name: "Esteban Di Corato",
    position: "Luthier",
  },
  {
    id: 2,
    specialty: "TERCERA ",
    imageLight: "/bg-avatar-testimonial/bg-avatar-she-two.png",
    imageDark: "/bg-avatar-testimonial/bg-avatar-she-two-dark.png",
    quote:
      "Hexagono nos ayudó a tener una web fácil de usar. Ahora es más sencillo para los adultos mayores inscribirse en nuestros programas.",
    name: "Ana T. de León",
    position: "Lic. en Enfermería",
  },
];
