import React, { Component } from "react";

class Card extends Component {
  state = {};
  render() {
    return (
      <div className="col-sm-4">
        <div className="card mt-3 mb-2 p-5 border-0 shadow">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <h1 className="text-primary font-weight-bold">
              {(this.props.rate * this.props.value).toFixed(2)}
            </h1>
            <small className="font-weight-light text-muted pt-2 pb-2">
              {this.props.currency} - {this.props.rate}
            </small>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
