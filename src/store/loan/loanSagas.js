import axios from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import { getLoanFailure, getLoanSuccess, createLoanSuccess,createLoanFailure } from './loanActions';
import types from './loanActionTypes';

const fetchLoan= async (id, token) => {
  const response = await axios.get(`http://localhost:5000/api/loan/${id}`, {
    headers:{
        "auth-token": token
    }
  });
  return response.data
};
const addLoan = async (payload) => {
  const response = await axios.post(`http://localhost:5000/api/loan`,payload.data, {
    headers:{
        "auth-token": payload.token
    }
  })
  return response
}

export function* getLoan({ payload }) {
  console.log(payload)
  try {
    const income = yield fetchLoan(payload.userId, payload.token);
    console.log('2')
    yield put(getLoanSuccess(income));
  } catch (error) {
    yield put(getLoanFailure(error));
  }
}

export function* createLoan({ payload }) {
  console.log(payload)
  try {
    const income = yield addLoan(payload);
    console.log('2')
    yield put(createLoanSuccess(income));
  } catch (error) {
    yield put(createLoanFailure(error));
  }
}


export function* onGetLoanStart() {
  yield takeLatest(types.GET_LOAN_START, getLoan);
}
export function* onCreateLoanStart() {
  yield takeLatest(types.CREATE_LOAN_START, createLoan);
}


export function* loanSagas() {
  yield all([
    call( onGetLoanStart),
    call( onCreateLoanStart),
  ]);
}