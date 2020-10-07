import React from 'react';
import './basicInfoCard.css'

class BasicInfoCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      alias: [],
      avatar: "",
      paperCount: 0,
      citation: 0
    }
	}
	

  render() {
    return (
      <div className="container">
        <div className="avatar">
					<img alt="ooops"></img>
				</div>
      </div>
    )
  }
}

export default BasicInfoCard;