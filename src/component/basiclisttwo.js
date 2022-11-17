import React, { Component } from 'react';
import './style.css';

export default class Basiclisttwo extends Component {
  constructor() {
    super();
  }
  render() {
    const users = [
      {
        userId: 1,
        firstName: 'Krish',
        lastName: 'Lee',
        phoneNumber: '123456',
        emailAddress: 'krish.lee@learningcontainer.com',
      },
      {
        userId: 2,
        firstName: 'racks',
        lastName: 'jacson',
        phoneNumber: '123456',
        emailAddress: 'racks.jacson@learningcontainer.com',
      },
      {
        userId: 3,
        firstName: 'denial',
        lastName: 'roast',
        phoneNumber: '33333333',
        emailAddress: 'denial.roast@learningcontainer.com',
      },
      {
        userId: 4,
        firstName: 'devid',
        lastName: 'neo',
        phoneNumber: '222222222',
        emailAddress: 'devid.neo@learningcontainer.com',
      },
      {
        userId: 5,
        firstName: 'jone',
        lastName: 'mac',
        phoneNumber: '111111111',
        emailAddress: 'jone.mac@learningcontainer.com',
      },
    ];

    //const names = ['Rajy', 'mani', 'Dani', 'munni'];

    return (
      <table className="userTable">
        <tbody>
          <tr>
            <td>userId</td>
            <td>firstName</td>
            <td>lastName</td>
            <td>phoneNumber</td>
            <td>emailAddress</td>
            <td>edit</td>
          </tr>
          {users.map((userdetails) => (
            <tr key={userdetails.userId}>
              <td>{userdetails.userId}</td>
              <td>{userdetails.firstName}</td>
              <td>{userdetails.lastName}</td>
              <td>{userdetails.phoneNumber}</td>
              <td>{userdetails.emailAddress}</td>
              <td>
                <button>edit </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
