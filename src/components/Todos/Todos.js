import React, { Component } from "react";
import Todo from "../Todo/Todo";
export class Todos extends Component {
  render() {
    return (
      <div>
        <h1>To-Do LIST</h1>
        {this.props.todos ? (
          this.props.todos.map((todo) => {
            return (
              <Todo
                key={todo.id}
                id={todo.id}
                title={todo.title}
                deleteTodo={this.props.deleteTodo}
              />
            );
          })
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    );
  }
}
export default Todos;
