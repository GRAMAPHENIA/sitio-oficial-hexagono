import { MenuItemProps } from "@/types/menu";

export const menuItems: MenuItemProps[] = [
  {
    label: "Inicio",
    links: [
      {
        href: "/",
        title: "Home",
        description: "Regresa a la página principal de Hexágono.",
      },
    ],
  },
  {
    label: "Caracteristicas",
    links: [
      {
        href: "/diseno-web",
        title: "Diseño Web",
        description: "Descubre nuestros servicios de diseño web.",
      },
      {
        href: "/desarrollo-a-medida",
        title: "Desarrollo a Medida",
        description: "Soluciones personalizadas para tu negocio.",
      },
      {
        href: "/seo",
        title: "SEO",
        description: "Mejora la visibilidad de tu sitio web.",
      },
    ],
  },
  {
    label: "Acerca de",
    links: [
      {
        href: "/about",
        title: "Sobre Nosotros",
        description: "Conoce más sobre nuestro equipo y misión.",
      },
    ],
  },
  {
    label: "Contacto",
    links: [
      {
        href: "/contact",
        title: "Contacto",
        description: "Ponte en contacto con nosotros para más información.",
      },
    ],
  },
];
