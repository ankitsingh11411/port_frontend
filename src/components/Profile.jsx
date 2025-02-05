import React, { useState } from 'react';
import { Avatar, Typography, Row, Col, Empty, Card } from 'antd';
import { motion } from 'framer-motion';
import styles from './Profile.module.css';
import mypic from '/mypic.jpg';
import projects from '../assets/Project.js';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

const { Title, Paragraph } = Typography;

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
      <Row
        gutter={[30, 30]}
        align="middle"
        justify="center"
        className={styles.profile_row}
      >
        <Col
          xs={24}
          sm={24}
          md={10}
          lg={8}
          xl={6}
          className={styles.avatar_col}
        >
          <motion.div
            className={styles.avatar_wrapper}
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
          >
            <div className={styles.glow_ring}></div>
            <Avatar src={mypic} size={120} className={styles.avatar} />
          </motion.div>
        </Col>

        <Col xs={24} sm={24} md={14} lg={12} xl={10}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Card className={styles.profile_card} bordered={false}>
              <Title level={2} className={styles.title}>
                Ankit Singh
              </Title>
              <Paragraph className={styles.profile_description}>
                I am a full-stack developer with a penchant for engineering
                elegant and minimalistic frontend designs. My proficiency spans
                crafting seamless animations, immersive parallax effects, and
                intuitive user interfaces, paired with expertise in managing
                APIs and optimizing backend-to-frontend integrations for robust
                and dynamic web applications.
                <br />
                Renowned for my articulate communication skills, I excel in
                fostering seamless collaboration and delivering excellence
                across every project phase.
                <br />
                Outside the digital sphere, I am an automotive aficionado with
                deep knowledge of cars, motorcycles, high-performance racing,
                advanced modifications, and the intricate science of
                aerodynamics.
              </Paragraph>
            </Card>
          </motion.div>
        </Col>
      </Row>

      <div className={styles.project_cards}>
        {projects.length > 0 ? (
          <Row gutter={[45, 45]} justify="center">
            {projects.map((project, index) => (
              <Col key={index} xs={24} sm={12} md={12} lg={6} xl={6}>
                <motion.div whileHover={{ scale: 1.05 }}>
                  <ProjectCard project={project} onClick={showModal} />
                </motion.div>
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
