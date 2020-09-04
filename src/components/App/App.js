import React, { Component } from "react";
import Todo from "../Todo/Todo";

const data = [
  { id: 1, title: "to read" },
  { id: 2, title: "to to write" },
  { id: 3, title: "to sleep" },
];

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>To-Do LIST</h1>
        {data.map((todo) => (
          <Todo key={todo.id} title={todo.title} />
        ))}
      </div>
    );
  }
}

export default App;
