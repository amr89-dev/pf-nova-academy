import axios from "axios";
import { GET_ALL_COURSES } from "../action-type/action-types";
const endpoint = "http://localhost:3001/courseForSale ";

export const getAllCourses = () => {
  return async (dispatch) => {
    try {
      let getDogs = await axios.get(endpoint);
      let data = getDogs.data;
      let courseList = data.courseAll;

      return dispatch({ type: GET_ALL_COURSES, payload: courseList });
    } catch (err) {
      console.log({ errorGetAllCourses: err, message: err.message });
    }
  };
};
