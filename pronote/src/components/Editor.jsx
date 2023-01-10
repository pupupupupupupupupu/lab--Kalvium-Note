import React, { Component } from "react";

class HigherOrderFunctions extends Component {
  render() {
    return (
      <div className="container">
        <div className="input">
          <h3>Input</h3>
          {/* //call the handleChanges method in the onChange event and set the default value as empty */}
          <textarea
            className="input-text"
            onChange={this.handleChange}
            defaultValue={this.state.value}
          />
        </div>
        <div className="output">
          <h3>Pro Note</h3>
          <div className="output-text">{this.state.value}</div>
        </div>
      </div>
    );
  }

  constructor(props) {
    super(props);
    // to bind the method with the event handler without ().
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: "",
    };
  }

  //event handler method to change the state.
  //setState is used to change the state.
  handleChange(e) {
    this.setState({ value: e.target.value });
  }
}

export default HigherOrderFunctions;

