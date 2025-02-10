import React from 'react';
import { motion } from 'framer-motion';
import styles from './SkillsCarousel.module.css';

const skills = [
  'React.js',
  'Node.js',
  'MongoDB',
  'Express.js',
  'JavaScript',
  'Framer Motion',
  'Ant Design',
  'vercel',
  'github',
  'Nodemailer',
  'React Router',
  'Chess.js',
  'React Chessboard',
  'HTML',
  'CSS',
  'SCSS',
  'Modular Css',
  'Redux',
  'Git',
  'AWS',
];

function SkillsCarousel() {
  const repeatedSkills = [...skills, ...skills];

  return (
    <div className={styles.skills_container}>
      <motion.div
        className={styles.skills_wrapper}
        animate={{ x: ['0%', '-100%'] }}
        transition={{ ease: 'linear', duration: 20, repeat: Infinity }}
      >
        {repeatedSkills.map((skill, index) => (
          <span key={index} className={styles.skill_item}>
            {skill}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default SkillsCarousel;
