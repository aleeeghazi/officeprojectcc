import { combineReducers } from 'redux';

import auth from './auth/authReducer';
import expense from './expense/expenseReducer';
import income from './income/incomeReducer';
import category from './category/categoryReducer';



export default combineReducers({ auth,expense,income,category });