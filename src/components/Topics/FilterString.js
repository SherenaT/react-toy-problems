import React, { Component } from "react";

class FilterString extends Component {
  constructor() {
    super();

    this.state = {
      unFilteredString: [
        "Abby",
        "Bryce",
        "Jason",
        "Linda",
        "Louis",
        "Jessica",
        "Jaime",
        "Zack",
        "David",
        "Amy",
        "Scout",
        "Jordan",
      ],
      userInput: "",
      filteredArray: [],
    };
  }

  inputVal(str) {
    this.setState({ userInput: str });
  }

  filtered(prop) {
    let unFilteredString = this.state.unFilteredString;
    let userInput = this.state.userInput;
    let arr = [];

    for (let i = 0; i < unFilteredString.length; i++) {
      if (unFilteredString[i].includes(userInput)) {
        arr.push(unFilteredString[i]);
      }
    }
    this.setState({ filteredNames: arr });
  }

  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Filter String</h4>
        <span className="puzzleText">
          Names:
          {JSON.stringify(this.state.unFilteredString)}
        </span>
        <input
          className="inputLine"
          onChange={(e) => this.inputVal(e.target.value)}
        ></input>
        <button
          className="confirmationButton"
          onClick={() => this.filtered(this.state.userInput)}
        >
          {" "}
          Filter{" "}
        </button>
        <span className="resultsBox filterStringRB">
          {" "}
          Filtered Names: {JSON.stringify(this.state.filteredNames)}{" "}
        </span>
      </div>
    );
  }
}

export default FilterString;
