import React, { useEffect, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../Redux/Actions/auth';
import { ImUser } from 'react-icons/im';

import './navbar.css';

const Navbar = () => {
  const dispatch = useDispatch();
  const loggedIn = useSelector(store => store.auth.loggedIn);
  const isHost = useSelector(store => store.auth.user.host);
  const history = useHistory();
  const node = useRef();

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleDropdownClose);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleDropdownClose);
    }
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 20) {
      document.querySelector('.navbar').classList.add('nav-scroll');
    } else {
      document.querySelector('.navbar').classList.remove('nav-scroll');
    }
  }

  const handleDropdown = e => {
    document.querySelector('.navbar-dropdown').classList.toggle('navbar-dropdown-closed')
  }

  const handleDropdownClose = e => {
    if (node.current.contains(e.target)) return;

    document.querySelector('.navbar-dropdown').classList.add('navbar-dropdown-closed');
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
            <li><Link to="/host-activity" onClick={handleDropdownClose}>Become a Host</Link></li>
            <li ref={node} className="navbar-dropdown-wrap">
              <button type="button" className="navbar-dropdown-btn" onClick={handleDropdown}>
                <ImUser />
              </button>
              <ul className="navbar-dropdown navbar-dropdown-closed">
                {
                  !loggedIn && <li onClick={handleDropdown}><Link to="/signup">Sign up</Link></li>
                }
                {
                  !loggedIn && <li onClick={handleDropdown}><Link to="/login">Log in</Link></li>
                }
                {
                  loggedIn && <li onClick={handleDropdown}><Link to="/user">Profile</Link></li>
                }
                {
                  isHost && <li onClick={handleDropdown}><Link to="/listings/new">Create an Activity Listing</Link></li>
                }
                {
                  !isHost && <li onClick={handleDropdown}><Link to="/host-activity" >Host an Experience</Link></li>
                }
                {
                  loggedIn && <li onClick={handleDropdown}><button className="logout-btn" onClick={handleLogout}>Logout</button></li>
                }
              </ul>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
