"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import ThemeToggle from "../ThemeToggle";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/navbar";

const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar
      position="static"
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="flex justify-between gap-12 items-center pb-4 my-12 "
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="menu-toggle_button"
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden" justify="center">
        <NavbarBrand className="logo text-2xl font-bold">
          <h1 className="uppercase ">
            <Link href="/" className={pathname === "/" ? "active" : ""}>
              sandrine alcazar
            </Link>
          </h1>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="sm:hidden" justify="end">
        <ThemeToggle />
      </NavbarContent>

      <NavbarContent className="hidden sm:flex  text-lg font-medium  ">
        <NavbarBrand className="logo text-2xl font-bold">
          <h1 className="uppercase ">
            <Link href="/" className={pathname === "/" ? "active" : ""}>
              sandrine alcazar
            </Link>
          </h1>
        </NavbarBrand>

        <NavbarContent className="flex flex-grow" justify="end">
          <NavbarContent className="flex gap-12">
            <NavbarItem>
              <Link
                href="/project"
                className={pathname === "/project" ? "active" : ""}
              >
                Projets
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link
                href="/about"
                className={pathname === "/about" ? "active" : ""}
              >
                CV
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link
                href="/contact"
                className={pathname === "/contact" ? "active" : ""}
              >
                Contact
              </Link>
            </NavbarItem>
          </NavbarContent>

          <NavbarContent className="" justify="end">
            <ThemeToggle />
          </NavbarContent>
        </NavbarContent>
      </NavbarContent>

      <NavbarMenu className="mt-12 px-8">
        <NavbarItem>
          <Link
            href="/project"
            className={pathname === "/project" ? "active" : ""}
          >
            Projets
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/about" className={pathname === "/about" ? "active" : ""}>
            CV
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="/contact"
            className={pathname === "/contact" ? "active" : ""}
          >
            Contact
          </Link>
        </NavbarItem>
      </NavbarMenu>
    </Navbar>
  );
};

export default Header;
