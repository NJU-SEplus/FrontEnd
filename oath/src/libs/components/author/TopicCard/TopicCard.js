import React from "react";
// import { WordCloud } from "@ant-design/charts";
import ReactEchartsCore from "echarts-for-react/lib/core";
import echarts from "echarts/lib/echarts";
import 'echarts-wordcloud';

import 'echarts/lib/component/title';
import 'echarts/lib/component/tooltip';


// import ReactEcharts from 'echarts-for-react'; 

import "./TopicCard.css";

class TopicCard extends React.Component {
  constructor(props) {
    super(props);
  }

  getOption = (data) => {
    return {
      tooltip: {},
      series: [{
        type: 'wordCloud',
        gridSize: 20,
        sizeRange: [12, 50],
        rotationRange: [0, 0],
        shape: 'circle',
        textStyle: {
          normal: {
            color: function () {
              return 'rgb(' + [
                Math.round(Math.random() * 160),
                Math.round(Math.random() * 160),
                Math.round(Math.random() * 160)
              ].join(',') + ')';
            }
          },
          emphasis: {
            shadowBlur: 10,
            shadowColor: '#333'
          }
        },
        data: [{
          name: 'Sam S Club',
          value: 10000
        }, {
          name: 'Macys',
          value: 6181
        }, {
          name: 'Amy Schumer',
          value: 4386
        }, {
          name: 'Jurassic World',
          value: 4055
        }, {
          name: 'Charter Communications',
          value: 2467
        }, {
          name: 'Chick Fil A',
          value: 2244
        }, {
          name: 'Planet Fitness',
          value: 1898
        }, {
          name: 'Pitch Perfect',
          value: 1484
        }, {
          name: 'Express',
          value: 1112
        }, {
          name: 'Home',
          value: 965
        }, {
          name: 'Johnny Depp',
          value: 847
        }, {
          name: 'Lena Dunham',
          value: 582
        }, {
          name: 'Lewis Hamilton',
          value: 555
        }, {
          name: 'KXAN',
          value: 550
        }, {
          name: 'Mary Ellen Mark',
          value: 462
        }, {
          name: 'Farrah Abraham',
          value: 366
        }, {
          name: 'Rita Ora',
          value: 360
        }, {
          name: 'Serena Williams',
          value: 282
        }, {
          name: 'NCAA baseball tournament',
          value: 273
        }, {
          name: 'Point Break',
          value: 265
        }]
      }]
    };
  }

  render() {
    const data = this.props.topicList;

    return (
      <div className="topic-card">
        <ReactEchartsCore
          echarts={echarts}
          option={this.getOption(this.props)}
          style={this.props.style || { height: '100%', width: '100%' }}
          lazyUpdate={true}
          notMerge={true}
          // onEvents={this.props.onEvents}
        />
      </div>
    );
  }
}

export default TopicCard;
