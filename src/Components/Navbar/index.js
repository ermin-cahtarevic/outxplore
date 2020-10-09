import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import './navbar.css';

const Navbar = () => {
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 20) {
      document.querySelector('.navbar').classList.add('nav-scroll');
    } else {
      document.querySelector('.navbar').classList.remove('nav-scroll');
    }
  }

  return (
    <nav className="navbar">
      <div className="nav-wrap">
        <div className="logo"><Link to="/">outxplore</Link></div>
        <div>
          <ul className="nav-list">
            <li><Link to="#">Become a Host</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
            <li><Link to="/login">Log In</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
