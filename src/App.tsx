import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header'
import GetStarted from './Components/GetStarted/GetStarted'
import IndianMarketsSection from './Components/IndianMarketsSection/IndianMarketsSection'
import CreditSection from './Components/CreditSection/CreditSection'

function App() {
  return (
    <div className="App">
      <Header/>
      <GetStarted/>
      <IndianMarketsSection/>
      <CreditSection/>
    </div>
  );
}

export default App;
