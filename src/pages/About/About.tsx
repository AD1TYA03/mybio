import "./About.css";
import Adi2 from "../../assets/Adi2.png";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import ParticleBackground from "../../components/ParticleBackground";

// Custom hook for number counting animation
const useCountAnimation = (endValue: number, duration: number = 2000, delay: number = 0) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById('achievements-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const startTime = Date.now();
    const startValue = 0;

    const animate = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime - delay;

      if (elapsed < 0) {
        requestAnimationFrame(animate);
        return;
      }

      const progress = Math.min(elapsed / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(startValue + (endValue - startValue) * easeOutQuart);

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, endValue, duration, delay]);

  return count;
};

function About() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const animatedTexts = ["FULL STACK", "FRONTEND", "BACKEND", "APP"];

  // Animated counters
  const projectsCount = useCountAnimation(50, 2000, 1200);
  const yearsCount = useCountAnimation(3, 1500, 1400);
  const satisfactionCount = useCountAnimation(100, 2500, 1600);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % animatedTexts.length);
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, []);

  const skills = {
    frontend: ["React", "TypeScript", "Next.js", "Tailwind"],
    backend: ["Node.js", "MongoDB", "GraphQL", "AWS"],
    mobile: ["React Native", "Expo", "Firebase", "Redux"]
  };

  const achievements = [
    { number: projectsCount, label: "Projects", icon: "🚀", suffix: "+" },
    { number: yearsCount, label: "Years", icon: "⚡", suffix: "+" },
    { number: satisfactionCount, label: "Satisfaction", icon: "🎯", suffix: "%" }
  ];

  const expertise = [
    "Full-Stack",
    "Mobile Apps", 
    "Cloud",
    "UI/UX",
    "APIs",
    "Databases"
  ];

  return (
    <section className="about-section min-h-screen relative overflow-hidden universal-bg">
      {/* Enhanced Particle Background */}
      <ParticleBackground />
      
      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Hero Section */}
          <motion.div 
            className="flex flex-col items-center text-center"
          >
            {/* Professional Header */}
            <motion.div
              className="mb-4 sm:mb-6 lg:mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div 
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-orange-600 font-semibold tracking-wider uppercase mb-1 sm:mb-2 h-8 sm:h-10 md:h-12 lg:h-14 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentTextIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="inline-block"
                  >
                    {animatedTexts[currentTextIndex]}
                  </motion.span>
                </AnimatePresence>
              </motion.div>
              <motion.h1 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-gray-900 font-mono mb-2 sm:mb-4 leading-tight"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <span className="bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 bg-clip-text text-transparent">
                  DEVELOPER
                </span>
              </motion.h1>
              <motion.div
                className="w-16 sm:w-20 md:w-24 lg:w-28 h-1 bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 mx-auto rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.8, duration: 0.6 }}
              />
            </motion.div>

            {/* Enhanced Profile Section */}
            <motion.div
              className="relative mb-4 sm:mb-6 lg:mb-8"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 1, type: "spring" }}
            >
              {/* Multiple Animated Rings */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 sm:border-3 border-orange-500/20"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.05, 0.2]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute inset-0 rounded-full border-2 sm:border-3 border-red-500/15"
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.15, 0.03, 0.15]
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
              
              {/* Main Image with Enhanced Styling */}
              <motion.div className="relative">
                <motion.img
                  src={Adi2}
                  alt="Aditya - Full Stack Developer"
                  className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 xl:w-40 xl:h-40 rounded-full object-cover shadow-2xl border-4 border-white/90 backdrop-blur-sm"
                  whileHover={{ 
                    scale: 1.05,
                    rotate: 2,
                    transition: { duration: 0.3 }
                  }}
                />
                {/* Professional Badge */}
                <motion.div
                  className="absolute -bottom-1 -right-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full shadow-lg"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                >
                  PRO
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Professional Tagline */}
            <motion.div
              className="mb-4 sm:mb-6 lg:mb-8 px-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <motion.h2 
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 font-mono mb-2 sm:mb-3 leading-tight"
                whileHover={{ scale: 1.02 }}
              >
                <span className="relative inline-block">
                  <span className="relative z-10">
                    <motion.span
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 5.5 }}
                    >
                      "Code.
                    </motion.span>
                    <span> </span>
                    <motion.span
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 5.5, delay: 2 }}
                    >
                      Create.
                    </motion.span>
                    <span> </span>
                    <motion.span
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 5.5, delay: 4 }}
                    >
                      Conquer."
                    </motion.span>
                  </span>
                </span>
              </motion.h2>
              <motion.p 
                className="text-sm sm:text-base md:text-lg text-gray-600 max-w-xs sm:max-w-sm md:max-w-lg mx-auto font-sans leading-relaxed"
                whileHover={{ scale: 1.01 }}
              >
                Full-stack architect crafting digital experiences that matter
              </motion.p>
            </motion.div>

            {/* Enhanced Achievement Stats with Counting Animation */}
            <motion.div
              id="achievements-section"
              className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8 mb-4 sm:mb-6 lg:mb-8 px-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.label}
                  className="text-center group"
                  whileHover={{ scale: 1.1, y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4 + index * 0.1, duration: 0.5 }}
                >
                  <motion.div 
                    className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-orange-600 font-mono leading-tight mb-1"
                    whileHover={{ scale: 1.1 }}
                  >
                    <motion.span
                      key={achievement.number}
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {achievement.number}{achievement.suffix}
                    </motion.span>
                  </motion.div>
                  <div className="text-xs sm:text-sm text-gray-600 font-medium leading-tight">
                    {achievement.label}
                  </div>
                  <motion.div 
                    className="text-sm sm:text-base mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {achievement.icon}
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>

            {/* Expertise Highlights */}
            <motion.div
              className="mb-4 sm:mb-6 lg:mb-8 px-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.8 }}
            >
              <motion.h3 
                className="text-base sm:text-lg md:text-xl font-bold text-gray-800 font-mono mb-3 sm:mb-4"
                whileHover={{ scale: 1.02 }}
              >
                Areas of Expertise
              </motion.h3>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3 max-w-lg mx-auto">
                {expertise.map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="bg-white/20 backdrop-blur-sm text-gray-700 px-2 py-1 rounded-full text-xs sm:text-sm font-medium border border-white/30 hover:bg-white/30 transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -2 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.6 + index * 0.1, duration: 0.4 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Enhanced Skills Grid */}
            <motion.div
              className="w-full max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-3xl mx-auto px-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.8 }}
            >
              <motion.h3 
                className="text-base sm:text-lg md:text-xl font-bold text-gray-800 font-mono mb-4 sm:mb-6 text-center"
                whileHover={{ scale: 1.02 }}
              >
                Technical Stack
              </motion.h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                {Object.entries(skills).map(([category, skillList], categoryIndex) => (
                  <motion.div
                    key={category}
                    className="bg-white/15 backdrop-blur-md rounded-lg sm:rounded-xl p-3 sm:p-4 border border-white/25 hover:border-white/40 transition-all duration-300"
                    whileHover={{ 
                      scale: 1.02,
                      backgroundColor: "rgba(255, 255, 255, 0.2)",
                      transition: { duration: 0.3 }
                    }}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.8 + categoryIndex * 0.2, duration: 0.6 }}
                  >
                    <motion.h4 
                      className="text-sm sm:text-base font-bold text-orange-600 mb-2 sm:mb-3 font-mono uppercase tracking-wider"
                      whileHover={{ scale: 1.05 }}
                    >
                      {category}
                    </motion.h4>
                    <div className="space-y-1">
                      {skillList.map((skill, skillIndex) => (
                        <motion.div
                          key={skill}
                          className="flex items-center space-x-2 group"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ 
                            delay: 2.0 + categoryIndex * 0.2 + skillIndex * 0.1, 
                            duration: 0.4 
                          }}
                        >
                          <motion.div 
                            className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-orange-500 rounded-full flex-shrink-0 group-hover:scale-150 transition-transform duration-300"
                          />
                          <span className="text-xs sm:text-sm text-gray-700 font-medium leading-tight group-hover:text-gray-900 transition-colors duration-300">{skill}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Professional Call to Action */}
            <motion.div
              className="mt-6 sm:mt-8 lg:mt-12 px-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.4, duration: 0.8 }}
            >
              <motion.button
                className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-sm sm:text-base relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Let's Build Something Amazing</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-orange-600 via-red-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
