import React, { Component } from "react";
import Card from "./card";

class Cards extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="row m-0 justify-content-start">
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
