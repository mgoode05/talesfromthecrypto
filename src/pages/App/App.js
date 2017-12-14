import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import userService from '../../utils/userService';
import NavBar from '../../components/NavBar/NavBar';
import SignUpPage from '../SignUpPage/SignUpPage';
import LoginPage from '../LoginPage/LoginPage';
import HomePage from '../HomePage/HomePage';
import Watchlist from '../WatchlistPage/Watchlist';
import IndividualCC from '../IndividualCCPage/IndividualCC';
import cc from 'cryptocompare';


class App extends Component {
  constructor(props) {
    super()
    this.state = {
      user: false,
      cryptocurrencies: [],
      stock:""
    }
  }

  
  componentDidMount() {
    let cryptocurrenciesShown = ['BTC', 'ETH', 'BCH', 'MIOTA', 'LTC', 'XRP'];
    
    let currencyOptions = ['USD'];
    
    let user = userService.getUser();
    this.setState({user});
    
    //Cryptocurrency API request
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
  
  handleSignup = () => {
    this.setState({user: userService.getUser(), user: true});
  }
  
  handleLogin = () => {
    this.setState({user: userService.getUser(), user: true})
  }

  handleLogout = () => {
    userService.logout();
    this.setState({user: null})
  }
  
  handleClick = (e) => {
    console.log('this is event', e)
    this.setState({stock: ':name'})
  }
  
  addStock = (props) => {
    fetch('../../routes/api/api/watchlist', {
      method: 'POST',
      headers: {'content-Type': 'application/json'},
      body: JSON.stringify({ stock: "cats" })
    })
    console.log('added stock')
  }
  
  render() {
    return (
      <div>
        <NavBar user={this.state.user} handleLogout={this.handleLogout}/>
        <Switch>
            <Route exact path='/' render={() => <HomePage  cryptocurrencies={this.state.cryptocurrencies} addStock={this.addStock} /> } />
            <Route exact path='/watchlist' render={() => ( 
              userService.getUser() ? 
              <Watchlist />
              :
              <Redirect to='/login' />
             )} />
             <Route exact path='/signup' render={(props) => 
              <SignUpPage 
                {...props}
                handleSignup={this.handleSignup}
                />
              }/>
            <Route path='/name/:name' render={(props) => <IndividualCC {...props} cryptocurrencies={this.state.cryptocurrencies} stock={this.stock}/>} />
            <Route exact path='/login' render={(props) => 
              <LoginPage
                {...props}
                handleLogin={this.handleLogin}
              />
            }/>
        
        </Switch>
        </div>
    );
  }
}

export default App;
