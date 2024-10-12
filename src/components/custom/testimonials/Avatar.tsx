import Image from "next/image";
import { AvatarProps } from "@/types/avatarTypes";
import { Avatar as AvatarUI } from "@/components/ui/avatar";

export function Avatar({ src, name }: AvatarProps) {
  return (
    <AvatarUI className="my-4 h-28 w-28 border border-black/20 ">
      {/* Usamos el componente Image de Next.js */}
      <Image
        src={src}
        alt={`Avatar of ${name}`}
        width={112}
        height={112}
        className="rounded-full"
      />
    </AvatarUI>
  );
}
