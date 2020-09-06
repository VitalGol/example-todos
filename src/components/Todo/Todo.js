import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteTodo } from "../../store/actions/todoActions";
class Todo extends Component {
  // delete = (e, title) => console.log("DEL", title);

  render() {
    const { id, title, deleteTodo } = this.props;
    return (
      <div>
        <p className="list-group-item">{title}</p>
        <button onClick={() => deleteTodo(id)} className="btn btn-danger">
          DELETE
        </button>
      </div>
    );
  }
}

export default connect(null, { deleteTodo })(Todo);
