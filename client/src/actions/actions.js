export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";

export const addTodo = todo => dispatch => {
    dispatch({type: ADD_TODO, payload: todo});
};

export const removeTodo = todo => dispatch => {
    dispatch({type: REMOVE_TODO, payload: todo});
};
