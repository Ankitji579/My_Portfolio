import React, { useEffect, useRef } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    // Only run on non-touch devices
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

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }

      isMoving = true;
      clearTimeout(timeout);
      timeout = setTimeout(() => { isMoving = false; }, 100);
    };

    const animate = () => {
      // Lerp for smooth trailing of the ring
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      
      // Calculate velocity for jelly deformation
      velX = mouseX - ringX;
      velY = mouseY - ringY;
      
      // Rotation angle based on movement direction
      const angle = Math.atan2(velY, velX) * (180 / Math.PI);
      
      // Squeeze effect based on velocity magnitude
      const velocitySq = velX * velX + velY * velY;
      const squeeze = Math.min(Math.sqrt(velocitySq) * 0.004, 0.6); // Max 60% squeeze
      
      if (ringRef.current) {
        if (isMoving) {
          ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) rotate(${angle}deg) scaleX(${1 + squeeze}) scaleY(${1 - squeeze})`;
        } else {
          // Slowly return to perfect circle when stopped
          ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) rotate(0deg) scaleX(1) scaleY(1)`;
        }
      }
      
      animationFrame = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMouseMove);
    animationFrame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <>
      <div className="cursor-dot" ref={dotRef}></div>
      <div className="cursor-ring" ref={ringRef}></div>
    </>
  );
};

export default CustomCursor;
