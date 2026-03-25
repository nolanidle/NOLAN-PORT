"use client";

import { useEffect, useRef } from "react";

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const particles: { x: number; y: number; originX: number; originY: number; size: number; color: string }[] = [];
    const spacing = 35;
    const repsX = Math.floor(width / spacing);
    const repsY = Math.floor(height / spacing);

    for (let i = 0; i <= repsX; i++) {
        for(let j = 0; j <= repsY; j++) {
            particles.push({
                x: i * spacing,
                y: j * spacing,
                originX: i * spacing,
                originY: j * spacing,
                size: Math.random() * 1.5 + 0.5,
                color: `rgba(26, 26, 26, 0.4)`
            });
        }
    }

    let mouse = { x: -1000, y: -1000 };
    const maxDistance = 150;

    const handleMouseMove = (e: MouseEvent) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    };
    
    const handleMouseLeave = () => {
        mouse.x = -1000;
        mouse.y = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseLeave);

    let animationFrameId: number;

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      const isDark = document.documentElement.classList.contains('dark');
      const baseColor = isDark ? 'rgba(0, 240, 255, 0.5)' : 'rgba(26, 26, 26, 0.4)';

      particles.forEach((p) => {
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < maxDistance) {
            const force = (maxDistance - dist) / maxDistance;
            const angle = Math.atan2(dy, dx);
            const repelX = Math.cos(angle) * force * 50;
            const repelY = Math.sin(angle) * force * 50;
            p.x -= repelX;
            p.y -= repelY;
        } else {
             // add some subtle noise to origin when idle
             p.x += (Math.random() - 0.5) * 0.5;
             p.y += (Math.random() - 0.5) * 0.5;
        }

        // spring back to origin
        p.x += (p.originX - p.x) * 0.05;
        p.y += (p.originY - p.y) * 0.05;

        ctx.fillStyle = baseColor;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      
      // We should ideally re-scatter particles here, but for simplicity we let them stay
    };

    window.addEventListener('resize', handleResize);
    return () => {
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseout', handleMouseLeave);
        cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none opacity-50 transition-opacity duration-1000"
    />
  );
}
