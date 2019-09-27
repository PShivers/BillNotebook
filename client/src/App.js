import React, {Component} from 'react';
import BillList from './components/BillList';
import Header from './components/Header'
import MonthSwitcher from './components/MonthSwitcher';
import AddBill from './components/AddBill'

import {getBillsByMonthAndYear, addBill} from './util'

class App extends Component {
  state = {
    bills: [],
    monthNum: null,
    monthName: "",
    currentYear: null,
    months: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ]
  }

  componentDidMount = () => {
    let date = new Date();
    let currentYear = date.getFullYear();
    getBillsByMonthAndYear({
      monthNum: date.getMonth(),
      year: date.getFullYear()
    })
    .then(res => {
      console.log(res.data)
      let bills = res.data;
      this.setState({
        bills,
        currentYear,
        // monthNum: date.getMonth(),
        monthName: this.state.months[date.getMonth()]
      })
    });
  }

  changeMonth = (x) => {
    console.log(this.state.currentMonth)
    if (x) {
      this.setState({
        currentMonthNum: this.currentMonthNum++
      })
    } else {
      this.setState({
        currentMonthNum: this.currentMonthNum--
      })
    }
  }

  addBill=(newBill)=>{
    console.log(newBill)
    addBill(newBill).then(res=>{console.log(res)})
  }

  render() {
    return (
      <div
        className="App"
        style={{
        backgroundColor: "rgba(0,75,0,.8)"
      }}>
        <Header/>
        <MonthSwitcher
          currentMonth={this.state.currentMonth}
          monthName={this.state.monthName}
          changeMonth={this.changeMonth}/>
        <AddBill addBill={this.addBill}/>
        <BillList bills={this.state.bills}/>
      </div>
    );
  }
}

export default App;
