import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/hexagono.xyz",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/hexagono.xyz",
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/5492944398098",
  },
];

export function Footer() {
  return (
    <div className="bg-card px-6 py-12 mt-40 border-t border-black/10 dark:border-white/10">
      {/* Título y descripción */}
      <div className="space-y-1 text-center lg:text-left">
        <h4 className="text-sm font-medium leading-none">Hexágono</h4>
        <p className="text-sm text-muted-foreground">
          Diseño y Desarrollo de Páginas Web
        </p>
      </div>

      {/* Separador */}
      <Separator className="my-4" />

      {/* Links sociales */}
      <div className="flex flex-col items-center lg:flex-row lg:justify-between lg:items-center text-sm space-y-4 lg:space-y-0">
        <div className="flex space-x-4">
          {socialLinks.map((link, index) => (
            <div key={link.name} className="flex items-center space-x-4">
              <Link
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {link.name}
              </Link>
              {index < socialLinks.length - 1 && (
                <Separator orientation="vertical" className="mx-2 hidden lg:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
