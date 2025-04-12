import "./Info.css";
import Socials from "./Socials";
import Aditya from "../assets/Adi.png";
import { Link } from "react-router-dom"; // Import Link for navigation

function Info() {
  return (
    <div className="main-info flex flex-col md:flex-row items-center justify-center px-2 md:px-12 w-full">

      
      <img 
        className="w-[80%] top-20 items-center md:hidden" 
        src={Aditya} 
        alt="my pic" 
      />

      <div className="info-section relative text-center md:text-left flex flex-col items-center md:items-start">
        <h2 className="intro text-lg md:text-xl font-semibold">
        Hey, I'm <span className="text-[#FF7F6F]">Aditya</span>
        </h2>
        <h1 className="info-title text-3xl md:text-5xl font-bold leading-tight mb-4">
          A Full Stack Developer <br className="hidden md:block" /> building seamless digital experiences
        </h1>
        <p className="text-gray-600 text-base md:text-lg max-w-lg">
          Passionate about crafting high-performance web and mobile applications using modern technologies like React, Node.js, MongoDB & more. Let's turn ideas into reality.
        </p>
        <div className="button-container flex gap-4 mt-5 md:mt-10">
          
          <Link to="/projects">
            <button className="hire-button px-6 py-2">Projects</button>
          </Link>

          
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            <button className="resume-button px-6 py-2"
            >Resume</button>
          </a>
        </div>
        <Socials />
      </div>
      
      
      <img className="adi w-48 md:w-64 lg:w-80 mt-6 md:mt-0 hidden md:block" src={Aditya} alt="my pic" />

    </div>
  );
}

export default Info;




// import "./Info.css";
// import Socials from "./Socials";
// import Aditya from "../assets/Adi.png";
// import { Link } from "react-router-dom";

// function Info() {
//   return (
//     <div className="main-info flex flex-col md:flex-row items-center justify-center px-4 md:px-12 w-full py-10 md:py-24">
      
//       {/* Mobile View Image */}
//       <img 
//         className="w-[80%] top-20 items-center md:hidden" 
//         src={Aditya} 
//         alt="Aditya's pic" 
//       />

//       {/* Intro Text Section */}
//       <div className="info-section relative text-center md:text-left flex flex-col items-center md:items-start">
//         <h2 className="intro text-lg md:text-xl font-semibold mb-2">
//           Hey, I'm <span className="text-[#FF7F6F]">Aditya</span>
//         </h2>
        // <h1 className="info-title text-3xl md:text-5xl font-bold leading-tight mb-4">
        //   A Full Stack Developer <br className="hidden md:block" /> building seamless digital experiences
        // </h1>
        // <p className="text-gray-600 text-base md:text-lg max-w-lg">
        //   Passionate about crafting high-performance web and mobile applications using modern technologies like React, Node.js, MongoDB & more. Let's turn ideas into reality.
        // </p>

//         {/* Buttons */}
//         <div className="button-container flex gap-4 mt-6">
//           <Link to="/projects">
//             <button className="hire-button px-6 py-2">Projects</button>
//           </Link>
//           <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
//             <button className="resume-button px-6 py-2">Resume</button>
//           </a>
//         </div>

//         {/* Social Media Links */}
//         <div className="mt-6">
//           <Socials />
//         </div>
//       </div>

//       {/* Desktop View Image */}
//       <img 
//         className="adi w-48 md:w-64 lg:w-80 mt-8 md:mt-0 hidden md:block" 
//         src={Aditya} 
//         alt="Aditya's pic" 
//       />
//     </div>
//   );
// }

// export default Info;
