import types from './expenseActiontypes';

export const getExpenseStart = (user) => ({
  type: types.GET_EXPENSE_START,
  payload: user
});

export const getExpenseSuccess = (user) => ({
  type: types.GET_EXPENSE_SUCCESS,
  payload: user,
});

export const getExpenseFailure = (error) => ({
  type: types.GET_EXPENSE_FAILURE,
  payload: error,
});


export const createExpenseStart = (data,token) => ({
  type: types.CREATE_EXPENSE_START,
  payload: {data,token}
});

export const createExpenseSuccess = (user) => ({
  type: types.CREATE_EXPENSE_SUCCESS,
  payload: user,
});

export const createExpenseFailure = (error) => ({
  type: types.CREATE_EXPENSE_FAILURE,
  payload: error,
});