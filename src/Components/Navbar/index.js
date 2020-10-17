import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../Redux/Actions/auth';

import './navbar.css';

const Navbar = () => {
  const dispatch = useDispatch();
  const loggedIn = useSelector(store => store.auth.loggedIn);
  const history = useHistory();

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

  const handleLogout = e => {
    e.preventDefault();

    logout(dispatch);
    history.push('/');
  }

  return (
    <nav className="navbar">
      <div className="nav-wrap">
        <div className="logo"><Link to="/">outxplore</Link></div>
        <div>
          <ul className="nav-list">
            <li><Link to="/host-activity">Become a Host</Link></li>
            {
              !loggedIn && <li><Link to="/signup">Sign up</Link></li>
            }
            {
              !loggedIn && <li><Link to="/login">Log in</Link></li>
            }
            {
              loggedIn && <li><button onClick={handleLogout}>Logout</button></li>
            }
            {
              loggedIn && <li><Link to="/user">Profile</Link></li>
            }
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
