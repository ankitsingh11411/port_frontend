import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Welcome and a good day</div>
      <ul className="nav-links">
        <li>
          <a href="/">Profile</a>
        </li>
        <li>
          <a href="/projects">My Work</a>
        </li>
        <li>
          <a href="/skills">Skills</a>
        </li>
        <li>
          <a href="/resume">Resume</a>
        </li>
        <li>
          <a href="/contact">Contact Me</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
