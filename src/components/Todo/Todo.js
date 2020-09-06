import React, { Component } from "react";
import "./Todo.css";

class Todo extends Component {
  // delete = (e, title) => console.log("DEL", title);

  render() {
    const { id, title, deleteTodo } = this.props;
    return (
      <div>
        <p className="list-group-item">{title}</p>
        <button onClick={(e) => deleteTodo(e, id)} className="btn btn-danger">
          DELETE
        </button>
      </div>
    );
  }
}

export default Todo;
