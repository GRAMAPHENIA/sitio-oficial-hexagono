import { Button } from "@/components/ui/button";
import { vollkorn } from "@/styles/fonts";
import Image from "next/image";
import { CheckCircle } from "lucide-react"; // Importa el ícono CheckCircle
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CustomDevelopment = () => {
  return (
    <section className="flex flex-col items-center mx-auto text-center pb-12">
      <div className="mx-auto px-6">
        {/* Hero Section */}
        <div className="mb-12">
          <h1
            className={`${vollkorn.className} text-4xl lg:text-9xl font-extrabold text-slate-800 dark:text-slate-200 mb-6 my-20`}
          >
            Desarrollo
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Soluciones personalizadas para tu negocio. Nos especializamos en
            desarrollar aplicaciones y funcionalidades a medida que se alinean
            perfectamente con los objetivos de tu empresa.
          </p>
          <section className="mb-8">
            <Image
              src="/features/icono-plano-regla-lapiz.svg"
              alt="Ícono de Código"
              width={300}
              height={300}
              className="rounded-full border border-slate-300 dark:border-slate-500 mx-auto shadow-md"
            />
          </section>
        </div>

        {/* Característica Destacada */}
        <section className="max-w-3xl mx-auto mb-12 py-12">
          <Card className="p-6 shadow-md border border-slate-200 dark:border-slate-700 rounded-lg">
            <CardHeader>
              <CardTitle
                className={`${vollkorn.className} text-4xl lg:text-6xl font-extrabold text-slate-800 dark:text-slate-200 mb-6`}
              >
                Desarrollo Personalizado
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              <p>
                Adaptamos cada proyecto a las necesidades específicas de tu
                negocio. Desde funcionalidades únicas hasta integraciones
                complejas, creamos soluciones que se ajustan a tus requisitos
                exactos y aportan valor real.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Ventajas de Nuestro Enfoque */}
        <div className="text-center mb-12 py-12">
          <h2
            className={`${vollkorn.className} text-4xl lg:text-6xl font-extrabold text-slate-800 dark:text-slate-200 mb-12 max-w-5xl`}
          >
            Ventajas de nuestro enfoque para el desarrollo a medida
          </h2>
          <ul className="flex flex-col list-none space-y-4 max-w-2xl items-center justify-center mx-auto py-12 gap-y-10">
            <li className="text-stone-700 dark:text-stone-300 flex flex-col justify-center items-center p-6 shadow-md border border-slate-200 dark:border-slate-700 rounded-lg mx-4 lg:mx-0">
              <CheckCircle className="text-stone-500 h-20 w-20" />
              <section className="pt-10 pb-20">
                <span className={`${vollkorn.className} text-2xl lg:text-4xl font-extrabold text-stone-700 dark:text-stone-300 mb-6`}>
                  Soluciones Adaptadas:
                </span>
                <p>
                  Cada funcionalidad es creada para satisfacer tus necesidades
                  específicas, asegurando que cada detalle esté alineado con tus
                  objetivos.
                </p>
              </section>
            </li>
            <li className="text-stone-700 dark:text-stone-300 flex flex-col justify-center items-center p-6 shadow-md border border-slate-200 dark:border-slate-700 rounded-lg mx-4 lg:mx-0">
              <CheckCircle className="text-stone-500 h-20 w-20" />
              <section className="pt-10 pb-20">
                <span className={`${vollkorn.className} text-2xl lg:text-4xl font-extrabold text-stone-700 dark:text-stone-300 mb-6`}>
                  Escalabilidad y Flexibilidad:
                </span>
                <p>
                  Nuestros desarrollos permiten la expansión y adaptación
                  conforme a la evolución de tu negocio.
                </p>
              </section>
            </li>
            <li className="text-stone-700 dark:text-stone-300 flex flex-col justify-center items-center p-6 shadow-md border border-slate-200 dark:border-slate-700 rounded-lg mx-4 lg:mx-0">
              <CheckCircle className="text-stone-500 h-20 w-20" />
              <section className="pt-10 pb-20">
                <span className={`${vollkorn.className} text-2xl lg:text-4xl font-extrabold text-stone-700 dark:text-stone-300 mb-6`}>
                  Integraciones Efectivas:
                </span>
                <p>
                  Implementamos integraciones con herramientas y sistemas existentes
                  para maximizar la eficiencia.
                </p>
              </section>
            </li>
          </ul>
        </div>

        {/* CTA Final */}
        <Button>Solicita una consulta gratuita</Button>
      </div>
    </section>
  );
};

export default CustomDevelopment;
