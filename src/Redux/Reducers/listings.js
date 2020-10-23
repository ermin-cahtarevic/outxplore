import { LISTING_CREATE_SUCCESS, LISTING_CREATE_FAIL, LISTING_FETCH_SUCCESS } from '../helper';

const initialState = {
  creationLoading: false,
  currentListing: {},
  listings: [],
};

const listingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LISTING_CREATE_SUCCESS:
      return {
        currentListing: action.payload,
      };
    case LISTING_CREATE_FAIL:
      return {
        currentListing: {},
      };
    case LISTING_FETCH_SUCCESS:
      return {
        currentListing: {},
        listings: action.payload,
      };
    default: return state;
  };
};

export default listingsReducer;
