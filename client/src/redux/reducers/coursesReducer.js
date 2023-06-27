import { GET_ALL_COURSES } from "../action-type/action-types";

const initialState = {
  courses: [],
};

export default function coursesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_COURSES: {
      return {
        ...state,
        courses: action.payload,
      };
    }

    default:
      return state;
  }
}
