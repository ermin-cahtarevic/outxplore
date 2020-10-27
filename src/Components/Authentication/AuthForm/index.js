import React from 'react';

import './authentication.css';
import { Link } from 'react-router-dom';

const AuthForm = ({ type, handleChange, handleSubmit, state, error }) => {
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
          {
            error && <p className="auth-error">{error}</p>
          }
          <form onSubmit={handleSubmit}>
            {
              type === 'signup' &&
              <div>
                <div className="field">
                  <input
                    className="first-name"                
                    type="text"
                    name="firstName"
                    onChange={handleChange}
                    value={state.firstName}
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
                    onChange={handleChange}
                    value={state.lastName}
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
                onChange={handleChange}
                value={state.email}
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
                onChange={handleChange}
                value={state.password}
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
                  onChange={handleChange}
                  value={state.passwordConfirmation}
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
