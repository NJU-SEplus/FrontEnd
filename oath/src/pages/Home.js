import React from 'react';
import { Input } from 'antd';

import './Home.css';

const { Search } = Input;

class Home extends React.Component {
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
                            onSearch={value => console.log(value)}>
                        </Search>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;