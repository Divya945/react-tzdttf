import React, { Component } from 'react';
import ReactDOM from 'react-dom';
const options = [
  {
    value: '',
    label: '-- Select Country--',
  },
  {
    value: 'Finland',
    label: 'Finland',
  },
  {
    value: 'Sweden',
    label: 'Sweden',
  },
  {
    value: 'Norway',
    label: 'Norway',
  },
  {
    value: 'Denmark',
    label: 'Denmark',
  },
];
const selectOptions = options.map(({ label, value }) => (
  <option value={value}>{label}</option>
));
export default class Multipleinputfield extends Component {
  constructor() {
    super();
  }
  state = {
    FirstName: '',
    LastName: '',
    Email: '',
    country: '',
    tel: '',
    dateofbirth: '',
    color: '',
    weight: '',
    gender: '',
    comments: '',
    skills: {
      html: false,
      css: false,
      javascript: false,
    },
    file: '',
    /*touched: {
      FirstName: false,
      LastName: false,
    },*/
  };
  changeHandler = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      this.setState({
        Skills: { ...this.state.skills, [name]: checked },
      });
    } else if (type === 'file') {
      console.log(type, 'cehck here');
      this.setState({ [name]: e.target.file[0] });
    } else {
      this.setState({ [name]: value });
    }
  };
  changeBlur = (e) => {
    const { name, value } = e.target;
    this.setState({ touched: { ...this.state.touched, [name]: true } });
  };
  submithandler = (e) => {
    e.preventDefault();

    console.log(this.state);
  };
  render() {
    const {
      FirstName,
      LastName,
      Email,
      tel,
      dateofbirth,
      color,
      weight,
      gender,
      comments,
      file,
      skills,
    } = this.state;

    const formattedSkills = [];

    for (const key in skills) {
      if (skills[key]) {
        console.log('1');
        formattedSkills.push(key.toUpperCase());
      }
    }
    //const { FirstName } = this.validate()
    return (
      <div>
        <h2>Multiple input fields</h2>
        <form onSubmit={this.submithandler} noValidate>
          <div>
            <label>FirstName: </label>
            <input
              type="text"
              placeholder="FirstName"
              value={this.state.FirstName}
              onBlur={this.changeBlur}
              name="FirstName"
              onChange={this.changeHandler}
            />
            <small>{FirstName}</small>
          </div>
          <div>
            <label>LastName: </label>
            <input
              type="text"
              placeholder="LastName"
              value={this.state.LastName}
              name="LastName"
              onChange={this.changeHandler}
            />{' '}
            <small>{LastName}</small>
          </div>
          <div>
            <label>Email: </label>
            <input
              type="text"
              placeholder="Email"
              value={this.state.Email}
              name="Email"
              onChange={this.changeHandler}
            />{' '}
            <small>{Email}</small>
          </div>
          <div>
            <label>Telephone: </label>
            <input
              type="tel"
              placeholder="Telphone"
              value={this.state.tel}
              name="tel"
              onChange={this.changeHandler}
            />{' '}
            <small>{tel}</small>
          </div>
          <div>
            <label>DateOfBirth: </label>
            <input
              type="date"
              placeholder="Date of Birth"
              value={this.state.dateofbirth}
              name="dateofbirth"
              onChange={this.changeHandler}
            />{' '}
            <small>{dateofbirth}</small>
          </div>
          <div>
            <label>Color: </label>
            <input
              type="color"
              placeholder="Fav Color"
              value={this.state.color}
              name="color"
              onChange={this.changeHandler}
            />{' '}
            <small>{color}</small>
          </div>
          <div>
            <label>Weight: </label>
            <input
              type="number"
              placeholder="Weight"
              id="weight"
              value={this.state.weight}
              name="color"
              onChange={this.changeHandler}
            />{' '}
            <small>{weight}</small>
          </div>
          <div>
            <label>Select Country: </label>
            <select onChange={this.changeHandler} name="country" id="country">
              {selectOptions}
            </select>{' '}
            <small>{FirstName}</small>
          </div>
          <div>
            <p>Gender</p>
            <input
              type="radio"
              id="female"
              value="female"
              name="gender"
              onChange={this.changeHandler}
              checked={gender === 'female'}
            />
            <label>female</label>

            <input
              type="radio"
              id="male"
              value="male"
              name="gender"
              onChange={this.changeHandler}
              checked={gender === 'male'}
            />
            <label>male</label>
            <small>{FirstName}</small>
          </div>
          <div>
            <label>Select Skill: </label>
            <input
              type="checkbox"
              id="html"
              name="html"
              onChange={this.changeHandler}
            />
            <label>HTML</label>
            <input
              type="checkbox"
              id="CSS"
              name="CSS"
              onChange={this.changeHandler}
            />
            <label>CSS</label>
            <input
              type="checkbox"
              id="Script"
              name="Script"
              onChange={this.changeHandler}
            />
            <label>Script</label>
          </div>
          <div>
            <label>Comments: </label>
            <textarea
              name="comments"
              id="comments"
              value={comments}
              row="10"
              col="3"
              onChange={this.changeHandler}
            ></textarea>
            <small>{comments}</small>
          </div>
          <div>
            <input type="file" name="file" onChange={this.changeHandler} />
            <small>{comments}</small>
          </div>

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
