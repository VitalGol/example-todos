import React, { Component } from "react";
import Todo from "../Todo/Todo";
import AddTodo from "../AddTodo/AddTodo";
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
      // console.log('-- ',todos);
      <div className="container">
        <h1>To-Do LIST</h1>
        <AddTodo />
        {this.state.todos.map((todo) => {
          return (
            <Todo
              key={todo.id}
              id={todo.id}
              title={todo.title}
              deleteTodo={this.deleteTodo}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
