import { all, call } from 'redux-saga/effects';

import { authSagas } from './auth/authSagas';
import { categorySagas } from './category/categorySagas';
import { expenseSagas } from './expense/expenseSagas';
import { incomeSagas } from './income/incomeSagas';

export default function* rootSaga() {
  yield all([call(authSagas),call(expenseSagas), call(incomeSagas), call(categorySagas)]);
}