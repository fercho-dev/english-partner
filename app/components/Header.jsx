'use client'

import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem,
        Link, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem,
        Image} from "@nextui-org/react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Chat",
    "Short Story",
    "Vocabulary",
    "Take a test",
  ];

  return (
    <Navbar className="bg-primary text-white" onMenuOpenChange={setIsMenuOpen} maxWidth="full">
      <NavbarContent justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link className="text-white" color="foreground" href="#">
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
        <NavbarItem>
          <Link className="text-white" color="foreground" href="#">
            Chat
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-white" href="#" aria-current="page">
            Short Story
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-white" color="foreground" href="#">
            Vocabulary
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-white" color="foreground" href="#">
            Take a test
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
