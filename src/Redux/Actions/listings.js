import axios from 'axios';
import { LISTING_CREATE_SUCCESS } from '../helper';

const urlCreateListing = 'http://localhost:3001/listings';

export const createLisitng = data => dispatch => {
  axios.post(
    urlCreateListing,
    data,
    { withCredentials: true }
  ).then(res => {
    dispatch({
      type: LISTING_CREATE_SUCCESS,
      payload: res.data.listing,
    });
  })
}
