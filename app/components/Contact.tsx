import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
import { useForm, UseFormRegister } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Navbar from "./Navbar";
import Button from "./Button";

// Zod Schema Definition
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

interface InputFieldProps {
  name: keyof ContactFormData;
  type: string;
  placeholder: string;
  register: UseFormRegister<ContactFormData>;
  error?: string;
}

// Custom Input Field Component
const InputField: React.FC<InputFieldProps> = ({
  name,
  type,
  placeholder,
  register,
  error,
}) => (
  <div className="mb-8">
    <input
      type={type}
      placeholder={placeholder}
      {...register(name)}
      className={`w-full bg-transparent border-b-2 ${
        error ? "border-red-500" : "border-[#1d323e]"
      } text-gray-300 p-3 focus:outline-none transition-colors duration-300 placeholder:text-gray-500 ${
        error ? "focus:border-red-500" : "focus:border-white"
      }`}
    />
    {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
  </div>
);

const Contact: React.FC = () => {
  const [messageStatus, setMessageStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setMessageStatus("idle");

    // Mock Submission Logic
    console.log("Form Submitted:", data);

    await new Promise((resolve) => setTimeout(resolve, 1500));
    setMessageStatus("success");
    reset();
    setTimeout(() => setMessageStatus("idle"), 5000);
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans antialiased flex flex-col">
      {/* Top Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main className="grow flex justify-center items-center py-16 px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 w-full max-w-6xl p-4">
          {/* Left: Contact Form */}
          <div className="flex flex-col justify-center">
            <p className="text-lg font-light uppercase tracking-wider text-[#1d323e] mb-4">
              Hire me
            </p>
            <h2 className="text-2xl md:text-4xl font-extrabold mb-10 text-[#6a89a7]">
              Send Me a Message
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
              <InputField
                name="name"
                type="text"
                placeholder="Your Name"
                register={register}
                error={errors.name?.message}
              />
              <InputField
                name="email"
                type="email"
                placeholder="Your Email"
                register={register}
                error={errors.email?.message}
              />
              <InputField
                name="subject"
                type="text"
                placeholder="Subject"
                register={register}
                error={errors.subject?.message}
              />

              <div className="mb-12">
                <textarea
                  placeholder="Your Message"
                  {...register("message")}
                  rows={5}
                  className={`w-full bg-transparent border-b-2 ${
                    errors.message ? "border-red-500" : "border-[#1d323e]"
                  } text-gray-300 p-3 focus:outline-none transition-colors duration-300 placeholder:text-gray-500 resize-none ${
                    errors.message
                      ? "focus:border-red-500"
                      : "focus:border-white"
                  }`}
                />
                {errors.message && (
                  <span className="text-red-500 text-sm mt-1">
                    {errors.message.message}
                  </span>
                )}
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className={`${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-transparent"
                }`}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>

              {/* Submission Status Message Box */}
              {messageStatus === "success" && (
                <div className="mt-6 p-4 bg-green-900/50 text-green-300 rounded-full rounded-tr-none text-center font-medium">
                  Message sent successfully! I&apos;ll get back to you soon.
                </div>
              )}
              {messageStatus === "error" && (
                <div className="mt-6 p-4 bg-red-900/50 text-red-300 rounded-full rounded-tr-none text-center font-medium">
                  An error occurred. Please try again later.
                </div>
              )}
            </form>
          </div>

          {/* Right: Contact Info & Socials */}
          <div className="flex flex-col justify-center border border-[#1d323e] border-b-6 border-l-6 p-10 rounded-[40px] rounded-tr-none shadow-xl">
            <p className="text-lg font-light uppercase tracking-wider text-[#1d323e] mb-2">
              Get in touch
            </p>
            <h1 className="text-3xl lg:text-6xl font-extrabold text-[#6a89a7] leading-tight mb-10">
              CONTACT ME
            </h1>

            {/* Contact Details */}
            <div className="space-y-6 mb-12 text-[#6a89a7]">
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 shrink-0" />
                <span>vpeter817@gmail.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 shrink-0" />
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
                <MapPin className="w-6 h-6 shrink-0" />
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

export default Contact;
