import React from "react";
import { Form, Input, Button, Divider } from "antd";
import AuthorList from "../libs/components/search/AuthorList";

import request from "../libs/utils/request";

import "./ReviewerRec.css";


const layout = {
  labelCol: { span: 7 },
  wrapperCol: { span: 12 },
};
const tailLayout = {
  wrapperCol: { offset: 11, span: 16 },
};

class ReviewerRec extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recommendList: [],
    };
    this.onFinish = this.onFinish.bind(this)
  }

  formRef = React.createRef();

  async onFinish(values) {
    console.log("Success:", values);
    const res = await request({
      method: "post",
      url: "/author/reviewerRecommended",
      headers:{"content-type": "application/json"},
      // headers: {
      //   "Content-Type": "application/json",
      // },
      data: JSON.stringify({
        authorName: values.authorName,
        authorID: "",
        documentName: values.documentName,
        affiliationName: [values.documentName],
        affiliationID: [""],
        keyword: [values.keyword],
        otherDocumentDOI: [""],
      }),
    });
    console.log(res, this);
    this.setState({
      recommendList: res.data.content
    })
  }

  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  render() {
    return (
      <div className="reviewer-recommondation">
        <div className="explaination">
          <h1>Auto Reviewer Recommondation</h1>
          <div className="detail">
            Still struggling to choose the right reviewer? <br />
            Just enter following details and we will recommondate proper
            reviewers for your paper.
          </div>
        </div>
        <Divider />
        <div className="form">
          <h2>Paper Details</h2>
          <Form
            ref={this.formRef}
            {...layout}
            name="basic"
            scrollToFirstError
            initialValues={{ remember: true }}
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
          >
            <Form.Item
              label="Author Name"
              name="authorName"
              rules={[{ required: true, message: "Please input your name" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Paper Name"
              name="documentName"
              rules={[
                { required: true, message: "Please input your paper name" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Affiation"
              name="affiliationName"
              rules={[
                { required: true, message: "Please input your paper name" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Key Words"
              name="keyword"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
        <Divider />
        <div className="recommend">
          <h2>Recommended reviewers</h2>
          <div className="recommend-list">
            {/* <ul>
              {this.state.recommendList.map((reviewer) => {
                return <li>{reviewer.author_name}</li>;
              })}
            </ul> */}
            <AuthorList authorList={this.state.recommendList} />
          </div>
        </div>
      </div>
    );
  }
}

export default ReviewerRec;
