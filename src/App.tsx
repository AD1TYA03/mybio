import "./App.css";
import Info from "./components/info";
import footerImage from "../src/assets/footer.png";

function App() {
  return (
    <div className="App flex flex-col min-h-screen bg-gradient-to-br from-[#E7F5FE] to-[#BEE4FF]">
      {/* Info Section */}
      <Info />

      {/* Footer Section */}
      <footer className="footer w-full flex justify-center mt-auto pb-6">
        <img
          src={footerImage}
          alt="Website footer branding"
          className="w-2/3 md:w-1/3 object-contain"
        />
      </footer>
    </div>
  );
}

export default App;
