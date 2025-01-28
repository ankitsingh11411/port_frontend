import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Resume from './components/Resume';
import Contact from './components/Contact';
import FloatIcons from './components/Floaticons';
import AnimatedBackground from './components/AnimatedBackground';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <FloatIcons />
        <AnimatedBackground />
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
