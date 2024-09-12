import { vollkorn } from "@/styles/fonts";
import { Globe, ShieldCheck, Link2 } from "lucide-react";

const Dominio = () => {
  return (
    <section className="flex flex-col items-center mx-auto text-center pb-12">
      <div className="mx-auto px-6">
        <h1
          className={`${vollkorn.className} text-4xl lg:text-9xl font-extrabold text-slate-800 dark:text-slate-200 mb-6 my-20`}
        >
          Dominio
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
          El dominio es la dirección que las personas ingresan para encontrar tu
          sitio web en Internet. Ofrecemos la gestión y configuración de
          dominios, asegurando que esté vinculado correctamente a tu hosting y
          funcionando de forma óptima.
        </p>
        <section className="mb-20 "></section>
      </div>

      <div className="text-center mb-12 py-12">
        <h2
          className={`${vollkorn.className} text-4xl lg:text-6xl font-extrabold text-slate-800 dark:text-slate-200 mb-12 max-w-5xl`}
        >
          Ventajas de nuestro servicio de Dominio
        </h2>
        <ul className="flex flex-col list-none space-y-4 max-w-2xl items-center justify-center mx-auto py-12 gap-y-10">
          <li className="text-stone-700 dark:text-stone-300 flex flex-col justify-center items-center p-6 shadow-md border border-slate-200 dark:border-slate-700 rounded-lg mx-4 lg:mx-0  bg-white dark:bg-card">
            <ShieldCheck className="text-stone-500 h-20 w-20" />
            <section className="pt-10 pb-20 ">
              <span
                className={`${vollkorn.className} text-2xl lg:text-4xl font-extrabold text-stone-700 dark:text-stone-300 mb-6`}
              >
                Protección de Privacidad
              </span>
              <p>
                Protegemos la información personal relacionada con tu dominio,
                asegurando que esté segura y privada.
              </p>
            </section>
          </li>
          <li className="text-stone-700 dark:text-stone-300 flex flex-col justify-center items-center p-6 shadow-md border border-slate-200 dark:border-slate-700 rounded-lg mx-4 lg:mx-0 bg-white dark:bg-card">
            <Link2 className="text-stone-500 h-20 w-20" />
            <section className="pt-10 pb-20">
              <span
                className={`${vollkorn.className} text-2xl lg:text-4xl font-extrabold text-stone-700 dark:text-stone-300 mb-6`}
              >
                Vinculación con Hosting
              </span>
              <p>
                Garantizamos que tu dominio esté correctamente vinculado al
                hosting para que los usuarios puedan acceder sin problemas.
              </p>
            </section>
          </li>
          <li className="text-stone-700 dark:text-stone-300 flex flex-col justify-center items-center p-6 shadow-md border border-slate-200 dark:border-slate-700 rounded-lg mx-4 lg:mx-0 bg-white dark:bg-card">
            <Globe className="text-stone-500 h-20 w-20" />
            <section className="pt-10 pb-20">
              <span
                className={`${vollkorn.className} text-2xl lg:text-4xl font-extrabold text-stone-700 dark:text-stone-300 mb-6`}
              >
                Fácil Gestión
              </span>
              <p>
                Nos encargamos de la gestión de tu dominio, asegurando que esté
                siempre disponible y actualizado.
              </p>
            </section>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Dominio;
