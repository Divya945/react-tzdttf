import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Multiplefieldvalid extends Component {
  constructor() {
    super();
  }
  state = {
    firstName: '',
    LastName: '',
    Qualification: '',
  };
  onchangeHander = (e) => {
    console.log('1');
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  onsubmitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    const { firstName, LastName, Qualification } = this.state;
    return (
      <form onSubmit={this.onsubmitHandler}>
        <h2>Multiple form fields</h2>
        <div>
          <input
            type="text"
            placeholder="firstName"
            name="firstName"
            onChange={this.onchangeHander}
            value={firstName}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="LastName"
            name="LastName"
            onChange={this.onchangeHander}
            value={LastName}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Qualification"
            name="Qualification"
            value={Qualification}
            onChange={this.onchangeHander}
          />
        </div>
        <input type="submit" value="Submit " />
      </form>
    );
  }
}
