import axios from "axios";
import { GET_ALL_COURSES } from "../action-type/action-types";
const endpoint = "https://api.escuelajs.co/api/v1/products";

export const getAllCourses = () => {
  return async (dispatch) => {
    try {
      let getDogs = await axios.get(endpoint);
      let data = getDogs.data;

      return dispatch({ type: GET_ALL_COURSES, payload: data });
    } catch (err) {
      console.log({ errorGetAllCourses: err, message: err.message });
    }
  };
};
