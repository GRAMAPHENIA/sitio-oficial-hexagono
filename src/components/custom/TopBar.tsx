"use client";

import * as React from "react";
import { useState } from "react";

import { ModeToggle } from "@/components/custom/ModeToggle";

import Image from "next/image";
import { menuItems } from "@/data/menuItems";
import { ListItem } from "@/components/custom/ListItem";

import { NavigationMenu } from "../ui/navigation-menu";
import MobileMenu from "./menu-mobile/MobileMenu";
import Link from "next/link";

export default function Topbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="p-4 w-full flex justify-between items-center bg-white dark:bg-card z-50">
      <Link href={"/"} className="flex items-center">
        <Image
          width={300}
          height={300}
          style={{ width: "30px", height: "auto" }} // Control del tamaño por CSS
          src={"/brand/logo-hexagono.webp"}
          alt="Logo"
        />
      </Link>

      {/* Menú para dispositivos grandes */}
      <div className="hidden lg:flex flex-1 justify-center list-none text-gray-500 dark:text-gray-300">
        <NavigationMenu>
          {menuItems.map((item, index) => (
            <ListItem key={index} item={item} />
          ))}
        </NavigationMenu>
      </div>

      <div
        className="lg:hidden flex items-center"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <MobileMenu />
      </div>

      <ModeToggle />
    </div>
  );
}
