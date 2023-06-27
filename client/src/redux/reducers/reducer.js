import { combineReducers } from "redux";
import shoppingCartReducer from "./shoppingCartReducer.js";
import coursesReducer from "./coursesReducer.js";

const reducer = combineReducers({
  shoppingCartReducer: shoppingCartReducer,
  coursesReducer: coursesReducer,
});

export default reducer;
