import React from "react";
import { List, Card, Skeleton, Drawer } from "antd";
import {
  FileTextOutlined,
  TrademarkCircleOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";
import request from "../../../utils/request";

import "./PaperList.css";

class PaperList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: [],
      loading: true,
      visible: false,
    };
  }

  getRefList(refList) {
    const display = refList.map((ref) => {
      return (
        <div>
          <strong>{ref.order}.</strong>{" "}{"  "}
          {ref.ieeeinfo.substring(1)}
        </div>
      );
    });

    return display;
  }

  async handleView(e) {
    this.setState({
      ...this.state,
      visible: true,
      display: <Skeleton active></Skeleton>,
    });
    const res = await request("/paper/citedPapers?doi=" + e);
    const display = this.getRefList( res?.data?.content || []);

    this.setState({
      ...this.state,
      display: <div>{display}</div>,
    });
  }

  render() {
    return (
      <div className="paper-list">
        <Card className="card">
          <div className="title">
            <FileTextOutlined /> Paper List
          </div>
          <List
            itemLayout="horizontal"
            dataSource={this.props.paperList}
            className="content"
            pagination={{
              onChange: (page) => {
                console.log(page);
              },
              pageSize: 5,
            }}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  title={<span className="title">{item.title}</span>}
                  description={
                    <span className="description">DOI: {item.paper_id}</span>
                  }
                />
                <div className="cite">
                  <div
                    className="ref"
                    onClick={() => {
                      this.handleView(item.paper_id);
                    }}
                  >
                    <TrademarkCircleOutlined /> References
                  </div>
                  <div>
                    <ShareAltOutlined /> Cited by: {item.citation}
                  </div>
                </div>
              </List.Item>
            )}
          />
          <Drawer
            placement="right"
            width={720}
            onClose={() => {
              this.setState({
                visible: false,
              });
            }}
            visible={this.state.visible}
            getContainer={false}
            style={{ position: "absolute" }}
            mask={false}
          >
            {this.state.display}
          </Drawer>
        </Card>
      </div>
    );
  }
}

export default PaperList;
