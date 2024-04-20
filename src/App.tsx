
import './App.css';
import Header from './Components/Header/Header'
import GetStarted from './Components/GetStarted/GetStarted'
import IndianMarketsSection from './Components/IndianMarketsSection/IndianMarketsSection'
import CreditSection from './Components/CreditSection/CreditSection'
import BillSection from './Components/BillSection/BillSection';
import FinanceSection from './Components/FinanceSection/FinanceSection';
import Cards from './Components/Cards/Cards';
import { useEffect } from 'react';

function App() {
  
  useEffect(()=>{
    const observer = new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
          console.log("e:",entry)
          if(entry.isIntersecting){
            entry.target.classList.add('show')
          }
          else{
            entry.target.classList.remove('show')
          }
        })
      })
      
      const hiddenElements = document.querySelectorAll('.hidden');
      const hiddenElementsRight = document.querySelectorAll('.hiddenRight');
      hiddenElements.forEach((el) => observer.observe(el))
      hiddenElementsRight.forEach((el) => observer.observe(el))
},[document])

  return (
    <div className="App">
      <Header/>
      <GetStarted/>
      <IndianMarketsSection/>
      <CreditSection/>
      <BillSection/>
      <FinanceSection/>
      {/* <Cards/> */}
    </div>
  );
}

export default App;
