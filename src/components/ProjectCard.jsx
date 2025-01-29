import React from 'react';
import { motion } from 'framer-motion';
import { Card } from 'antd';
import styles from './ProjectCard.module.css';

const ProjectCard = ({ project, onClick }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      animate={{ scale: [1, 1.02, 1] }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: 'reverse',
      }}
      className={styles.card_container}
    >
      <Card
        hoverable
        cover={
          <div className={styles.card_image_wrapper}>
            <img
              src={project.image}
              alt={project.title}
              className={styles.card_image}
            />
            <div className={styles.card_title}>{project.title}</div>
          </div>
        }
        bodyStyle={{ display: 'none' }}
        style={{
          height: '100%',
          borderRadius: '15px',
          overflow: 'hidden',
          background: 'transparent',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
        }}
        onClick={() => onClick(project)}
      />
    </motion.div>
  );
};

export default ProjectCard;
