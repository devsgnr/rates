import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = e => {
    this.props.onValueChange(e.target.value);
  };

  render() {
    return (
      <form className="form-inline d-flex justify-content-end mx-3 mt-3">
        <input
          id="curren"
          type="number"
          className="form-control rounded-pill"
          placeholder="eg. 2000"
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default SearchBar;
