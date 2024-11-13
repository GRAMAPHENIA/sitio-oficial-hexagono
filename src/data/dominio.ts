export interface Advantage {
  title: string;
  content: string;
  imageSrc: string;
  imageAlt: string;
}

export const advantages: Advantage[] = [
  {
    title: "Protección",
    content:
      "Protegemos la información personal relacionada con tu dominio, asegurando que esté segura y privada.",
    imageSrc: "/images/dominio/proteccion-privacidad.png",
    imageAlt: "Imagen de protección de privacidad",
  },
  {
    title: "Vinculación",
    content:
      "Garantizamos que tu dominio esté correctamente vinculado al hosting para que los usuarios puedan acceder sin problemas.",
    imageSrc: "/images/dominio/vinculacion-hosting.png",
    imageAlt: "Imagen de vinculación con hosting",
  },
  {
    title: "Fácil Gestión",
    content:
      "Nos encargamos de la gestión de tu dominio, asegurando que esté siempre disponible y actualizado.",
    imageSrc: "/images/dominio/facil-gestion.png",
    imageAlt: "Imagen de fácil gestión",
  },
];
