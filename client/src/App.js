import React, {Component} from 'react';
import './App.css'
import BillList from './components/BillListTwo';
import Header from './components/Header'
import MonthSwitcher from './components/MonthSwitcher';
import AddBill from './components/AddBill';
import CreateCopayer from './components/CreateCopayer'
import ParallaxImage from './components/ParallaxImage'

import {getBillsByMonthAndYear, addBill, updateBill, createCopayer} from './util'
import { Parallax } from 'react-scroll-parallax';

class App extends Component {
  state = {
    modal: false,
    bills: [],
    newBill: {
      name: '',
      amount: null,
      dueDate: null,
      isPaid: false
    },
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
    this.getBillsForCurrentMonth()
  }

  //function taken from https://stackoverflow.com/questions/8175093/simple-function-to-sort-an-array-of-objects/8175221#8175221
  sortArrayByKey=(array, key)=>{
    return array.sort((billA, billB) => {
      var x = billA[key]; 
      var y = billB[key];
      return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
  }

  refresh = () =>{
    this.getBillsForCurrentMonth()
  }

  getBillsForCurrentMonth =()=> {
    //store current date in a variable called date
    let date = new Date();
    //from the variable date pull out the year and assign it to variable 'current year'
    let currentYear = date.getFullYear();
    getBillsByMonthAndYear({
      monthNum: date.getMonth(),
      year: date.getFullYear()
    })
    .then(res => {
      //assigns the bills return from AJAX req to a variable called 'bills'
      let bills = res.data;
      //sorts bills by day
      const sortedBills = this.sortArrayByKey(bills, "day");
      this.setState({
        bills: sortedBills,
        currentYear,
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
    addBill(newBill).then(res=>{this.getBillsForCurrentMonth()})
  }

  createCopayer = (copayer) => {
    createCopayer(copayer).then(res=>{
      console.log(res)
    })
  }

  //Does not actually delete bill, just toggles isArchived boolean.
  deleteBill =(bill)=>{
    let archivedBill = {...bill};
    archivedBill.isArchived = true;
    updateBill(archivedBill).then(res=>{this.getBillsForCurrentMonth()})
  }

  handleBillNameClick = (bill) => {
    if(!bill.isWithdrawn){
      const newBill = {...bill};
      newBill.isPaid = !bill.isPaid;
      updateBill(newBill).then(res=>{this.getBillsForCurrentMonth()})
    } else{
      alert('Cannot remove Paid status if Bill has been marked as withdrawn')
    }
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

  handleCopayerToggle=(bill, copayer)=>{
    //store copayer in variable 
    const updatedCopayer = {...copayer};
    //toggle hasPaid boolean value
    updatedCopayer.hasPaid = !copayer.hasPaid;
    const updatedBill = {...bill};
    //find index of bill.copayer to be replaced
    const copayerIndex = updatedBill.copayers.indexOf(updatedBill.copayers.find(person => person.id == updatedCopayer.id));
    updatedBill.copayers[copayerIndex] = updatedCopayer;
    updateBill(updatedBill).then(res=>{
      this.getBillsForCurrentMonth()
    })
  }

  render() {
    return (
      <div className="App" >
        <div className='top-portion' >
        <Header/>

        <MonthSwitcher
          currentMonth={this.state.currentMonth}
          monthName={this.state.monthName}
          changeMonth={this.changeMonth}
        />


        <AddBill 
          handleBillFormChange={this.handleBillFormChange}
          addBill={this.addBill}
        />

        <CreateCopayer createCopayer={this.createCopayer} />
        </div> 

        <BillList 
          bills={this.state.bills} 
          deleteBill={this.deleteBill}
          handleBillNameClick={this.handleBillNameClick} 
          handleBillAmountClick={this.handleBillAmountClick} 
          handleCopayerToggle={this.handleCopayerToggle}
          refresh={this.refresh}
        />
      </div>
    );
  }
}

export default App;
