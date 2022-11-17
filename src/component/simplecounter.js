import React, { Component } from 'react';
import './style.css';
export default class Simplecounter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    console.log('+');
    this.setState({ count: this.state.count + 1 });
  };
  decrement = () => {
    console.log('-');
    this.setState({ count: this.state.count - 1 });
  };
  render() {
    return (
      <div>
        <h2>Simple Counter</h2>
        <button onClick={this.increment} className="increment btn">
          {' '}
          +{' '}
        </button>
        <button onClick={this.decrement} className="decrement btn">
          {' '}
          -{' '}
        </button>
        <h1>{this.state.count}</h1>
      </div>
    );
  }
}
