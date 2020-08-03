import React, { Component } from "react";
import axios from "axios";

const Exercise = (props) => (
  <tr>
    <td>{props.exercise.username}</td>
    <td>{props.exercise.description}</td>
    <td>{props.exercise.duration}</td>
    <td>
      <a
        href="/"
        onClick={() => {
          props.deleteExercise(props.exercise._id);
        }}
      >
        Delete
      </a>
    </td>
  </tr>
);

export default class ExercisesList extends Component {
  constructor(props) {
    super(props);

    this.deleteExercise = this.deleteExercise.bind(this);

    this.state = { exercises: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/exercises/")
      .then((response) => {
        this.setState({
          exercises: response.data,
        });
      })
      .catch((error) => console.log(error));
  }

  deleteExercise(id) {
    axios
      .delete("http://0.0.0.0:5000/exercises/" + id)
      .then((res) => console.log(res))
      .catch((err) => console.log("Error: " + err));

    this.setState({
      exercises: this.state.exercises.filter((el) => el._id !== id),
    });
  }

  exerciseList() {
    return this.state.exercises.map((e) => {
      return (
        <Exercise
          exercise={e}
          key={e._id}
          deleteExercise={this.deleteExercise}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <h1>This is the Exercises List component!</h1>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{this.exerciseList()}</tbody>
        </table>
      </div>
    );
  }
}
