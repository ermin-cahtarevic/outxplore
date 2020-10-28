import { LOGIN_SUCCESS, LOGIN_FAIL, SIGNUP_SUCCESS, SIGNUP_FAIL, LOGOUT_SUCCESS, LOGIN_SUBMIT, SIGNUP_SUBMIT } from '../helper';

const initialState = {
  loading: false,
  loggedIn: false,
  user: {},
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUBMIT:
    case SIGNUP_SUBMIT: 
      return {
        ...state,
        loading: true,
      }
    case LOGIN_SUCCESS:
    case SIGNUP_SUCCESS:
      return {
        loading: false,
        loggedIn: true,
        user: action.payload.user,
      };
    case LOGIN_FAIL:
    case SIGNUP_FAIL:
    case LOGOUT_SUCCESS:
      return {
        loading: false,
        loggedIn: false,
        user: {},
      };
    default: return state;
  }
};

export default authReducer;
