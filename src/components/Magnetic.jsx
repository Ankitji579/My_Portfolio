import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const Magnetic = ({ children }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    
    // Distance from the center of the element
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    
    // Magnetic strength (pull factor)
    const pullFactor = 0.35;
    setPosition({ x: x * pullFactor, y: y * pullFactor });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x, y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
      style={{ display: 'inline-block' }}
    >
      {children}
    </motion.div>
  );
};

export default Magnetic;
