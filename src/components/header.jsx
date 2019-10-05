import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="header sticky-header">
        <nav className="navbar bg-primary navbar-dark shadow mx-0 my-0">
          <a className="navbar-brand" href="/">
            Rates
          </a>
        </nav>
      </div>
    );
  }
}

export default Header;
