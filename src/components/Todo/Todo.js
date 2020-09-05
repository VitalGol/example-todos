import React, { Component } from "react";
import "./Todo.css";

class Todo extends Component {
  // delete = (e, title) => console.log("DEL", title);
  render() {
    const { id, title, deleteTodo } = this.props;
    return (
      <div>
        <p>{title}</p>
        {/* <p>{count}</p> */}
        <button onClick={(e) => deleteTodo(e, id)} className="btn btn-danger">
          DEL
        </button>
      </div>
    );
  }
}

export default Todo;
