import "./About.css";
import Adi2 from "../../assets/Adi2.png";
import { motion } from "framer-motion";

function About() {
  const skills = {
    soft: [
      "Communication",
      "Problem Solving",
      "Teamwork",
      "Leadership",
    ],
    hard: [
      "JavaScript & React",
      "Node.js & MongoDB",
      "React Native",
      "SQL & GraphQL",
      "Data Structures & Algorithms",
    ],
  };

  return (
    <section className="w-full min-h-screen px-6 md:px-16 py-12 bg-transparent flex flex-col items-center text-center">
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
        About Me
      </h1>
      <p className="max-w-2xl text-gray-600 text-base md:text-lg mb-8">
        I’m a passionate developer who loves building full-stack applications,
        solving real-world problems, and creating meaningful digital experiences.
      </p>

      {/* Image */}
      <motion.img
        src={Adi2}
        alt="Aditya"
        className="w-40 md:w-56 lg:w-64 rounded-full shadow-lg mb-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      />

      {/* Skills Grid */}
      <div className="w-full flex flex-col lg:flex-row justify-center gap-8 mt-4">
        {/* Soft Skills */}
        <div className="bg-white shadow-md rounded-2xl p-6 w-full lg:w-[40%]">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            Soft Skills
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.soft.map((skill) => (
              <motion.div
                key={skill}
                className="bg-blue-50 text-blue-800 px-4 py-2 rounded-full text-sm font-medium shadow-sm"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Hard Skills */}
        <div className="bg-white shadow-md rounded-2xl p-6 w-full lg:w-[40%]">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Hard Skills
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.hard.map((skill) => (
              <motion.div
                key={skill}
                className="bg-green-50 text-green-800 px-4 py-2 rounded-full text-sm font-medium shadow-sm"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
