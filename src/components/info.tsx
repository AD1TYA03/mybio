import "./Info.css";
import Socials from "./Socials";
import Aditya from '../assets/Adi.png'
function Info() {
  return (
    <div className="main-info">
    <div className="info-section">
 
        <h2 className="intro">
          Say Hello To <span className="text-[#FF7F6F]">Aditya</span>
        </h2>
   
        
        <h1 className="info-title cursor-pointer">Your Business Expert</h1>
      
      
        <p>
          Creating Trendy and Robust full stack websites for large and small
          businesses.
        </p>
      
      <div className="button-container">
        <button className='hire-button' >Hire Me</button>
        <button className="resume-button">Resume</button>
      </div>
      <Socials/>
    </div>
      <img className="adi" src={Aditya} alt="my pic" />
    </div>
  );
}

export default Info;
