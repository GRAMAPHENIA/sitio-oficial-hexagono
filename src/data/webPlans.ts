import { PricingPlan } from "@/types/pricingPlan";

export const webPlans: PricingPlan[] = [
  {
    id: "landing-page",
    name: "Landing Page",
    title: "Emprendedores",
    description: "Para comenzar.",
    features: [
      "Enfocado en la conversión.",
      "Todo en una sola página.",
      "Visibilidad en buscadores.",
      "Diseño responsivo.",
      "Formulario de Contacto",
      "Enlaces a redes sociales",
      "Cuenta de correo",
      "Hosting por 1 año",
      "Dominio por 1 año",
      "Certificado SSL",
    ],
    price: 75000,
    currency: "$",
    available: true,
    // monthlyPrice: 74090 / 12, // Precio mensual aproximado
  },
  {
    id: "web-corporativa",
    name: "Web Corporativa",
    title: "Presencia en línea",
    description: "Características avanzadas.",
    features: [
      "Identidad de marca.",
      "Servicios, Contacto y más.",
      "Visibilidad en buscadores.",
      "Diseño responsivo.",
      "Formulario de contacto",
      "Enlaces a redes sociales",
      "Asesoramiento en el lanzamiento.",
      "Hosting por 1 año",
      "Dominio por 1 año",
      "Certificado SSL por 1 año",
    ],
    price: 130000, // Precio promedio entre 15 y 20 horas de trabajo
    currency: "$",
    available: true,
    // monthlyPrice: 129657.5 / 12, // Precio mensual aproximado
  },
  {
    id: "web-tienda-nube",
    name: "Tienda Nube",
    title: "Para negocios que venden online",
    description: "Comercio electrónico con Tienda Nube.",
    features: [
      "Sitio creado con Tienda Nube.",
      "Hasta 6 secciones.",
      "Hasta 10 fotos de diseño de sitio.",
      "Hasta 5 categorías en la tienda.",
      "Hasta 5 productos por categoría.",
      "4 fotos por producto.",
      "Adaptable a cualquier dispositivo.",
      "1 formulario de contacto.",
      "Enlace a redes sociales.",
      "Hosting y dominio (Tienda Nube).",
    ],
    price: 315000,
    currency: "$",
    available: true,
    // monthlyPrice: 15000, // Hosting de Tienda Nube mensual
  },
];
