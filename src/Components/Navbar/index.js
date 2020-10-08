import React from 'react';
import { Link } from 'react-router-dom';

import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-wrap">
        <div className="logo"><Link to="/">Logo</Link></div>
        <div>
          <ul className="nav-list">
            <li><Link>Become a Host</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
            <li><Link to="/login">Log In</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
