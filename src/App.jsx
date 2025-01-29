import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Profile from './components/Profile';
import FloatIcons from './components/Floaticons';
import AnimatedBackground from './components/AnimatedBackground';

function App() {
  return (
    <Router>
      <div className="app-container">
        <FloatIcons />
        <AnimatedBackground />
        <Routes>
          <Route path="/" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
