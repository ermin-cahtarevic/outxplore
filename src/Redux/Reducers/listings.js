import { LISTING_CREATE_SUCCESS, LISTING_CREATE_FAIL, LISTINGS_FETCH_SUCCESS, LISTING_DETAILS_FETCH_SUCCESS } from '../helper';

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
    case LISTINGS_FETCH_SUCCESS:
      return {
        currentListing: {},
        listings: action.payload,
      };
    case LISTING_DETAILS_FETCH_SUCCESS:
      return {
        ...state,
        currentListing: {
          ...action.payload.listing,
          host: {
            ...action.payload.user,
          },
        }
      };
    default: return state;
  };
};

export default listingsReducer;
