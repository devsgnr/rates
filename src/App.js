import React, { Component } from 'react';
import './App.css';
import Header from "./components/header";
import Loading from "./components/loading";
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: undefined, done: undefined };
    this.getData = this.getData.bind(this);
  }

  getData = () => {
    axios
      .get(
        `http://www.apilayer.net/api/live?access_key=${process.env.REACT_APP_CURRENCY_LAYER_API_KEY}&currencies=EUR,JPY,GBP,AUD,CAD,CHF,CNH,SEK,NZD,AED,EGP,NGN,ZAR`
      )
      .then(res => {
        this.setState({ data: Object.entries(res.data.quotes) });
        this.setState({ date: Object.entries(res.headers)[0][1] });
      })
      .then(() => {
        this.setState({ loading: true });
        setTimeout(() => {
          this.setState({ done: true });
        }, 1000);
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentDidMount = () => {
    setTimeout(() => {
      this.getData();
    }, 3000);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Loading loading={this.state.loading} done={this.state.done} data={this.state.data} date={this.state.date} />
      </div>
    );
  }
}

export default App;