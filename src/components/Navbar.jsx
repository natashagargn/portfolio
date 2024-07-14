import React, { useState } from 'react';
import '../index.css'; // Adjust the import path as necessary
import { NavLink, Link } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="container nav_bar" data-aos="fade-down" data-aos-duration="1000">
      <div className="row nav_bar">
        <div className="col-6 left nav_items">
          <div className="logo_NG">
            <h1 className="NG">NG</h1>
          </div>
          <h6 className="logo">Natasha Garg</h6>
        </div>
        <div className="col-6 right nav_items">
          <div className="hamburger" onClick={toggleMenu}>
            {menuOpen ? '✖' : '☰'} {/* Unicode characters for hamburger and close icons */}
          </div>
          <div className={`menu ${menuOpen ? 'show' : ''}`}>
            <NavLink to="/" className={({isActive}) => `nav_items ${isActive ? "text-warning" : "text-light"}`}>Home</NavLink>
            <NavLink to="/education" className={({isActive}) => `nav_items ${isActive ? "text-warning" : "text-light"}`}>Education</NavLink>
            <NavLink to="/skills" className={({isActive}) => `nav_items ${isActive ? "text-warning" : "text-light"}`}>Skills</NavLink>
            <NavLink to="/project" className={({isActive}) => `nav_items ${isActive ? "text-warning" : "text-light"}`}>Projects</NavLink>
            <NavLink to="/certification" className={({isActive}) => `nav_items ${isActive ? "text-warning" : "text-light"}`}>Certifications</NavLink>
            <NavLink to="/contact" className={({isActive}) => `nav_items ${isActive ? "text-warning" : "text-light"}`}>Contact</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;