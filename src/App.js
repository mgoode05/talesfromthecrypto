import React, { Component } from 'react';
import './App.css';
import HomePage from './components/HomePage/HomePage';

class App extends Component {
  render() {
    return (
      <div>
        <header>
            Welcome
          </header>
          <body>
          <HomePage />
          </body>
        </div>
    );
  }
}

export default App;