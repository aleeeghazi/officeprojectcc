import types from './categoryActionTypes';

const INITIAL_STATE = {
  categoryArr:[],
  status: null,
  error: null,
};

const categoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.GET_CATEGORY_SUCCESS:
      return {
        ...state,
        categoryArr: action.payload,
        status:'success',
        error: null,
      };
    case types.GET_CATEGORY_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
      case types.CREATE_CATEGORY_SUCCESS:
        console.log(action.payload)
        return {
          ...state,
          categoryArr: [...state.categoryArr,action.payload.data],
          status:'success',
          error: null,
        };
      case types.CREATE_CATEGORY_FAILURE:
        return {
          ...state,
          status:'failure',
          error: action.payload,
        };
    default:
      return state;
  }
};

export default categoryReducer;