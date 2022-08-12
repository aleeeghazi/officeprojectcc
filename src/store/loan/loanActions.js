import types from './loanActionTypes';

export const getLoanStart = (user) => ({
  type: types.GET_LOAN_START,
  payload: user
});

export const getLoanSuccess = (user) => ({
  type: types.GET_LOAN_SUCCESS,
  payload: user,
});

export const getLoanFailure = (error) => ({
  type: types.GET_LOAN_FAILURE,
  payload: error,
});


export const createLoanStart = (data,token) => ({
  type: types.CREATE_LOAN_START,
  payload: {data,token}
});

export const createLoanSuccess = (user) => ({
  type: types.CREATE_LOAN_SUCCESS,
  payload: user,
});

export const createLoanFailure = (error) => ({
  type: types.CREATE_LOAN_FAILURE,
  payload: error,
});