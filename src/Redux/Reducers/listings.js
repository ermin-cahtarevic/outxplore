import { LISTING_CREATE_SUCCESS, LISTING_CREATE_FAIL } from '../helper';

const initialState = {
  creationLoading: false,
  listing: {},
};

const listingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LISTING_CREATE_SUCCESS:
      return {
        listing: action.payload,
      };
    case LISTING_CREATE_FAIL:
      return {
        listing: {},
      };
    default: return state;
  };
};

export default listingsReducer;
