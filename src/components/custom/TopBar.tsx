"use client";

import * as React from "react";
import { useState } from "react";

import { HamburgerMenuIcon } from "@radix-ui/react-icons";

import { ModeToggle } from "@/components/custom/ModeToggle";

import Image from "next/image";
import { menuItems } from "@/data/menuItems";
import { ListItem } from "@/components/custom/ListItem";

import { NavigationMenu } from "../ui/navigation-menu";

export default function Topbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="p-4 w-full flex justify-between items-center bg-white dark:bg-card">
      <div className="flex items-center">
        <Image height={40} width={40} src={"/brand/logo.svg"} alt="Logo" />
      </div>

      {/* Ícono de menú para dispositivos móviles */}
      <button
        className="lg:hidden flex items-center"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <HamburgerMenuIcon className="h-6 w-6" />
      </button>

      {/* Menú para dispositivos grandes */}
      <div className="hidden lg:flex flex-1 justify-center list-none ">
        <NavigationMenu>
          {menuItems.map((item, index) => (
            <ListItem key={index} item={item} />
          ))}
        </NavigationMenu>
      </div>

      {/* Menú para dispositivos móviles */}
      {menuOpen && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-white dark:bg-card p-4 list-none">
          <NavigationMenu>
            {menuItems.map((item, index) => (
              <ListItem key={index} item={item} />
            ))}
          </NavigationMenu>
        </div>
      )}

      <ModeToggle />
    </div>
  );
}
