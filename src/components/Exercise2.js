import React, { Component } from "react";

class Exercise2 extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      fruit: "",
    };
  }

  updateName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleChange = (event) => {
    this.setState({ fruit: event.target.value }, function () {
      console.log(
        "name: " + this.state.name + " , Fruite: " + this.state.fruit
      );
    });
  };
  render() {
    return (
      <div>
        <input
          id="name-input"
          value={this.state.name}
          onChange={this.updateName}
        />
        <select
          id="select-input"
          value={this.state.fruit}
          onChange={this.handleChange}
        >
          <option value="banana">banana</option>
          <option value="apple">apple</option>
          <option value="grap">grap</option>
          <option value="watermelon">watermelon</option>
        </select>
      </div>
    );
  }
}

export default Exercise2;
