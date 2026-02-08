"use client";

import React from "react";
import Navbar from "../components/Navbar";
import About from "../components/About";

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans antialiased flex flex-col">
      <Navbar />
      <About />
    </div>
  );
};

export default AboutPage;
