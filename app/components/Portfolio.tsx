import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "./Navbar";
import ProjectCard, { Project } from "./ProjectCard";

const projects: Project[] = [
  {
    id: 1,
    title: "Runescard",
    description:
      "Create personalized Base gift cards with custom amounts and redeem codes. Perfect for giveaways, birthday gifts, community airdrops, and gamified challenges.",
    image: "/Runescard.jpeg",
    tags: ["Next.js", "TypeScript", "Tailwind", "Solidity"],
    githubUrl: "https://github.com/Pvsaint",
    liveUrl: "https://runescard.com",
  },
  {
    id: 2,
    title: "Paystrata",
    description:
      "Experience seamless utility payments on Starknet. Buy airtime, data, pay for cable TV and electricity, book hotels and flights, all with lightning fast blockchain transactions and minimal fees.",
    image: "/paystrata.png",
    tags: ["React", "Redux", "Node.js", "Cairo"],
    githubUrl: "https://github.com/Pvsaint",
    liveUrl: "https://www.usepaystrata.com",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "Modern, responsive portfolio website featuring smooth animations and a dark mode aesthetic.",
    image: "portfolio.png",
    tags: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/Pvsaint",
    liveUrl: "https://victorpeter.netlify.app",
  },
  {
    id: 4,
    title: "Budgetchain",
    description:
      "Revolutionizing how you manage, allocate, and optimize financial resources with real-time insights and AI-driven automation.",
    image: "budgetchain.png",
    tags: ["Next.js", "TypeScript", "Tailwind", "Cairo"],
    githubUrl: "https://github.com/Pvsaint",
    liveUrl: "https://budget-chain.vercel.app",
  },
];

const Portfolio: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 4000, stopOnInteraction: false })],
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="min-h-screen bg-black text-white font-sans antialiased flex flex-col">
      <Navbar />

      <main className="grow py-16 w-full flex flex-col">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8 flex flex-col mb-10">
          <p className="text-center lg:text-left text-sm md:text-lg font-light uppercase tracking-wider text-[#1d323e] mb-4">
            My Work
          </p>
          <div className="flex justify-between items-end">
            <h1 className="text-center lg:text-left text-2xl md:text-6xl font-extrabold text-[#6a89a7] leading-tight">
              FEATURED PROJECTS
            </h1>

            {/* Navigation Buttons (Desktop) */}
            <div className="hidden md:flex space-x-4">
              <button
                onClick={scrollPrev}
                className="w-12 h-12 rounded-full border border-[#1d323e] flex items-center justify-center text-[#6a89a7] hover:bg-[#1d323e] hover:text-white transition-all duration-300 group"
                aria-label="Previous project"
              >
                <ChevronLeft
                  size={24}
                  className="group-hover:-translate-x-1 transition-transform"
                />
              </button>
              <button
                onClick={scrollNext}
                className="w-12 h-12 rounded-full border border-[#1d323e] flex items-center justify-center text-[#6a89a7] hover:bg-[#1d323e] hover:text-white transition-all duration-300 group"
                aria-label="Next project"
              >
                <ChevronRight
                  size={24}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Viewport */}
        <div className="overflow-hidden w-full" ref={emblaRef}>
          <div className="flex">
            {projects.map((project) => (
              <div
                key={project.id}
                className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 px-4 py-6"
              >
                <div className="h-full">
                  <ProjectCard project={project} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons (Mobile - Bottom) */}
        <div className="flex md:hidden justify-center space-x-6 mt-6">
          <button
            onClick={scrollPrev}
            className="w-12 h-12 rounded-full border border-[#1d323e] flex items-center justify-center text-[#6a89a7] hover:bg-[#1d323e] hover:text-white transition-all duration-300"
            aria-label="Previous project"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={scrollNext}
            className="w-12 h-12 rounded-full border border-[#1d323e] flex items-center justify-center text-[#6a89a7] hover:bg-[#1d323e] hover:text-white transition-all duration-300"
            aria-label="Next project"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </main>
    </div>
  );
};

export default Portfolio;
