import React from "react";
import { WordCloud } from "@ant-design/charts";
import "./TopicCard.css";

class TopicCard extends React.Component {
  constructor(props) {
    super(props);
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
      padding: [10, 20]
    }

    return (
      <div className="topic-card">
        <WordCloud {...config} autoFit={false}/>
      </div>
    );
  }
}

export default TopicCard;
