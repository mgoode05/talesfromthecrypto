import React, {Component} from 'react';
import './HomePage.css';
import {Link } from 'react-router-dom';
// import {Table, Col } from 'react-materialize';



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
            {/* <h4>Tales From The Cryptocurrency</h4> */}
            { this.props.cryptocurrencies ? ( <table hoverable={true}>
                    <thead>
                    <tr>
                        <th data-field="name">Name/Symbol</th>
                        <th data-field="price">Price</th>
                        <th data-field="change24hour">Change 24h</th>
                        <th data-field="volume24hour">Volume 24h</th>
                        <th data-field="open24hour">Open 24h</th>
                        <th data-field="marketcap">Market Cap</th>
                        <th data-field="supply">Supply</th>
                    </tr>
                    </thead>
                    <tbody className='hide-mobile boomboom'>
                        { this.props.cryptocurrencies.map((cryptocurrencies, idx) => <tr key={idx}>
                        <td><Link to={`/name/${cryptocurrencies.name}`} onClick={this.handleClick}>{cryptocurrencies.name}</Link></td>
                        <td>${cryptocurrencies.price}</td>
                        <td key={cryptocurrencies.change24hour} style={cryptocurrencies.change24hour > 0 ? {color:'green'}: {color:'red'}}>{cryptocurrencies.change24hour}%</td>
                        <td>{cryptocurrencies.volume24hour}</td>
                        <td>{cryptocurrencies.open24hour}</td>
                        <td>${cryptocurrencies.marketcap}</td>
                        <td>{cryptocurrencies.supply}</td>

                        </tr> )} 
                    </tbody>
            </table> ) :   <h1>Loading</h1>  }          
        </div>
    )
}
}


export default HomePage;