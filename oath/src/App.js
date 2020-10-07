import React from 'react';
import './App.css';

import BasicInfoCard from './libs/components/author/BasicInfoCard/BasicInfoCard'
import AffiliationCard from './libs/components/author/AffiliationCard/AffiliationCard'
import TopicCard from './libs/components/author/TopicCard/TopicCard'

function App() {
  return (
    <div className="App">
      <BasicInfoCard></BasicInfoCard>
      <AffiliationCard></AffiliationCard>
      <TopicCard></TopicCard>
    </div>
  );
}

export default App;
