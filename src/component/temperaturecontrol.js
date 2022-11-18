import React, { Component, useState } from 'react';
import './style.css';
const Temperaturecontrol = () => {
  const [tempuratureVal, settempuratureVal] = useState(10);
  const [tempuratureColor, settempuratureColor] = useState('cold');

  const increaseTemp = () => {
    console.log('1');
    const newtempval = tempuratureVal + 1;
    settempuratureVal(newtempval);

    if (newtempval > 15) {
      console.log('1');
      settempuratureColor('hot');
    }
  };
  const decreaseTemp = () => {
    const newtempVal = tempuratureVal - 1;
    settempuratureVal(newtempVal);

    if (newtempVal < 14) {
      console.log('2');
      settempuratureColor('cold');
    }
  };
  return (
    <div>
      <div className="temperature-conainer">
        <div className={`temperature-display ${tempuratureColor}`}>
          {tempuratureVal}C
        </div>
        <button onClick={increaseTemp}>+</button>
        <button onClick={decreaseTemp}>-</button>
      </div>
    </div>
  );
};
export default Temperaturecontrol;
