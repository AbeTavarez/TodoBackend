import React from "react";
import { connect } from 'react-redux';
import TodoItem from "./TodoItem";

const TodoList = (props) => {
  return (
    <>
      {props.todoData.map((todo) => (
        <TodoItem todo={todo} />
      ))}
    </>
  );
};

const mapStateToProps = state => ({
  todoData: state.todoData
}); 

export default connect(mapStateToProps, {})(TodoList);
