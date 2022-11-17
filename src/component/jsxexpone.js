import React from 'react';
import Basiclisttwo from './basiclisttwo.js'
import Formvalidation from './formvalidation.js'
import './style.css';
//Header compoent
const Header = () => {
  return (
    <div className="header">
      <p>header</p>
    </div>
  );
};
const Tecskills = () => {
  const skills = [
    'HTML',
    'CSS,',
    'SASS',
    'JAVASCRIPT',
    'JQUERY',
    'ANGULAR',
    'REACT',
  ];
  const techskill = skills.map((skill) => (
    <button key={skill}>{skill} </button>
  ));
  return (
    <div>
      <h2> SKILLS </h2>
      <p>{techskill}</p>
    </div>
  );
};
//main compoent
const Maincontainer = () => {
  return (
    <div className="container">
      <div className="imgConatiner">
        <img
          src="https://st4.depositphotos.com/1064024/20942/i/600/depositphotos_209420380-stock-photo-digital-illustration-little-cute-unicorn.jpg"
          className="authorImage"
        />
        <p>Seniour Developer</p>
      </div>
      <Tecskills />
      <Basiclisttwo />
      <Formvalidation />
    </div>
  );
};

//footer component
const Footer = () => {
  return (
    <div className="footer">
      <p>footer</p>
    </div>
  );
};
export default function Jsxexpone() {
  return (
    <div>
      <Header />
      <Maincontainer />
      <Footer />
    </div>
  );
}
