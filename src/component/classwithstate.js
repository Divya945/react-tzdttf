import React, { Component } from 'react';

export default class Classwithstate extends Component {
  constructor() {
    super();

    this.state = {
      name: 'React',
    };
  }
  onchange = () => {
    console.log('workinglog');
    this.setState({
      name: 'Angular',
    });
  };
  render() {
    return (
      <div>
        <p>Welcome {this.state.name}</p>
        <button onClick={this.onchange}>click me</button>
      </div>
    );
  }
}
