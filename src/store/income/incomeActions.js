import types from './incomeActionTypes';

export const getIncomeStart = (user) => ({
  type: types.GET_INCOME_START,
  payload: user
});

export const getIncomeSuccess = (user) => ({
  type: types.GET_INCOME_SUCCESS,
  payload: user,
});

export const getIncomeFailure = (error) => ({
  type: types.GET_INCOME_FAILURE,
  payload: error,
});


export const createIncomeStart = (data,token) => ({
  type: types.CREATE_INCOME_START,
  payload: {data,token}
});

export const createIncomeSuccess = (user) => ({
  type: types.CREATE_INCOME_SUCCESS,
  payload: user,
});

export const createIncomeFailure = (error) => ({
  type: types.CREATE_INCOME_FAILURE,
  payload: error,
});