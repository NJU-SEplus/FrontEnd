import React from 'react';
import './Author.css';

import request from '../libs/utils/request'

import BasicInfoCard from '../libs/components/author/BasicInfoCard/BasicInfoCard'
import AffiliationCard from '../libs/components/author/AffiliationCard/AffiliationCard'
import TopicCard from '../libs/components/author/TopicCard/TopicCard'

class Author extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      id: props.match.params.id
    }
  }

  componentWillMount (){
    let r = this.loadBasic()
    console.log("in", r)
  }

  async loadBasic() {
    let res= await request('/author/basicinfo?id='+this.state.id)
    return res.data.content
  } 

  render(){
    return (
      <div className="Author">
        <BasicInfoCard></BasicInfoCard>
        <AffiliationCard></AffiliationCard>
        <TopicCard></TopicCard>
      </div>
    );
  }
}

export default Author;
