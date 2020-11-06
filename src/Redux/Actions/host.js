import axios from 'axios';
import { APPLICATION_SUBMISSION_SUCCESS } from '../helper';

const urlHostApplication = 'http://localhost:3001/host_application.json';

const hostApplication = data => dispatch => {
  axios.post(
    urlHostApplication,
    data,
    { withCredentials: true },
  ).then(() => {
    dispatch({
      type: APPLICATION_SUBMISSION_SUCCESS,
    });
  });
};

export default hostApplication;
