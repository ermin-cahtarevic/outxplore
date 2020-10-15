import axios from 'axios';

const urlSignUp = 'http://localhost:3001/registrations';
const urlLogIn = 'http://localhost:3001/sessions';
const urlLoggedIn = 'http://localhost:3001/logged_in';
const urlLogout = 'http://localhost:3001/logout';

export const signUpUser = data => dispatch => {
  axios.post(
    urlSignUp,
    data,
    { withCredentials: true }
  ).then(res => {
    console.log(res.data);
    dispatch({
      type: 'SIGNUP_SUCCESS',
    });
  });
};

export const LogInUser = data => dispatch => {
  axios.post(
    urlLogIn,
    data,
    { withCredentials: true }
  ).then(res => {
    console.log('log in -> ', res.data);
    dispatch({
      type: 'LOGIN_SUCCESS',
    });
  });
};

export const loggedIn = dispatch => {
  axios.get(
    urlLoggedIn,
    { withCredentials: true }
  ).then(res => {
    console.log('logged in? -> ', res.data);
    res.data.logged_in && dispatch({
      type: 'LOGIN_SUCCESS',
    });
  });
};

export const logout = dispatch => {
  axios.delete(
    urlLogout,
    { withCredentials: true },
  ).then(res => {
    console.log('logout -> ', res.data)
    dispatch({
      type: 'LOGOUT_SUCCESS',
    });
  });
}