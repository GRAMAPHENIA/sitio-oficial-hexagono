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
    imageSrc: "/icons/services/dominio/dominio.webp",
    imageAlt: "privacidad",
  },
  {
    title: "Vinculación",
    content:
      "Garantizamos que tu dominio esté correctamente vinculado al hosting para que los usuarios puedan acceder sin problemas.",
    imageSrc: "/icons/services/dominio/vinculacion.webp",
    imageAlt: "hosting",
  },
  {
    title: "Fácil Gestión",
    content:
      "Nos encargamos de la gestión de tu dominio, asegurando que esté siempre disponible y actualizado.",
    imageSrc: "/icons/services/dominio/gestion.webp",
    imageAlt: "gestión",
  },
];
