import types from './incomeActionTypes';

const INITIAL_STATE = {
  incomeArr:[],
  status: null,
  error: null,
};

const incomeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.GET_INCOME_SUCCESS:
      return {
        ...state,
        incomeArr: action.payload,
        status:'success',
        error: null,
      };
    case types.GET_INCOME_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
      case types.CREATE_INCOME_SUCCESS:
        console.log(action.payload)
        return {
          ...state,
          incomeArr: [...state.incomeArr,action.payload.data],
          status:'success',
          error: null,
        };
      case types.CREATE_INCOME_FAILURE:
        return {
          ...state,
          status:'failure',
          error: action.payload,
        };
    default:
      return state;
  }
};

export default incomeReducer;