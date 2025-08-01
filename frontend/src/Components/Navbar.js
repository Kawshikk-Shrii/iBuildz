import React, { useEffect, useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const getSystemTheme = () =>
    window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || getSystemTheme();
  });

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="navbar">
      <span className="logo">ibuildz</span>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>
      <button
        className="toggle-icon"
        onClick={toggleTheme}
        title="Toggle Theme"
        style={{ background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer' }}
      >
        {theme === 'dark' ? '☀️' : '🌙'}
      </button>
    </div>
  );
};

export default Navbar;
