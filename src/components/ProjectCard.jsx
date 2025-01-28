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
            <div className={styles.card_title_overlay}>{project.title}</div>
          </div>
        }
        style={{
          height: '100%',
          borderRadius: '15px',
          overflow: 'hidden',
        }}
        onClick={() => onClick(project)}
      />
    </motion.div>
  );
};

export default ProjectCard;
