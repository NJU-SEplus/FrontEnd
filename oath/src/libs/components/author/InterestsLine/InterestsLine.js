import React from "react";
import { Steps, Card } from "antd";
import { FileTextOutlined } from "@ant-design/icons";

import "./InterestsLine.css";

const { Step } = Steps;

class InterestsLine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      interestList: [
        {
          year: 2010,
          direction: [
            "Surface reconstruction",
            "Shape",
            "Iterative closest point algorithm",
          ],
        },
        { year: 2011, direction: ["Robustness", "Noise"] },
        { year: 2012, direction: ["Geometry", "Shape", "Heating"] },
        { year: 2013, direction: ["Measurement", "Shape"] },
        { year: 2014, direction: [] },
        { year: 2015, direction: ["Measurement", "Laplace equations"] },
        { year: 2016, direction: [] },
        {
          year: 2017,
          direction: ["Optical distortion", "Cameras", "Distortion"],
        },
        { year: 2018, direction: ["Shape"] },
        { year: 2019, direction: [] },
      ],
    };
  }

  render() {
    const stepList = this.props.interestList.map((item) => {
      return (
        <Step
          title={item.year}
          // status={item.direction.length === 0 ? "finish" : "process"}
          status="process"
          key={item.year}
          description={
            <ul className="interest-list">
              {item.direction.map(
                (value, index) =>
                  value !== "" && <li key={item.year + index}>{value}</li>
              )}
            </ul>
          }
        />
      );
    });

    return (
      <div className="interest-line">
        <Card>
          <div className="title">
            <FileTextOutlined /> Interest Change
          </div>
          <Steps progressDot>
            {/* <Step
              title="Finished"
              status="finish"
              description="You can hover on the dot."
            />
            <Step
              title="In Progress"
              status="process"
              description="You can hover on the dot."
            />
            <Step
              title="Waiting"
              status="error"
              description="You can hover on the dot."
            />
            <Step
              title="Waiting"
              status="wait"
              description="You can hover on the dot."
            /> */}
            {stepList}
          </Steps>
        </Card>
      </div>
    );
  }
}

export default InterestsLine;
