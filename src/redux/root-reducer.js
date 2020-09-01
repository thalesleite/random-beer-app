import { combineReducers } from 'redux';

import beerReducer from './beer/beer.reducer';
import breweryReducer from './brewery/brewery.reducer';
import loadingReducer from './loading/loading.reducer';

export default combineReducers({
  beer: beerReducer,
  brewery: breweryReducer,
  loading: loadingReducer
});