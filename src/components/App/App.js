import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route } from "react-router-dom";

//page imports
import Home from '../pages/Home/Home'
import Movies from '../pages/Movies/Movies';
import Details from '../pages/Details/Details';
import Genres from '../pages/Genres/Genres';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
    <>
      <div className="App">
        <header>
        <h1>Let's Watch A Movie</h1>
        </header>
        <nav href="/genres">Genres</nav>
      </div>

      <Router>
        <Route exact path='/' component={Home} />
        <Route path='/movies' component={Movies} />
        <Route path='/details' component={Details} />
        <Route path='/genres' component ={Genres}/>
      </Router>
    </>
    );
  }
}

export default App;
