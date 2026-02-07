"use client";

import React, { useState } from "react";
import Button from "./Button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 w-full max-w-7xl mx-auto mt-4 px-6 lg:px-4 z-50 flex justify-between items-center py-3 rounded-l-full rounded-b-full lg:bord border-[#1d323e] bg-black/50 backdrop-blur-md">
      <Link
        href="/"
        className="text-2xl font-bold uppercase tracking-widest text-[#6a89a7] cursor-pointer"
        aria-label="Creed Portfolio Home"
        onClick={closeMenu}
      >
        <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center border border-[#1d323e] border-l-6 border-b-6 rounded-full rounded-tr-none">
          {/* <Image
            src="/logo3.png"
            alt="Creed Portfolio Logo"
            height={70}
            className="rounded-full"
          /> */}
          <h3 className="text-2xl font-bold uppercase tracking-widest text-[#1d323e] cursor-pointer">
            VP
          </h3>
        </div>
        {/* Creed */}
      </Link>

      {/* Desktop Navigation */}
      <nav className="border border-[#1d323e] rounded-full rounded-tr-none p-4 hidden md:flex space-x-10 text-lg font-medium">
        <Button variant="nav" href="/" isActive={pathname === "/"}>
          Home
        </Button>

        <Button
          variant="nav"
          href="/portfolio"
          isActive={pathname === "/portfolio"}
        >
          Portfolio
        </Button>

        <Button
          variant="nav"
          href="/contact"
          isActive={pathname === "/contact"}
        >
          Contact
        </Button>
      </nav>

      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden text-[#1d323e] hover:text-white transition-colors focus:outline-none"
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        {isMenuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
      </button>

      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <div className="absolute top-full left-8 right-8 bg-black/95 backdrop-blur-md border border-[#1d323e] border-b-4 px-4 py-8 md:hidden flex flex-col items-center space-y-6 shadow-2xl z-40 rounded-b-3xl rounded-l-3xl">
          <Button
            variant="nav"
            href="/"
            isActive={pathname === "/"}
            onClick={closeMenu}
            className="w-full text-center px-6 py-3"
          >
            Home
          </Button>

          <Button
            variant="nav"
            href="/portfolio"
            isActive={pathname === "/portfolio"}
            onClick={closeMenu}
            className="w-full text-center px-6 py-3"
          >
            Portfolio
          </Button>

          <Button
            variant="nav"
            href="/contact"
            isActive={pathname === "/contact"}
            onClick={closeMenu}
            className="w-full text-center px-6 py-3"
          >
            Contact
          </Button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
