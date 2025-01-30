import React from 'react';
import { motion } from 'framer-motion';
import { Card } from 'antd';
import styles from './ProjectCard.module.css';

const ProjectCard = ({ project, onClick }) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.03,
        boxShadow: '0 10px 30px rgba(255, 255, 255, 0.1)',
      }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
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
          borderRadius: '12px',
          overflow: 'hidden',
          background: 'rgba(255, 255, 255, 0.08)',
          backdropFilter: 'blur(15px)',
          WebkitBackdropFilter: 'blur(15px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          boxShadow: '0 4px 10px rgba(255, 255, 255, 0.1)',
        }}
        onClick={() => onClick(project)}
      />
    </motion.div>
  );
};

export default ProjectCard;
