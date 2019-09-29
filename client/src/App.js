import React, {Component} from 'react';
import BillList from './components/BillList';
import Header from './components/Header'
import MonthSwitcher from './components/MonthSwitcher';
import AddBill from './components/AddBill'

import {getBillsByMonthAndYear, addBill, updateBill} from './util'

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

  getBillsForCurrentMonth =()=> {
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

  componentDidMount = () => {
    this.getBillsForCurrentMonth()
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
    addBill(newBill).then(res=>{this.getBillsForCurrentMonth()})
  }

  handleBillNameClick = (bill) => {
    const newBill = {...bill};
    newBill.isPaid = !bill.isPaid;
    updateBill(newBill).then(res=>{this.getBillsForCurrentMonth()})
  }

  handleBillAmountClick = (bill) => {
    if(bill.isPaid){
    const newBill = {...bill};
    newBill.isWithdrawn = !bill.isWithdrawn;
    updateBill(newBill).then(res=>{this.getBillsForCurrentMonth()})
    } else {
      alert(`Bill must be marked as paid before it can be marked as withdrawn.`)
    }
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
        <BillList bills={this.state.bills} handleBillNameClick={this.handleBillNameClick} handleBillAmountClick={this.handleBillAmountClick} />
      </div>
    );
  }
}

export default App;
