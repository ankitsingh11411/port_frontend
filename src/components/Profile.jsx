import React from 'react';
import { motion } from 'framer-motion';
import { Avatar, Typography, Card, Tag, Button, Empty, Row, Col } from 'antd';
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
          <Row gutter={[16, 16]} justify="center">
            {projects.map((project, index) => (
              <Col key={index} xs={24} sm={12} md={8} lg={6}>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: 'reverse',
                  }}
                >
                  <Card
                    hoverable
                    cover={<img src={project.image} alt={project.title} />}
                    style={{
                      height: '35rem',
                      borderRadius: '15px',
                      overflow: 'hidden',
                    }}
                  >
                    <Meta
                      title={project.title}
                      description={
                        <>
                          <div className={styles.project_skills}>
                            {project.skills.map((skill, skillIndex) => (
                              <Tag color="cyan" key={skillIndex}>
                                {skill}
                              </Tag>
                            ))}
                          </div>
                          <p>{project.description}</p>
                        </>
                      }
                    />
                    <div className={styles.project_links}>
                      <Button
                        type="link"
                        href={project.githubLink}
                        target="_blank"
                      >
                        GitHub
                      </Button>
                      <Button
                        type="link"
                        href={project.deployedLink}
                        target="_blank"
                      >
                        Live Demo
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        ) : (
          <Empty description="No projects available" />
        )}
      </div>
    </section>
  );
}

export default Profile;
