import { vollkorn } from "@/styles/fonts";
import { Lock, Cloud, TrendingUp } from "lucide-react";

const Hosting = () => {
  return (
    <section className="flex flex-col items-center mx-auto text-center pb-12">
      <div className="mx-auto px-6">
        <h1
          className={`${vollkorn.className} text-4xl lg:text-9xl font-extrabold text-slate-800 dark:text-slate-200 mb-6 my-20`}
        >
          Hosting
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
          El hosting es el espacio en un servidor donde se almacena tu sitio web
          para que esté disponible en Internet. Nos encargamos de la
          configuración y gestión del hosting, garantizando un rendimiento
          óptimo, seguridad avanzada y alta disponibilidad para que tu página
          esté siempre accesible.
        </p>

        <div className="text-center mb-12 py-12">
          <h2
            className={`${vollkorn.className} text-4xl lg:text-6xl font-extrabold text-slate-800 dark:text-slate-200 mb-12 max-w-5xl`}
          >
            Ventajas de nuestro servicio de Hosting
          </h2>
          <ul className="flex flex-col list-none space-y-4 max-w-2xl items-center justify-center mx-auto py-12 gap-y-10">
            <li className="text-stone-700 dark:text-stone-300 flex flex-col justify-center items-center p-6 shadow-md border border-slate-200 dark:border-slate-700 rounded-lg mx-4 lg:mx-0 bg-white dark:bg-card">
              <Lock className="text-stone-500 h-20 w-20" />
              <section className="pt-10 pb-20">
                <span
                  className={`${vollkorn.className} text-2xl lg:text-4xl font-extrabold text-stone-700 dark:text-stone-300 mb-6`}
                >
                  Almacenamiento Seguro
                </span>
                <p>
                  Tus datos estarán protegidos con múltiples capas de seguridad
                  para evitar accesos no autorizados. Incluimos cifrado SSL.
                </p>
              </section>
            </li>
            <li className="text-stone-700 dark:text-stone-300 flex flex-col justify-center items-center p-6 shadow-md border border-slate-200 dark:border-slate-700 rounded-lg mx-4 lg:mx-0 bg-white dark:bg-card">
              <Cloud className="text-stone-500 h-20 w-20" />
              <section className="pt-10 pb-20">
                <span
                  className={`${vollkorn.className} text-2xl lg:text-4xl font-extrabold text-stone-700 dark:text-stone-300 mb-6`}
                >
                  Alta Disponibilidad
                </span>
                <p>
                  Aseguramos un 99.9% de tiempo de actividad (uptime),
                  garantizando que tu sitio esté disponible sin interrupciones.
                </p>
              </section>
            </li>
            <li className="text-stone-700 dark:text-stone-300 flex flex-col justify-center items-center p-6 shadow-md border border-slate-200 dark:border-slate-700 rounded-lg mx-4 lg:mx-0 bg-white dark:bg-card">
              <TrendingUp className="text-stone-500 h-20 w-20" />
              <section className="pt-10 pb-20">
                <span
                  className={`${vollkorn.className} text-2xl lg:text-4xl font-extrabold text-stone-700 dark:text-stone-300 mb-6`}
                >
                  Escalabilidad
                </span>
                <p>
                  Nuestro servicio se adapta a medida que tu negocio crece,
                  asegurando más recursos sin perder rendimiento.
                </p>
              </section>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hosting;
