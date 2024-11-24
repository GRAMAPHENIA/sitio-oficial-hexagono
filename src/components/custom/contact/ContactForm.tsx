"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useContactForm } from "@/hooks/useContactForm";
import { vollkorn } from "@/styles/fonts";

export default function ContactForm() {
  const { register, handleReactHookSubmit, errors, onSubmit, submitting } =
    useContactForm();

  return (
    <section
      id="contact-form"
      className="scroll-m-10 m-auto text-center lg:rounded-xl border border-input px-4 w-full text-sm bg-white dark:bg-hexagon shadow-box py-16 max-w-4xl"
    >
      {/* Título de la sección */}
      <h2
        className={`${vollkorn.className}  text-4xl lg:text-7xl font-black text-slate-600 dark:text-slate-700 px-4`}
      >
        Contacto
      </h2>
      <p className="text-xl text-gray-500 dark:text-slate-600 mb-16">
        Ponete en contacto con nosotros.
      </p>
      <form
        onSubmit={handleReactHookSubmit(onSubmit)}
        className="mt-8 max-w-2xl mx-auto"
      >
        <div className="mb-4">
          <Input {...register("name")} placeholder="Nombre" className="text-slate-600 dark:border-slate-400 dark:bg-hexagon-foreground" />
          {errors.name && (
            <p className="text-red-500 mt-2">{errors.name.message}</p>
          )}
        </div>
        <div className="mb-4">
          <Input
            {...register("email")}
            placeholder="Correo Electrónico"
            type="email"
            className="text-slate-600 dark:border-slate-400 dark:bg-hexagon-foreground"
          />
          {errors.email && (
            <p className="text-red-500 mt-2">{errors.email.message}</p>
          )}
        </div>
        <div className="mb-4">
          <Textarea {...register("message")} placeholder="Mensaje" className="text-slate-600 dark:border-slate-400 dark:bg-hexagon-foreground" />
          {errors.message && (
            <p className="text-red-500 mt-2">{errors.message.message}</p>
          )}
        </div>
        <Button type="submit" disabled={submitting} className="dark:bg-slate-800 hover:bg-slate-700">
          {submitting ? "Enviando..." : "Enviar"}
        </Button>
      </form>
    </section>
  );
}
