import "./App.css";
import Info from "./components/info";
import footerImage from "../src/assets/footer.png";
import ParticleBackground from "./components/ParticleBackground";
import { useRef, useState, useEffect } from "react";

function App() {
  return (
    <div className="App h-screen flex flex-col overflow-hidden relative universal-bg">
      {/* Enhanced Particle Background */}
      <ParticleBackground />
      
      {/* Mouse Trail Effect */}
      <MouseTrail />
      
      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 relative z-10">
        <Info />
      </main>

      {/* Footer Section */}
      <footer className="w-full flex-shrink-0 relative z-10">
        <img
          src={footerImage}
          alt="Website footer branding"
          className="w-full h-auto object-cover"
        />
      </footer>
    </div>
  );
}

// Mouse Trail Component
const MouseTrail = () => {
  const trailRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={trailRef}
      className="fixed pointer-events-none z-20"
      style={{
        left: mousePosition.x - 10,
        top: mousePosition.y - 10,
        transform: 'translate(-50%, -50%)',
      }}
    >
      <div className="w-5 h-5 bg-gradient-to-r from-orange-400 to-red-500 rounded-full opacity-30 blur-sm animate-pulse" />
    </div>
  );
};

export default App;
