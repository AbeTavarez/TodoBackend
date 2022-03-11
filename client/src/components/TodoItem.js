import React, { useState } from "react";
import { connect } from 'react-redux';
import { removeTodo } from '../actions/actions';

const TodoItem = (props) => {
  // state to track if a todo is completed or not
  const [completed, setComplete] = useState(false);

  // toggle completed true or false
  const toggle = () => setComplete(!completed);

  // handler for removing a todo
  const handleClick = (e) => {
    e.preventDefault();
    props.removeTodo(props.todo);
  };

  return (
    <>
      <h2>{props.todo.title}</h2>
      <p>{props.todo.textContent}</p>
      <h3 onClick={toggle}>{completed ? "DONEZO" : "DO ETT"}</h3>
      <button onClick={handleClick}>Delete</button>
    </>
  );
};

export default connect(null, {removeTodo})(TodoItem);
