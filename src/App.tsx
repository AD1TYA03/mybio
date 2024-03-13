import "./App.css";
import Header from "./components/Header";
import Info from "./components/info";
import footer from '../src/assets/footer.png';

function App() {
  return (
    <div className="App">
      <Header />
      <Info />
      <div className="footer">
        <img src={footer} alt="footer" />
      </div>

      <div className="img-section"></div>
    </div>
  );
}

export default App;
