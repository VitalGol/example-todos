import React, { Component } from "react";

class AddTodo extends Component {
  state = {
    title: "",
  };
  // handleChange = this.handleChange.bind(this);
  // this.handleSubmit = this.handleSubmit.bind(this);
  handleChange = (e) => {
    this.setState({ title: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    // this.setState({ title: e.target.value });
    console.log(this.state.title);
    this.setState({ title: "" });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            className="form-control"
            type="text"
            placeholder="Default input"
            value={this.state.title}
            onChange={this.handleChange}
          ></input>
          <button className="btn btn-info" type="submit">
            ADD TASK
          </button>
        </form>
      </div>
    );
  }
}

export default AddTodo;
