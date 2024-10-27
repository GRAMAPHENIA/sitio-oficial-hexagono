import { PricingTable } from "./pricing-table";
import { Vollkorn } from "next/font/google";

const webPlans = [
  {
    id: "landing-page",
    name: "Landing Page",
    title: "Para pequeñas empresas",
    description: "odo lo que necesitas para comenzar con un sitio web simple.",
    features: [
      "Sitio web de 1 página",
      "Dominio personalizado",
      "SEO básico",
      "Diseño responsive",
      "Creado con Next.js, Tailwind, TypeScript",
      "Hasta 10",
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
    title: "For growing businesses",
    description:
      "Advanced features for businesses looking to expand their online presence",
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
    title: "For large organizations",
    description: "Customized solutions for complex web applications",
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

const socialPlans = [
  {
    id: "social-starter",
    name: "Starter",
    title: "For personal brands",
    description: "Basic social media management for individuals",
    features: [
      "2 social platforms",
      "Weekly content calendar",
      "Basic analytics",
    ],
    price: 14.99,
    currency: "$",
    available: true,
  },
  {
    id: "social-growth",
    name: "Growth",
    title: "For small businesses",
    description: "Comprehensive social media management for growing businesses",
    features: [
      "4 social platforms",
      "Daily content calendar",
      "Advanced analytics",
      "Community management",
    ],
    price: 39.99,
    currency: "$",
    available: true,
  },
];

// Configuración de la fuente Vollkorn
const vollkorn = Vollkorn({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function PricingPage() {
  return (
    <section>
      <div className="bg-background min-h-screen mt-20">
        <header className="text-secondary-foreground py-8 text-center">
          <div className="container mx-auto px-4 ">
            <h2
              className={`${vollkorn.className} text-4xl lg:text-8xl font-black text-slate-600 dark:text-slate-300`}
            >
              Nuestros Planes
            </h2>
            <p className="text-xl text-gray-500 dark:text-gray-300 mb-16 ">
              Elige el plan perfecto para tus necesidades
            </p>
          </div>
        </header>
        <main className="px-0 lg:px-40 ">
          <PricingTable webPlans={webPlans} socialPlans={socialPlans} />
        </main>
      </div>
    </section>
  );
}
