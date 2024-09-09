import { Button } from "@/components/ui/button";

export default function Cta() {
  return (
    <section className="py-12 text-white text-center w-full lg:rounded-b-xl bg-custom mx-4 lg:mx-0">
      <h2 className="text-7xl font-bold">¿Listo para comenzar?</h2>
      <p className="mt-4 text-xl text-balance">
        Contáctanos hoy mismo para obtener una cotización y comenzar con tu
        nuevo sitio web.
      </p>
      <Button className="mt-6" variant="secondary">
        Solicitar una Cotización
      </Button>
    </section>
  );
}
