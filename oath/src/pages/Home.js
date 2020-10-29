import React from 'react';
import { Input, List, Avatar, Row, Col } from 'antd';
import request from '../libs/utils/request'

import './Home.css';

const { Search } = Input;

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      authorsSortedByPaperCount: [
        {
          name: "wen gao",
          id: 1234567,
          publishCount: 12
        },
        {
          name: "wen gao",
          id: 1234567,
          publishCount: 12
        },
        {
          name: "wen gao",
          id: 1234567,
          publishCount: 12
        },
        {
          name: "wen gao",
          id: 1234567,
          publishCount: 12
        },
        {
          name: "wen gao",
          id: 1234567,
          publishCount: 12
        },
        {
          name: "wen gao",
          id: 1234567,
          publishCount: 12
        },
        {
          name: "wen gao",
          id: 1234567,
          publishCount: 12
        },
        {
          name: "wen gao",
          id: 1234567,
          publishCount: 12
        },
        {
          name: "wen gao",
          id: 1234567,
          publishCount: 12
        },
        {
          name: "wen gao",
          id: 1234567,
          publishCount: 12
        },
      ],
      authorsSortedByHeat: [],
      defaultAvatar: "https://img.51miz.com/Element/00/88/08/84/72f298b9_E880884_d0f63115.png",
      loadingAuthorsByCount: true,
      loadingAuthorsByHeat: true
    }


    this.loadRanking = this.loadRanking.bind(this);
    this.getRanking = this.getRanking.bind(this);
    this.jumpToAuthorProfile = this.jumpToAuthorProfile.bind(this);

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
                  <List.Item>
                    <List.Item.Meta
                      avatar={<Avatar src={this.state.defaultAvatar}></Avatar>}
                      title={<span onClick={this.jumpToAuthorProfile(item.id)}>{item.name}</span>}
                      description={<span>Paper Counts: {item.publishCount}</span>}
                    />
                  </List.Item>
                )}>
              </List>
            </Col>
            <Col className="description"
              span={6}
              offset={3}>
              Top 10 Authors <br /> Sorted By Paper Counts
            </Col>
          </Row>
          <Row className="heat-ranking">
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
                  <List.Item>
                    <List.Item.Meta
                      avatar={<Avatar src={this.state.avatar}></Avatar>}
                      title={<span onClick={this.jumpToAuthorProfile(item.id)}>{item.name}</span>}
                      description={<span>Heat: {item.heat}</span>}
                    />
                  </List.Item>
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

        }
        else if (flag === 2) {

        }
      })
      .catch(err => console.log(err))
  }

  jumpToAuthorProfile(id) {

  }

  search(val) {
    console.log(this.props)
    this.props.history.push({ pathname: '/result', query: { author: val }, search: '?name=' + val })
  }
}

export default Home;