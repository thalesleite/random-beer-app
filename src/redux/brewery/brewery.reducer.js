import { BreweryActionTypes } from './brewery.types';

const INITIAL_STATE = {
    brewery: []
}

const breweryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case BreweryActionTypes.SET_BREWERY:
            return {
                ...state,
                brewery: action.payload
            }
        default:
            return state;
    }
}

export default breweryReducer;