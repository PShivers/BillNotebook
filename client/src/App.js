import React, {Component} from 'react';
import BillList from './components/BillList';
import Header from './components/Header'
import MonthSwitcher from './components/MonthSwitcher';
import AddBill from './components/AddBill';
import Modal from './components/Modal'

import {getBillsByMonthAndYear, addBill, updateBill, deleteBill} from './util'

class App extends Component {
  state = {
    modal: false,
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

  toggleModal=()=>{
    this.setState({modal: !this.state.modal})
  }

  //function taken from https://stackoverflow.com/questions/8175093/simple-function-to-sort-an-array-of-objects/8175221#8175221
  sort_by_key=(array, key)=>{
    return array.sort((a, b) => {
      var x = a[key]; 
      var y = b[key];
      return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
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
      const sortedBills = this.sort_by_key(bills, "day");
      this.setState({
        bills: sortedBills,
        currentYear,
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

  deleteBill =(bill)=>{
    let archivedBill = {...bill};
    archivedBill.isArchived = true;
    console.log(archivedBill)
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

  handleCopayerToggle(bill, copayer){
    const updatedBill = {...bill};
    if(bill.hasPaid.includes(copayer)){
      updatedBill.hasPaid = bill.hasPaid.filter(item=> item !== copayer);
      updatedBill.hasNotPaid = [...bill.hasNotPaid,copayer];
    } else if(bill.hasNotPaid.includes(copayer)){
      updatedBill.hasNotPaid = bill.hasNotPaid.filter(item=> item !== copayer);
      updatedBill.hasPaid = [...bill.hasPaid,copayer];
    }
    updateBill(updatedBill).then(res=>{
      this.getBillsForCurrentMonth();
    })
  }

  showModal = () => {
    if(this.state.modal) {
     return <Modal toggleModal={this.toggleModal}/>
    }
  }

  render() {
    return (
      <div
        className="App"
        style={{
        backgroundColor: "rgba(0,75,0,.8)"
      }}>
        {this.showModal()}
        <Header/>
        <MonthSwitcher
          currentMonth={this.state.currentMonth}
          monthName={this.state.monthName}
          changeMonth={this.changeMonth}/>


        <AddBill addBill={this.addBill}/>
        <BillList 
          bills={this.state.bills} 
          deleteBill={this.deleteBill}
          handleBillNameClick={this.handleBillNameClick} 
          handleBillAmountClick={this.handleBillAmountClick} 
          handleCopayerToggle={this.handleCopayerToggle}/>
      </div>
    );
  }
}

export default App;
