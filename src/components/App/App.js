import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import axios from "axios";
import AddTodo from "../AddTodo/AddTodo";
import Todos from "../Todos/Todos";
import "./App.css";
import Navbar from "../Navbar/Navbar";

// const data = [
//   { id: 1, title: "to read" },
//   { id: 2, title: "to to write" },
//   { id: 3, title: "to sleep" },
// ];

class App extends Component {
  state = {
    todos: null,
  };

  deleteTodo = (e, id) => {
    this.setState({ todos: this.state.todos.filter((todo) => todo.id !== id) });
  };
  addTodo = (todo) => {
    this.setState({ todos: [todo, ...this.state.todos] });
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => this.setState({ todos: res.data }));
  }
  render() {
    // if (this.state.todos.length === 0) {
    //   return <h1 style={{ textAlign: "center" }}>No Tasks</h1>;
    // }

    return (
      <div className="container">
        <Navbar />
        <Switch>
          <Route path="/addTodos">
            <AddTodo addTodo={this.addTodo} />
          </Route>
          <Route exach path="/">
            <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
