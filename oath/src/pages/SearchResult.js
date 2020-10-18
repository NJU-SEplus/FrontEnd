import React from 'react';
import { Input } from 'antd';
import { Skeleton, Card, Avatar } from 'antd';
import { Link } from 'react-router-dom'
import request from '../libs/utils/request'

import './SearchResult.css';

const { Meta } = Card;
const { Search } = Input;

class SearchResult extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			authorList: [],
			loading: false,  // this variable should be in props
			searchName: this.props.location.search.split("=")[1]
		}

		let _this = this;

		request('/search/name?name=' + this.state.searchName)
			.then(res => {
				_this.setState({
					authorList: res.data.content
				})
			})
			.catch(err => {
				console.log(err);
			})
	}

	// search value from routes
	render() {
		const cardList = this.generateResult.call(this);
		return (
			<div className="search-result-container">
				<div className="search">
					<div className="logo">OATH</div>
					<div className="search-bar">
						<Search
							value={this.state.searchName}
							onSearch={value => console.log(value)}>
						</Search>
					</div>
				</div>
				<div className="result">
					{cardList}
				</div>
			</div>
		);
	}

	generateResult() {
		let cardList = this.state.authorList.map(curr => {
			// let fields = curr.fields.map((curr) => {
			// 	return (
			// 		<div className="field-info-item">{curr}</div>
			// 	);
			// });

			return (
				<Link to={{
					pathname: '/authorprofile/' + curr.author_id,
				}}
					key={curr.author_id}>
					<Card className="card" >
						<Skeleton loading={this.state.loading} avatar active>
							<Meta
								avatar={
									<Avatar src={curr.author_avatar} size={100} />
								}
							// title={<div className="person-name">{this.state.basicInfo.name}</div>}
							// description={<div className="person-aka">AKA: {aka}</div>}
							/>
							<div className="person-info">
								<div className="person-info-name">{curr.author_name}</div>
								{/* <div className="person-info-aka">AKA: {aka}</div> */}
							</div>
							<div className="academic-info">
								<div className="academic-info-item">
									<span className="item-title">Affiliation: </span>
									<span className="item-detail">{curr.affiliation}</span>
								</div>
								<div className="academic-info-item">
									<span className="item-title">Paper Count: </span>
									<span className="item-detail">{curr.author_paperCount}</span>
								</div>
							</div>
							{/* <div className="field-info">
								{fields}
							</div> */}
						</Skeleton>
					</Card>
				</Link>
			)
		});

		return cardList;
	}
}

export default SearchResult;