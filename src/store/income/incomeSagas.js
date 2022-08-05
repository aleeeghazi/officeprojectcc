import axios from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import { getIncomeFailure, getIncomeSuccess, createIncomeSuccess,createIncomeFailure } from './incomeActions';
import types from './incomeActionTypes';

const fetchIncome= async (id, token) => {
  const response = await axios.get(`http://localhost:5000/api/income/${id}`, {
    headers:{
        "auth-token": token
    }
  });
  return response.data
};
const addIncome = async (payload) => {
  const response = await axios.post(`http://localhost:5000/api/income`,payload.data, {
    headers:{
        "auth-token": payload.token
    }
  })
  return response
}

export function* getIncome({ payload }) {
  console.log(payload)
  try {
    const income = yield fetchIncome(payload.userId, payload.token);
    console.log('2')
    yield put(getIncomeSuccess(income));
  } catch (error) {
    yield put(getIncomeFailure(error));
  }
}

export function* createIncome({ payload }) {
  console.log(payload)
  try {
    const income = yield addIncome(payload);
    console.log('2')
    yield put(createIncomeSuccess(income));
  } catch (error) {
    yield put(createIncomeFailure(error));
  }
}


export function* onGetIncomeStart() {
  yield takeLatest(types.GET_INCOME_START, getIncome);
}
export function* onCreateIncomeStart() {
  yield takeLatest(types.CREATE_INCOME_START, createIncome);
}


export function* incomeSagas() {
  yield all([
    call( onGetIncomeStart),
    call( onCreateIncomeStart),
  ]);
}