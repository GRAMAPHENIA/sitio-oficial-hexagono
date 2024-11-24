import { PricingPlan } from "@/types/pricingPlan";

export const webPlans: PricingPlan[] = [
  {
    id: "landing-page",
    name: "Landing Page",
    title: "Emprendedores",
    description: "Para comenzar",
    features: [
      "Enfocado en la conversión",
      "Todo en una sola página",
      "Visibilidad en buscadores",
      "Adaptable a dispositivos",
      "Formulario de Contacto",
      "Enlaces a redes sociales",
      "Cuenta de correo",
      "Galería de fotos",
    ],
    price: 150000, // Precio promedio entre 15 horas de trabajo
    currency: "$",
    available: true,
  },
  {
    id: "web-corporativa",
    name: "Web Corporativa",
    title: "Presencia en línea",
    description: "Características avanzadas",
    features: [
      "Identidad de marca",
      "Hasta 5 secciones",
      "Visibilidad en buscadores",
      "Adaptable a dispositivos",
      "Formulario de contacto",
      "Enlaces a redes sociales",
      "Cuenta de correo",
      "Galería de fotos",
    ],
    price: 225000, // Precio promedio entre 30 horas de trabajo
    currency: "$",
    available: true,
  },
  {
    id: "web-tienda-nube",
    name: "Tienda Nube",
    title: "Para negocios que venden online",
    description: "Comercio electrónico con Tienda Nube.",
    features: [
      "Sitio creado con Tienda Nube",
      "6 secciones",
      "10 fotos de diseño de sitio",
      "5 categorías en la tienda",
      "5 productos por categoría",
      "4 fotos por producto",
      "Adaptable a dispositivos",
      "formulario de contacto",
      "Enlace a redes sociales",
      "Hosting (Tienda Nube)",
    ],
    price: 335000, // Precio promedio entre 45 horas de trabajo
    currency: "$",
    available: true,
  },
];
