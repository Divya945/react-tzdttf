import React, { Component } from 'react';

export default class Conditionalrender extends Component {
  constructor() {
    super();

    this.state = {
      login: false,
    };
  }
  render() {
    let msg;
    this.state.login
      ? (msg = <h1>Welcome user </h1>)
      : (msg = <h1>Welcome guest </h1>);
    return msg;
  }
}
