import React from "react";
import { Skeleton, Card, Avatar, Row, Col } from "antd";
import "./BasicInfoCard.css";
import { BarsOutlined, ShareAltOutlined } from "@ant-design/icons";

const { Meta } = Card;

class BasicInfoCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      avatar:
        "https://img.51miz.com/Element/00/88/08/84/72f298b9_E880884_d0f63115.png",
    };
  }

  render() {
    const aka = (this.props.aka || []).join(" / ");
    const history = this.props.history.map((aff) => {
      return (
        // <div key={aff.name}>
        // 	<span className="history-item" >{aff.time}: </span>
        // 	<span className="history-item" >{aff.name}</span>
        // </div>
        <div key={aff}>
          <span className="history-item">{aff}</span>
        </div>
      );
    });

    return (
      <div className="basic-info-card">
        <Card className="card">
          <Skeleton loading={this.props.loading} avatar active>
            <Row>
              <Col span={12} offset={1}>
                <Meta
                  avatar={
                    <Avatar
                      src={this.props.avatar || this.state.avatar}
                      size={100}
                    />
                  }
                  title={
                    <div className="person-info-name">{this.props.name}</div>
                  }
                  description={
                    aka !== "" && (
                      <div className="person-info-aka">also called: {aka}</div>
                    )
                  }
                />
                <div className="academic-info">
                  <div className="academic-info-item">
                    <span className="item-title">
                      <BarsOutlined /> Paper Count:{" "}
                    </span>
                    <span className="item-detail">{this.props.paperCount}</span>
                  </div>
                  <div className="academic-info-item">
                    <span className="item-title">
                      <ShareAltOutlined /> Citations:{" "}
                    </span>
                    <span className="item-detail">{this.props.citation}</span>
                  </div>
                </div>
              </Col>
              <Col className="affiliation-card" span={10} offset={1}>
                <div className="title">Affiliation</div>
                <div className="current">
                  <div className="current-title">Current: </div>
                  <span className="current-item">{this.props.current}</span>
                </div>
                <div className="history">
                  <div className="history-title">History: </div>
                  {history.length === 0 && "No other affiliations"}
                  {history.length !== 0 && history}
                </div>
              </Col>
            </Row>
          </Skeleton>
        </Card>
      </div>
    );
  }
}

export default BasicInfoCard;
