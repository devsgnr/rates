import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="header">
        <nav className="navbar rounded navbar-light shadow-sm mx-2 my-1">
          <a className="navbar-brand font-weight-bold" href="/">
            Rates
          </a>
        </nav>
      </div>
    );
  }
}

export default Header;
