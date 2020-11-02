import axios from 'axios';
import { APPLICATION_SUBMISSION_SUCCESS } from '../helper';

const urlHostApplication = 'https://nameless-waters-17056.herokuapp.com/host_application.json';

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
