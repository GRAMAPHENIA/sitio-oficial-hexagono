

import { vollkorn } from "@/styles/fonts";
import { Server, Globe } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ServicesSection = () => {
  return (
    <section className="flex flex-col items-center mx-auto text-center pb-12">
      <div className="mx-auto px-6">
        {/* Título de Servicios */}
        <h1
          className={`${vollkorn.className} text-4xl lg:text-9xl font-extrabold text-slate-800 dark:text-slate-200 mb-6 my-20`}
        >
          Servicios
        </h1>

        {/* Card de Hosting */}
        <section className="max-w-3xl mx-auto mb-12 py-12" id="hosting">
          <Card className="p-6 shadow-md border border-slate-200 dark:border-slate-700 rounded-lg">
            <CardHeader className="flex flex-col items-center">
              <Server className="text-stone-500 h-20 w-20 mb-6" />
              <CardTitle
                className={`${vollkorn.className} text-4xl lg:text-6xl font-extrabold text-slate-800 dark:text-slate-200 mb-6`}
              >
                Hosting
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              <p>
                El hosting es donde se almacena tu sitio web para que esté
                disponible en Internet. Te ofrecemos un servicio confiable,
                rápido, con soporte técnico y optimización para garantizar el
                mejor rendimiento. Además, incluye seguridad, copias de
                seguridad y actualizaciones automáticas para asegurar el
                funcionamiento continuo de tu página.
              </p>
              <ul className="list-none space-y-6 my-6">
                <li className="flex flex-col gap-y-2">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">
                    Almacenamiento Seguro
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300">
                    Tus datos estarán protegidos con múltiples capas de
                    seguridad para evitar accesos no autorizados. Incluimos
                    cifrado SSL.
                  </p>
                </li>
                <li className="flex flex-col gap-y-2">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">
                    Alta Disponibilidad
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300">
                    Aseguramos un 99.9% de tiempo de actividad (uptime),
                    garantizando que tu sitio esté disponible sin
                    interrupciones.
                  </p>
                </li>
                <li className="flex flex-col gap-y-2">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">
                    Escalabilidad
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300">
                    Nuestro servicio se adapta a medida que tu negocio crece,
                    asegurando más recursos sin perder rendimiento.
                  </p>
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Card de Dominio */}
        <section className="max-w-3xl mx-auto mb-12 py-12" id="dominio">
          <Card className="p-6 shadow-md border border-slate-200 dark:border-slate-700 rounded-lg">
            <CardHeader className="flex flex-col items-center">
              <Globe className="text-stone-500 h-20 w-20 mb-6" />
              <CardTitle
                className={`${vollkorn.className} text-4xl lg:text-6xl font-extrabold text-slate-800 dark:text-slate-200 mb-6`}
              >
                Dominio
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              <p>
                El dominio es la dirección que las personas ingresan para
                encontrar tu sitio web en Internet. Ofrecemos la gestión y
                configuración de dominios, asegurando que esté vinculado
                correctamente a tu hosting y funcionando de forma óptima.
              </p>
              <ul className="list-none space-y-6 my-6">
                <li className="flex flex-col gap-y-2">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">
                    Fácil Gestión
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300">
                    Nos encargamos de la gestión de tu dominio, asegurando que
                    esté siempre disponible y actualizado.
                  </p>
                </li>
                <li className="flex flex-col gap-y-2">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">
                    Protección de Privacidad
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300">
                    Protegemos la información personal relacionada con tu
                    dominio, asegurando que esté segura y privada.
                  </p>
                </li>
                <li className="flex flex-col gap-y-2">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">
                    Vinculación con Hosting
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300">
                    Garantizamos que tu dominio esté correctamente vinculado al
                    hosting para que los usuarios puedan acceder sin problemas.
                  </p>
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>
      </div>
    </section>
  );
};

export default ServicesSection;
