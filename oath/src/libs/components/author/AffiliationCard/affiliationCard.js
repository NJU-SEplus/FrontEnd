import React from "react";
import { Card } from "antd";
import "./AffiliationCard.css";

class AffiliationCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      affiliation: [
        {
          time: "2010-2020",
          name: "NanJing University",
        },
        {
          time: "2000-2010",
          name: "Peking University",
        },
        {
          time: "1985-2000",
          name: "IEEE",
        },
      ],
    };
  }

  render() {
    const history = this.props.history.map((aff) => {
      return (
        // <div key={aff.name}>
        // 	<span className="history-item" >{aff.time}: </span>
        // 	<span className="history-item" >{aff.name}</span>
        // </div>
        <div key={aff}>
          <span className="history-item">{aff}</span>
        </div>
      );
    });

    return (
      <div className="affiliation-card">
        {/* <div className="title">
					<span>Affiliations</span>
				</div>
				<div className="current">
					<span className="current-item">{this.state.affiliation[0].time}: </span>
					<span className="current-item">{this.state.affiliation[0].name}</span>
				</div>
				<div className="history">{history}</div> */}

        <Card className="card" title={<div className="title">Affiliation</div>}>
          {/* <div className="current">
						<span className="current-item">{this.state.affiliation[0].time}: </span>
						<span className="current-item">{this.state.affiliation[0].name}</span>
					</div> */}
          <div className="current">
            <span className="current-item">{this.props.current}</span>
          </div>
          <div className="history">{history}</div>
        </Card>
      </div>
    );
  }
}

export default AffiliationCard;
