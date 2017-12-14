import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Watchlist.css';
import watchlistAPI from '../../utils/watchlistAPI';
import tokenService from '../../utils/tokenService';
import IndividualCC from '../IndividualCCPage/IndividualCC';


class Watchlist extends Component {
    constructor(props) {
      super(props)
      this.state = {
        id: props.id
      }
    }

    getWatchlist = (name) => {
      fetch('/IndividualCCPage/IndividualCC', {
        method: 'POST',
        headers: {
          'content-Type': 'application/json',
          'Authorization': 'Bearer ' + tokenService.getToken()
        },
        body: JSON.stringify({ stock: name })
      });
    }
    render() {
      return (
        <div>
          <header className="header-footer">Watchlist</header>
          { this.props.cryptocurrencies ? ( <table>
                    <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Symbol</th>
                        <th>Price</th>
                        <th>Volume 24h</th>
                        <th>Market Cap</th>
                    </tr>
                        { this.props.cryptocurrencies.filter(c => c.name === this.props.match.params.name).map((c, idx) => <tr key={idx}>
                            <td><Link to={`/name/${c.name}`} onClick={this.handleClick}>{c.name}</Link></td>
                            <td>{c.symbol}</td>
                            <td>{c.price}</td>
                            <td>{c.volume24hour}</td>
                            <td>{c.marketcap}</td>

                        </tr>) } 
                    </tbody>
                    </table>) : <h3> Loading </h3>}
          
          
          
          
          <Link to='/'>RETURN</Link><br />
        </div>
      );
    }
  }

export default Watchlist;