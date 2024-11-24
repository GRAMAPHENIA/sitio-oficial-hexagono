import { vollkorn } from "@/styles/fonts";

export default function Cta() {
  return (
    <section className="py-40 text-hexagon text-center w-full lg:rounded-b-xl mx-4 lg:mx-0 max-w-7xl">
      <h2 className={`${vollkorn.className} text-4xl lg:text-7xl font-black text-slate-600 dark:text-slate-300 px-4`}>¿Listo para comenzar?</h2>
      <p className="my-4 text-xl text-balance">
        Contactanos hoy mismo para obtener una cotización y comenzar con tu
        nuevo sitio web.
      </p>
    </section>
  );
}
