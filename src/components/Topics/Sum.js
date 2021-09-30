import React, { Component } from "react";

class Sum extends Component {
  constructor() {
    super();

    this.state = {
      number1: 0,
      number2: 0,
      sum: null,
    };
  }

  input1(num) {
    this.setState({ number1: parseInt(num) });
  }
  input2(number) {
    this.setState({ number2: parseInt(number) });
  }

  addNums(num1, num2) {
    this.setState({ sum: num1 + num2 });
  }

  render() {
    return (
      <div className="puzzleBox sumPB">
        <h4>Sum</h4>
        <input
          className="inputLine"
          onChange={(e) => this.input1(e.target.value)}
        ></input>
        <input
          className="inputLine"
          onChange={(e) => this.input2(e.target.value)}
        ></input>
        <button
          className="confirmationButton"
          onClick={() => this.addNums(this.state.number1, this.state.number2)}
        >
          Add
        </button>
        <span className="resultsBox">
          Sum: {JSON.stringify(this.state.sum)}
        </span>
      </div>
    );
  }
}

export default Sum;
