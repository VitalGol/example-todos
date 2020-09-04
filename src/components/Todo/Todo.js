import React, { Component } from "react";
import "./Todo.css";

class Todo extends Component {
  delete = (e, title) => console.log("DEL", title);
  render() {
    const { title } = this.props;
    return (
      <div>
        <p>{title}</p>
        <button
          onClick={(e) => this.delete(e, title)}
          className="btn btn-danger"
        >
          DEL
        </button>
      </div>
    );
  }
}

export default Todo;
