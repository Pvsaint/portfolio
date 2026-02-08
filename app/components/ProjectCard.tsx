import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group border border-[#1d323e] bg-[#111] rounded-[40px] rounded-tr-none overflow-hidden border-b-6 border-l-6 hover:scale-105 transition-all duration-300 flex flex-col h-full">
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-fill transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
      </div>

      {/* Content */}
      <div className="p-8 flex flex-col grow">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold text-[#6a89a7] group-hover:text-white transition-colors duration-300">
            {project.title}
          </h3>
          <div className="flex space-x-3 text-gray-400">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="View Code"
            >
              <FaGithub size={20} />
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="Live Demo"
              >
                <FaExternalLinkAlt size={18} />
              </a>
            )}
          </div>
        </div>

        <p className="text-gray-400 mb-6 line-clamp-3">{project.description}</p>

        <div className="mt-auto flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium uppercase tracking-wider text-[#6a89a7] border border-[#6a89a7] rounded-full rounded-tr-none"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
