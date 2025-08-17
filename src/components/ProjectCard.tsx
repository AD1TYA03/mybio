import { motion } from "framer-motion";
import { ExternalLink, Github, Calendar } from "lucide-react";
import { Project } from "../types/Project";

interface ProjectCardProps {
  project: Project;
  index: number;
  isLast?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, isLast = false }) => {
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      className={`relative flex items-center ${isLast ? '' : 'mb-8'} ${
        isLeft ? 'flex-row' : 'flex-row-reverse'
      }`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      {/* Timeline Dot with gradient */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-orange-400 to-red-500 rounded-full z-10 shadow-lg" />

      {/* Project Card */}
      <div className={`w-4/12 ${isLeft ? 'pr-6' : 'pl-6'}`}>
        <div className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full backdrop-blur-sm bg-white/90">
          {/* Header */}
          <div className="mb-4">
            <h3 className="text-xl font-bold text-gray-900 mb-2 bg-gradient-to-r from-gray-800 to-gray-900 bg-clip-text text-transparent">
              {project.title}
            </h3>
            <div className="flex items-center gap-3 text-sm text-gray-600 mb-3">
              <div className="flex items-center gap-1">
                <Calendar size={14} className="text-orange-500" />
                <span>{project.date}</span>
              </div>
              <span className="text-orange-500 font-semibold bg-orange-50 px-2 py-1 rounded-full text-xs">
                {project.category}
              </span>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.techStack.slice(0, 3).map((tech, techIndex) => (
              <span 
                key={techIndex} 
                className="bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium border border-blue-200"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 3 && (
              <span className="text-gray-400 text-xs bg-gray-50 px-2 py-1 rounded-full">
                +{project.techStack.length - 3}
              </span>
            )}
          </div>

          {/* Description */}
          <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-3 overflow-hidden">
            {project.description}
          </p>

          {/* Project Links */}
          <div className="flex gap-3 mt-auto">
            <a
              href={project.demoLink}
              className="flex items-center gap-2 text-orange-500 hover:text-orange-600 text-sm font-semibold transition-colors bg-orange-50 hover:bg-orange-100 px-3 py-2 rounded-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink size={14} />
              Demo
            </a>
            <a
              href={project.githubLink}
              className="flex items-center gap-2 text-gray-700 hover:text-gray-900 text-sm font-semibold transition-colors bg-gray-50 hover:bg-gray-100 px-3 py-2 rounded-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={14} />
              Code
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard; 