import axios from 'axios';

const urlHostApplication = 'http://localhost:3001/host_application.json';

export const hostApplication = data => dispatch => {
  axios.post(
    urlHostApplication,
    data,
    { withCredentials: true }
  ).then(res => {
    console.log(res.data);
  })
}