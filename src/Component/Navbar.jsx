import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-section">
        <img src="https://via.placeholder.com/100x50" alt="Logo" className="logo" />
        <span className="tagline">small steps • big change</span>
      </div>
      <div className="nav-links">
        <a href="#">City</a>
        <a href="#">Our partners</a>
        <a href="#">About us</a>
        <a href="#">Our solution</a>
        <a href="#">Become a partner</a>
        <a href="#">Contact</a>
        <span className="language-select">German (DE) ▼</span>
        <a href="#">Log In</a>
      </div>
    </nav>
  );
};

export default Navbar;