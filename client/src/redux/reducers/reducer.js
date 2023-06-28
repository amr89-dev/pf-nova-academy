import { combineReducers } from "redux";
import shoppingCartReducer from "./shoppingCartReducer.js";
import coursesReducer from "./coursesReducer.js";
import userReducer from "./userReducer.js";

const reducer = combineReducers({
  shoppingCartReducer: shoppingCartReducer,
  coursesReducer: coursesReducer,
  userReducer: userReducer
});

export default reducer;
