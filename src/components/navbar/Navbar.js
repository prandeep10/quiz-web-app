import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogout, setShowLogout] = useState(false);

  useEffect(() => {
    const loggedInStatus = localStorage.getItem('loggedin') === 'true';
    setIsLoggedIn(loggedInStatus);
  }, []);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('loggedin');
    localStorage.removeItem('username');
    setIsLoggedIn(false);
    setShowLogout(false);
    closeNavbar();
  };

  const toggleLogout = () => {
    setShowLogout(!showLogout);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/" className='brand-name'>OVO.ORG.IN</Link>
        </div>
        <div className={isOpen ? "navbar-links-mobile" : "navbar-links"}>
          <Link to="/" onClick={closeNavbar}>Home</Link>
          <Link to="/challenges" onClick={closeNavbar}>Challenges</Link>
          <Link to="/discussion" onClick={closeNavbar}>Discussion</Link>
          <Link to="/about" onClick={closeNavbar}>About</Link>
          <Link to="/contact" onClick={closeNavbar}>Contact Us</Link>
          <Link to="/rewards" onClick={closeNavbar}>Rewards</Link>
        </div>
        <div className="navbar-view-menu">
          {isLoggedIn ? (
            <div className="profile-menu">
              <FaUserCircle onClick={toggleLogout} className="profile-icon" />
              {showLogout && (
                <div className="logout-popup">
                  <button onClick={handleLogout}>Logout</button>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login" onClick={closeNavbar} className='menu-btn'>Login</Link>
          )}
        </div>
        <div className="navbar-toggle">
          <button onClick={toggleNavbar}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
