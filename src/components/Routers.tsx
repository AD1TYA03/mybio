import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import About from "../pages/About/About";
import Projects from "../pages/Projects/Projects";
import Error404 from "../pages/error/Error404";
import App from '../App';

import './Routers.css';


function Routers() {
  return (
    <Router >
      <>
      <div className='router-container'>
      <div id="header-container">
      <div className="logo">
        <a href="/"><h1 className="logo-name">ADITYA</h1></a>
      </div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Projects</Link>
            </li>
          </ul>
          </nav>
        
        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Contact Me
          </span>
        </button>
        </div>

       
        

        <Routes>
          <Route path="/" element={<App/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Projects />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </div>
      </>
    </Router>
  )
}

export default Routers