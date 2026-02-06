"use client";

import React, { useState } from "react";
import Button from "./Button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";

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
    <header className="w-full max-w-7xl mx-auto mt-4 flex justify-between items-center py-3 px-6 lg:px-4 z-50 relative rounded-l-full rounded-b-full lg:bord border-[#6a89a7]">
      <Link
        href="/"
        className="text-2xl font-bold uppercase tracking-widest text-[#6a89a7] rounded-l-full rounded-b-full bord border-[#6a89a7] px-2 cursor-pointer"
        aria-label="Creed Portfolio Home"
        onClick={closeMenu}
      >
        Creed
      </Link>

      {/* Desktop Navigation */}
      <nav className="border border-[#6a89a7] rounded-l-[30px] rounded-b-[30px] p-4 hidden md:flex space-x-10 text-lg font-medium">
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
        className="md:hidden text-[#6a89a7] hover:text-white transition-colors focus:outline-none"
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        {isMenuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
      </button>

      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-b border-[#6a89a7] p-8 md:hidden flex flex-col items-center space-y-6 shadow-2xl z-40 rounded-b-3xl">
          <Button
            variant="nav"
            href="/"
            isActive={pathname === "/"}
            onClick={closeMenu}
            className="w-full text-center py-3"
          >
            Home
          </Button>

          <Button
            variant="nav"
            href="/portfolio"
            isActive={pathname === "/portfolio"}
            onClick={closeMenu}
            className="w-full text-center py-3"
          >
            Portfolio
          </Button>

          <Button
            variant="nav"
            href="/contact"
            isActive={pathname === "/contact"}
            onClick={closeMenu}
            className="w-full text-center py-3"
          >
            Contact
          </Button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
