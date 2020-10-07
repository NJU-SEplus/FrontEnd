import React from 'react';
import './basicInfoCard.css'

class BasicInfoCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "FengLiu",
      alias: ["6f"],
      avatar: "https://img.51miz.com/Element/00/88/08/84/72f298b9_E880884_d0f63115.png",
      paperCount: 110,
      citation: 110
    }
	}
	

  render() {
    const aka = this.state.alias.join("/");
    return (
      <div className="container">
        <img className="avatar" src={this.state.avatar} alt="oops"></img>
        <div className="person-info">
          <span className="info-item">Name: {this.state.name}</span>
          <span className="info-item">Aka: {aka}</span>
        </div>
      </div>
    )
  }
}

export default BasicInfoCard;