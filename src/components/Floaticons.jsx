import React, { useState } from 'react';
import ContactModal from './ContactModal';
import styles from './Floaticons.module.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function FloatIcons() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  return (
    <div className={styles.social}>
      <a onClick={handleModalOpen} className={styles.contactIcon}>
        <i className="fas fa-envelope"></i>
      </a>
      <a
        href="https://github.com/ankitsingh11411"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fab fa-github"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/ankit-singh-46492a174/"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fab fa-linkedin"></i>
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
        <i className="fab fa-instagram"></i>
      </a>

      <ContactModal isOpen={isModalOpen} onClose={handleModalClose} />
    </div>
  );
}

export default FloatIcons;
