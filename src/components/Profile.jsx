import React from 'react';
import { motion } from 'framer-motion';
import styles from './Profile.module.css';
import mypic from '/mypic.jpg';
import projects from '../assets/Project.js';

function Profile() {
  return (
    <section className={styles.profile}>
      <img src={mypic} alt="Profile" className={styles['profile-image']} />
      <p className={styles['profile-description']}>
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
      </p>

      <div className={styles['project-cards']}>
        {projects.length > 0 ? (
          projects.map((project, index) => (
            <motion.div
              key={index}
              className={styles['project-card']}
              whileHover={{ rotateY: 180 }}
              transition={{ duration: 1 }}
            >
              <div className={styles['project-card-inner']}>
                <div className={styles['project-card-front']}>
                  <h3>{project.title}</h3>
                  <img
                    src={project.image}
                    alt={project.title}
                    className={styles['project-image']}
                  />
                  <ul className={styles['project-skills']}>
                    {project.skills.map((skill, skillIndex) => (
                      <li key={skillIndex}>{skill}</li>
                    ))}
                  </ul>
                </div>
                <div className={styles['project-card-back']}>
                  <p>{project.description}</p>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                  {' | '}
                  <a
                    href={project.deployedLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))
        ) : (
          <p>No projects available.</p>
        )}
      </div>
    </section>
  );
}

export default Profile;
