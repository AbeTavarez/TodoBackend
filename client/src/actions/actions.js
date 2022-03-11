import axios from "axios";

export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const FETCH_TODO_START = "FETCH_TODO_START";
export const FETCH_TODO_SUCCESS = "FETCH_TODO_SUCCESS";
export const FETCH_TODO_FAIL = "FETCH_TODO_FAIL";

//* add and remove actions without axios
// export const addTodo = todo => dispatch => {
//     dispatch({type: ADD_TODO, payload: todo});
// };

// export const removeTodo = todo => dispatch => {
//     dispatch({type: REMOVE_TODO, payload: todo});
// };

//* Using axios
export const fetchTodo = () => (dispatch) => {
  dispatch({ type: FETCH_TODO_START });

  axios
    .get("https://todo-app-fullstack-mern.herokuapp.com/api/todos")
    .then((data) => {
      dispatch({ type: FETCH_TODO_SUCCESS, payload: data.data });
    })
    .catch((err) => {
      dispatch({ type: FETCH_TODO_FAIL, payload: err.message });
    });
};

export const addTodo = (todo) => (dispatch) => {
  dispatch({ type: FETCH_TODO_START });
  axios
    .post("https://todo-app-fullstack-mern.herokuapp.com/api/todos", todo)
    .then((data) => dispatch({ type: ADD_TODO, payload: data.data.todo_item }))
    .catch((err) => dispatch({ type: FETCH_TODO_FAIL, payload: err.message }));
  //
};

export const removeTodo = (todo) => (dispatch) => {
  dispatch({ type: REMOVE_TODO, payload: todo });
};
