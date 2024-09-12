import { Separator } from "@/components/ui/separator";
import Link from "next/link";

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
        <Link
          href="https://www.instagram.com/hexagono.xyz"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </Link>
        <Separator orientation="vertical" />
        <Link
          href="https://www.facebook.com/hexagono.xyz"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </Link>
        <Separator orientation="vertical" />
        <Link
          href="https://wa.me/5492944398098"
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp
        </Link>
      </div>
    </div>
  );
}
