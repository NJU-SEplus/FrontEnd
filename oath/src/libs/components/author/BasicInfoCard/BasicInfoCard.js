import React from "react";
import { Skeleton, Card, Avatar, Row, Col, Tooltip } from "antd";
import {
  BarsOutlined,
  ShareAltOutlined,
  LineChartOutlined,
  QuestionCircleFilled,
} from "@ant-design/icons";

import "./BasicInfoCard.css";

class BasicInfoCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      avatar:
        "https://img.51miz.com/Element/00/88/08/84/72f298b9_E880884_d0f63115.png",
      heat: "heat = ∑(1 + (year - 2010) * 0.1) * (citations + 10)",
    };
  }

  render() {
    const aka = (this.props.aka || []).join(" / ");
    // const aka = "6f, f6";
    const history = this.props.history.map((aff) => {
      return (
        <div key={aff}>
          <span className="history-item">{aff}</span>
        </div>
      );
    });

    return (
      <div className="basic-info-card">
        <Card className="card">
          <Skeleton loading={this.props.loading} avatar active>
            <div className="card-content">
              <div className="basic-info-avatar">
                <Avatar
                  src={this.props.avatar || this.state.avatar}
                  size={100}
                />
              </div>
              <div className="basic-info-words">
                <Row className="person-info-detail">
                  <Col span={12}>
                    <div className="person-info-name">{this.props.name}</div>
                    {aka !== "" && (
                      <div className="person-info-aka">also called: {aka}</div>
                    )}
                    <div className="academic-info">
                      <div className="academic-info-item">
                        <span className="item-title">
                          <BarsOutlined /> Paper Count :{" "}
                        </span>
                        <span className="item-detail">
                          {this.props.paperCount}
                        </span>
                      </div>
                      <div className="academic-info-item">
                        <span className="item-title">
                          <ShareAltOutlined /> Citations :{" "}
                        </span>
                        <span className="item-detail">
                          {this.props.citation}
                        </span>
                      </div>
                      <div className="academic-info-item">
                        <span className="item-title">
                          <LineChartOutlined /> Heat{" "}
                          <Tooltip
                            className="item-explain"
                            placement="bottom"
                            title={this.state.heat}
                          >
                            <QuestionCircleFilled />
                          </Tooltip>{" "}
                          :{" "}
                        </span>
                        <span className="item-detail">
                          {this.props.heat}
                        </span>
                      </div>
                    </div>
                  </Col>
                  <Col className="affiliation-info" span={12}>
                    <div className="title">Affiliation</div>
                    <div className="current">
                      <div className="title">Current: </div>
                      <span className="current-item">{this.props.current}</span>
                    </div>
                    <div className="history">
                      <div className="title">History: </div>
                      {history.length === 0 && "No other affiliations"}
                      {history.length !== 0 && history}
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Skeleton>
        </Card>
      </div>
    );
  }
}

export default BasicInfoCard;
