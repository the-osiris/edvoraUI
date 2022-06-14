import React, { useState } from "react";
import "../styles/Bar.css";

class Bar extends React.Component {
  // console.log(props);
  state = { val: 0 };

  onButtonClick = (e) => {
    e.preventDefault();
    this.state.val = 1;
    this.props.onCheckNow(this.state.val);
  };
  onButtonClick2 = (e) => {
    e.preventDefault();
    this.state.val = 2;
    this.props.onCheckNow(this.state.val);
  };
  onButtonClick3 = (e) => {
    e.preventDefault();
    this.state.val = 3;
    this.props.onCheckNow(this.state.val);
  };

  onButtonClick4 = (e) => {
    e.preventDefault();
    this.state.val = 4;
    this.props.onCheckNow(this.state.val);
  };

  // console.log(val);
  render() {
    return (
      <div className="bar" style={{ marginBottom: "10px" }}>
        <div className="option">
          <button className="btn btn1" onClick={this.onButtonClick}>
            Nearest rides
          </button>
          <button className="btn btn1" onClick={this.onButtonClick2}>
            Upcoming rides
          </button>
          <button className="btn btn1" onClick={this.onButtonClick3}>
            Past rides
          </button>
        </div>
        <div className="filter">
          <span class="material-symbols-outlined">sort</span>
          <button className="btn" onClick={this.onButtonClick4}>
            Filter
          </button>
          <div className="filter_container">
            <span>Filter</span>
            <hr></hr>
            <button className="btn filter_btn">State</button>
            <br />
            <button className="btn filter_btn">City</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Bar;
