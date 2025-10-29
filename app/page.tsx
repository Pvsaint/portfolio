"use client";

import React, { useState } from "react";
// Lucide icons for contact details and social media (replacing react-icons for stability)
import { Mail, Phone, MapPin } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";

// --- Type Definitions ---
type Page = "home" | "contact";

interface NavigationProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

// --- 1. HOME COMPONENT (Landing Page) ---
const Home: React.FC<NavigationProps> = ({ onNavigate, currentPage }) => {
  // Placeholder image used for visual consistency
  const profileImage =
    "https://placehold.co/800x1200/222222/bbbbbb?text=VICTOR+PETER";
  const accentColor = currentPage === "home" ? "text-white" : "text-[#6a89a7]";

  return (
    <div className="min-h-screen bg-black text-white font-sans antialiased flex flex-col">
      {/* Top Navigation */}
      <header className="flex justify-between items-center p-8 lg:px-20 z-10 rounded-lg lg:borde border-[#6a89a7] mt-6">
        <div
          className="text-2xl font-bold uppercase tracking-widest text-[#6a89a7] cursor-pointer"
          onClick={() => onNavigate("home")}
          aria-label="Creed Portfolio Home"
        >
          Creed
        </div>
        <nav className="hidden md:flex space-x-10 text-lg font-medium">
          <button
            onClick={() => onNavigate("home")}
            className={
              accentColor +
              " hover:text-white transition-colors duration-300 cursor-pointer"
            }
          >
            Home
          </button>
          {/* Mock About/Services/Portfolio/Blog - navigation is passive */}
          {/* <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            About
          </a> */}

          <a
            href="https://github.com/Pvsaint"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">
              Portfolio
            </button>
          </a>

          <button
            onClick={() => onNavigate("contact")}
            className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
          >
            Contact
          </button>
        </nav>
      </header>

      {/* Main Content Area */}
      <main className="grow flex relative">
        <div className="flex flex-col lg:flex-row w-full max-w-7xl mx-auto py-10 px-8 lg:px-0">
          {/* Left Text Content */}
          <div className="lg:w-1/2 flex flex-col justify-center text-center z-10 py-10 lg:py-0">
            <p className="text-lg text-left font-light uppercase tracking-wider text-[#6a89a7] mb-10 ml-14">
              Hello!, my name is
            </p>
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-extrabold text-white leading-none mb-10">
              VICTOR PETER
            </h1>
            <h2 className="text-3xl md:text-4xl font-light text-gray-300 mb-10">
              Software Developer
            </h2>

            {/* Action Buttons */}
            <div className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0 mb-12 items-center justify-center">
              <a
                href="https://github.com/Pvsaint"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto"
              >
                <button className="w-full px-8 py-3 bg-white text-black text-lg font-semibold rounded-lg cursor-pointer hover:bg-[#6a89a7] transition-colors duration-300 shadow-lg">
                  Portfolio
                </button>
              </a>
              <button
                onClick={() => onNavigate("contact")}
                className="w-full md:w-auto px-8 py-3 text-gray-300 text-lg font-semibold rounded-lg border border-[#6a89a7] cursor-pointer hover:text-white hover:border-white transition-colors duration-300"
              >
                Contact me
              </button>
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
              src="./dp.jpeg"
              alt="Monochromatic portrait of Victor Peter"
              className="w-full h-full object-cover object-center transform scale-105 -scale-x-100"
              // style={{
              //   filter: "grayscale(100%) brightness(80%) contrast(120%)",
              // }} // Apply grayscale and enhance contrast
              // onError={(e) => {
              //   const target = e.target as HTMLImageElement;
              //   target.onerror = null;
              //   target.src =
              //     "https://placehold.co/800x1200/444444/AAAAAA?text=Image+Missing";
              //   target.style.filter = "grayscale(100%)";
              // }}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

// --- 2. CONTACT COMPONENT ---
const Contact: React.FC<NavigationProps> = ({ onNavigate, currentPage }) => {
  // Type Definition for Form Data
  interface ContactForm {
    name: string;
    email: string;
    subject: string;
    message: string;
  }

  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [messageStatus, setMessageStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessageStatus("idle");

    // Mock Submission Logic
    console.log("Form Submitted:", formData);

    setTimeout(() => {
      setIsSubmitting(false);
      setMessageStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setMessageStatus("idle"), 5000);
    }, 1500);
  };

  // Custom Input Field Component
  const InputField: React.FC<{
    name: keyof ContactForm;
    type: string;
    placeholder: string;
  }> = ({ name, type, placeholder }) => (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={formData[name]}
      onChange={handleChange}
      required
      className="w-full bg-transparent border-b-2 border-gray-600 text-gray-300 p-3 mb-8 focus:border-white focus:outline-none transition-colors duration-300 placeholder:text-gray-500"
    />
  );

  return (
    <div className="min-h-screen bg-black text-white font-sans antialiased flex flex-col">
      {/* Top Navigation */}
      <header className="flex justify-between items-center mt-6 p-8 lg:px-20 z-10">
        <div
          className="text-2xl font-bold uppercase tracking-widest text-[#6a89a7] cursor-pointer"
          onClick={() => onNavigate("home")}
          aria-label="Creed Portfolio Home"
        >
          Creed
        </div>
        <nav className="hidden md:flex space-x-10 text-lg font-medium">
          <button
            onClick={() => onNavigate("home")}
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            Home
          </button>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            Portfolio
          </a>
          {/* <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            About
          </a> */}
          {/* <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            Services
          </a> */}
          <button
            onClick={() => onNavigate("contact")}
            className="text-white transition-colors duration-300"
          >
            Contact
          </button>
        </nav>
      </header>

      {/* Main Content Area */}
      <main className="grow flex justify-center items-center py-16 px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 w-full max-w-6xl">
          {/* Left: Contact Form */}
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl md:text-4xl font-extrabold mb-10 text-white">
              Send Me a Message
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col">
              <InputField name="name" type="text" placeholder="Your Name" />
              <InputField name="email" type="email" placeholder="Your Email" />
              <InputField name="subject" type="text" placeholder="Subject" />

              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full bg-transparent border-b-2 border-gray-600 text-gray-300 p-3 mb-12 focus:border-white focus:outline-none transition-colors duration-300 placeholder:text-gray-500 resize-none"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-10 py-4 text-black text-lg font-semibold rounded-lg shadow-lg transition-all duration-300 ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-[#6a89a7] hover:bg-gray-200"
                }`}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {/* Submission Status Message Box */}
              {messageStatus === "success" && (
                <div className="mt-6 p-4 bg-green-900/50 text-green-300 rounded-lg text-center font-medium">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}
              {messageStatus === "error" && (
                <div className="mt-6 p-4 bg-red-900/50 text-red-300 rounded-lg text-center font-medium">
                  An error occurred. Please try again later.
                </div>
              )}
            </form>
          </div>

          {/* Right: Contact Info & Socials */}
          <div className="flex flex-col justify-center border border-[#6a89a7] p-10 rounded-xl shadow-xl">
            <p className="text-lg font-light uppercase tracking-wider text-[#6a89a7] mb-2">
              Get in touch
            </p>
            <h1 className="text-3xl lg:text-6xl font-extrabold text-white leading-tight mb-10">
              CONTACT ME
            </h1>

            {/* Contact Details */}
            <div className="space-y-6 mb-12 text-gray-300">
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-white shrink-0" />
                <span>vpeter817@gmail.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-white hrink-0" />
                <span>+234 8038534811</span>
              </div>
              <a
                href="https://wa.me/2347074214017"
                aria-label="Whatsapp"
                className="flex items-center space-x-4 hover:text-white transition-colors duration-300"
              >
                <FaWhatsapp className="w-6 h-6" />
                <span>+234 7074214017</span>
              </a>
              <div className="flex items-center space-x-4">
                <MapPin className="w-6 h-6 text-white shrink-0" />
                <span>Kaduna Nigeria</span>
              </div>
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
          </div>
        </div>
      </main>
    </div>
  );
};

// --- 3. MAIN APPLICATION (Router) ---
const App: React.FC = () => {
  // State to determine which page to display
  const [currentPage, setCurrentPage] = useState<Page>("home");

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    const props: NavigationProps = {
      currentPage,
      onNavigate: handleNavigate,
    };

    switch (currentPage) {
      case "home":
        return <Home {...props} />;
      case "contact":
        return <Contact {...props} />;
      default:
        // Fallback to home page
        return <Home {...props} />;
    }
  };

  return <div className="min-h-screen">{renderPage()}</div>;
};

export default App;
