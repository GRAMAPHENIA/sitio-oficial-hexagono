import { Button } from "@/components/ui/button";
import { vollkorn } from "@/styles/fonts";
import Image from "next/image";
import { CheckCircle } from "lucide-react"; // Importa el ícono CheckCircle
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DesignWeb = () => {
  return (
    <section className="flex flex-col items-center mx-auto text-center pb-12">
      <div className="mx-auto px-6">
        {/* Hero Section */}
        <div className="mb-12">
          <h1
            className={`${vollkorn.className} text-4xl lg:text-9xl font-extrabold text-slate-800 dark:text-slate-200 mb-6 my-20`}
          >
            Diseño Web
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Desarrollamos sitios web atractivos y funcionales para tu negocio.
            Nos especializamos en diseñar experiencias digitales únicas que
            reflejan la esencia de tu marca y contribuyen al crecimiento de tu
            negocio.
          </p>
          <section className="mb-8">
            <Image
              src="/features/icono-computadora-mouse.svg"
              alt="Ícono de Computadora y Mouse"
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
                Diseño Personalizado
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              <p>
                Cada proyecto es único, y por eso, tu sitio web debe serlo
                también. Creamos diseños personalizados que capturan la
                identidad de tu marca y se adaptan a tus objetivos comerciales.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Ventajas de Nuestro Enfoque */}
        <div className="text-center mb-12 py-12">
          <h2
            className={`${vollkorn.className} text-4xl lg:text-6xl font-extrabold text-slate-800 dark:text-slate-200 mb-12 max-w-5xl`}
          >
            Ventajas de nuestro enfoque para diseñar sitios web
          </h2>
          <ul className="flex flex-col list-none space-y-4 max-w-2xl items-center justify-center mx-auto py-12">
            <CheckCircle className="text-stone-500 h-20 w-20" />
            <li className=" text-stone-700 dark:text-stone-300">
              <span className="text-stone-700 dark:text-stone-50 text-xl text-left">
                Diseño Atractivo y Funcional:
              </span>{" "}
              Nos aseguramos de que cada elemento del sitio no solo sea
              visualmente atractivo, sino también funcional y alineado con las
              metas de tu negocio.
            </li>
            <CheckCircle className="text-stone-500 h-20 w-20" />
            <li className=" text-stone-700 dark:text-stone-300">
              <span className="text-stone-700 dark:text-stone-50 text-xl text-left">
                Optimización para Conversión:
              </span>{" "}
              Implementamos estrategias de diseño que maximizan la conversión de
              visitantes en clientes, adaptando el diseño a tus objetivos de
              negocio.
            </li>{" "}
            <CheckCircle className="text-stone-500 h-20 w-20" />
            <li className=" text-stone-700 dark:text-stone-300">
              <span className="text-stone-700 dark:text-stone-50 text-xl text-left">
                Experiencia de Usuario Excepcional:
              </span>{" "}
              Enfocamos nuestros esfuerzos en crear una experiencia de usuario
              fluida y agradable, facilitando la navegación y el acceso a la
              información.
            </li>
          </ul>
        </div>

        {/* CTA Final */}

        <Button>Solicita una consulta gratuita</Button>
      </div>
    </section>
  );
};

export default DesignWeb;
