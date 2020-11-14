import React from "react";
// import { WordCloud } from "@ant-design/charts";
import ReactEchartsCore from "echarts-for-react/lib/core";
import echarts from "echarts/lib/echarts";
import "echarts/lib/chart/line";

 
import 'echarts/lib/component/title';
import 'echarts/lib/component/tooltip';


// import ReactEcharts from 'echarts-for-react'; 

import "./TopicCard.css";

class TopicCard extends React.Component {
  constructor(props) {
    super(props);
  }

  getOption = () => {
    return {
      title: {
        text: '堆叠区域图'
      },
      tooltip : {
        trigger: 'axis'
      },
      // legend: {
      //   data:['邮件营销','联盟广告','视频广告']
      // },
      // toolbox: {
      //   feature: {
      //     saveAsImage: {}
      //   }
      // },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis : [
        {
          type : 'category',
          boundaryGap : false,
          data : ['周一','周二','周三','周四','周五','周六','周日']
        }
      ],
      yAxis : [
        {
          type : 'value'
        }
      ],
      series : [
        {
          name:'邮件营销',
          type:'line',
          stack: '总量',
          areaStyle: {normal: {}},
          data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
          name:'联盟广告',
          type:'line',
          stack: '总量',
          areaStyle: {normal: {}},
          data:[220, 182, 191, 234, 290, 330, 310]
        },
        {
          name:'视频广告',
          type:'line',
          stack: '总量',
          areaStyle: {normal: {}},
          data:[150, 232, 201, 154, 190, 330, 410]
        }
      ]
    };
  }
  
  render() {
    const data = this.props.topicList;

    const config = {
      // data,
      color: "#6262ff",
      autoFit: false,
      // width: 400,
      // height: 230,
      data: this.props.topicList,
      loading: this.props.loading,
      wordField: "name",
      weightField: "value",
      wordStyle: {
        fontFamily: "Verdana",
        fontSize: [24, 80],
      },
      padding: [10, 20],
    };



    return (
      <div className="topic-card">
        {/* <WordCloud {...config} autoFit={false}/> */}
        <ReactEchartsCore
          echarts={echarts}
          option={this.getOption()}
          notMerge={true}
          lazyUpdate={true}
          // theme={"theme_name"}
          // onChartReady={this.onChartReadyCallback}
          // onEvents={EventsDict}
          // opts={}
        />
      </div>
    );
  }
}

export default TopicCard;
