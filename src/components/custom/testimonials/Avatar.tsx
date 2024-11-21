
import Image from "next/image";
import { AvatarProps } from "@/types/avatarTypes";
import { Avatar as AvatarUI } from "@/components/ui/avatar";


export function Avatar({ src, name }: AvatarProps) {
  return (
    <AvatarUI className="relative h-[450px] w-[450px] z-10 overflow-hidden rounded-full">
      <Image
        src={src}
        alt={`Avatar of ${name}`}
        width={500}
        height={500}
        style={{ objectFit: "contain" }} // Mantiene proporciones
        className="rounded-full"
      />
    </AvatarUI>
  );
}
