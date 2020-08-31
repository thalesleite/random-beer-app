import { BeerActionTypes } from './beer.types';

export const setBeer = beer => ({
    type: BeerActionTypes.SET_BEER,
    payload: beer
});