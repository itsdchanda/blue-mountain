import React, { useEffect, useRef, ReactNode } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  className?: string;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({ 
  children, 
  delay = 0, 
  duration = 0.8, 
  y = 50,
  className = ""
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        hidden: { opacity: 0, y },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: {
            duration,
            delay,
            ease: [0.16, 1, 0.3, 1]
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;