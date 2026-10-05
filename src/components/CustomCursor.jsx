// ============================================
// CUSTOM CURSOR COMPONENT
// ============================================

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import './CustomCursor.css';

export const CustomCursor = ({ enabled = true }) => {
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  const posRef = useRef({ x: 0, y: 0 });
  const followerPosRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef(null);

  useEffect(() => {
    if (!enabled || typeof window === 'undefined') return;

    // Check if device supports hover
    const hasHover = window.matchMedia('(hover: hover)').matches;
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (!hasHover || isMobile) return;

    setVisible(true);

    const cursor = cursorRef.current;
    const follower = followerRef.current;

    // Mouse move handler
    const handleMouseMove = (e) => {
      posRef.current.x = e.clientX;
      posRef.current.y = e.clientY;
      
      if (cursor) {
        cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };

    // Mouse down/up
    const handleMouseDown = () => setClicking(true);
    const handleMouseUp = () => setClicking(false);

    // Hover detection
    const handleMouseOver = (e) => {
      const target = e.target.closest('a, button, .hover-target, .project-card, .skill-pill, .timeline-card, .education-card, .contact-item, .social-link');
      if (target) setHovering(true);
    };
    const handleMouseOut = (e) => {
      const target = e.target.closest('a, button, .hover-target, .project-card, .skill-pill, .timeline-card, .education-card, .contact-item, .social-link');
      if (target) setHovering(false);
    };

    // Animation loop for follower
    const animateFollower = () => {
      if (follower) {
        // Smooth follow with easing
        followerPosRef.current.x += (posRef.current.x - followerPosRef.current.x) * 0.15;
        followerPosRef.current.y += (posRef.current.y - followerPosRef.current.y) * 0.15;
        
        follower.style.transform = `translate(${followerPosRef.current.x}px, ${followerPosRef.current.y}px)`;
      }
      animationRef.current = requestAnimationFrame(animateFollower);
    };

    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseOver, true);
    document.addEventListener('mouseout', handleMouseOut, true);
    animateFollower();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseOver, true);
      document.removeEventListener('mouseout', handleMouseOut, true);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [enabled]);

  if (!visible) return null;

  return (
    <>
      <motion.div
        ref={cursorRef}
        className="custom-cursor"
        animate={{ 
          scale: clicking ? 0.8 : hovering ? 1.5 : 1,
          opacity: hovering ? 0.5 : 1
        }}
        transition={{ duration: 0.15, ease: 'easeOut' }}
        style={{ pointerEvents: 'none', zIndex: 9999 }}
      >
        <div className="cursor-dot" />
        <div className="cursor-ring" />
      </motion.div>
      <motion.div
        ref={followerRef}
        className="custom-cursor-follower"
        style={{ pointerEvents: 'none', zIndex: 9998 }}
      >
        <div className="follower-ring" />
      </motion.div>
      <style jsx>{`
        .custom-cursor {
          position: fixed;
          top: 0;
          left: 0;
          width: 20px;
          height: 20px;
          transform: translate(-50%, -50%);
          pointer-events: none;
          mix-blend-mode: difference;
        }
        .cursor-dot {
          width: 8px;
          height: 8px;
          background: var(--accent);
          border-radius: 50%;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        .cursor-ring {
          width: 20px;
          height: 20px;
          border: 2px solid var(--accent);
          border-radius: 50%;
          position: absolute;
          top: 0;
          left: 0;
        }
        .custom-cursor-follower {
          position: fixed;
          top: 0;
          left: 0;
          width: 40px;
          height: 40px;
          transform: translate(-50%, -50%);
          pointer-events: none;
        }
        .follower-ring {
          width: 40px;
          height: 40px;
          border: 1px solid var(--accent);
          border-radius: 50%;
          opacity: 0.4;
        }
      `}</style>
    </>
  );
};