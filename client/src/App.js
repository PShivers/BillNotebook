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

  getBillsForCurrentMonth =()=> {
    let date = new Date();
    let currentYear = date.getFullYear();
    getBillsByMonthAndYear({
      monthNum: date.getMonth(),
      year: date.getFullYear()
    })
    .then(res => {
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
