import {
  Avatar as AvatarUI,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

interface AvatarProps {
  src: string;
  name: string;
}

export function Avatar({ src, name }: AvatarProps) {
  return (
    <AvatarUI className="my-4 h-28 w-28 border border-black/20">
      <AvatarImage src={src} alt={`Avatar of ${name}`} />
      <AvatarFallback className="text-2xl">{name.charAt(0)}</AvatarFallback>
    </AvatarUI>
  );
}
