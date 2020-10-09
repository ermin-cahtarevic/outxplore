import React from 'react';

import '../styles/authentication.css';
import { Link } from 'react-router-dom';

const AuthForm = ({ type }) => {
  const types = {
    signup: {
      capitalized: 'Sign up',
      link: 'signup',
    },
    login: {
      capitalized: 'Log in',
      link: 'login',
    },
  };

  const opposite = type === 'signup' ? types['login'] : types['signup'];

  return (
    <div className="auth-page">
      <div className="auth-page-bg-overlay">
        <div className="form-box">
          <h3>{types[type].capitalized}</h3>
          <form>
            {
              type === 'signup' &&
              <div>
                <div className="field">
                  <input
                    className="first-name"                
                    type="text"
                    name="firstName"
                    required
                    autoComplete="new-off"
                  />
                  <label className="floating-label fl-first-name" htmlFor="firstName">
                    <span className="floating-label-content">First name</span>
                  </label>
                </div>
                <div className="field">
                  <input
                    className="last-name"                
                    type="text"
                    name="lastName"
                    required
                    autoComplete="new-off"
                  />
                  <label className="floating-label fl-last-name" htmlFor="lastName">
                    <span className="floating-label-content">Last name</span>
                  </label>
                </div>
              </div>
            }

            <div className="field field-margin">
              <input
                className="email"                
                type="email"
                name="email"
                required
                autoComplete="off"
              />
              <label className="floating-label" htmlFor="email">
                <span className="floating-label-content">Email</span>
              </label>
            </div>

            <div className="field field-margin">
              <input
                className="password"                
                type="password"
                name="password"
                required
                autoComplete="off"
              />
              <label className="floating-label" htmlFor="password">
                <span className="floating-label-content">Password</span>
              </label>
            </div>
            {
              type === 'signup' &&
              <div className="field field-margin">
                <input
                  className="password-confirmation"                
                  type="password"
                  name="passwordConfirmation"
                  required
                  autoComplete="off"
                />
                <label className="floating-label" htmlFor="passwordConfirmation">
                  <span className="floating-label-content">Password confirmation</span>
                </label>
              </div>
            }
            <button type="submit" className="submit-btn">{types[type].capitalized}</button>
          </form>
          <Link to={`/${opposite.link}`} className="switch-auth">{opposite.capitalized}</Link>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
