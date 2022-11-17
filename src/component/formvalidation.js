import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Multiplefieldvalid from './multiplefieldvalid.js'
import Multipleinputfield from './multipleinputfield.js'
import Uncontrolledcomponent from './uncontrolledcomponent.js'

export default class Formvalidation extends Component {
  constructor(props) {
    super(props);
    this.state = { firstname: '' };
    // this.state = { secondname: ''};
  }
  changeHandler = (event) => {
    event.preventDefault();
    const value = event.target.value;
    this.setState({ firstname: value });
    console.log('first ' + event.target.value);
  };
  submitHandler = (event) => {
    event.preventDefault();
    console.log('Second ' + this.state.firstname);
  };
  render() {
    const firstname = this.state.firstname;
    //const secondName = this.state.secondName;
    return (
      <div>
      <form onSubmit={this.submitHandler}>
        <div>
          First Name
          <input
            type="text"
            name="firstname"
            value={this.state.firstname}
            onChange={this.changeHandler}
          />
        </div>

        <h1>First {this.state.firstname}</h1>
        <input type="submit" value="submit" />
      </form>
      <Multiplefieldvalid />
      <Multipleinputfield />
      <Uncontrolledcomponent />
      </div>
    );
  }
}
