"use client";

import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem,
        Link, NavbarMenuToggle, NavbarMenu, NavbarMenuItem,
        Image} from "@nextui-org/react";
import { headerMenuItems } from "../copys";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar className="bg-primary text-white" onMenuOpenChange={setIsMenuOpen} maxWidth="full">
      <NavbarContent justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link className="text-white" color="foreground" href="/home">
          <Image
            width={70}
            height={70}
            alt="NextUI hero Image"
            src="/logo.svg"
            className="min-w-[50px]"
          />
            English Partner
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        {headerMenuItems.map((item, index) => (
          <NavbarItem key={`${item.text}-${index}`}>
            <Link className="text-white" color="foreground" href={item.url}>
              {item.text}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarMenu>
        {headerMenuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.text}-${index}`}>
            <Link
              className="w-full"
              href={item.url}
              size="lg"
            >
              {item.text}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
