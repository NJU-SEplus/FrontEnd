import React from "react";
import { Collapse } from 'antd';
import { FileTextOutlined } from "@ant-design/icons";

import "./CollaboratorCard.css";

const { Panel } = Collapse;

class CollaboratorCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collaborators: [
        {
          "collaborator": {
            "colla_id": "37272225300",
            "colla_name": "Shuicheng Yan",
            "colla_times": 2,
            "coPaperList": [
              {
                "title": "Hierarchical Part Matching for Fine-Grained Visual Categorization",
                "doi": "10.1109/ICCV.2013.206"
              },
              {
                "title": "Geometric ???-norm feature pooling for image classification",
                "doi": "10.1109/CVPR.2011.5995370"
              }
            ]
          },
          "chance": 1
        },

        {
          "collaborator": {
            "colla_id": "37272225300",
            "colla_name": "Shuicheng Yan2",
            "colla_times": 2,
            "coPaperList": [
              {
                "title": "Hierarchical Part Matching for Fine-Grained Visual Categorization",
                "doi": "10.1109/ICCV.2013.206"
              },
              {
                "title": "Geometric ???-norm feature pooling for image classification",
                "doi": "10.1109/CVPR.2011.5995370"
              }
            ]
          },
          "chance": 2
        },
        {
          "collaborator": {
            "colla_id": "37272225300",
            "colla_name": "Shuicheng Yan2",
            "colla_times": 2,
            "coPaperList": [
              {
                "title": "Hierarchical Part Matching for Fine-Grained Visual Categorization",
                "doi": "10.1109/ICCV.2013.206"
              },
              {
                "title": "Geometric ???-norm feature pooling for image classification",
                "doi": "10.1109/CVPR.2011.5995370"
              }
            ]
          },
          "chance": 2
        },
        {
          "collaborator": {
            "colla_id": "37272225300",
            "colla_name": "Shuicheng Yan2",
            "colla_times": 2,
            "coPaperList": [
              {
                "title": "Hierarchical Part Matching for Fine-Grained Visual Categorization",
                "doi": "10.1109/ICCV.2013.206"
              },
              {
                "title": "Geometric ???-norm feature pooling for image classification",
                "doi": "10.1109/CVPR.2011.5995370"
              }
            ]
          },
          "chance": 2
        },
        {
          "collaborator": {
            "colla_id": "37272225300",
            "colla_name": "Shuicheng Yan2",
            "colla_times": 2,
            "coPaperList": [
              {
                "title": "Hierarchical Part Matching for Fine-Grained Visual Categorization",
                "doi": "10.1109/ICCV.2013.206"
              },
              {
                "title": "Geometric ???-norm feature pooling for image classification",
                "doi": "10.1109/CVPR.2011.5995370"
              }
            ]
          },
          "chance": 2
        },
      ]
    }
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
          <FileTextOutlined /> 合作关系预测
          </div>
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