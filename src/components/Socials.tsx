import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png';
import gmail from '../assets/gmail.png';

import './Socials.css'

function Socials() {
  return (
    <div className='socials-container'>
    <a href="https://www.linkedin.com/in/adi1tya/" target="_blank"><img src={linkedin} alt="linkedin"/></a>
    <a href="https://github.com/AD1TYA03" target="_blank"><img src={github} alt="github"/></a>
    <a href="mailto:saaditya17@gmail.com" target="_blank"><img src={gmail} alt="gmail"/></a>
    </div>
  )
}

export default Socials