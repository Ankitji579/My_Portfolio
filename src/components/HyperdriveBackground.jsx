import React, { useRef, useEffect } from 'react';

const HyperdriveBackground = ({ rpm }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    let width, height;
    let stars = [];
    const numStars = 800;
    
    let animationFrameId;

    const init = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;

      stars = [];
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * 2000 - 1000,
          y: Math.random() * 2000 - 1000,
          z: Math.random() * 2000,
          pz: Math.random() * 2000
        });
      }
    };

    init();

    window.addEventListener('resize', init);

    const animate = () => {
      // Background base
      ctx.fillStyle = 'rgba(3, 7, 18, 0.2)'; // Fades old frames to create trail effect
      ctx.fillRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;
      
      // Calculate speed based on RPM (0-100)
      // Normal speed = 2, Hyperdrive (100 RPM) = 60
      const baseSpeed = 1;
      const hyperSpeed = Math.max(0, (rpm / 100) * 80);
      const speed = baseSpeed + hyperSpeed;

      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        
        star.pz = star.z;
        star.z -= speed;

        if (star.z < 1) {
          star.x = Math.random() * 2000 - 1000;
          star.y = Math.random() * 2000 - 1000;
          star.z = 2000;
          star.pz = 2000;
        }

        const sx = (star.x / star.z) * cx + cx;
        const sy = (star.y / star.z) * cy + cy;
        
        const px = (star.x / star.pz) * cx + cx;
        const py = (star.y / star.pz) * cy + cy;

        // Draw star
        const size = Math.max(0.1, (2000 - star.z) / 500);
        
        // Colors get more intense (blue/purple) at high speeds
        const alpha = Math.min(1, (2000 - star.z) / 1000);
        let color = `rgba(255, 255, 255, ${alpha})`;
        
        if (speed > 20) {
           const hue = 220 + Math.random() * 60; // Blue to purple
           color = `hsla(${hue}, 100%, 70%, ${alpha})`;
        }

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = size;
        ctx.moveTo(px, py);
        ctx.lineTo(sx, sy);
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', init);
      cancelAnimationFrame(animationFrameId);
    };
  }, [rpm]);

  return (
    <canvas 
      ref={canvasRef} 
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
        mixBlendMode: 'screen'
      }}
    />
  );
};

export default HyperdriveBackground;
