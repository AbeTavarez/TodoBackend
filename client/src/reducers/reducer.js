import dummyData from "../TodoData";
import {
  ADD_TODO,
  REMOVE_TODO,
  FETCH_TODO_START,
  FETCH_TODO_SUCCESS,
  FETCH_TODO_FAIL,
} from "../actions/actions";

const initialState = {
  todoData: dummyData,
  isLoading: false,
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TODO_START:
      return {
        ...state,
        todoData: state.todoData,
        error: "",
        isLoading: true,
      };
    case FETCH_TODO_FAIL:
      return {
        ...state,
        todoData: state.todoData,
        error: action.payload,
        isLoading: false,
      };
    case FETCH_TODO_SUCCESS:
      return {
        ...state,
        todoData: action.payload,
        error: "",
        isLoading: false,
      };
    case ADD_TODO:
      return {
        ...state,
        todoData: [...state.todoData, action.payload],
        isLoading: false,
      };
    case REMOVE_TODO:
      let newState = state.todoData.filter((item) => item !== action.payload);
      return {
        ...state,
        todoData: newState,
      };
    default:
      return state;
  }
};

export default reducer;
