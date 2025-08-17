import { useEffect, useRef } from 'react';

interface ParticleBackgroundProps {
  className?: string;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  type: 'circle' | 'square' | 'triangle';
  rotation: number;
  rotationSpeed: number;
  pulsePhase: number;
}

const ParticleBackground: React.FC<ParticleBackgroundProps> = ({ className = "" }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Enhanced particle configuration
    const particles: Particle[] = [];
    const particleCount = 40;
    const connectionDistance = 180;
    const mouse = { x: 0, y: 0, radius: 100 };

    // Track mouse position
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Create particles with different types
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.6 + 0.2,
        type: ['circle', 'square', 'triangle'][Math.floor(Math.random() * 3)] as 'circle' | 'square' | 'triangle',
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
        pulsePhase: Math.random() * Math.PI * 2
      });
    }

    // Draw different particle types
    const drawParticle = (particle: Particle) => {
      ctx.save();
      ctx.translate(particle.x, particle.y);
      ctx.rotate(particle.rotation);
      
      const pulseSize = particle.size + Math.sin(particle.pulsePhase) * 0.5;
      
      switch (particle.type) {
        case 'circle':
          ctx.beginPath();
          ctx.arc(0, 0, pulseSize, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 165, 0, ${particle.opacity})`;
          ctx.fill();
          break;
          
        case 'square':
          ctx.fillStyle = `rgba(255, 69, 0, ${particle.opacity})`;
          ctx.fillRect(-pulseSize/2, -pulseSize/2, pulseSize, pulseSize);
          break;
          
        case 'triangle':
          ctx.beginPath();
          ctx.moveTo(0, -pulseSize);
          ctx.lineTo(-pulseSize * 0.866, pulseSize * 0.5);
          ctx.lineTo(pulseSize * 0.866, pulseSize * 0.5);
          ctx.closePath();
          ctx.fillStyle = `rgba(255, 140, 0, ${particle.opacity})`;
          ctx.fill();
          break;
      }
      
      ctx.restore();
    };

    // Draw connection lines with gradient
    const drawConnection = (p1: Particle, p2: Particle, distance: number) => {
      const opacity = 0.15 * (1 - distance / connectionDistance);
      const gradient = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
      gradient.addColorStop(0, `rgba(255, 165, 0, ${opacity})`);
      gradient.addColorStop(0.5, `rgba(255, 69, 0, ${opacity * 0.8})`);
      gradient.addColorStop(1, `rgba(255, 140, 0, ${opacity})`);
      
      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 1;
      ctx.stroke();
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.rotation += particle.rotationSpeed;
        particle.pulsePhase += 0.05;

        // Mouse interaction
        const dx = mouse.x - particle.x;
        const dy = mouse.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < mouse.radius) {
          const force = (mouse.radius - distance) / mouse.radius;
          const angle = Math.atan2(dy, dx);
          particle.vx -= Math.cos(angle) * force * 0.02;
          particle.vy -= Math.sin(angle) * force * 0.02;
        }

        // Bounce off edges with damping
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.vx *= -0.8;
          particle.x = Math.max(0, Math.min(canvas.width, particle.x));
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.vy *= -0.8;
          particle.y = Math.max(0, Math.min(canvas.height, particle.y));
        }

        // Apply friction
        particle.vx *= 0.99;
        particle.vy *= 0.99;

        // Draw particle
        drawParticle(particle);

        // Draw connections
        particles.slice(index + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            drawConnection(particle, otherParticle, distance);
          }
        });
      });

      // Draw floating geometric shapes
      const time = Date.now() * 0.001;
      for (let i = 0; i < 3; i++) {
        const x = (canvas.width * 0.5) + Math.sin(time * 0.5 + i) * 200;
        const y = (canvas.height * 0.5) + Math.cos(time * 0.3 + i) * 150;
        const size = 20 + Math.sin(time + i) * 10;
        
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(time * 0.5 + i);
        ctx.globalAlpha = 0.1;
        
        if (i === 0) {
          // Large circle
          ctx.beginPath();
          ctx.arc(0, 0, size, 0, Math.PI * 2);
          ctx.strokeStyle = 'rgba(255, 165, 0, 0.3)';
          ctx.lineWidth = 2;
          ctx.stroke();
        } else if (i === 1) {
          // Square
          ctx.strokeStyle = 'rgba(255, 69, 0, 0.3)';
          ctx.lineWidth = 2;
          ctx.strokeRect(-size/2, -size/2, size, size);
        } else {
          // Triangle
          ctx.beginPath();
          ctx.moveTo(0, -size);
          ctx.lineTo(-size * 0.866, size * 0.5);
          ctx.lineTo(size * 0.866, size * 0.5);
          ctx.closePath();
          ctx.strokeStyle = 'rgba(255, 140, 0, 0.3)';
          ctx.lineWidth = 2;
          ctx.stroke();
        }
        
        ctx.restore();
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none z-0 ${className}`}
      style={{ background: 'transparent' }}
    />
  );
};

export default ParticleBackground; 