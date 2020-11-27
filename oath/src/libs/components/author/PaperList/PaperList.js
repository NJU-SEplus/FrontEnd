import React from "react";
import { List, Card } from "antd";
import { FileTextOutlined, TrademarkCircleOutlined, ShareAltOutlined} from "@ant-design/icons";

import "./PaperList.css";

class PaperList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="paper-list">
        <Card>
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
                  description={<span className="description">DOI: {item.paper_id}</span>}
                />
                <div className="cite">
                  <span><TrademarkCircleOutlined /> References: xxx</span>
                  <span><ShareAltOutlined /> Cited by: {item.citation}</span>
                </div>
              </List.Item>
            )}
          />
        </Card>
      </div>
    );
  }
}

export default PaperList;
