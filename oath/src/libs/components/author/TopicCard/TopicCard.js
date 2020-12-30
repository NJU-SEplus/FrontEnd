import React from "react";
// import { WordCloud } from "@ant-design/charts";
import ReactEchartsCore from "echarts-for-react/lib/core";
import echarts from "echarts/lib/echarts";
import "echarts-wordcloud";

import "echarts/lib/component/title";
import "echarts/lib/component/tooltip";

// import ReactEcharts from 'echarts-for-react';

import "./TopicCard.css";

class TopicCard extends React.Component {
  getOption = (words) => {
    return {
      tooltip: {},
      series: [
        {
          type: "wordCloud",
          gridSize: 20,
          sizeRange: [12, 50],
          rotationRange: [0, 0],
          shape: "circle",
          textStyle: {
            normal: {
              color: function () {
                return (
                  "rgb(" +
                  [
                    Math.round(Math.random() * 160),
                    Math.round(Math.random() * 160),
                    Math.round(Math.random() * 160),
                  ].join(",") +
                  ")"
                );
              },
            },
            emphasis: {
              shadowBlur: 10,
              shadowColor: "#333",
            },
          },
          data: words.topicList,
        },
      ],
    };
  };

  render() {
    return (
      <div className="topic-card">
        <ReactEchartsCore
          echarts={echarts}
          option={this.getOption(this.props)}
          style={this.props.style || { height: "100%", width: "100%" }}
          lazyUpdate={true}
          notMerge={true}
          // onEvents={this.props.onEvents}
        />
      </div>
    );
  }
}

export default TopicCard;
