import types from './loanActionTypes';

const INITIAL_STATE = {
  loanArr:[],
  status: null,
  error: null,
};

const loanReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.GET_LOAN_SUCCESS:
      return {
        ...state,
        loanArr: action.payload,
        status:'success',
        error: null,
      };
    case types.GET_LOAN_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
      case types.CREATE_LOAN_SUCCESS:
        console.log(action.payload)
        return {
          ...state,
          loanArr: [...state.loanArr,action.payload.data],
          status:'success',
          error: null,
        };
      case types.CREATE_LOAN_FAILURE:
        return {
          ...state,
          status:'failure',
          error: action.payload,
        };
    default:
      return state;
  }
};

export default loanReducer;