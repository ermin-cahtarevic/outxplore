import axios from 'axios';
import { LOGIN_SUBMIT, SIGNUP_SUBMIT, SIGNUP_SUCCESS, LOGIN_SUCCESS, LOGOUT_SUCCESS, PHOTO_UPDATE_SUCCESS } from '../helper';

const urlSignUp = 'http://localhost:3001/registrations';
const urlLogIn = 'http://localhost:3001/sessions';
const urlLoggedIn = 'http://localhost:3001/logged_in';
const urlLogout = 'http://localhost:3001/logout';
const urlUpdatePhoto = 'http://localhost:3001/update_photo';

export const signUpUser = data => (dispatch, history) => {
  dispatch({
    type: SIGNUP_SUBMIT,
  });

  axios.post(
    urlSignUp,
    data,
    { withCredentials: true }
  ).then(res => {
    history.push('/');
    dispatch({
      type: SIGNUP_SUCCESS,
      payload: {
        user: res.data.user,
      },
    });
  });
};

export const LogInUser = data => (dispatch, history) => {
  dispatch({
    type: LOGIN_SUBMIT,
  });

  axios.post(
    urlLogIn,
    data,
    { withCredentials: true }
  ).then(res => {
    history.push('/');
    dispatch({
      type: LOGIN_SUCCESS,
      payload: {
        user: res.data.user,
      },
    });
  });
};

export const loggedIn = dispatch => {
  axios.get(
    urlLoggedIn,
    { withCredentials: true }
  ).then(res => {
    res.data.logged_in && dispatch({
      type: LOGIN_SUCCESS,
      payload: {
        user: res.data.user,
      },
    });
  });
};

export const logout = dispatch => {
  axios.delete(
    urlLogout,
    { withCredentials: true },
  ).then(res => {
    dispatch({
      type: LOGOUT_SUCCESS,
    });
  });
}

export const updatePhoto = data => dispatch => {
  axios.put(
    urlUpdatePhoto,
    data,
    { withCredentials: true }
  ).then(res => {
    dispatch({
      type: PHOTO_UPDATE_SUCCESS,
      payload: res.data.user.photo,
    });
  });
}
