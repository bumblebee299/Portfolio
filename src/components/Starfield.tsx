import React, { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  color: string;
  speed: number;
  opacity: number;
  originalX: number;
  originalY: number;
}

interface Nebula {
  x: number;
  y: number;
  radius: number;
  color: string;
  vx: number;
  vy: number;
}

export const Starfield: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const scrollVelocityRef = useRef(0);
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let stars: Star[] = [];
    let nebulas: Nebula[] = [];

    // Resize handler
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    // Initialize stars
    const initStars = () => {
      stars = [];
      const numStars = Math.floor((canvas.width * canvas.height) / 4000); // Responsive density
      const colors = ['#ffffff', '#80F3FF', '#C792EA', '#A6E22E'];

      for (let i = 0; i < numStars; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = Math.random() * 1.8 + 0.5;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const speed = Math.random() * 0.05 + 0.01;
        const opacity = Math.random() * 0.6 + 0.4;

        stars.push({
          x,
          y,
          size,
          color,
          speed,
          opacity,
          originalX: x,
          originalY: y,
        });
      }

      // Initialize nebulas for beautiful color depth
      nebulas = [
        {
          x: canvas.width * 0.2,
          y: canvas.height * 0.3,
          radius: Math.min(canvas.width, canvas.height) * 0.45,
          color: 'rgba(0, 242, 254, 0.06)',
          vx: 0.15,
          vy: 0.1,
        },
        {
          x: canvas.width * 0.8,
          y: canvas.height * 0.7,
          radius: Math.min(canvas.width, canvas.height) * 0.5,
          color: 'rgba(155, 81, 224, 0.06)',
          vx: -0.1,
          vy: -0.15,
        },
        {
          x: canvas.width * 0.5,
          y: canvas.height * 0.5,
          radius: Math.min(canvas.width, canvas.height) * 0.6,
          color: 'rgba(11, 15, 25, 0.95)', // Background color masking
          vx: 0,
          vy: 0,
        }
      ];
    };

    // Track mouse
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize to -0.5 to 0.5
      mouseRef.current.targetX = (e.clientX / window.innerWidth) - 0.5;
      mouseRef.current.targetY = (e.clientY / window.innerHeight) - 0.5;
    };

    // Track scroll velocity for warp effect
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const diff = Math.abs(currentScrollY - lastScrollYRef.current);
      scrollVelocityRef.current = Math.min(15, scrollVelocityRef.current + diff * 0.1);
      lastScrollYRef.current = currentScrollY;
    };

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll, { passive: true });

    resizeCanvas();

    // Loop
    const render = () => {
      // Clear canvas
      ctx.fillStyle = '#0B0F19';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Smooth mouse interpolation
      const mouse = mouseRef.current;
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      // Decay scroll velocity
      scrollVelocityRef.current *= 0.93;

      // Draw and update Nebulas (deep back layer)
      ctx.globalCompositeOperation = 'screen';
      nebulas.forEach((nebula) => {
        // Move nebula slowly
        if (nebula.vx !== 0) {
          nebula.x += nebula.vx;
          nebula.y += nebula.vy;

          // Bounce off boundary
          if (nebula.x < 0 || nebula.x > canvas.width) nebula.vx *= -1;
          if (nebula.y < 0 || nebula.y > canvas.height) nebula.vy *= -1;
        }

        const gradient = ctx.createRadialGradient(
          nebula.x,
          nebula.y,
          0,
          nebula.x,
          nebula.y,
          nebula.radius
        );
        gradient.addColorStop(0, nebula.color);
        gradient.addColorStop(0.5, nebula.color.replace('0.06', '0.03'));
        gradient.addColorStop(1, 'rgba(11, 15, 25, 0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(nebula.x, nebula.y, nebula.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw Grid Pattern (middle layer)
      ctx.globalCompositeOperation = 'source-over';
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.015)';
      ctx.lineWidth = 1;
      const gridSize = 50;

      // Draw grid offset slightly by mouse
      const gridOffsetX = mouse.x * -20;
      const gridOffsetY = mouse.y * -20;

      ctx.beginPath();
      for (let x = gridOffsetX % gridSize; x < canvas.width; x += gridSize) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
      }
      for (let y = gridOffsetY % gridSize; y < canvas.height; y += gridSize) {
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
      }
      ctx.stroke();

      // Render stars
      stars.forEach((star) => {
        // Star movement speed is modified by scroll velocity
        const velocityBoost = scrollVelocityRef.current * star.speed * 5;
        star.y += star.speed + velocityBoost;

        // Reset stars that go off the bottom
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
          star.originalX = star.x;
        }

        // Apply mouse parallax
        const parallaxX = mouse.x * -40 * star.size;
        const parallaxY = mouse.y * -40 * star.size;

        const renderX = star.x + parallaxX;
        const renderY = star.y + parallaxY;

        // Twinkle effect (randomly fluctuate opacity)
        let opacity = star.opacity;
        if (Math.random() > 0.95) {
          opacity = Math.random() * 0.4 + 0.3;
        }

        // Draw star
        ctx.fillStyle = star.color;
        ctx.globalAlpha = opacity;
        ctx.beginPath();
        ctx.arc(renderX, renderY, star.size + (velocityBoost * 0.2), 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.globalAlpha = 1.0;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    // Clean up
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none -z-50 bg-[#0B0F19]"
    />
  );
};
