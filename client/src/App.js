import React, {Component} from 'react';
import BillList from './components/BillList';
import Header from './components/Header'
import MonthSwitcher from './components/MonthSwitcher';

import {getBills} from './util'

class App extends Component {
  state = {
    bills: [],
    currentMonth: "",
    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  }

  componentDidMount = () => {
    let date = new Date();
    getBills().then(bills => {
      this.setState({bills: bills.data, currentMonth: this.state.months[date.getMonth()] })
    });
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <Header/>
        <MonthSwitcher currentMonth={this.state.currentMonth}/>
        <BillList bills ={this.state.bills}/>
      </div>
    );
  }
}

export default App;
