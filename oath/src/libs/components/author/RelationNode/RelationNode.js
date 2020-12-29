import React from "react";
import { Card } from "antd";
import { DeploymentUnitOutlined } from "@ant-design/icons";

import ReactEchartsCore from "echarts-for-react/lib/core";
import echarts from "echarts/lib/echarts";
import "echarts/lib/chart/graph";
import "echarts/lib/component/title";
import "echarts/lib/component/tooltip";

import "./RelationNode.css";

class RelationNode extends React.Component {
  getNodes = (center, authorList) => {
    const onePos = authorList.findIndex((v) => v.colla_times === 1);
    const repeatList = [];
    const nodeList = [];

    authorList.forEach((node, i) => {
      if (authorList.findIndex((v) => v.colla_id === node.colla_id) !== i) {
        repeatList.push({
          ...node,
          origin: authorList.findIndex((v) => v.colla_id === node.colla_id),
          cur: i,
        });
      } else {
        const n = {
          name: node.colla_name,
          value: node.colla_times,
          id: node.colla_id,
          label: {
            show: false,
          },
          symbolSize: (node.colla_times + 2) * 3,
          category: i < onePos / 2 ? 1 : node.colla_times === 1 ? 0 : 2,
        };
        // return n;
        nodeList.push(n);
      }
    });

    const size = nodeList[0]?.symbolSize || 0;
    nodeList.unshift({
      id: center.id,
      name: center.name,
      itemStyle: {
        color: "red",
      },
      symbolSize: size * 1.1,
      categories: 3,
    });

    return nodeList;
  };

  getEdges = (center, authorList) => {
    const edgeList = authorList.map((edge) => {
      let e = {
        source: center.id,
        target: edge.colla_id,
        value: edge.colla_times + 2,
      };
      return e;
    });
    return edgeList;
  };

  getOption = () => {
    const nodes = this.getNodes(this.props.center, this.props.relations);
    const edges = this.getEdges(this.props.center, this.props.relations);

    const settings = {
      animationDurationUpdate: 1500,
      animationEasingUpdate: "quinticInOut",
      tooltip: {
        trigger: "item",
        enterable: "ture",
        confine: "ture",
        textStyle: {
          fontSize: 18,
        },
        padding: 10,
        backgroundColor: "#222",
        borderColor: "#777",
        borderWidth: 1,
        extraCssText: "width:15em; white-space:pre-wrap",
        formatter(node) {
          if (node.dataType === "node" && node.data.categories !== 3) {
            return `<div style="border-bottom: 1px solid rgba(255,255,255,.3);f
                  ont-size: 15px;padding-bottom: 5px;margin-bottom: 5px"
                  >${node.data.name}</div><div
                  class="tool-content" style="font-size: 12px; text-align:left;
                  "><strong>Cooperation times: </strong>${node.data.value}</div>`;
          }
        },
      },
      color: ["#ffeb00", "#3bff00", "#3fd4ff", "#38b6b6"],
      series: [
        {
          type: "graph",
          layout: "force",
          force: {
            edgeLength: [100, 600],
            initLayout: "circular",
            repulsion: 50,
            edgeLength: [50, 150],
          },
          draggable: true,
          roam: "scale",
          symbolSize: 10,
          data: nodes,
          links: edges,
          shadowColor: "rgba(0, 0, 0, 0.5)",
          shadowBlur: 10,
          label: {
            show: true,
          },
          lineStyle: {
            opacity: 0.9,
            width: 2,
            curveness: 0.2,
          },
          categories: [{ name: "near" }, { name: "middle" }, { name: "far" }],
          itemStyle: {
            borderColor: "#fff",
            borderWidth: 1,
            shadowBlur: 10,
            shadowColor: "rgba(0, 0, 0, 0.3)",
          },
        },
      ],
    };
    return settings;
  };

  render() {
    return (
      <div className="relation-node">
        <Card>
          <div className="title">
            <DeploymentUnitOutlined /> Cooperation Authors
          </div>
          <div className="content">
            <ReactEchartsCore
              echarts={echarts}
              style={{height: '440px', width: '100%'}}
              option={this.getOption()}
              notMerge={true}
              lazyUpdate={true}
            />
          </div>
        </Card>
      </div>
    );
  }
}

export default RelationNode;
