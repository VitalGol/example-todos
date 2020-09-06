import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { getTodos } from "../../store/actions/todoActions";

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
  componentDidMount() {
    this.props.getTodos();
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
            <AddTodo />
          </Route>
          <Route exach path="/">
            <Todos todos={this.props.todos} />
          </Route>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todoReducer.todos,
  };
};

export default connect(mapStateToProps, { getTodos })(App);
