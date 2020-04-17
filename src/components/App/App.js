import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route } from "react-router-dom";

//page imports
import Home from '../pages/Home/Home'
import Movies from '../pages/Movies/Movies';
import Details from '../pages/Details/Details';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <header>
        <h1>Let's Watch A Movie</h1>
        </header>
      </div>
    );
  }
}

export default App;
