import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Import hamburger and close icons

import About from "../pages/About/About";
import Projects from "../pages/Projects/Projects";
import Error404 from "../pages/error/Error404";
import App from "../App";

import "./Routers.css";

function Routers() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Router>
      <div className="router-container">
        {/* Fixed Header */}
        <div
          id="header-container"
          className="fixed top-0 left-0 w-full flex justify-between items-center px-10 py-2 z-50"
        >
          {/* Logo */}
          <div className="logo">
            <a href="/">
              <h1 className="logo-name text-xl md:text-2xl font-bold">ADITYA</h1>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:inline-block">
            <ul className="flex space-x-6 mr-20">
              <li>
                <Link to="/" className="hover:text-red-500">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-red-500">About</Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-red-500">Projects</Link>
              </li>
            </ul>
          </nav>

          {/* Contact Me Button (Always Visible) */}
          <button className="hidden md:block px-5 py-2 bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 rounded-lg">
            Contact Me
          </button>

          {/* Hamburger Menu (Mobile) */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
              {isOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu (Dropdown) */}
        {isOpen && (
          <div className="md:hidden flex flex-col items-center bg-white shadow-md absolute w-full left-0 top-16 z-40 py-4 space-y-4">
            <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
            <Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
            <button className="px-5 py-2 bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 rounded-lg ">
              Contact Me
            </button>
          </div>
        )}

        {/* Add padding to prevent content overlap */}
        <div className="pt-16">
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default Routers;
