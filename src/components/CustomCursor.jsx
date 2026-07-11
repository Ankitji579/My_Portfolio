import React, { useEffect, useRef, useState } from 'react';
import { playTick } from '../utils/sounds';
import './CustomCursor.css';

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let velX = 0;
    let velY = 0;
    let isMoving = false;
    let timeout;
    let animationFrame;
    
    // Magnetic target
    let targetElement = null;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      // If magnetic, snap exactly to center
      if (targetElement) {
        const rect = targetElement.getBoundingClientRect();
        mouseX = rect.left + rect.width / 2;
        mouseY = rect.top + rect.height / 2;
      }
      
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }

      isMoving = true;
      clearTimeout(timeout);
      timeout = setTimeout(() => { isMoving = false; }, 100);
    };

    const onMouseDown = () => {
      playTick();
      if (ringRef.current) {
        ringRef.current.style.transform += ' scale(0.8)';
      }
    };

    const animate = () => {
      ringX += (mouseX - ringX) * (targetElement ? 0.3 : 0.15); // Faster snap if magnetic
      ringY += (mouseY - ringY) * (targetElement ? 0.3 : 0.15);
      
      velX = mouseX - ringX;
      velY = mouseY - ringY;
      
      const angle = Math.atan2(velY, velX) * (180 / Math.PI);
      const velocitySq = velX * velX + velY * velY;
      const squeeze = targetElement ? 0 : Math.min(Math.sqrt(velocitySq) * 0.004, 0.6);
      
      const scale = targetElement ? 2 : 1;
      
      if (ringRef.current) {
        if (isMoving || targetElement) {
          ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) rotate(${angle}deg) scaleX(${scale + squeeze}) scaleY(${scale - squeeze})`;
        } else {
          ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) rotate(0deg) scaleX(${scale}) scaleY(${scale})`;
        }
      }
      
      animationFrame = requestAnimationFrame(animate);
    };

    const onMouseOver = (e) => {
      const interactive = e.target.closest('a, button, input, .project-card');
      if (interactive) {
        setIsHovering(true);
        // Only fully magnetic snap for small buttons/icons
        const rect = interactive.getBoundingClientRect();
        if (rect.width < 100 && rect.height < 100) {
          targetElement = interactive;
        }
      }
    };

    const onMouseOut = (e) => {
      const interactive = e.target.closest('a, button, input, .project-card');
      if (interactive) {
        setIsHovering(false);
        targetElement = null;
        
        // Ensure mouse returns to actual pointer immediately upon un-snap
        mouseX = e.clientX;
        mouseY = e.clientY;
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseover', onMouseOver);
    window.addEventListener('mouseout', onMouseOut);
    animationFrame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseover', onMouseOver);
      window.removeEventListener('mouseout', onMouseOut);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <>
      <div className={`cursor-dot ${isHovering ? 'hovering' : ''}`} ref={dotRef}></div>
      <div className={`cursor-ring ${isHovering ? 'hovering' : ''}`} ref={ringRef}></div>
    </>
  );
};

export default CustomCursor;
