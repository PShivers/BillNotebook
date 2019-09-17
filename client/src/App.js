import React, {Component} from 'react';
import BillList from './components/BillList';
import Header from './components/Header'
import MonthSwitcher from './components/MonthSwitcher';

import {getBillsByMonthAndYear} from './util'

class App extends Component {
  state = {
    bills: [],
    currentMonth: "",
    currentYear: 0,
    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  }

  componentDidMount = () => {
    let date = new Date();
    let currentYear = date.getFullYear();
    let currentMonth = this.state.months[date.getMonth()];
    getBillsByMonthAndYear({month:date.getMonth(), year: date.getFullYear()})
    .then(res => {
      let bills = res.data;
        this.setState({bills, currentMonth, currentYear})
      });
}


  render() {
    // console.log(this.state)
    return (
      <div className="App" style={{backgroundColor: "rgba(0,75,0,.8)"}}>
        <Header/>
        <MonthSwitcher currentMonth={this.state.currentMonth}/>
        <BillList bills = {this.state.bills}/>
      </div>
    );
  }
}

export default App;
