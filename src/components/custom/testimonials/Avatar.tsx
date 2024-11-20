import Image from "next/image";
import { AvatarProps } from "@/types/avatarTypes";
import { Avatar as AvatarUI } from "@/components/ui/avatar";

export function Avatar({ src, name }: AvatarProps) {
  // Tamaño aumentado en un 50% (112 * 1.5 = 168)
  const size = 112 * 1.5;

  return (
    <AvatarUI className="h-42 w-42 z-10 -translate-y-20 -translate-x-4"> {/* Ajustar el contenedor */}
      <Image
        src={src}
        alt={`Avatar of ${name}`}
        width={size}
        height={size}
        className="rounded-full z-10"
      />
    </AvatarUI>
  );
}
