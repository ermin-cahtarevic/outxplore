import React, { useEffect, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ImUser } from 'react-icons/im';
import { logout } from '../../Redux/Actions/auth';

import './navbar.css';

/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
const Navbar = () => {
  const dispatch = useDispatch();
  const loggedIn = useSelector(store => store.auth.loggedIn);
  const isHost = useSelector(store => store.auth.user.host);
  const history = useHistory();
  const node = useRef();

  const handleScroll = () => {
    if (window.scrollY > 20) {
      document.querySelector('.navbar').classList.add('nav-scroll');
    } else {
      document.querySelector('.navbar').classList.remove('nav-scroll');
    }
  };

  const handleDropdown = () => {
    document.querySelector('.navbar-dropdown').classList.toggle('navbar-dropdown-closed');
  };

  const handleDropdownClose = e => {
    if (node.current.contains(e.target)) return;

    document.querySelector('.navbar-dropdown').classList.add('navbar-dropdown-closed');
  };

  const handleLogout = e => {
    e.preventDefault();

    logout(dispatch);
    history.push('/');
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleDropdownClose);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleDropdownClose);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-wrap">
        <div className="logo"><Link to="/"><img src="/outxplore-logo.png" alt="outxplore-logo" /></Link></div>
        <div>
          <ul className="nav-list">
            <li><Link to="/host-activity" onClick={handleDropdownClose}>Become a Host</Link></li>
            <li ref={node} className="navbar-dropdown-wrap">
              <button type="button" className="navbar-dropdown-btn" onClick={handleDropdown}>
                <ImUser />
              </button>
              <ul className="navbar-dropdown navbar-dropdown-closed">
                {
                  !loggedIn
                  && (
                    <li
                      onClick={handleDropdown}
                      onKeyDown={handleDropdown}
                    >
                      <Link to="/signup">Sign up</Link>
                    </li>
                  )
                }
                {
                  !loggedIn && <li onClick={handleDropdown} onKeyDown={handleDropdown}><Link to="/login">Log in</Link></li>
                }
                {
                  loggedIn && <li onClick={handleDropdown} onKeyDown={handleDropdown}><Link to="/user">Profile</Link></li>
                }
                {
                  isHost && <li onClick={handleDropdown} onKeyDown={handleDropdown}><Link to="/listings/new">Create an Activity Listing</Link></li>
                }
                {
                  !isHost && <li onClick={handleDropdown} onKeyDown={handleDropdown}><Link to="/host-activity">Host an Experience</Link></li>
                }
                {
                  loggedIn && <li onClick={handleDropdown} onKeyDown={handleDropdown}><button type="button" className="logout-btn" onClick={handleLogout}>Logout</button></li>
                }
              </ul>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};
/* eslint-enable jsx-a11y/no-noninteractive-element-interactions */

export default Navbar;
