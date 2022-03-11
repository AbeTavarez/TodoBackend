import React from "react";
import TodoItem from "./TodoItem";

const TodoList = (props) => {
  return (
    <>
      {props.todoData.map((todo) => (
        <TodoItem todo={todo} removeTodo={props.removeTodo} />
      ))}
    </>
  );
};

export default TodoList;
