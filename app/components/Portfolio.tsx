import React from "react";
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
  return (
    <div className="min-h-screen bg-black text-white font-sans antialiased flex flex-col">
      <Navbar />

      <main className="grow py-16 px-4 md:px-8 max-w-7xl mx-auto w-full">
        <div className="flex flex-col mb-10 px-4">
          <p className="text-lg font-light uppercase tracking-wider text-[#6a89a7] mb-4">
            My Work
          </p>
          <h1 className="text-2xl md:text-6xl font-extrabold text-[#6a89a7] leading-tight">
            FEATURED PROJECTS
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 px-4">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Portfolio;
