import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
  ``;
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navlinks}>
        <li>
          <NavLink exact to="/" activeClassName={styles.active}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/resume" activeClassName={styles.active}>
            Resume
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName={styles.active}>
            Contact Me
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
