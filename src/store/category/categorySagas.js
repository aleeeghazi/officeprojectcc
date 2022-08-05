import axios from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import { getCategoryFailure, getCategorySuccess, createCategorySuccess,createCategoryFailure } from './categoryActions';
import types from './categoryActionTypes';

const category = async (id, token) => {
  const response = await axios.get(`http://localhost:5000/api/category/${id}`, {
    headers:{
        "auth-token": token
    }
  });
  return response.data
};
const addCategory = async (payload) => {
  const response = await axios.post(`http://localhost:5000/api/category`,payload.data, {
    headers:{
        "auth-token": payload.token
    }
  })
  return response
}

export function* getCategory({ payload }) {
  console.log(payload)
  try {
    const data = yield category(payload.userId, payload.token);
    console.log('2')
    yield put(getCategorySuccess(data));
  } catch (error) {
    yield put(getCategoryFailure(error));
  }
}

export function* createCategory({ payload }) {
  console.log(payload)
  try {
    const category = yield addCategory(payload);
    console.log('2')
    yield put(createCategorySuccess(category));
  } catch (error) {
    yield put(createCategoryFailure(error));
  }
}


export function* onGetCategoryStart() {
  yield takeLatest(types.GET_CATEGORY_START, getCategory);
}
export function* onCreateCategoryStart() {
  yield takeLatest(types.CREATE_CATEGORY_START, createCategory);
}


export function* categorySagas() {
  yield all([
    call( onGetCategoryStart),
    call( onCreateCategoryStart),
  ]);
}