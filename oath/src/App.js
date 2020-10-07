import React from 'react';
import './App.css';

import BasicInfoCard from './libs/components/author/BasicInfoCard/BasicInfoCard'
import AffiliationCard from './libs/components/author/AffiliationCard/AffiliationCard'

function App() {
  return (
    <div className="App">
      <BasicInfoCard></BasicInfoCard>
      <AffiliationCard></AffiliationCard>
      <BasicInfoCard></BasicInfoCard>
    </div>
  );
}

export default App;
