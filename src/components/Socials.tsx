

import { motion } from 'framer-motion';
import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png';
import gmail from '../assets/gmail.png';
import './Socials.css';

function Socials() {
  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/adi1tya/",
      icon: linkedin,
      alt: "LinkedIn",
      label: "LinkedIn Profile",
      className: "linkedin"
    },
    {
      href: "https://github.com/AD1TYA03",
      icon: github,
      alt: "GitHub",
      label: "GitHub Profile",
      className: "github"
    },
    {
      href: "mailto:saaditya17@gmail.com",
      icon: gmail,
      alt: "Gmail",
      label: "Send Email",
      className: "gmail"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className="socials-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.p 
        className="text-gray-600 text-sm mb-4 font-medium"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        Let's connect
      </motion.p>
      <div className="flex gap-6 justify-center lg:justify-start">
        {socialLinks.map((social, index) => (
          <motion.a
            key={social.href}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`social-link ${social.className}`}
            aria-label={social.label}
            variants={itemVariants}
            whileHover={{ 
              scale: 1.1,
              y: -5,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.img 
              src={social.icon} 
              alt={social.alt} 
              className="w-8 h-8"
              whileHover={{ 
                rotate: 5,
                transition: { duration: 0.2 }
              }}
            />
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}

export default Socials;
