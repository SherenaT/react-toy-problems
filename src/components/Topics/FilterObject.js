import React, { Component } from "react";

class FilterObject extends Component {
  constructor() {
    super();

    this.state = {
      unFilteredArray: [
        {
          name: "Charolette Lee",
          favoriteFood: "pizza",
          favoriteColor: "pink",
        },
        {
          name: "Jason Kim",
          favoriteDrink: "lemonade",
          favoriteArtist: "Taylor Swift",
        },
        { name: "David White", favoriteShow: "the office", height: "6'0" },
      ],
      filteredArray: [],
      userInput: "",
    };
  }

  saveInput(val) {
    this.setState({ userInput: val });
  }

  filtered(prop) {
    let unFilteredArray = this.state.unFilteredArray;
    let arr = [];

    for (let i = 0; i < unFilteredArray.length; i++) {
      if (unFilteredArray[i].hasOwnProperty(prop)) {
        arr.push(unFilteredArray[i]);
      }
    }

    this.setState({ filteredArray: arr });
  }

  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4>Filter Object</h4>
        <span className="puzzleText">
          {JSON.stringify(this.state.unFilteredArray)}{" "}
        </span>
        <input
          className="inputLine"
          onChange={(e) => this.saveInput(e.target.value)}
        ></input>
        <button
          className="confirmationButton"
          onClick={() => this.filtered(this.state.userInput)}
        >
          See Filtered Object
        </button>
        <span className="resultsBox filterObjectRB">
          Filtered: {JSON.stringify(this.state.filteredArray)}
        </span>
      </div>
    );
  }
}

export default FilterObject;
