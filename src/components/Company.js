import React, { Component } from "react";

class Company extends Component {
  render() {
    return (
      <div className="container">
        <h2>{this.props.company.Name}</h2>
        <h3>{this.props.company.Description}</h3>
        <p>{this.props.company.Mission}</p>
      </div>
    );
  }
}

export default Company;
