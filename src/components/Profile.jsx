import React, { useState } from 'react';
import { Avatar, Typography, Row, Col, Empty } from 'antd';
import styles from './Profile.module.css';
import mypic from '/mypic.jpg';
import projects from '../assets/Project.js';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import AnimatedBackground from './AnimatedBackground';

const { Paragraph } = Typography;

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
      <AnimatedBackground />
      <div className={styles.avatar_wrapper}>
        <Avatar src={mypic} size={100} />
      </div>
      <Paragraph className={styles.profile_description}>
        I am a full-stack developer with a penchant for engineering elegant and
        minimalistic frontend designs. My proficiency spans crafting seamless
        animations, immersive parallax effects, and intuitive user interfaces,
        paired with expertise in managing APIs and optimizing
        backend-to-frontend integrations for robust and dynamic web
        applications. <br /> Renowned for my articulate communication skills, I
        excel in fostering seamless collaboration and delivering excellence
        across every project phase. <br />
        Outside the digital sphere, I am an automotive aficionado with deep
        knowledge of cars, motorcycles, high-performance racing, advanced
        modifications, and the intricate science of aerodynamics. This
        harmonious blend of technical prowess and creative ingenuity drives my
        ability to craft solutions that are both functional and visually
        captivating.
      </Paragraph>
      <div className={styles.project_cards}>
        {projects.length > 0 ? (
          <Row gutter={[32, 32]} justify="center">
            {projects.map((project, index) => (
              <Col key={index} xs={24} sm={12} md={12} lg={6} xl={6}>
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
