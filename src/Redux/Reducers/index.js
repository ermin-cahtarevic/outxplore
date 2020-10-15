import { combineReducers } from 'redux';
import authReducer from './auth';
import hostReducer from './host';

const reducer = () => combineReducers({
  auth: authReducer,
  host: hostReducer,
});

export default reducer;