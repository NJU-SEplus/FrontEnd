import React from 'react';
import { Input } from 'antd';
import { Skeleton, Card, Avatar, Spin } from 'antd';
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
			loading: true,  // this variable should be in props
			searchName: this.props.location.search.split("=")[1]
		}

		this.getResult = this.getResult.bind(this);
		this.changeVal = this.changeVal.bind(this);
		this.generateResult = this.generateResult.bind(this);
		this.search = this.search.bind(this);

		this.getResult();
	}

	// search value from routes
	render() {
		console.log("render");
		const cardList = this.generateResult();
		return (
			<div className="search-result-container">
				<div className="search">
					<div className="logo">OATH</div>
					<div className="search-bar">
						<Search
							value={this.state.searchName}
							onChange={this.changeVal}
							onSearch={this.search}>
						</Search>
					</div>
				</div>
				<Spin spinning={this.state.loading}>
					<div className="result">
						{cardList}
					</div>
				</Spin>
			</div>
		);
	}

	getResult() {
		let _this = this;

		request('/search/name?name=' + this.state.searchName)
			.then(res => {
				console.log(res);
				_this.setState({
					authorList: res.data.content,
					loading: false
				})
			})
			.catch(err => {
				console.log(err);
			})
	}

	generateResult() {
		let cardList = this.state.authorList.map(curr => {

			return (
				<Link to={{
					pathname: '/authorprofile/' + curr.author_id,
				}}
					key={curr.author_id}>
					<Card className="card" >
						{/* <Skeleton loading={this.state.loading} avatar active> */}
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
						{/* </Skeleton> */}
					</Card>
				</Link>
			)
		});

		return cardList;
	}

	changeVal(e) {
		this.setState({
			searchName: e.target.value
		});
	}

	search(val) {
		this.setState({
			loading: true
		});
		this.getResult(val);
	}
}

export default SearchResult;