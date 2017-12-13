import React, {Component} from 'react';



// const IndividualCC = (props) => {
//     return (
//         <div>
//             Individual Crypto
//         </div>
//     );
// }
class IndividualCC extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: props.id, 
        }
    }
    componentDidMount() {

    }

    getStock() {

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
                    {this.props.cryptocurrencies.map(c => c.name === this.props.match.params.name ? 
                    <div>{c.name}
                    {c.price}
                    {c.volume24hour}
                    {c.marketcap}
                    </div> : null)}
                </div>
            )
        }
    }
}

export default IndividualCC;

