import { BreweryActionTypes } from './brewery.types';

export const setBrewery = brewery => ({
    type: BreweryActionTypes.SET_BREWERY,
    payload: brewery
});