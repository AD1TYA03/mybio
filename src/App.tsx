import "./App.css";

import Info from "./components/info";
import footer from '../src/assets/footer.png';


function App() {
  return (
    <div className="App">
      <Info />
      <div className="footer">
        <img src={footer} alt="footer" />
      </div>

      <div className="img-section"></div>
    </div>
  );
}

export default App;
