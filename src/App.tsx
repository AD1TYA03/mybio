import "./App.css";
import Info from "./components/info";
import footerImage from "../src/assets/footer.png";

function App() {
  return (
    <div className="App flex flex-col items-center">
      <Info />

      
      <footer className="footer w-full justify-center mt-0 hidden md:flex">
        <img src={footerImage} alt="Website footer branding" className="w-1/2 md:w-1/3" />
      </footer>

     
      <div className="img-section">
        
      </div>
    </div>
  );
}

export default App;
