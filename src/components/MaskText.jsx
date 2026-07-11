import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './MaskText.css';

const MaskText = ({ phrase, className = "", delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-10%' });

  const animation = {
    initial: { y: '105%' },
    enter: (i) => ({
      y: '0%',
      transition: {
        duration: 0.85,
        ease: [0.215, 0.61, 0.355, 1], // Custom cubic-bezier for signature smooth fluid slide
        delay: delay + i * 0.05
      }
    })
  };

  return (
    <div ref={ref} className={`mask-text-container ${className}`}>
      {phrase.split(' ').map((word, index) => {
        return (
          <div key={index} className="mask-word-wrapper">
            <motion.span
              custom={index}
              variants={animation}
              initial="initial"
              animate={isInView ? 'enter' : 'initial'}
              className="mask-word"
            >
              {word}
            </motion.span>
          </div>
        );
      })}
    </div>
  );
};

export default MaskText;
