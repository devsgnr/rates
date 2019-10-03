import React, { Component } from "react";
import FadeIn from "react-fade-in";
import Lottie from "react-lottie";
import * as progressData from "./animations/progressLoading.json";
import * as doneData from "./animations/doneLoading.json";
import Dashboard from "./dashboard.jsx";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: progressData.default,
  renderSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

const defaultOptions2 = {
  loop: false,
  autoplay: true,
  animationData: doneData.default,
  renderSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

class Loading extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  state = {};
  render() {
    return (
      <div className="w-100 row m-0 justify-content-center align-items-center loading">
        {!this.props.done ? (
          <FadeIn>
            <div className="w-100 h-100 d-flex flex-column justify-content-center align-items-center">
              {!this.props.loading ? (
                <Lottie options={defaultOptions} height={170} width={170} />
              ) : (
                <Lottie options={defaultOptions2} height={120} width={120} />
              )}
            </div>
          </FadeIn>
        ) : (
          <Dashboard data={this.props.data} />
        )}
      </div>
    );
  }
}

export default Loading;
