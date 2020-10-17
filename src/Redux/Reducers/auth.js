import { LOGIN_SUCCESS, LOGIN_FAIL, SIGNUP_SUCCESS, SIGNUP_FAIL, LOGOUT_SUCCESS, getSlug } from '../helper';

const initialState = {
  loggedIn: false,
  user: {},
  userSlug: '',
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
    case SIGNUP_SUCCESS: {
      // const { first_name, last_name, id } = action.payload.user;
      return {
        loggedIn: true,
        user: action.payload.user,
        userSlug: getSlug(action.payload.user.first_name, action.payload.user.last_name, action.payload.user.id)
      };
    }
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
