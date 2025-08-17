import "./Info.css";
import Socials from "./Socials";
import Aditya from "../assets/Adi.png";
import { Link } from "react-router-dom";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useState, useEffect } from "react";

function Info() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [startWaving, setStartWaving] = useState(false);

  // Mouse tracking for parallax effects
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 700 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  // Parallax transforms
  const rotateX = useTransform(springY, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(springX, [-0.5, 0.5], ["-15deg", "15deg"]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const x = (clientX - innerWidth / 2) / innerWidth;
      const y = (clientY - innerHeight / 2) / innerHeight;
      
      mouseX.set(x);
      mouseY.set(y);
      setMousePosition({ x: clientX, y: clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Start waving animation after initial animations
  useEffect(() => {
    const timer = setTimeout(() => {
      setStartWaving(true);
    }, 1200); // Start waving after 1.2 seconds

    return () => clearTimeout(timer);
  }, []);

  // Animation variants for staggered content
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      y: -3,
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };

  const typewriterVariants = {
    hidden: { width: 0 },
    visible: {
      width: "100%",
      transition: {
        duration: 2,
        ease: "easeInOut",
        delay: 1
      }
    }
  };

  // Interactive floating elements
  const FloatingElement = ({ children, delay = 0, duration = 3 }) => (
    <motion.div
      animate={{
        y: [0, -10, 0],
        rotate: [0, 5, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        delay,
        ease: "easeInOut"
      }}
      whileHover={{
        scale: 1.1,
        rotate: 10,
        transition: { duration: 0.3 }
      }}
    >
      {children}
    </motion.div>
  );

  return (
    <div className="info-container max-w-6xl mx-auto relative">
      {/* Interactive Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <FloatingElement delay={0} duration={4}>
          <div className="absolute top-20 left-10 w-4 h-4 bg-orange-400 rounded-full opacity-20 blur-sm" />
        </FloatingElement>
        <FloatingElement delay={1} duration={5}>
          <div className="absolute top-40 right-20 w-6 h-6 bg-red-400 rounded-full opacity-15 blur-sm" />
        </FloatingElement>
        <FloatingElement delay={2} duration={3.5}>
          <div className="absolute bottom-40 left-20 w-3 h-3 bg-orange-300 rounded-full opacity-25 blur-sm" />
        </FloatingElement>
        <FloatingElement delay={0.5} duration={4.5}>
          <div className="absolute bottom-20 right-10 w-5 h-5 bg-red-300 rounded-full opacity-20 blur-sm" />
        </FloatingElement>
      </div>

      {/* Mobile Image with Enhanced Interactions */}
      <motion.div 
        className="md:hidden mb-6 flex justify-center"
        variants={imageVariants}
        initial="hidden"
        animate="visible"
        whileHover={{ 
          scale: 1.05,
          rotate: 5,
          transition: { duration: 0.3 }
        }}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d"
        }}
        onHoverStart={() => setIsHovering(true)}
        onHoverEnd={() => setIsHovering(false)}
      >
        <motion.div
          className="relative"
          animate={{
            boxShadow: "none"
          }}
          transition={{ duration: 0.3 }}
        >
          <img 
            className="w-80 h-80 rounded-full object-cover relative z-10" 
            src={Aditya} 
            alt="Aditya - Full Stack Developer" 
          />
          {/* Glowing ring effect */}
          <motion.div
            className="absolute inset-0 rounded-full border-4 border-orange-400 opacity-0"
            animate={{
              opacity: isHovering ? 0.3 : 0,
              scale: isHovering ? 1.1 : 1
            }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8 items-center">
        {/* Content Section with Enhanced Interactions */}
        <motion.div 
          className="text-center lg:text-left space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Dramatic Greeting with Mouse Interaction */}
          <motion.div
            variants={itemVariants}
            className="space-y-2"
            whileHover={{ scale: 1.02 }}
          >
            <motion.h2 
              className="text-lg sm:text-xl md:text-2xl font-medium text-gray-800 font-mono"
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                From{" "}
              </motion.span>
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 font-bold"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                whileHover={{ 
                  scale: 1.05,
                  filter: "brightness(1.2)"
                }}
              >
                Code to Creation
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                whileHover={{ 
                  rotate: [0, -20, 20, -20, 0],
                  transition: { 
                    duration: 0.6,
                    ease: "easeInOut"
                  }
                }}
              >
                {" "}👋
              </motion.span>
            </motion.h2>
            <motion.p
              className="text-sm sm:text-base text-gray-700 font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              Crafting digital experiences
            </motion.p>
          </motion.div>

          {/* Story-Driven Main Title with Enhanced Interactions */}
          <motion.div
            variants={titleVariants}
            initial="hidden"
            animate="visible"
            className="space-y-3 pb-2 overflow-visible"
          >
            <motion.h1 
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-relaxed text-gray-900 font-mono"
              style={{ 
                fontFamily: "'Dancing Script', 'Brush Script MT', cursive",
                lineHeight: "1.4"
              }}
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                I transform{" "}
              </motion.span>
              <motion.span 
                className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 font-black italic"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.0, duration: 0.5 }}
                whileHover={{ 
                  scale: 1.05,
                  filter: "brightness(1.2)"
                }}
              >
                <motion.span
                  className="font-extrabold tracking-wider"
                  style={{ 
                    fontFamily: "'Dancing Script', 'Brush Script MT', cursive",
                    textShadow: "0 0 20px rgba(255, 165, 0, 0.3)"
                  }}
                  animate={{
                    textShadow: [
                      "0 0 20px rgba(255, 165, 0, 0.3)",
                      "0 0 30px rgba(255, 165, 0, 0.6)",
                      "0 0 20px rgba(255, 165, 0, 0.3)"
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  Ideas
                </motion.span>
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
              >
                {" "}into{" "}
              </motion.span>
              <motion.span 
                className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4, duration: 0.6 }}
                whileHover={{ 
                  scale: 1.05,
                  filter: "brightness(1.2)"
                }}
              >
                reality
              </motion.span>
            </motion.h1>
          </motion.div>

          {/* Enhanced Story Description with Interactive Elements */}
          <motion.div
            variants={itemVariants}
            className="space-y-3"
          >
            <motion.p 
              className="text-sm sm:text-base md:text-lg text-gray-800 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-sans"
              whileHover={{ 
                scale: 1.01,
                transition: { duration: 0.2 }
              }}
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8, duration: 0.6 }}
                whileHover={{ 
                  color: "#374151",
                  fontWeight: "500"
                }}
              >
                Full-stack developer passionate about creating meaningful digital solutions.
              </motion.span>
            </motion.p>
            <motion.p 
              className="text-sm sm:text-base md:text-lg text-gray-800 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-sans"
              whileHover={{ 
                scale: 1.01,
                transition: { duration: 0.2 }
              }}
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.0, duration: 0.6 }}
                whileHover={{ 
                  color: "#374151",
                  fontWeight: "500"
                }}
              >
                Ready to bring your vision to life.
              </motion.span>
            </motion.p>
          </motion.div>

          {/* Enhanced Action Buttons with Advanced Interactions */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              whileHover="hover"
              variants={buttonVariants}
            >
              <Link to="/projects">
                <motion.button 
                  className="primary-button group relative overflow-hidden"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 25px rgba(255, 165, 0, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative z-10">Explore My Work</span>
                  <motion.svg 
                    className="w-4 h-4 ml-2 relative z-10" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    whileHover={{ x: 5, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </motion.svg>
                </motion.button>
              </Link>
            </motion.div>

            <motion.div
              whileHover="hover"
              variants={buttonVariants}
            >
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <motion.button 
                  className="secondary-button relative overflow-hidden"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative z-10">View My Story</span>
                </motion.button>
              </a>
            </motion.div>
          </motion.div>

          {/* Social Links with Enhanced Interactions */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 2.4 }}
            whileHover={{ scale: 1.02 }}
          >
            <Socials />
          </motion.div>
        </motion.div>

        {/* Desktop Image with Advanced Parallax and Interactions */}
        <motion.div 
          className="hidden lg:flex justify-center"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          whileHover={{ 
            scale: 1.05,
            transition: { duration: 0.3 }
          }}
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d"
          }}
          onHoverStart={() => setIsHovering(true)}
          onHoverEnd={() => setIsHovering(false)}
        >
          <motion.div
            className="relative"
            animate={{
              boxShadow: "none"
            }}
            transition={{ duration: 0.3 }}
          >
            <img 
              className="w-96 h-96 rounded-full object-cover relative z-10" 
              src={Aditya} 
              alt="Aditya - Full Stack Developer" 
            />
            {/* Enhanced glowing ring effect */}
            <motion.div
              className="absolute inset-0 rounded-full border-4 border-orange-400 opacity-0"
              animate={{
                opacity: isHovering ? 0.4 : 0,
                scale: isHovering ? 1.15 : 1
              }}
              transition={{ duration: 0.3 }}
            />
            {/* Additional glow layers */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-red-400 opacity-0"
              animate={{
                opacity: isHovering ? 0.2 : 0,
                scale: isHovering ? 1.25 : 1
              }}
              transition={{ duration: 0.4, delay: 0.1 }}
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Info;
