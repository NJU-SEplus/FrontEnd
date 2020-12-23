import React from "react";
import { Button, Tooltip } from "antd";
import { Link } from "react-router-dom";
import { TeamOutlined } from "@ant-design/icons";

import "./ReviewerBotton.css";

class ReviewerBotton extends React.Component {
  render() {
    return (
      <div className="reviewer-entry">
        <Link
          to={{
            pathname: "/reviewer",
          }}
        >
          <Tooltip title="Click to get reviewer recommondation ">
            <TeamOutlined style={{ fontSize: 30, color: "#666" }} />
          </Tooltip>
        </Link>
      </div>
    );
  }
}

export default ReviewerBotton;
