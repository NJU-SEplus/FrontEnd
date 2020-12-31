import React from "react";
import { Collapse } from 'antd';
import { UserSwitchOutlined } from "@ant-design/icons";

import "./CollaboratorCard.css";

const { Panel } = Collapse;

class CollaboratorCard extends React.Component {
  constructor(props) {
    super(props);
  }

  handleCollapse = (key) => {
    console.log(key);
  }

  genCollaTimes = (times) => {
    return (
      <em>number of collaboration: {times}</em>
    );
  }

  render() {
    const collaborators = this.props.collaborators.sort((a, b) => a.chance - b.chance);
    const collaList = collaborators.map((item, index) => {
      const collaPaperList = item.collaborator.coPaperList.map((paper, idx) => {
        return (
          <div className="co-paper-title" key={idx}>{idx + 1}. {paper.title}</div>
        )
      })

      return (
        <Panel header={item.collaborator.colla_name} extra={this.genCollaTimes(item.collaborator.colla_times)} key={index}>
          {collaPaperList}
        </Panel>
      );
    });

    return (
      <div className="collaborator-card">
        <div className="title">
        <UserSwitchOutlined /> Collaboration Prediction
          </div>

        <div className="tip">Expand to see their collaborative papers</div>
        <div className="panel">
          <Collapse onChange={this.handleCollapse} ghost>
            {collaList}
          </Collapse>
        </div>
      </div>
    );
  }
}

export default CollaboratorCard;