import React from 'react';
import './HomePage.css';


const HomePage = (props) => {

    return (
        <div>
            <h1>Home</h1>
            { props.cryptocurrencies ? ( <table>
                    <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                        { props.cryptocurrencies.map((cryptocurrencies, idx) => <tr key={idx}>
                        <td>{cryptocurrencies.name}</td>
                        <td>{cryptocurrencies.symbol}</td>
                        <td>{cryptocurrencies.price}</td>
                        <td>{cryptocurrencies.volume24hour}</td>
                        <td>{cryptocurrencies.marketcap}</td>

                        </tr>) } 
                    </tbody>
            </table> ) :   <h1>Loading</h1>  }          
        </div>
    );
}


export default HomePage;