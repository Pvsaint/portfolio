"use client"; // Client component for form handling

import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";

// Define the structure for form data
interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// --- Main Application Component ---
const App: React.FC = () => {
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
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessageStatus("idle");

    // --- Mock Submission Logic ---
    console.log("Form Submitted:", formData);

    // Simulate an API call delay
    setTimeout(() => {
      setIsSubmitting(false);

      // Simulate success for this example
      setMessageStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Reset status after a few seconds
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
      {/* --- Top Navigation (Re-using portfolio header style) --- */}
      <header className="flex justify-between items-center p-8 lg:px-20 z-10">
        <div
          className="text-2xl font-bold uppercase tracking-widest text-[#6a89a7]"
          aria-label="Velo Portfolio Home"
        >
          creed
        </div>
        <nav className="hidden md:flex space-x-10 text-lg font-medium">
          <a
            href="#"
            className="text-[#6a89a7] hover:text-white transition-colors duration-300"
          >
            Home
          </a>
          <a
            href="#"
            className="text-[#6a89a7] hover:text-white transition-colors duration-300"
          >
            About
          </a>
          <a
            href="#"
            className="text-[#6a89a7] hover:text-white transition-colors duration-300"
          >
            Contact
          </a>
        </nav>
      </header>

      {/* --- Main Content Area --- */}
      <main className="grow flex justify-center items-center py-16 px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 w-full max-w-6xl">
          {/* === LEFT: Contact Form === */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl font-extrabold mb-10 text-white">
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
                className={`px-10 py-4 text-black text-lg font-semibold rounded-full shadow-lg transition-all duration-300 ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-white hover:bg-gray-200"
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

          {/* === RIGHT: Contact Info & Socials === */}
          <div className="flex flex-col justify-center border border-[#6a89a7] p-10 rounded-lg shadow-xl">
            <p className="text-lg font-light uppercase tracking-wider text-gray-400 mb-2">
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
              <div className="flex items-center space-x-4">
                <MapPin className="w-6 h-6 text-white shrink-0" />
                <span>Kaduna Nigeria</span>
              </div>
            </div>

            {/* Social Media Icons (re-used from landing page) */}
            <div className="flex space-x-6 text-gray-400 justify-center">
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

export default App;
