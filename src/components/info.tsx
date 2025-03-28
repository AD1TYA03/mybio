import "./Info.css";
import Socials from "./Socials";
import Aditya from "../assets/Adi.png";
import { Link } from "react-router-dom"; // Import Link for navigation

function Info() {
  return (
    <div className="main-info flex flex-col md:flex-row items-center justify-center px-2 md:px-12 w-full">

      {/* Image for small screens (Behind the Hamburger Menu) */}
      <img 
        className="w-[80%] top-20 items-center md:hidden" 
        src={Aditya} 
        alt="my pic" 
      />

      <div className="info-section relative text-center md:text-left flex flex-col items-center md:items-start">
        <h2 className="intro text-lg md:text-xl font-semibold">
          Say Hello To <span className="text-[#FF7F6F]">Aditya</span>
        </h2>
        <h1 className="info-title text-4xl md:text-6xl font-bold cursor-pointer">
          Your Business Expert
        </h1>
        <p className="text-gray-600 text-base md:text-lg max-w-lg">
          Creating Trendy and Robust full stack websites for large and small businesses.
        </p>
        <div className="button-container flex gap-4 mt-5 md:mt-10">
          {/* Projects Button (Links to Projects Page) */}
          <Link to="/projects">
            <button className="hire-button px-6 py-2">Projects</button>
          </Link>

          {/* Resume Button (Opens PDF in New Tab) */}
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            <button className="resume-button px-6 py-2"
            >Resume</button>
          </a>
        </div>
        <Socials />
      </div>
      
      {/* Image for larger screens */}
      <img className="adi w-48 md:w-64 lg:w-80 mt-6 md:mt-0 hidden md:block" src={Aditya} alt="my pic" />

    </div>
  );
}

export default Info;
