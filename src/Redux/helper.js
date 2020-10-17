export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const SIGNUP_FAIL = 'SIGNUP_FAIL';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const APPLICATION_SUBMISSION_SUCCESS = 'APPLICATION_SUBMISSION_SUCCESS';

export const getSlug = (first, last, id) => first.toLowerCase() + last.toLowerCase() + id.toString();
