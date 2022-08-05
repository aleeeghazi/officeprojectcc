import types from './expenseActiontypes';

const INITIAL_STATE = {
  expenseArr:[],
  status: null,
  error: null,
};

const expenseReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.GET_EXPENSE_SUCCESS:
      return {
        ...state,
        expenseArr: action.payload,
        status:'success',
        error: null,
      };
    case types.GET_EXPENSE_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
      case types.CREATE_EXPENSE_SUCCESS:
        console.log(action.payload)
        return {
          ...state,
          expenseArr: [...state.expenseArr,action.payload.data],
          status:'success',
          error: null,
        };
      case types.CREATE_EXPENSE_FAILURE:
        return {
          ...state,
          status:'failure',
          error: action.payload,
        };
    default:
      return state;
  }
};

export default expenseReducer;