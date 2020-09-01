import { LoadingActionTypes } from './loading.types';

export const setLoading = loading => ({
    type: LoadingActionTypes.SET_LOADING,
    payload: loading
});