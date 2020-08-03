import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar navbar-light bg-light">
        <Link to={`/`}>Exercise List</Link>
        <Link to={`/create`}>Create Exercise</Link>
        <Link to={`/edit/:id`}>Edit Exercise</Link>
        <Link to={`/user`}>Create User</Link>
      </div>
    );
  }
}
