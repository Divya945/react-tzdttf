import React, { Component } from 'react';

export default class Basiclist extends Component {
  constructor() {
    super();
    this.state = {
      //names: ['Rajy', 'mani', 'Dani', 'munni']
    };
  }
  render() {
    const names = ['Rajy', 'mani', 'Dani', 'munni'];
    // return this.state.names.map((a) => <h1> {a}</h1>);
    // return this.state.names.map((a) =>{return <h1> {a}</h1>});
    //<p>Welcome {this.state.names} </p>
    return names.map((a) => {
      return <p>{a}</p>;
    });
  }
}
