import "./About.css";
import Adi2 from "../../assets/Adi2.png";
import { motion } from "framer-motion";

function About() {
  const skills = {
    soft: [
      { name: "Communication" },
      { name: "Problem Solving" },
      { name: "Teamwork" },
      { name: "Leadership" },
    ],
    hard: [
      { name: "JavaScript & React" },
      { name: "Node.js & MongoDB" },
      { name: "Next.js & React Native" },
      { name: "Data Structures & Algorithms" },
    ],
  };

  return (
    <div className="flex flex-col items-center text-center md:px-12 py-8 pt-[15%] justify-center">
      {/* About Me Section */}
      <h1 className="text-3xl md:text-4xl font-semibold mb-6">About Me</h1>
      <motion.img
        src={Adi2}
        alt="Aditya"
        className="w-40 md:w-56 lg:w-72 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      />

      {/* Skills Sections */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6 w-full mt-6">
        {/* Soft Skills Card */}
        <div className="flex flex-col items-center border-2 border-dashed border-gray-300 p-4 rounded-lg">
          <h2 className="text-xl font-medium mb-4">Soft Skills</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.soft.map((skill) => (
              <motion.div
                key={skill.name}
                className="bg-white shadow-sm rounded-full px-4 py-2 text-sm md:text-base"
                whileHover={{ scale: 1.1, backgroundColor: "#f0f0f0" }}
                transition={{ duration: 0.2 }}
              >
                {skill.name}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Hard Skills Card */}
        <div className="flex flex-col items-center border-2 border-dashed border-gray-300 p-4 rounded-lg">
          <h2 className="text-xl font-medium mb-4">Hard Skills</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.hard.map((skill) => (
              <motion.div
                key={skill.name}
                className="bg-white shadow-sm rounded-full px-4 py-2 text-sm md:text-base"
                whileHover={{ scale: 1.1, backgroundColor: "#f0f0f0" }}
                transition={{ duration: 0.2 }}
              >
                {skill.name}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;