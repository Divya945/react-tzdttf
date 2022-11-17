import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Uncontrolledcomponent extends Component {
  FirstName = React.createRef();
  LastName = React.createRef();
  MiddleName = React.createRef();

  submithandler = (e) => {
    e.preventDefault();
    console.log(this.FirstName.current.value);
    console.log(this.LastName.current.value);
    console.log(this.LastName.current.value);

    const data = {
      FirstName: this.FirstName.current.value,
      LastName: this.LastName.current.value,
      MiddleName: this.LastName.current.value,
    };
    console.log(data);
  };
  render() {
    return (
      <div>
        <h1>Uncontrolled Component</h1>
        <form onSubmit={this.submithandler}>
          <div>
            <label>FirstName: </label>
            <input
              type="text"
              placeholder="FirstName"
              ref={this.FirstName}
              name="FirstName"
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <label>LastName: </label>
            <input
              type="text"
              placeholder="LastName"
              ref={this.LastName}
              name="LastName"
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <label>MiddleName: </label>
            <input
              type="text"
              placeholder="MiddleName"
              ref={this.MiddleName}
              name="MiddleName"
              onChange={this.changeHandler}
            />
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
