import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Watchlist.css';
import watchlistAPI from '../../utils/watchlistAPI';

class Watchlist extends Component {
    state = {  }
    componentDidMount() {
    //   watchlistAPI.index()
    //   .then(_____ => this.setState({____}));
    }
    render() {
      return (
        <div>
          <header className="header-footer">Watchlist</header>
          <Link to='/'>RETURN</Link><br />
        </div>
      );
    }
  }

export default Watchlist;