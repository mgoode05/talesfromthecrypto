import React, {Component} from 'react';
import './HomePage.css';
import {Link } from 'react-router-dom';



class HomePage extends Component {
    constructor(props) {
    super(props)
    this.state = {
        stock: "blank"
    }

    this.handleClick = this.handleClick.bind(this);
    }
    handleClick = (e) => {
        console.log('this is event', e)
        this.setState({stock: 'BITCOIN'})
    }
    

    render() {
    return (
        <div>
            <h1>Home</h1>
            { this.props.cryptocurrencies ? ( <table>
                    <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Symbol</th>
                        <th>Price</th>
                        <th>Price</th>
                        <th>Price</th>
                    </tr>
                        { this.props.cryptocurrencies.map((cryptocurrencies, idx) => <tr key={idx}>
                        <td><Link to={`/name/${cryptocurrencies.name}`} onClick={this.handleClick}>{cryptocurrencies.name}</Link></td>
                        <td>{cryptocurrencies.symbol}</td>
                        <td>{cryptocurrencies.price}</td>
                        <td>{cryptocurrencies.volume24hour}</td>
                        <td>{cryptocurrencies.marketcap}</td>

                        </tr>) } 
                    </tbody>
            </table> ) :   <h1>Loading</h1>  }          
        </div>
    )
}
}


export default HomePage;