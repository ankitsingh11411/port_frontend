import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Profile from './components/Profile.jsx';
import FloatIcons from './components/Floaticons.jsx';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <Router>
      <div className="app-container">
        <FloatIcons theme={theme} toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
