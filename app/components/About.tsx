import React from "react";
import Button from "./Button";

const skills = [
  "JavaScript (ES6+)",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind CSS",
  "HTML5 & CSS3",
  "Git & GitHub",
  "Solidity",
  "Cairo",
  "Rust",
];

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans antialiased flex flex-col pt-16">
      <main className="grow py-16 px-4 md:px-8 max-w-7xl mx-auto w-full flex flex-col items-center">
        <div className="w-full max-w-4xl">
          <p className="text-sm md:text-lg font-light uppercase tracking-wider text-[#1d323e] mb-4 text-center md:text-left">
            Who I Am
          </p>
          <h1 className="text-3xl md:text-6xl font-extrabold text-[#6a89a7] leading-tight mb-12 text-center md:text-left">
            ABOUT ME
          </h1>

          <div className="flex flex-col md:flex-row gap-12">
            {/* Text Content */}
            <div className="md:w-2/3 space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                Hello! I'm{" "}
                <span className="text-white font-semibold">Victor Peter</span>,
                a passionate Software Developer based in Kaduna, Nigeria. I
                specialize in building exceptional digital experiences that are
                fast, accessible, visually appealing, and responsive.
              </p>
              <p>
                As the co-founder of{" "}
                <span className="text-[#d3ff0e] font-semibold">Runescard</span> and{" "}
                <span className="text-[#01ff86] font-semibold">Paystrata</span>, I
                have hands-on experience in building and scaling products from
                the ground up. I love transforming complex problems into simple,
                beautiful, and intuitive interface designs. My journey in tech
                has led me to work with a variety of tools and frameworks,
                always striving to write clean and efficient code.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or sharing my knowledge
                with the developer community. I'm always looking for new
                challenges and opportunities to grow.
              </p>

              <div className="pt-6">
                <Button variant="primary" href="/contact">
                  Let's Work Together
                </Button>
              </div>
            </div>

            {/* Skills Column */}
            <div className="md:w-1/3">
              <h3 className="text-2xl font-bold text-white mb-6 border-b-4 border-[#1d323e] pb-2 inline-block">
                Skills & Tech
              </h3>
              <ul className="space-y-3">
                {skills.map((skill, index) => (
                  <li
                    key={index}
                    className="flex items-center space-x-2 text-gray-300"
                  >
                    <span className="w-2 h-2 bg-[#6a89a7] rounded-full"></span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
