"use client";

import React from "react";
// Lucide icons for contact details and social media (replacing react-icons for stability)
// import { Mail, Phone, MapPin } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
import Navbar from "./components/Navbar";
import Button from "./components/Button";

// --- 1. HOME COMPONENTS (Landing Page) ---
const Home: React.FC = () => {
  // Placeholder image used for visual consistency
  const profileImage =
    "https://placehold.co/800x1200/222222/bbbbbb?text=VICTOR+PETER";

  return (
    <div className="min-h-screen bg-black text-white font-sans antialiased flex flex-col">
      {/* Top Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main className="grow flex relative">
        <div className="flex flex-col lg:flex-row w-full max-w-7xl mx-auto py-10 px-4 md:px-8 lg:px-0">
          {/* Left Text Content */}
          <div className="lg:w-1/2 flex flex-col justify-center text-center z-10 py-10 lg:py-0">
            <p className="text-sm md:text-lg text-left font-light uppercase tracking-wider text-[#1d323e] mb-10 ml-14">
              Hello!, my name is
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-[#6a89a7] leading-none mb-10">
              VICTOR PETER
            </h1>
            <h2 className="text-2xl md:text-4xl font-light text-[#1d323e] mb-10">
              Software Developer
            </h2>

            {/* Action Buttons */}
            <div className="py-4 flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0 mb-12 items-center justify-center">
              <Button variant="primary" href="/portfolio">
                Portfolio
              </Button>

              <Button variant="primary" href="/contact">
                Contact me
              </Button>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-6 text-[#6a89a7] justify-center">
              <a
                href="https://x.com/pvsaint"
                aria-label="Instagram"
                className="hover:text-white transition-colors duration-300"
              >
                <RiTwitterXFill className="w-7 h-7" />
              </a>
              <a
                href="https://www.linkedin.com/in/victor-peter-648618209?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                aria-label="LinkedIn"
                className="hover:text-white transition-colors duration-300"
              >
                <FiLinkedin className="w-7 h-7" />
              </a>
              <a
                href="https://wa.me/2347074214017"
                aria-label="Whatsapp"
                className="hover:text-white transition-colors duration-300"
              >
                <FaWhatsapp className="w-7 h-7" />
              </a>
              <a
                href="https://github.com/Pvsaint"
                aria-label="GitHub"
                className="hover:text-white transition-colors duration-300"
              >
                <FaGithub className="w-7 h-7" />
              </a>
            </div>
            <div className="h-50"></div>
          </div>

          {/* Right Image Section */}
          <div className="hidden lg:block lg:w-1/2 absolute right-0 top-0 bottom-0 overflow-hidden">
            <img
              src="/me.png"
              alt="Monochromatic portrait of Victor Peter"
              className="w-full h-full object-cover object-center transform scale-105 -scale-x-100"
              style={{
                filter: "grayscale(100%) brightness(80%) contrast(120%)",
              }} // Apply grayscale and enhance contrast
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src =
                  "https://placehold.co/800x1200/444444/AAAAAA?text=Image+Missing";
                target.style.filter = "grayscale(100%)";
              }}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
