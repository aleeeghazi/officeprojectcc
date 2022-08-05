import axios from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import { getExpenseFailure, getExpenseSuccess, createExpenseSuccess,createExpenseFailure } from './expenseActions';
import types from './expenseActiontypes';

const expense = async (id, token) => {
  const response = await axios.get(`http://localhost:5000/api/expense/${id}`, {
    headers:{
        "auth-token": token
    }
  });
  return response.data
};
const addExpense = async (payload) => {
  const response = await axios.post(`http://localhost:5000/api/expense`,payload.data, {
    headers:{
        "auth-token": payload.token
    }
  })
  return response
}

export function* getExpense({ payload }) {
  console.log(payload)
  try {
    const expenses = yield expense(payload.userId, payload.token);
    console.log('2')
    yield put(getExpenseSuccess(expenses));
  } catch (error) {
    yield put(getExpenseFailure(error));
  }
}

export function* createExpense({ payload }) {
  console.log(payload)
  try {
    const expenses = yield addExpense(payload);
    console.log('2')
    yield put(createExpenseSuccess(expenses));
  } catch (error) {
    yield put(createExpenseFailure(error));
  }
}


export function* onGetExpenseStart() {
  yield takeLatest(types.GET_EXPENSE_START, getExpense);
}
export function* onCreateExpenseStart() {
  yield takeLatest(types.CREATE_EXPENSE_START, createExpense);
}


export function* expenseSagas() {
  yield all([
    call( onGetExpenseStart),
    call( onCreateExpenseStart),
  ]);
}