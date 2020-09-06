import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo } from "../../store/actions/todoActions";
class AddTodo extends Component {
  state = {
    title: "",
  };
  handleChange = (e) => {
    this.setState({ title: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo({ id: Date.now(), title: this.state.title });
    this.setState({ title: e.target.value });
    // console.log(this.state.title);
    this.setState({ title: "" });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1>Add Task</h1>
          <div className="form-group">
            <label htmlFor="title">Task's Name</label>
            <input
              className="form-control"
              type="text"
              placeholder="Default input"
              value={this.state.title}
              onChange={this.handleChange}
            ></input>
          </div>
          <button className="btn btn-success" type="submit">
            ADD TASK
          </button>
        </form>
      </div>
    );
  }
}

export default connect(null, { addTodo })(AddTodo);
