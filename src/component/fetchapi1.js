import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './style.css';

export default function Fetchapi1() {
  const [user, setUser] = useState([]);
  const fetchData = () => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then((response) => response.json())
      .then((datas) => {
        //console.log(datas);
        setUser(datas);
      });
    //console.log(JSON);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <div>
        {user.map((userobj, value) => (
          <div key={userobj.id} className="imagepanel">
            <img src={userobj.thumbnailUrl} />
            <p> {userobj.id}</p>
            <p> {userobj.title} </p>
          </div>
        ))}
      </div>
    </div>
  );
}
