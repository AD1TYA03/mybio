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

        {/* Timeline Container */}
        <motion.div 
          className="relative max-w-4xl mx-auto mb-16"
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
