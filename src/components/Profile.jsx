import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Avatar,
  Typography,
  Card,
  Tag,
  Button,
  Empty,
  Row,
  Col,
  Modal,
} from 'antd';
import styles from './Profile.module.css';
import mypic from '/mypic.jpg';
import projects from '../assets/Project.js';

const { Paragraph } = Typography;
const { Meta } = Card;

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
              <Col key={index} xs={24} sm={12} md={12} lg={12} xl={12}>
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
                        <div className={styles.card_title_overlay}>
                          {project.title}
                        </div>
                      </div>
                    }
                    style={{
                      height: '100%',
                      borderRadius: '15px',
                      overflow: 'hidden',
                    }}
                    onClick={() => showModal(project)}
                  />
                </motion.div>
              </Col>
            ))}
          </Row>
        ) : (
          <Empty description="No projects available" />
        )}
      </div>

      <Modal
        title={selectedProject?.title}
        visible={isModalVisible}
        onCancel={handleModalClose}
        footer={null}
        centered
        width="80%"
        bodyStyle={{
          padding: '2rem',
          backgroundColor: '#1a1a1a',
          color: 'white',
          borderRadius: '15px',
        }}
      >
        {selectedProject && (
          <>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className={styles.modal_image}
            />
            <div className={styles.project_skills}>
              {selectedProject.skills.map((skill, index) => (
                <Tag color="cyan" key={index}>
                  {skill}
                </Tag>
              ))}
            </div>
            <p className={styles.project_description}>
              {selectedProject.description}
            </p>
            <div className={styles.project_links}>
              {selectedProject.githubLink && (
                <Button
                  type="link"
                  href={selectedProject.githubLink}
                  target="_blank"
                  className={styles.link_button}
                >
                  GitHub
                </Button>
              )}
              {selectedProject.deployedLink && (
                <Button
                  type="link"
                  href={selectedProject.deployedLink}
                  target="_blank"
                  className={styles.link_button}
                >
                  Live Demo
                </Button>
              )}
            </div>
          </>
        )}
      </Modal>
    </section>
  );
}

export default Profile;
