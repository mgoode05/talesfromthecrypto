import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Watchlist.css';
import watchlistAPI from '../../utils/watchlistAPI';
import tokenService from '../../utils/tokenService';
import {Button} from 'react-materialize';
// import IndividualCC from '../IndividualCCPage/IndividualCC';


class Watchlist extends Component {
    constructor(props) {
      super(props)
      this.state = {
        id: props.id,
        watchlist: null
      }
    }

    getWatchlist() {
      console.log('getting watch list')
      fetch('/api/watchlist', {
      // fetch('/IndividualCCPage/IndividualCC', {
        method: 'GET',
        headers: {
          'content-Type': 'application/json',
          'Authorization': 'Bearer ' + tokenService.getToken()
        }
      })
      .then(res => res.json())
      .then((data) => {
        this.setState({
          watchlist: data
        })
      })
      
      // (doc => {
      //   console.log(doc)     
      // })
      // .then(watchlist => {
      //   console.log('watchlist:', watchlist)
      // })
    }

    componentDidMount() {
      this.getWatchlist();
      console.log(this.state.watchlist)
    }

    render() {
        
      var currentCryptos;

      if (this.props.cryptocurrencies) {
        currentCryptos = this.props.cryptocurrencies.filter(crypto => this.state.watchlist.includes(crypto.name))
      }

      return (
        <div>
            {currentCryptos ? 
            (<table>
              <tbody>
                <tr>
                    <th>Name</th>
                    <th>Symbol</th>
                    <th>Price</th>
                    <th>Volume 24h</th>
                    <th>Market Cap</th>
                </tr>
            
            {currentCryptos.map((currency, idx) => {
              return ( <tr key={idx}> 
                <td><Link to={`/name/${currency.name}`} onClick={this.handleClick}>{currency.name}</Link></td>
                <td>{currency.symbol}</td>
                <td>{currency.price}</td>
                <td>{currency.change24hour}</td>
                <td>{currency.volume24hour}</td>
                <td>{currency.open24hour}</td>
                <td>{currency.marketcap}</td>
                <td>{currency.supply}</td>
              </tr>)
            })}
              </tbody>
            </table>) : <h3>Loading</h3> }
            <Button waves='light' node='a' href='/'>RETURN</Button><br />
            </div>
            )
          }
        }
        
export default Watchlist;