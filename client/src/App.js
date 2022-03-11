import { useState } from "react";
import dummyData from "./TodoData";
import TodoList from "./components/TodoList";
import "./App.css";
import TodoForm from "./components/TodoForm";

function App() {
  // place the dummy data into state
  const [todoData, setTodoData] = useState(dummyData);

  // adds a todo to the todoData in state
  const addTodo = (todo) => setTodoData([...todoData, todo]);

  // removes a todo from the todoData in state
  const removeTodo = (todo) => {
    const newState = todoData.filter((item) => item !== todo);
    setTodoData(newState);
  };
  return (
    <div className="App">
      <TodoForm addTodo={addTodo}/>
      <TodoList todoData={todoData} removeTodo={removeTodo}/>
    </div>
  );
}

export default App;
