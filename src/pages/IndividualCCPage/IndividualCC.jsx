import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import tokenService from '../../utils/tokenService';

class IndividualCC extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: props.id
        }
    }
    componentDidMount() {

    }

    addStock = (name) => {
        fetch('/api/watchlist', {
          method: 'POST',
          headers: {
              'content-Type': 'application/json',
              'Authorization': 'Bearer ' + tokenService.getToken()
            },
          body: JSON.stringify({ stock: name })
        });
    }

    render() {
        if (this.state.stock) {
            return (
                <div>
                    Stock Details
                </div>
            );
        } else { 
            return (
                <div>
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
                            <td>
                                <button onClick={() => this.addStock(c.name) }>Add To Watchlist</button>
                            [</td>

                        </tr>) } 
                    </tbody>
                    </table>) : <h3> Loading </h3>}
                </div>
            )
        }
    }
}

export default IndividualCC;

