import React, { useState } from 'react';
import './style.css';

export default function Searchfilter() {
  const itemList = [
    'Apple',
    'Orange',
    'Banana',
    'Cherry',
    'Milk',
    'Peanuts',
    'Butter',
    'Tomato',
  ];
  const [searchfilterlist, setSearchfilterlist] = new useState(itemList);

  const filterBysearch = (e) => {
    const value = e.target.value;
    var updatedItems = [...itemList];
    updatedItems = updatedItems.filter((item) => {
      return item.toLowerCase().indexOf(value.toLowerCase()) !== -1;
    });
    console.log(updatedItems);
    setSearchfilterlist(updatedItems);
  };

  return (
    <div className="">
      <div className="searchheader">
        <label>Search</label>
        <input type="text" name="search" onChange={filterBysearch} />
      </div>
      <div className="listItems">
        <ol>
          {searchfilterlist.map((item, value) => (
            <li key={value}> {item} </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
