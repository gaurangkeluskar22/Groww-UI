import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header'
import GetStarted from './Components/GetStarted/GetStarted'
import IndianMarketsSection from './Components/IndianMarketsSection/IndianMarketsSection'
import CreditSection from './Components/CreditSection/CreditSection'
import BillSection from './Components/BillSection/BillSection';
import FinanceSection from './Components/FinanceSection/FinanceSection';

function App() {
  return (
    <div className="App">
      <Header/>
      <GetStarted/>
      <IndianMarketsSection/>
      <CreditSection/>
      <BillSection/>
      <FinanceSection/>
      
    </div>
  );
}

export default App;
