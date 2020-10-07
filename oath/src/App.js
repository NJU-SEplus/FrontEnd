import React from 'react';
import './App.css';

import BasicInfoCard from './libs/components/author/BasicInfoCard/basicInfoCard'
function App() {
  return (
    <div className="App">
      <BasicInfoCard></BasicInfoCard>
      <BasicInfoCard></BasicInfoCard>
      <BasicInfoCard></BasicInfoCard>
    </div>
  );
}

export default App;
