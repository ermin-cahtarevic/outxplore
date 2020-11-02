import { APPLICATION_SUBMISSION_SUCCESS } from '../helper';

const initialState = {
  applied: false,
};

const hostReducer = (state = initialState, action) => {
  switch (action.type) {
    case APPLICATION_SUBMISSION_SUCCESS:
      return {
        applied: true,
      };
    default: return state;
  }
};

export default hostReducer;
