import React from 'react';
import { Input } from 'antd';

import './Home.css';

const { Search } = Input;

class Home extends React.Component {
	constructor(props) {
		super(props);
	}

  render() {
    return (
      <div className="outer">
        <div className="container">
            <div className="home-title">OATH</div>
            <div className="slogan">Online Graph System for Researchers</div>
            <div className="search">
              <Search
                className="search-bar"
                placeholder="input search text"
                onSearch={this.search.bind(this)}>
              </Search>
            </div>
        </div>
      </div>
    )
	}
	
	search(val) {
    console.log( this.props)
    this.props.history.push({ pathname : '/result' ,query : {author: val}, search:'?name='+val })
	}
}

export default Home;