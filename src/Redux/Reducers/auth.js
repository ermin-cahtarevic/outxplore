import { LOGIN_SUCCESS, LOGIN_FAIL, SIGNUP_SUCCESS, SIGNUP_FAIL, LOGOUT_SUCCESS } from '../helper';

const initialState = {
  loggedIn: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
    case SIGNUP_SUCCESS:
      return {
        loggedIn: true,
      };
    case LOGIN_FAIL:
    case SIGNUP_FAIL:
    case LOGOUT_SUCCESS:
      return {
        loggedIn: false,
      };
    default: return state;
  }
};

export default authReducer;
