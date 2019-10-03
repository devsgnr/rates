import React, { Component } from "react";

class InfoDisplay extends Component {
  state = {};
  render() {
    const styles = {
      width: "100%",
      height: "100%"
    };

    return (
      <div className="row m-0 justify-content-between">
        <canvas
          id="myInfoDisplay"
          width={styles.width}
          height={styles.height}
        ></canvas>
      </div>
    );
  }
}

export default InfoDisplay;
