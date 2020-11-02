import axios from 'axios';
import {
  LOGIN_SUBMIT, SIGNUP_SUBMIT, SIGNUP_SUCCESS, LOGIN_SUCCESS, LOGOUT_SUCCESS, PHOTO_UPDATE_SUCCESS,
} from '../helper';

const urlSignUp = 'https://nameless-waters-17056.herokuapp.com/registrations';
const urlLogIn = 'https://nameless-waters-17056.herokuapp.com/sessions';
const urlLoggedIn = 'https://nameless-waters-17056.herokuapp.com/logged_in';
const urlLogout = 'https://nameless-waters-17056.herokuapp.com/logout';
const urlUpdatePhoto = 'https://nameless-waters-17056.herokuapp.com/update_photo';

export const signUpUser = data => (dispatch, history) => {
  dispatch({
    type: SIGNUP_SUBMIT,
  });

  axios.post(
    urlSignUp,
    data,
    { withCredentials: true },
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
    { withCredentials: true },
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
    { withCredentials: true },
  ).then(res => {
    if (res.data.logged_in) {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: {
          user: res.data.user,
        },
      });
    }
  });
};

export const logout = dispatch => {
  axios.delete(
    urlLogout,
    { withCredentials: true },
  ).then(() => {
    dispatch({
      type: LOGOUT_SUCCESS,
    });
  });
};

export const updatePhoto = data => dispatch => {
  axios.put(
    urlUpdatePhoto,
    data,
    { withCredentials: true },
  ).then(res => {
    dispatch({
      type: PHOTO_UPDATE_SUCCESS,
      payload: res.data.user.photo,
    });
  });
};
