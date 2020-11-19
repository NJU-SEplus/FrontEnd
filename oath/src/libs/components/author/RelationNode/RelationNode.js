import React from "react";
import { Card } from "antd";
import { FileTextOutlined } from "@ant-design/icons";

import ReactEchartsCore from "echarts-for-react/lib/core";
import echarts from "echarts/lib/echarts";
import "echarts/lib/chart/graph";
import "echarts/lib/component/title";
import "echarts/lib/component/tooltip";

import "./RelationNode.css";

class RelationNode extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      setting: {
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
          extraCssText: "width:10em; white-space:pre-wrap",
          formatter(node) {
            if (node.dataType == "node") {
              return `<div style="border-bottom: 1px solid rgba(255,255,255,.3);f
                  ont-size: 22px;padding-bottom: 7px;margin-bottom: 7px"
                  >${node.data.name}</div><div 
                  class="tool-content" style="font-size: 18px; text-align:left;
                  "><strong>Activiness: </strong>${node.data.value}</div>`;
            }
          },
        },
        color: [
          // "#c12e34",
          "#ffeb00",
          "#3bff00",
          "#3fd4ff",
          "#38b6b6",
          "#8c6ac4",
          "#2b821d",
          "#005eaa",
          "#339ca8",
          "#cda819",
          "#32a487",
        ],
        series: [
          {
            type: "graph",
            // legendHoverLink :true,
            // coordinateSystem:'none',
            // hoverAnimation:true,
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
      },
      data: [
        {
          id: 0,
          name: "aaaa",
          times: 10,
          coPaperList: [
            {
              title: "paper a1",
            },
          ],
        },
        {
          id: 2,
          name: "bbbb",
          times: 1,
          coPaperList: [
            {
              title: "paper b1",
            },
          ],
        },
        {
          id: 1,
          name: "c",
          times: 6,
          coPaperList: [
            {
              title: "paper c1",
            },
          ],
        },
        {
          id: 3,
          name: "dddd",
          times: 1,
          coPaperList: [
            {
              title: "paper d1",
            },
          ],
        },
        {
          id: 4,
          name: "eeee",
          times: 1,
          coPaperList: [
            {
              title: "paper e1",
            },
          ],
        },
        {
          id: 5,
          name: "ffff",
          times: 1,
          coPaperList: [
            {
              title: "paper f1",
            },
          ],
        },
        {
          id: 6,
          name: "gggg",
          times: 1,
          coPaperList: [
            {
              title: "paper g1",
            },
          ],
        },
      ],
    };
  }

  getNodes = (center, authorList) => {
    const onePos = authorList.findIndex((v) => v.colla_times === 1);
    // console.log(onePos);

    const repeatList = [];

    const nodeList = [];

    authorList.forEach((node, i) => {
      if (authorList.findIndex((v) => v.colla_id === node.colla_id) !== i) {
        // console.log(authorList.findIndex(v => v.id === node.colla_id), i)
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
          // symbolSize:Math.ceil(Math.log(node.colla_times+2))*10,
          symbolSize: (node.colla_times + 2) * 3,
          category: i < onePos / 2 ? 1 : node.colla_times === 1 ? 0 : 2,
        };
        // return n;
        nodeList.push(n)
      }
    });

    nodeList.push({
      id: center.id,
      name: center.name,
      itemStyle: {
        color: "red",
      },
      //   value: 100,
      symbolSize: Math.ceil(Math.log(100 + 2)) * 10,
      categories: 3,
    });
    console.log("nodes", nodeList);

    console.log("repeat", repeatList);

    return nodeList;
  };

  getEdges = (center, authorList) => {
    const edgeList = authorList.map((edge) => {
      let e = {
        source: center.id,
        target: edge.colla_id,
        value: edge.colla_times + 2,
      };
      //   edgeList.push(e);
      return e;
    });
    console.log("edges", edgeList);
    return edgeList;
  };

  getOption = () => {
    // const nodes = this.getNodes(this.props.center, this.state.data);
    // const edges = this.getEdges(this.props.center, this.state.data);
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
          if (node.dataType == "node") {
            return `<div style="border-bottom: 1px solid rgba(255,255,255,.3);f
                  ont-size: 22px;padding-bottom: 7px;margin-bottom: 7px"
                  >${node.data.name}</div><div
                  class="tool-content" style="font-size: 18px; text-align:left;
                  "><strong>Cooperation times: </strong>${node.data.value}</div>`;
          }
        },
      },
      color: [
        // "#c12e34",
        "#ffeb00",
        "#3bff00",
        "#3fd4ff",
        "#38b6b6",
      ],
      series: [
        {
          type: "graph",
          // legendHoverLink :true,
          // coordinateSystem:'none',
          // hoverAnimation:true,
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
            <FileTextOutlined /> Cooperation Authors
          </div>
          <ReactEchartsCore
            echarts={echarts}
            option={this.getOption()}
            notMerge={true}
            lazyUpdate={true}
          />
        </Card>
      </div>
    );
  }
}

export default RelationNode;
