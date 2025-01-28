import React from 'react';
import { motion } from 'framer-motion';
import styles from './AnimatedBackground.module.css';

const backgroundVariants = {
  animate: {
    opacity: [0.1, 0.3, 0.3, 0.3, 0.1],
    scale: [0.3, 0.7, 1.2, 0.7, 0.3],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: 'loop',
      ease: 'easeInOut',
    },
  },
};

function AnimatedBackground() {
  return (
    <motion.div
      className={styles.animated_background}
      variants={backgroundVariants}
      animate="animate"
    />
  );
}

export default AnimatedBackground;
