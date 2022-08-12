import { combineReducers } from 'redux';

import auth from './auth/authReducer';
import expense from './expense/expenseReducer';
import income from './income/incomeReducer';
import category from './category/categoryReducer';
import loan from './loan/loanReducer';



export default combineReducers({ auth,expense,income,category,loan });