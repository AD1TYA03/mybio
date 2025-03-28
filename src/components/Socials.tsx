// import github from '../assets/github.png';
// import linkedin from '../assets/linkedin.png';
// import gmail from '../assets/gmail.png';

// import './Socials.css'

// function Socials() {
//   return (
//     <div className='socials-container'>
//     <a href="https://www.linkedin.com/in/adi1tya/" target="_blank"><img src={linkedin} alt="linkedin"/></a>
//     <a href="https://github.com/AD1TYA03" target="_blank"><img src={github} alt="github"/></a>
//     <a href="mailto:saaditya17@gmail.com" target="_blank"><img src={gmail} alt="gmail"/></a>
//     </div>
//   )
// }

// export default Socials

import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png';
import gmail from '../assets/gmail.png';
import './Socials.css';

function Socials() {
  return (
    <div className="socials-container flex gap-4 mt-4">
      <a href="https://www.linkedin.com/in/adi1tya/" target="_blank" rel="noopener noreferrer">
        <img src={linkedin} alt="LinkedIn" className="w-8 md:w-10 transition-transform transform hover:scale-110" />
      </a>
      <a href="https://github.com/AD1TYA03" target="_blank" rel="noopener noreferrer">
        <img src={github} alt="GitHub" className="w-8 md:w-10 transition-transform transform hover:scale-110" />
      </a>
      <a href="mailto:saaditya17@gmail.com" target="_blank" rel="noopener noreferrer">
        <img src={gmail} alt="Gmail" className="w-8 md:w-10 transition-transform transform hover:scale-110" />
      </a>
    </div>
  );
}

export default Socials;
