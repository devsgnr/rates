import React, { Component } from "react";

import Cards from "./cards";
import SearchBar from "./search";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = { value: 1 };
    this.handleValue = this.handleValue.bind(this);
  }

  handleValue = value => {
    this.setState({
      value: value === "" || isNaN(value) === true ? 1.0 : parseFloat(value)
    });
  };

  render() {
    return (
      <div className="d-board w-100">
        <SearchBar onValueChange={this.handleValue} date={this.props.date} />
        <Cards data={this.props.data} value={this.state.value} />
      </div>
    );
  }
}

export default Dashboard;
