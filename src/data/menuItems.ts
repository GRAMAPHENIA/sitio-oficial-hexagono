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
      {
        href: "/#contact-form",
        title: "Contacto",
        description: "Ponte en contacto con nosotros para más información.",
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
    label: "Servicios",
    links: [
      {
        href: "/hosting",
        title: "Hosting",
        description:
          "Servicio de hosting para asegurar que tu sitio web esté disponible en todo momento.",
      },
      {
        href: "/dominio",
        title: "Dominio",
        description:
          "Registro y gestión de dominios para que tu marca tenga presencia en Internet.",
      },
    ],
  },
  {
    label: "Acerca de",
    links: [
      {
        href: "/sobre-nosotros",
        title: "Sobre Nosotros",
        description: "Conoce más sobre nuestro equipo y misión.",
      },
    ],
  },
  {
    label: "Precios",
    links: [
      {
        href: "/precios",
        title: "Precios",
        description:
          "Descubre nuestros planes de desarrollo web y redes sociales",
      },
    ],
  },
];
