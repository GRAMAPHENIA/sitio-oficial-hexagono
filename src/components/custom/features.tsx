import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Vollkorn, Exo_2 } from "next/font/google";

// Importar las fuentes
const vollkorn = Vollkorn({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const exo2 = Exo_2({
  subsets: ["latin"],
  weight: ["400", "700"],
});

// Array de características con imágenes en lugar de íconos
const features = [
  {
    icon: (
      <Image
        src="/features/icono-computadora-mouse.svg"
        alt="Diseño Web"
        width={200}
        height={200}
        style={{
          width: "200px",
          height: "200px",
        }}
        className="w-12 h-12 bg-slate-100 dark:bg-slate-600/10 rounded-full border border-slate-300 dark:border-slate-500"
      />
    ),
    title: "Diseño Web",
    description:
      "Desarrollamos sitios web atractivos y funcionales para tu negocio.",
  },
  {
    icon: (
      <Image
        src="/features/icono-plano-regla-lapiz.svg"
        alt="Desarrollo a Medida"
        width={200}
        height={200}
        style={{
          width: "200px",
          height: "200px",
        }}
        className="w-12 h-12 bg-slate-100 dark:bg-slate-600/10 rounded-full border border-slate-300 dark:border-slate-500"
      />
    ),
    title: "Desarrollo a Medida",
    description:
      "Soluciones personalizadas adaptadas a tus necesidades específicas.",
  },
  {
    icon: (
      <Image
        src="/features/icono-seo.svg"
        alt="SEO"
        width={200}
        height={200}
        style={{
          width: "200px",
          height: "200px",
        }}
        className="w-12 h-12 bg-slate-100 dark:bg-slate-600/10 rounded-full border border-slate-300 dark:border-slate-500"
      />
    ),
    title: "SEO",
    description:
      "Optimizamos tu sitio web para mejorar su visibilidad en motores de búsqueda.",
  },
];

export default function Features() {
  return (
    <div className="flex flex-col justify-center items-center text-center mt-24">
      <h1
        className={`${vollkorn.className} text-4xl lg:text-7xl font-black text-slate-600 dark:text-slate-300`}
      >
        Características
      </h1>
      <p className="text-xl text-gray-500 dark:text-gray-300 max-w-sm md:max-w-md lg:max-w-lg mb-16">
        Explora lo que hace que nuestro desarrollo y diseño web sean la mejor
        opción para impulsar tu negocio.
      </p>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <Card
            key={index}
            className="p-6 shadow-md border border-slate-200 dark:border-slate-700 rounded-lg mx-4 lg:mx-0"
          >
            <CardContent className="flex flex-col justify-center items-center text-center ">
              <div className="mb-4">{feature.icon}</div>
              <CardTitle
                className={`${exo2.className} text-2xl font-semibold text-slate-800 dark:text-slate-200 mb-2`}
              >
                {feature.title}
              </CardTitle>
              <p className="text-slate-600 dark:text-slate-400">
                {feature.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
}
