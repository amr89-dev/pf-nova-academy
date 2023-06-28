import axios from "axios";
import { SIGN_UP_SUCCESS, SIGN_UP_FAILURE  } from "../action-type/action-types";


export const signUpSuccess = (user) => {
    return {
      type: SIGN_UP_SUCCESS,
      payload: user,
    };
  };
  
  export const signUpFailure = (error) => {
    return {
      type: SIGN_UP_FAILURE,
      payload: error,
    };
  };