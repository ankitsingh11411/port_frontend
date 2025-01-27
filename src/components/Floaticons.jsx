import React from 'react';
import styles from './Floaticons.module.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function FloatIcons() {
  return (
    <div className={styles.social}>
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
    </div>
  );
}

export default FloatIcons;
