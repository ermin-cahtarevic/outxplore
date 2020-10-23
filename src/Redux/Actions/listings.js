import axios from 'axios';
import { LISTING_CREATE_SUCCESS, LISTING_FETCH_SUCCESS } from '../helper';

const urlListings = 'http://localhost:3001/listings';

export const createLisitng = data => dispatch => {
  axios.post(
    urlListings,
    data,
    { withCredentials: true }
  ).then(res => {
    dispatch({
      type: LISTING_CREATE_SUCCESS,
      payload: res.data.listing,
    });
  });
};

export const fetchListings = dispatch => {
  axios.get(
    urlListings,
    { withCredentials: true }
  ).then(res => {
    console.log(res.data);
    dispatch({
      type: LISTING_FETCH_SUCCESS,
      payload: res.data.listings,
    })
  });
};
