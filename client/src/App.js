import { useEffect } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import { fetchTodo } from "./actions/actions";
import { connect } from "react-redux";
import "./App.css";

const App = (props) => {
  useEffect(() => {
    props.fetchTodo();
  }, []);

  return (
    <div className="App">
      <TodoForm />
      {props.isLoading ? "TODO LIST IS LOADING" : "TODO LIST LOADED"}
      <TodoList />
      {props.error !== "" ? props.error : ""}
    </div>
  );
}

const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
  error: state.error,
});
export default connect(mapStateToProps, {fetchTodo})(App);
