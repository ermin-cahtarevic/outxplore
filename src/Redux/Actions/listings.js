import axios from 'axios';
import { LISTING_CREATE_SUCCESS, LISTINGS_FETCH_SUCCESS, LISTING_DETAILS_FETCH_SUCCESS } from '../helper';

const urlListings = 'http://localhost:3001/listings';
const urlListingDetails = id => `http://localhost:3001/listings/${id}`;

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
    dispatch({
      type: LISTINGS_FETCH_SUCCESS,
      payload: res.data.listings,
    })
  });
};

export const fetchListingDetails = id => dispatch => {
  axios.get(
    urlListingDetails(id),
    { withCredentials: true }
  ).then(res => {
    dispatch({
      type: LISTING_DETAILS_FETCH_SUCCESS,
      payload: res.data.listing,
    })
  });
};
