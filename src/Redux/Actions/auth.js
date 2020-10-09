import axios from 'axios';

const urlSignUp = 'http://localhost:3002/registrations';
const urlLogIn = 'http://localhost:3002/sessions';

export const signUpUser = (data) => {
  axios.post(
    urlSignUp,
    data,
    { withCredentials: true }
  ).then(res => {
    console.log(res);
  });
};
