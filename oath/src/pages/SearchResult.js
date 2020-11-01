import React from "react";
import qs from "qs";
import { Input } from "antd";
import { Card, Spin, Pagination } from "antd";
import request from "../libs/utils/request";

import AuthorList from "../libs/components/search/AuthorList";

import "./SearchResult.css";

const { Search } = Input;

class SearchResult extends React.Component {
  constructor(props) {
    super(props);

    const query = qs.parse(this.props.location.search.substring(1));
    this.state = {
      authorList: [],
      loading: true, // this variable should be in props
      searchName: query.name,
      pageNum: query.pageNum,
      pageSize: 10,
    };

    this.getResult = this.getResult.bind(this);
    this.changeVal = this.changeVal.bind(this);
    this.search = this.search.bind(this);
    this.onChange = this.onChange.bind(this);

    this.getResult();
  }

  // search value from routes
  render() {
    return (
      <div className="search-result-container">
        <div className="search">
          <div className="logo">OATH</div>
          <div className="search-bar">
            <Search
              value={this.state.searchName}
              onChange={this.changeVal}
              onSearch={this.search}
            ></Search>
          </div>
        </div>
        <div className="author-list">
          <Spin spinning={this.state.loading} size="large">
            {/* <div className="result">{cardList}</div> */}
            {this.state.authorList.length === 0 ? (
              !this.state.loading && <div>no result!</div>
            ) : (
              <AuthorList authorList={this.state.authorList} />
            )}
          </Spin>
        </div>

        <div className="pagitation">
          <Pagination
            current={this.state.pageNum}
            total={this.state.total}
            pageSize={this.state.pageSize}
            onChange={this.onChange}
            showSizeChanger={false}
          />
        </div>
      </div>
    );
  }

  getResult() {
    let _this = this;
    const name = this.state.searchName;
    request(
      `/search/name?name=${this.state.searchName}&pageNum=${this.state.pageNum}&pageSize=${this.state.pageSize}`
    )
      .then((res) => {
        console.log("get ", this.props.location, name);
        if (name === qs.parse(this.props.location.search.substring(1)).name) {
          _this.setState({
            ..._this.state,
            authorList: res.data.content.list,
            total: res.data.content.total,
            loading: false,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  changeVal(e) {
    this.setState({
      ...this.state,
      searchName: e.target.value,
    });
  }

  search() {
    this.setState({
      ...this.state,
      loading: true,
      pageNum: 1,
      pageSize: 10,
    });
    this.props.history.push({
      pathname: "/result",
      search: `?name=${this.state.searchName}&pageNum=${this.state.pageNum}`,
    });
    this.getResult();
  }
  onChange(page) {
    this.setState({
      ...this.state,
      loading: true,
      pageNum: page,
    });
    this.props.history.push({
      pathname: "/result",
      search: `?name=${this.state.searchName}&pageNum=${this.state.pageNum}`,
    });
    this.getResult();
  }
}

export default SearchResult;
