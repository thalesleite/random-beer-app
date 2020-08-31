import { BeerActionTypes } from './beer.types';

const INITIAL_STATE = {
    beer: []
}

const beerReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case BeerActionTypes.SET_BEER:
            return {
                ...state,
                beer: action.payload
            }
        default:
            return state;
    }
}

export default beerReducer;