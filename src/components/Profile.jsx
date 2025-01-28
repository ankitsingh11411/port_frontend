import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Avatar, Typography, Row, Col, Empty } from 'antd';
import styles from './Profile.module.css';
import mypic from '/mypic.jpg';
import projects from '../assets/Project.js';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

const { Paragraph } = Typography;

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

function Profile() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const showModal = (project) => {
    setSelectedProject(project);
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
    setSelectedProject(null);
  };

  return (
    <section className={styles.profile}>
      <motion.div
        className={styles.animated_background}
        variants={backgroundVariants}
        animate="animate"
      />
      <div className={styles.avatar_wrapper}>
        <Avatar src={mypic} size={140} />
      </div>

      <Paragraph className={styles.profile_description}>
        I am a full-stack developer with a penchant for engineering elegant and
        minimalistic frontend designs...
      </Paragraph>

      <div className={styles.project_cards}>
        {projects.length > 0 ? (
          <Row gutter={[32, 32]} justify="center">
            {projects.map((project, index) => (
              <Col key={index} xs={24} sm={12} md={12} lg={12} xl={12}>
                <ProjectCard project={project} onClick={showModal} />
              </Col>
            ))}
          </Row>
        ) : (
          <Empty description="No projects available" />
        )}
      </div>

      <ProjectModal
        project={selectedProject}
        visible={isModalVisible}
        onClose={handleModalClose}
      />
    </section>
  );
}

export default Profile;
