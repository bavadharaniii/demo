import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React, { Component } from "react";

class Person extends Component {
  render() {
    return (
      <div>
        <h2>Name: {this.props.name}</h2>
        <h3>Age: {this.props.age}</h3>
      </div>
    );
  }
}


function App() {
  const fruits = ["Apple", "Mango", "Orange", "Banana"];

  return (
    <div>
      <h1>Simple Array List</h1>

      <ul>
        {fruits.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <hr />

      <h1>Person Details</h1>
      <Person name="Bava" age={20} />
    </div>
  );
}

export default App;
