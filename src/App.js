import React, { Component } from 'react';
import './style.css';
class Calc extends Component {
  state = {
    n1: '',
    n2: '',
    result: '',
  };

  handleChange = (event) => {
    this.setState({
      n1: event.target.value,
    });
  };
  handleChangeTwo = (event) => {
    this.setState({
      n2: event.target.value,
    });
  };

  mult = () => {
    let { n1, n2 } = this.state;
    this.setState({
      result: n1 * n2,
    });
  };

  div = () => {
    let { n1, n2 } = this.state;
    this.setState({
      result: n1 / n2,
    });
  };

  sub = () => {
    let { n1, n2 } = this.state;
    this.setState({
      result: n1 - n2,
    });
  };

  add = () => {
    var numberOne = document.getElementById('n1').value;
    var numberTwo = document.getElementById('n2').value;
    var numberResult = parseInt(numberOne) + parseInt(numberTwo);

    this.setState({
      result: numberResult,
    });
  };

  reset = () => {
    this.setState({
      n1: '',
      n2: '',
      result: '',
    });
  };

  render() {
    return (
      <div className="container">
        <h1>Calculator</h1>
        <input
          value={this.state.n1}
          id="n1"
          onChange={this.handleChange}
          type="number"
        />
        <input
          value={this.state.n2}
          id="n2"
          onChange={this.handleChangeTwo}
          type="number"
        />
        <div>
          <button onClick={this.mult}>*</button>
          <button onClick={this.div}>/</button>
          <button onClick={this.sub}>-</button>
          <button onClick={this.add}>+</button>
          <button onClick={this.reset}>C</button>
        </div>
        {/* <button></button>  fazer o button C(Clear)*/}
        <h2>Result: {this.state.result}</h2>
      </div>
    );
  }
}

export default Calc;
