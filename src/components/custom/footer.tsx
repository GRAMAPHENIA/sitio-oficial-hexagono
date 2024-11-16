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
    <div className="bg-card px-20 py-12 mt-20 border-t border-black/10 dark:border-white/10">
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">Hexágono</h4>
        <p className="text-sm text-muted-foreground">
          Diseño y Desarrollo de Páginas Web
        </p>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-sm">
        {socialLinks.map((link, index) => (
          <div key={link.name} className="flex items-center space-x-4">
            <Link href={link.href} target="_blank" rel="noopener noreferrer">
              {link.name}
            </Link>
            {index < socialLinks.length - 1 && <Separator orientation="vertical" />}
          </div>
        ))}
      </div>
    </div>
  );
}
