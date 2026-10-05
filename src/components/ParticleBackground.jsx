// ============================================
// PARTICLE BACKGROUND - Canvas-based
// ============================================

import { useEffect, useRef, useMemo } from 'react';

const PARTICLE_COUNT = 80;
const CONNECTION_DISTANCE = 150;
const MOUSE_INFLUENCE = 200;

export const ParticleBackground = ({ 
  color = 'var(--accent)', 
  opacity = 0.6,
  speed = 0.3,
  className = '' 
}) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: null, y: null, active: false });

  // Initialize particles
  const initParticles = (canvas) => {
    const { width, height } = canvas.getBoundingClientRect();
    const ctx = canvas.getContext('2d');
    
    particlesRef.current = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * speed,
      vy: (Math.random() - 0.5) * speed,
      radius: Math.random() * 2 + 1,
      baseRadius: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.2
    }));

    // Resize canvas to actual size
    canvas.width = width * window.devicePixelRatio;
    canvas.height = height * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
  };

  // Animation loop
  const animate = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const { width, height } = canvas.getBoundingClientRect();
    
    // Clear
    ctx.clearRect(0, 0, width, height);
    
    // Update and draw particles
    particlesRef.current.forEach((p, i) => {
      // Mouse influence
      if (mouseRef.current.active) {
        const dx = mouseRef.current.x - p.x;
        const dy = mouseRef.current.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < MOUSE_INFLUENCE) {
          const force = (MOUSE_INFLUENCE - dist) / MOUSE_INFLUENCE;
          p.vx += dx * force * 0.02;
          p.vy += dy * force * 0.02;
          p.radius = p.baseRadius * (1 + force);
        } else {
          p.radius = p.baseRadius;
        }
      }

      // Update position
      p.x += p.vx;
      p.y += p.vy;

      // Bounce off edges
      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;
      
      // Clamp
      p.x = Math.max(0, Math.min(width, p.x));
      p.y = Math.max(0, Math.min(height, p.y));

      // Draw particle
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(16, 185, 129, ${p.opacity * opacity})`;
      ctx.fill();
    });

    // Draw connections
    ctx.strokeStyle = `rgba(16, 185, 129, ${0.1 * opacity})`;
    ctx.lineWidth = 0.5;

    for (let i = 0; i < particlesRef.current.length; i++) {
      for (let j = i + 1; j < particlesRef.current.length; j++) {
        const p1 = particlesRef.current[i];
        const p2 = particlesRef.current[j];
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < CONNECTION_DISTANCE) {
          const alpha = (1 - dist / CONNECTION_DISTANCE) * 0.2 * opacity;
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(16, 185, 129, ${alpha})`;
          ctx.stroke();
        }
      }
    }

    animationRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Wait for layout
    const init = () => {
      initParticles(canvas);
      animate();
    };

    if (canvas.offsetWidth > 0) {
      init();
    } else {
      canvas.addEventListener('load', init, { once: true });
    }

    // Mouse tracking
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
      mouseRef.current.active = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    // Resize handler
    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        if (canvasRef.current) initParticles(canvasRef.current);
      }, 100);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [speed, opacity]);

  return (
    <canvas
      ref={canvasRef}
      className={`particle-canvas ${className}`}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0
      }}
      aria-hidden="true"
    />
  );
};