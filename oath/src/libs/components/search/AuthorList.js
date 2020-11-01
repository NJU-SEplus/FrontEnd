import React from "react";
import { Card, Avatar } from "antd";
import { Link } from "react-router-dom";

import "./AuthorList.css";

const { Meta } = Card;

class AuthorList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let cardList = this.props.authorList.map((curr) => {
      return (
        <Link
          to={{
            pathname: "/authorprofile/" + curr.author_id,
          }}
          key={curr.author_id}
        >
          <Card className="card">
            {/* <Skeleton loading={this.state.loading} avatar active> */}
            <Meta
              avatar={<Avatar src={curr.author_avatar} size={100} />}
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
      );
    });

    return <div className="result">{cardList}</div>;
  }
}

export default AuthorList;
