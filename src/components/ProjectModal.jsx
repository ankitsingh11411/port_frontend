import React from 'react';
import { Modal, Button, Tag } from 'antd';
import styles from './ProjectModal.module.css';

const ProjectModal = ({ project, visible, onClose }) => {
  return (
    <Modal
      title=""
      visible={visible}
      onCancel={onClose}
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
      {project && (
        <>
          <img
            src={project.image}
            alt={project.title}
            className={styles.modal_image}
          />
          <h2 className={styles.project_title}>{project.title}</h2>
          <div className={styles.project_skills}>
            {project.skills.map((skill, index) => (
              <Tag color="cyan" key={index}>
                {skill}
              </Tag>
            ))}
          </div>
          <p className={styles.project_description}>{project.description}</p>
          <div className={styles.project_links}>
            {project.githubLink && (
              <Button
                type="link"
                href={project.githubLink}
                target="_blank"
                className={styles.link_button}
              >
                GitHub
              </Button>
            )}
            {project.deployedLink && (
              <Button
                type="link"
                href={project.deployedLink}
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
  );
};

export default ProjectModal;
