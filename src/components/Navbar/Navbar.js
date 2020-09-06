import React, { Component } from "react";
import { Link } from "react-router-dom";
export class Navbar extends Component {
  render() {
    return (
      <ul className="nav">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Tasks
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/addTodos">
            Add Task
          </Link>
        </li>
      </ul>
    );
  }
}

export default Navbar;
