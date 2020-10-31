import React from "react";
import { Steps, Popover, Card } from "antd";
import { FileTextOutlined } from "@ant-design/icons";

import "./InterestsLine.css";

const { Step } = Steps;

class InterestsLine extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const customDot = (dot, { status, index }) => (
      <Popover
        content={
          <span>
            step {index} status: {status}
          </span>
        }
      >
        {dot}
      </Popover>
    );

    return (
      <div className="interest-line">
        <Card>
          <div className="title">
            <FileTextOutlined /> Interest Change
          </div>
          <Steps  progressDot={customDot}>
            <Step title="Finished" status="finish" description="You can hover on the dot." />
            <Step title="In Progress" status="process" description="You can hover on the dot." />
            <Step title="Waiting" status="error" description="You can hover on the dot." />
            <Step title="Waiting" status="wait" description="You can hover on the dot." />
          </Steps>
        </Card>
      </div>
    );
  }
}

export default InterestsLine;
