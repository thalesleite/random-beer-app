import { combineReducers } from 'redux';

import beerReducer from './beer/beer.reducer';

export default combineReducers({
  beer: beerReducer
});