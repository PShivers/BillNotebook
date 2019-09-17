import React from 'react';
import BillList from './components/BillList';
import Header from './components/Header'
import MonthSwitcher from './components/MonthSwitcher';

function App() {
  return (

    <div className="App">
      <Header/>
      <MonthSwitcher />
      <BillList/>

    </div>
  );
}

export default App;
