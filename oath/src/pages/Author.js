import React from "react";
import "./Author.css";

import { Row, Col } from "antd";
import request from "../libs/utils/request";

import BasicInfoCard from "../libs/components/author/BasicInfoCard/BasicInfoCard";
import TopicCard from "../libs/components/author/TopicCard/TopicCard";
import PaperList from "../libs/components/author/PaperList/PaperList";
import InterestLine from "../libs/components/author/InterestsLine/InterestsLine";
import RelationNode from "../libs/components/author/RelationNode/RelationNode";
import CollaboratorCard from "../libs/components/author/CollaboratorCard/CollaboratorCard";


class Author extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.match.params.id,
      basicInfo: {
        loading: true,
      },
      affiliations: {
        loading: true,
        history: [],
      },
      topic: {
        loading: true,
        topicList: [],
      },
      paperList: [],
      interestList:[],
      predictInterest:[],
      relation: [],
      center: {
        id: props.match.params.id,
        name: "defalut",
      },
      collaborators: []
    };
  }

  componentDidMount() {
    this.loadBasic();
    this.loadTopics();
    this.loadPapers();
    this.loadInterests();
    this.loadInterestPredict();
    this.loadRelation();
    this.loadCollaboratorPrediction();
  }

  async loadBasic() {
    const res = await request("/author/basicinfo?id=" + this.state.id);
    const { affiliation, ...rest } = res.data?.content ;
    this.setState({
      ...this.state,
      basicInfo: {
        ...rest,
        loading: false,
      },
      affiliations: {
        current: affiliation[0],
        history: affiliation.slice(1) || [],
        loading: false,
      },
      center: {
        name: rest.author_name,
        id: this.state.id
      }
    });
  }

  async loadTopics() {
    const res = await request("/author/topics?id=" + this.state.id);
    const topicList = res.data.content.map((topic) => {
      return {
        name: Object.keys(topic)[0],
        value: topic[Object.keys(topic)[0]],
      };
    });
    this.setState({
      ...this.state,
      topic: {
        loading: false,
        topicList: topicList,
      },
    });
  }

  async loadInterests(){
    const res = await request("/author/showResearchDirection?id=" + this.state.id);
    this.setState({
      ...this.state,
      interestList: res.data.content
    })
  }
  async loadInterestPredict(){
    const res = await request("/author/interestPredict?id=" + this.state.id);
    this.setState({
      ...this.state,
      predictInterest: res.data.content
    })

  }

  async loadRelation(){
    const res =await  request(`/author/relation?id=${this.state.id}`);
    this.setState({
      ...this.state,
      relation: res.data.content,
    })
  }

  async loadPapers() {
    const res = await request("/author/papers?id=" + this.state.id);
    this.setState({
      ...this.state,
      paperList: res.data.content,
    });
  }

  async loadCollaboratorPrediction() {
    // const res = await request("/author/collaboratorPredict?id=" + this.state.id);
    const res = await request("/author/collaboratorPredict?id=37275735100");
    this.setState({
      ...this.state,
      collaborators: res.data.content,
    });
  }

  render() {
    return (
      <div className="Author">
        <Row  gutter={16} >
          <Col span={16}>
            <BasicInfoCard
              name={this.state.basicInfo.author_name}
              aka={this.state.basicInfo.author_alias}
              avatar={this.state.basicInfo.author_avatar}
              paperCount={this.state.basicInfo.author_paperCount}
              citation={this.state.basicInfo.citation}
              loading={this.state.basicInfo.loading}
              current={this.state.affiliations.current}
              history={this.state.affiliations.history}
            />
          </Col>
          <Col span={8}>
            <TopicCard
              topicList={this.state.topic.topicList}
              loading={this.state.topic.loading}
            />
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24} >
            <InterestLine interestList={this.state.interestList} predict={this.state.predictInterest} />
          </Col>

        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <RelationNode center={this.state.center} relations={this.state.relation}/>
          </Col>
          <Col span={12}>
            <CollaboratorCard collaborators={this.state.collaborators}></CollaboratorCard>
          </Col>
        </Row>
        <Row gutter={16} >
          <Col span={24}>
            <PaperList paperList={this.state.paperList} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Author;
