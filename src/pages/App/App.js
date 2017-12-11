import React, { Component } from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
import ReactDOM from 'react-dom';
import './App.css';
import API from '../../api/api';
import NavBar from '../../components/NavBar/NavBar';
import HomePage from '../HomePage/HomePage';
import Watchlist from '../WatchlistPage/Watchlist';
// import IndividualCC from '../IndividualCC/IndividualCC';

class App extends Component {
  constructor(props) {
    super()
    this.state = {
      cryptocurrencies: []
    }
  }

  // componentDidMount() {
  //   fetch()
  // }

  render() {
    return (
      <div>
        <header>
            <NavBar />
        </header>
        <Switch>
            <Route exact path='/' render={() => <HomePage /> } />
            <Route path='/watchlist' render={() => <Watchlist /> } />
            {/* <Route path='/individualcc' render={() => <IndividualCC />} /> */}
        
        </Switch>
        </div>
    );
  }
}

export default App;
