import { PricingPlan } from "@/types/pricingPlan";

export const webPlans: PricingPlan[] = [
  {
    id: "landing-page",
    name: "Landing Page",
    title: "Para emprendedores",
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
    price: 9.99,
    currency: "$",
    available: true,
  },
  {
    id: "web-corporativa",
    name: "Web Corporativa",
    title: "Para logra presencia en línea.",
    description:
      "Características avanzadas.",
    features: [
      "Identidad de marca.",
      "Servicios, Contacto y más.",
      "Visibilidad en buscadores.",
      "Diseño responsivo.",
      "formulario de contacto",
      "Enlaces a redes sociales",
      "Conexión con tu audiencia.",
      "Asesoramiento en el lanzamiento.",
      "Hosting por 1 año",
      "Dominio por 1 año",
      "Certificado SSL por 1 año",
    ],
    price: 24.99,
    currency: "$",
    available: true,
  },
  // {
  //   id: "web-enterprise",
  //   name: "Enterprise",
  //   title: "Para grandes organizaciones",
  //   description: "Soluciones personalizadas para aplicaciones web complejas.",
  //   features: [
  //     "Sitio creado en WordPress y WooCommerce",
  //     "Hasta 6 secciones precargadas",
  //     "Hasta 10 fotos precargadas",
  //     "Hasta 5 categorías precargadas",
  //     "Hasta 5 productos precargados",
  //     "Optimización para todo tipo de dispositivo",
  //     "1 formulario de contacto",
  //     "Enlaces a redes sociales",
  //     "Botón de WhatsApp",
  //     "Hasta 5 cuentas de correo",
  //     "Hosting por 1 año",
  //     "Dominio .com.ar por 1 año",
  //     "Certificado SSL por 1 año",
  //     "Mantenimiento web por 3 meses",
  //   ],
  //   price: 99.99,
  //   currency: "$",
  //   available: false,
  // },
];
