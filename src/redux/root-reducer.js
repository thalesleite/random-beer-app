import { combineReducers } from 'redux';

import beerReducer from './beer/beer.reducer';
import breweryReducer from './brewery/brewery.reducer';

export default combineReducers({
  beer: beerReducer,
  brewery: breweryReducer
});