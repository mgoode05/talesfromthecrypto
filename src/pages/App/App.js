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
import cc from 'cryptocompare';
global.fetch = require('node-fetch');

// import IndividualCC from '../IndividualCC/IndividualCC';

class App extends Component {
  constructor(props) {
    super()
    this.state = {
      cryptocurrencies: []
    }
  }

  

  componentDidMount() {
    let cryptocurrenciesShown = ['BTC', 'ETH', 'BCH', 'MIOTA', 'LTC', 'XRP'];
  
  //List of Currencies to be used
  let currencyOptions = ['USD'];
  
  //Cryptocurrency to be used
  cc.priceFull([cryptocurrenciesShown], [currencyOptions])
    .then(prices => {
      var tempCrypto = [];
      for (var key in prices) {
        tempCrypto.push({
          name: key, 
          symbol: prices[key].USD.FROMSYMBOL,
          price: prices[key].USD.PRICE,
          volume24hour: prices[key].USD.VOLUME24HOUR,
          marketcap: prices[key].USD.MKTCAP
        })
    }
    this.setState({cryptocurrencies: tempCrypto});
    })
  }

  render() {
    return (
      <div>
        <header>
            <NavBar />
            {/* {this.state.cryptocurrencies.map(cryptocurrency => <div>{cryptocurrency.price})} */}
        </header>
        <Switch>
            <Route exact path='/' render={() => <HomePage cryptocurrencies={this.state.cryptocurrencies} /> } />
            <Route path='/watchlist' render={() => <Watchlist /> } />
            {/* <Route path='/individualcc' render={() => <IndividualCC />} /> */}
        
        </Switch>
        </div>
    );
  }
}

export default App;
