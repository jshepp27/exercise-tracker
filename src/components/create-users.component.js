import React, { Component } from "react";
import axios from "axios";

export default class CreateUsers extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: "",
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const username = {
      username: this.state.username,
    };

    axios
      .post("http://0.0.0.0:5000/users/add", username)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => console.log(error));
    window.location = "/";
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <h1>This is the Create Users component!</h1>
        </div>
        <br />

        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Enter Username: </label>
            <input
              type="text"
              className="form-control"
              onChange={this.onChangeUsername}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit Username
            </button>
          </div>
        </form>
      </React.Fragment>
    );
  }
}
