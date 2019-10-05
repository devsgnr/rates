import React, { Component } from "react";
import Card from "./card";

class Cards extends Component {
  state = {};
  render() {
    return (
      <div className="cards">
        <div className="mx-3 mt-3 text-secondary text-center">
          <small>{`Rates as of ${this.props.date}`}</small>
        </div>
        <div className="row m-0">
          {this.props.data.map(data => (
            <Card
              key={data[0]}
              currency={data[0]}
              rate={data[1]}
              value={this.props.value}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Cards;
