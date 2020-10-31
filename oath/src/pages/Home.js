import React from 'react';
import { Input, List, Avatar, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import request from '../libs/utils/request';

import './Home.css';

const { Search } = Input;

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      authorsSortedByPaperCount: [],
      authorsSortedByHeat: [],
      defaultAvatar: "https://img.51miz.com/Element/00/88/08/84/72f298b9_E880884_d0f63115.png",
      loadingAuthorsByCount: true,
      loadingAuthorsByHeat: true
    }


    this.loadRanking = this.loadRanking.bind(this);
    this.getRanking = this.getRanking.bind(this);

    this.loadRanking();
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="overlay">
            <div className="o-content">
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
          <div className="arrow-tip">
            ∨
        </div>
        </div>

        <div className="ranking">
          <Row className="paper-count-ranking" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="list" offset={4} span={8}>
              <List
                loading={this.state.loadingAuthorsByCount}
                itemLayout="horizontal"
                dataSource={this.state.authorsSortedByPaperCount}
                renderItem={item => (
                  <Link to={{
                    pathname: '/authorprofile/' + item.author_id,
                  }}
                    key={item.author_id}>
                    <List.Item>
                      <List.Item.Meta
                        avatar={<Avatar src={this.state.defaultAvatar}></Avatar>}
                        title={<span>{item.author_name}</span>}
                        description={<span>Paper Counts: {item.author_paperCount}</span>}
                      />
                    </List.Item>
                  </Link>
                )}>
              </List>
            </Col>
            <Col className="description"
              span={6}
              offset={3}>
              Top 10 Authors <br /> Sorted By Paper Counts
            </Col>
          </Row>
          <Row className="heat-ranking" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="description"
              span={6}
              offset={3}>
              Top 10 Authors <br /> Sorted By Heat
            </Col>
            <Col className="list" offset={4} span={8}>
              <List
                loading={this.state.loadingAuthorsByHeat}
                itemLayout="horizontal"
                dataSource={this.state.authorsSortedByHeat}
                renderItem={item => (
                  <Link to={{
                    pathname: '/authorprofile/' + item.author_id,
                  }}
                    key={item.author_id}>
                  <List.Item>
                    <List.Item.Meta
                      avatar={<Avatar src={this.state.defaultAvatar}></Avatar>}
                      title={<span>{item.author_name}</span>}
                      description={<span>Heat: {item.heat}</span>}
                    />
                  </List.Item>
                  </Link>
                )}>
              </List>
            </Col>
          </Row>
        </div>
      </div>
    )
  }

  loadRanking() {
    const base = "/author/";
    this.getRanking(base + "showByPublishCount", 1);
    this.getRanking(base + "showbyheat", 2);
  }

  getRanking(url, flag) {
    const _this = this;
    request(url)
      .then(res => {
        console.log(res);
        // console.log(this);
        if (flag === 1) {
          _this.setState({
            authorsSortedByPaperCount: res.data.content,
            loadingAuthorsByCount: false
          });
        }
        else if (flag === 2) {
          _this.setState({
            authorsSortedByHeat: res.data.content,
            loadingAuthorsByHeat: false
          });
        }
      })
      .catch(err => console.log(err))
  }

  search(val) {
    console.log(this.props)
    this.props.history.push({ pathname: '/result', query: { author: val }, search: `?name=${val}&pageNum=1` })
  }
}

export default Home;