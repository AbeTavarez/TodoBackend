import dummyData from "../TodoData";
import { ADD_TODO, REMOVE_TODO } from "../actions/actions";

const initialState = {
  TodoData: dummyData,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        TodoData: [...state.TodoData, action.payload],
      };
    case REMOVE_TODO:
      const newState = state.filter((item) => item !== action.payload);
      return {
          ...state,
          TodoData: newState
      };
    default:
      return state;
  }
};

export default reducer;