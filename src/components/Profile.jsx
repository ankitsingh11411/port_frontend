import React, { useState } from 'react';
import { Avatar, Typography, Row, Col, Card, Empty } from 'antd';
import { motion } from 'framer-motion';
import { PhoneOutlined, MailOutlined } from '@ant-design/icons';
import styles from './Profile.module.css';
import mypic from '/mypic.jpg';
import projects from '../assets/Project.js';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import SkillsCarousel from './SkillsCarousel';

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className={styles.profile}>
      <Row gutter={[30, 30]} align="middle" justify="center">
        {/* Profile Avatar Section */}
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

        {/* Profile Details Section */}
        <Col xs={24} sm={24} md={14} lg={12} xl={10}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <Card className={styles.profile_card} bordered={false}>
              <Title level={2} className={styles.title}>
                Ankit Singh
              </Title>

              {/* Contact Info */}
              <motion.div
                variants={textVariants}
                className={styles.contact_info}
              >
                <Row justify="center" align="middle" gutter={[20, 20]}>
                  <Col>
                    <a href="tel:+918825388719" className={styles.contact_link}>
                      <PhoneOutlined className={styles.icon} /> +91 8825388719
                    </a>
                  </Col>
                  <Col>
                    <a
                      href="mailto:akxxs22@gmail.com"
                      className={styles.contact_link}
                    >
                      <MailOutlined className={styles.icon} /> akxxs22@gmail.com
                    </a>
                  </Col>
                </Row>
              </motion.div>

              {/* About & Skills Description */}
              <motion.div variants={textVariants}>
                <Paragraph className={styles.profile_description}>
                  I am a full-stack developer with a penchant for engineering
                  elegant and minimalistic frontend designs.
                </Paragraph>
                <Paragraph className={styles.profile_description}>
                  My proficiency spans crafting seamless animations, immersive
                  parallax effects, and intuitive user interfaces, paired with
                  expertise in managing APIs and optimizing backend-to-frontend
                  integrations for robust and dynamic web applications.
                </Paragraph>
                <Paragraph className={styles.profile_description}>
                  Renowned for my articulate communication skills, I excel in
                  fostering seamless collaboration and delivering excellence
                  across every project phase.
                </Paragraph>
                <Paragraph className={styles.profile_description}>
                  Outside the digital sphere, I am an automotive aficionado with
                  deep knowledge of cars, motorcycles, high-performance racing,
                  advanced modifications, and the intricate science of
                  aerodynamics.
                </Paragraph>
                {/* Download Resume Button */}
                <motion.div
                  variants={textVariants}
                  className={styles.download_container}
                >
                  <motion.button
                    className={styles.download_resume_button}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => window.open('/ASR mern.pdf', '_blank')}
                  >
                    Download Resume
                  </motion.button>
                </motion.div>
              </motion.div>
            </Card>
          </motion.div>
        </Col>
        <SkillsCarousel />
        <h1>Here, have a look at my works !</h1>
      </Row>

      {/* Project Section */}
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
