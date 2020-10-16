import React from 'react';
import { Input } from 'antd';
import { Skeleton, Card, Avatar } from 'antd';
import {Link} from 'react-router-dom'

import './SearchResult.css';

const { Meta } = Card;
const { Search } = Input;

class SearchResult extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
      basicInfo: {
        name: "FengLiu",
        alias: ["6f", "f6"],
        avatar: "https://img.51miz.com/Element/00/88/08/84/72f298b9_E880884_d0f63115.png",
        paperCount: 110,
        citation: 110
      },
      loading: false  // this variable should be in props
		}
	}

	// search value from routes
  render() {
		const aka = this.state.basicInfo.alias.join(" / "),
			loading = this.state.loading,
			source = this.state.basicInfo.avatar;
		console.log( this.props)

    return (
      <div className="search-result-container">
				<div className="search">
					<div className="logo">OATH</div>
					<div className="search-bar">
						<Search 
 							value={this.props.location.query.author}
							onSearch={value => console.log(value)}>
						</Search>
					</div>
				</div>
				<div className="result">
					<Link to={{
						pathname: '/authorprofile'+'/37275735100',
						state: {id: '37275735100'}
					}}>
						<Card className="card" >
							<Skeleton loading={loading} avatar active>
								<Meta
								avatar={
									<Avatar src={source} size={100}/>
								}
								title={<div className="person-info-name">{this.state.basicInfo.name}</div>}
								description={<div className="person-info-aka">AKA: {aka}</div>}
								/>
								<div className="academic-info">
								<div className="academic-info-item">
									<span className="item-title">Paper Count: </span>
									<span className="item-detail">{this.state.basicInfo.paperCount}</span>
								</div>
								<div className="academic-info-item">
									<span className="item-title">Citations: </span>
									<span className="item-detail">{this.state.basicInfo.citation}</span>
								</div>
								</div>
							</Skeleton>
						</Card>
					</Link>
				</div>
      </div>
    );
  }
}

export default SearchResult;