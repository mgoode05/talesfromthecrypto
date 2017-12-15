import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import tokenService from '../../utils/tokenService';
import {Button, icon } from 'react-materialize';

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
                        <th>Price</th>
                        <th>Change 24h</th>
                        <th>Volume 24h</th>
                        <th>Open 24h</th>
                        <th>Market Cap</th>
                        <th>Supply</th>
                    </tr>
                        { this.props.cryptocurrencies.filter(c => c.name === this.props.match.params.name).map((c, idx) => <tr key={idx}>
                            <td><Link to={`/name/${c.name}`} onClick={this.handleClick}>{c.name}</Link></td>
                            <td>{c.price}</td>
                            <td>{c.change24hour}</td>
                            <td>{c.volume24hour}</td>
                            <td>{c.open24hour}</td>
                            <td>{c.marketcap}</td>
                            <td>{c.supply}</td>
                            <td>
                                <Button onClick={() => this.addStock(c.name)} floating large className='blue' waves='light' icon='add'>Add To Watchlist</Button>
                            </td>

                        </tr>) } 
                    </tbody>
                    </table>) : <h3> Loading </h3>}
                </div>
            )
        }
    }
}

export default IndividualCC;


