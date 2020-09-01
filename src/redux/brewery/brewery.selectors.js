import { createSelector } from 'reselect';

const getBrewery = state => state.brewery;

export const selectBrewery = createSelector(
    [getBrewery],
    (brewery) => brewery.brewery
);