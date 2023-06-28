import { SIGN_UP_SUCCESS, SIGN_UP_FAILURE } from "../action-type/action-types";


const initialState = {
  user: null,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SIGN_UP_SUCCESS':
      return {
        ...state,
        user: action.payload,
        error: null,
      };
    case 'SIGN_UP_FAILURE':
      return {
        ...state,
        user: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;