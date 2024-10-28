import { PricingPlan } from "@/types/pricingPlan";

export const webPlans: PricingPlan[] = [
  {
    id: "landing-page",
    name: "Landing Page",
    title: "Para pequeñas empresas",
    description: "Todo lo que necesitas para comenzar con un sitio web simple.",
    features: [
      "Sitio web de 1 página",
      "Dominio personalizado",
      "SEO básico",
      "Diseño responsive",
      "Creado con Next.js, Tailwind, TypeScript",
      "Hasta 10 contactos",
      "Optimización para todo tipo de dispositivo",
      "1 formulario de contacto",
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
    id: "web-pro",
    name: "Pro",
    title: "Para empresas en crecimiento",
    description:
      "Características avanzadas para negocios que buscan expandir su presencia en línea.",
    features: [
      "Sitio creado en WordPress",
      "Hasta 6 secciones precargadas",
      "Hasta 10 fotos precargadas",
      "Optimización para todo tipo de dispositivo",
      "1 formulario de contacto",
      "Enlaces a redes sociales",
      "Botón de WhatsApp",
      "Hasta 5 cuentas de correo",
      "Hosting por 1 año",
      "Dominio .com.ar por 1 año",
      "Certificado SSL por 1 año",
      "Mantenimiento web por 3 meses",
    ],
    price: 24.99,
    currency: "$",
    available: true,
  },
  {
    id: "web-enterprise",
    name: "Enterprise",
    title: "Para grandes organizaciones",
    description: "Soluciones personalizadas para aplicaciones web complejas.",
    features: [
      "Sitio creado en WordPress y WooCommerce",
      "Hasta 6 secciones precargadas",
      "Hasta 10 fotos precargadas",
      "Hasta 5 categorías precargadas",
      "Hasta 5 productos precargados",
      "Optimización para todo tipo de dispositivo",
      "1 formulario de contacto",
      "Enlaces a redes sociales",
      "Botón de WhatsApp",
      "Hasta 5 cuentas de correo",
      "Hosting por 1 año",
      "Dominio .com.ar por 1 año",
      "Certificado SSL por 1 año",
      "Mantenimiento web por 3 meses",
    ],
    price: 99.99,
    currency: "$",
    available: false,
  },
];