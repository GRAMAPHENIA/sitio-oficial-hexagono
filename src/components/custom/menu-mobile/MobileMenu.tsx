"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { MenuMobileItem } from "@/types/menuMobileItem";
import { menuMobileItems } from "@/data/menuMobileItems";
import { useState } from "react"; 

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Popover onOpenChange={setIsOpen}>
      <PopoverTrigger>
        <Menu className="h-8 w-8 text-hexagon" />
      </PopoverTrigger>

      <PopoverContent
        className="p-4 bg-white/50 dark:bg-card/90 backdrop-blur-3xl mt-4 w-screen rounded-none "
        aria-hidden={!isOpen} // Oculta del lector de pantalla cuando no está abierto
      >
        {menuMobileItems.map((item: MenuMobileItem, index: number) => (
          <Link
            key={index}
            href={item.href}
            className="block py-2"
            tabIndex={isOpen ? 0 : -1} // Impide foco cuando está cerrado
          >
            <p className="py-2 text-center"> {item.label}</p>
          </Link>
        ))}
      </PopoverContent>
    </Popover>
  );
};

export default MobileMenu;
