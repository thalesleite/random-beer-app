import { createSelector } from 'reselect';

const getLoading = state => state.loading;

export const isLoading = createSelector(
    [getLoading],
    (loading) => loading.loading
);