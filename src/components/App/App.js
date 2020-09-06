import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import AddTodo from "../AddTodo/AddTodo";
import Todos from "../Todos/Todos";
import "./App.css";

// const data = [
//   { id: 1, title: "to read" },
//   { id: 2, title: "to to write" },
//   { id: 3, title: "to sleep" },
// ];

class App extends Component {
  state = {
    todos: [
      { id: 1, title: "to read" },
      { id: 2, title: "to to write" },
      { id: 3, title: "to sleep" },
    ],
  };
  deleteTodo = (e, id) => {
    this.setState({ todos: this.state.todos.filter((todo) => todo.id !== id) });
  };
  render() {
    if (this.state.todos.length === 0) {
      return <h1 style={{ textAlign: "center" }}>No Tasks</h1>;
    }

    return (
      <div className="container">
        <h1>To-Do LIST</h1>
        <Switch>
          <Route path="/addTodos">
            <AddTodo />
          </Route>
          <Route exach path="/">
            <Todos todos={this.state.todos} />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
