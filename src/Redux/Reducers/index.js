import { combineReducers } from 'redux';
import authReducer from './auth';
import hostReducer from './host';
import listingsReducer from './listings';

const reducer = () => combineReducers({
  auth: authReducer,
  host: hostReducer,
  listings: listingsReducer,
});

export default reducer;