import React from "react";
import { Steps, Card, Tooltip, Popover } from "antd";
import { RadarChartOutlined } from "@ant-design/icons";

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
    const customDot = (dot, { status, index }) => {
      return index === 10 ? (
        <Popover
          placement="topRight"
          content={
            <span>
              The rank is calculated by <br />
              the keyword frequency of protantial <br />
              collaborators * the number of cooperation
            </span>
          }
        >
          {dot}
        </Popover>
      ) : (
        dot
      );
    };
    const stepList = this.props.interestList.map((item) => {
      return (
        <Step
          title={item.year}
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
    const predictList = (
      <Step
        title={"2020"}
        subTitle={"Prediction"}
        status="finished"
        key="2020"
        description={
          <ul className="interest-list">
            {this.props.predict.map((i) => {
              const interest = Object.keys(i)[0];
              return (
                <li key={interest}>
                  <Tooltip title={i[interest]} placement="left">
                    {interest}
                  </Tooltip>
                  ,
                </li>
              );
            })}
          </ul>
        }
      />
    );
    return (
      <div >
        <Card className="interest-line">
          <div className="title">
            <RadarChartOutlined /> 
            Interest Change
          </div>
          <div className="content">
            <Steps progressDot={customDot} current={10}>
              {stepList}
              {predictList}
            </Steps>
          </div>
        </Card>
      </div>
    );
  }
}

export default InterestsLine;
