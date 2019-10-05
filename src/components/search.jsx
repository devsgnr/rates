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
      <div id="sticky" className="search">
        <form className="d-flex justify-content-start m-0 convert">
          <input
            id="curren"
            type="number"
            className="form-control rounded-pill bg-primary text-light border-light"
            placeholder="Value in USD"
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
