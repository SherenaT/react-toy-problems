import React, { Component } from "react";

class Palindrome extends Component {
  constructor() {
    super();

    this.state = {
      userInput: "",
      palindrome: "",
    };
  }

  inputStr(val) {
    this.setState({ userInput: val });
  }

  isPalindrome(userInput) {
    let forwards = this.state.userInput;
    let backwards = this.state.userInput;
    backwards = backwards.split("").reverse().join("");

    if (forwards === backwards) {
      this.setState({ palindrome: "true" });
    } else {
      this.setState({ palindrome: "false" });
    }
  }

  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Palindrome</h4>
        <input
          className="inputLine"
          onChange={(e) => this.inputStr(e.target.value)}
        ></input>
        <button
          className="confirmationButton"
          onClick={() => this.isPalindrome(this.state.userInput)}
        >
          Palindrome
        </button>
        <span className="resultsBox">Palindrome: {this.state.palindrome}</span>
      </div>
    );
  }
}

export default Palindrome;
