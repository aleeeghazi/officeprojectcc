import types from './categoryActionTypes';

export const getCategoryStart = (user) => ({
  type: types.GET_CATEGORY_START,
  payload: user
});

export const getCategorySuccess = (user) => ({
  type: types.GET_CATEGORY_SUCCESS,
  payload: user,
});

export const getCategoryFailure = (error) => ({
  type: types.GET_CATEGORY_FAILURE,
  payload: error,
});


export const createCategoryStart = (data,token) => ({
  type: types.CREATE_CATEGORY_START,
  payload: {data,token}
});

export const createCategorySuccess = (user) => ({
  type: types.CREATE_CATEGORY_SUCCESS,
  payload: user,
});

export const createCategoryFailure = (error) => ({
  type: types.CREATE_CATEGORY_FAILURE,
  payload: error,
});