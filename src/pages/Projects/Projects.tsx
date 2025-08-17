import { motion } from "framer-motion";
import ParticleBackground from "../../components/ParticleBackground";
import ProjectCard from "../../components/ProjectCard";
import { ProjectService } from "../../services/projectService";

function Projects() {
  const projects = ProjectService.getAllProjects();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const timelineLineVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut"
      }
    }
  };

  const pulseVariants = {
    pulse: {
      scale: [1, 1.1, 1],
      opacity: [0.4, 0.8, 0.4],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden universal-bg">
      {/* Particle Background */}
      <ParticleBackground />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="text-sm sm:text-base md:text-lg text-orange-600 font-medium tracking-wider uppercase mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            MY
          </motion.div>
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 font-mono mb-3 leading-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <span className="bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 bg-clip-text text-transparent">
            PROJECTS
            </span>
          </motion.h1>
          <motion.div
            className="w-16 h-0.5 bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 0.6, duration: 0.5 }}
          />
          <motion.p 
            className="text-sm text-gray-600 max-w-md mx-auto font-sans leading-relaxed mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            A journey through innovation and creativity
          </motion.p>
        </motion.div>

        {/* Mobile Card Layout */}
        <div className="lg:hidden">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm bg-white/90"
              >
                {/* Header */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 bg-gradient-to-r from-gray-800 to-gray-900 bg-clip-text text-transparent">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-3 text-sm text-gray-600 mb-3">
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
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
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
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
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Demo
                  </a>
                  <a
                    href={project.githubLink}
                    className="flex items-center gap-2 text-gray-700 hover:text-gray-900 text-sm font-semibold transition-colors bg-gray-50 hover:bg-gray-100 px-3 py-2 rounded-lg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    Code
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Desktop Timeline Layout */}
        <motion.div 
          className="hidden lg:block relative max-w-4xl mx-auto mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ position: 'relative', zIndex: 1 }}
        >
          {/* Timeline Items */}
          <div className="relative" style={{ position: 'relative', zIndex: 2 }}>
            {/* Interactive Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 z-10" style={{ height: '100%' }}>
              {/* Main Timeline Line */}
              <motion.div 
                className="w-px bg-gradient-to-b from-orange-300 via-orange-400 to-orange-300 opacity-40"
                variants={timelineLineVariants}
                initial="hidden"
                animate="visible"
                style={{ zIndex: 1, height: '100%' }}
              />
              
              {/* Animated Pulse Effect */}
              <motion.div 
                className="absolute w-2 h-2 bg-orange-500 rounded-full opacity-60"
                variants={pulseVariants}
                animate="pulse"
                style={{ 
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  top: '50%',
                  zIndex: 2
                }}
              />

              {/* Progress Line */}
              <motion.div 
                className="absolute w-0.5 bg-gradient-to-b from-orange-500 to-red-500 origin-top"
                initial={{ scaleY: 0 }}
                animate={{ 
                  scaleY: 0.3
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                style={{ zIndex: 3, height: '100%' }}
              />
            </div>

            {projects.map((project, index) => (
              <ProjectCard 
                key={index} 
                project={project} 
                index={index}
                isLast={index === projects.length - 1}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Projects;
