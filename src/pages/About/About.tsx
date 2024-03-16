import './About.css';
import Adi2 from '../../assets/Adi2.png';


function About() {
  return <div className="about-container">
     <div><h2>Soft Skills</h2></div>
     <div>
     <h1>About Me</h1>
     <img src={Adi2} alt="my image" />
     </div>
     <div><h2>Hard Skills</h2></div>
  </div>;
}

export default About;
