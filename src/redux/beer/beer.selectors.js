import { createSelector } from 'reselect';

const getBeer = state => state.beer;

export const selectBeer = createSelector(
    [getBeer],
    (beer) => beer.beer
);