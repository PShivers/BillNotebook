import React, {Component} from 'react';
import {Button} from 'reactstrap'


class AddBill extends Component {

  state = {
    showForm: false,
    newBill: {
      name: '',
      amount: null,
      dueDate: null,
      isPaid: false
    }
  }

  handleClick = () => {
    this.setState({
      showForm: !this.state.showForm,
      newBill: {
        name: '',
        amount: null,
        dueDate: null,
        isPaid: false
      }
    });
  }

  handleSubmitClick = (event) => {
    event.preventDefault();
    const newBill = {...this.state.newBill};
    const dueDate = newBill.dueDate.split('-');
    newBill.month = parseInt(dueDate[1])-1;
    newBill.year = parseInt(dueDate[0]);
    newBill.day = parseInt(dueDate[2]);
    newBill.dueDate = dueDate[1] + "/" + dueDate[2];
    console.log(newBill)
    this.props.addBill(newBill);
    this.handleClick();   
  }

  handleChange=(event)=>{
    const attributeName = event.target.name;
    const attributeValue = event.target.value;
    const newBill = { ...this.state.newBill };
    newBill[attributeName] = attributeValue;
    this.setState({ newBill }, () => {
      console.log(this.state.newBill)
    });
  }

  formToggle = () => {
    if (this.state.showForm) {
      return (
        <div >
          <form>
            <input 
            type="text" 
            name="name" 
            placeholder="Bill Name" 
            onChange={this.handleChange} 
            value={this.state.newBill.name}
          />
            <input 
              type="number" 
              name="amount"
              placeholder="Bill Amount"  
              onChange={this.handleChange} 
              value={this.state.newBill.amount}
            />
            <input 
              type='date' 
              placeholder="Due Date" 

              onChange={this.handleChange} 
              name="dueDate"
            />
            <input 
              type="Submit" 
              onClick={this.handleSubmitClick}
            />
          </form>
        </div>
      )
    }
  }

  render() {

    return (
      <div 
        className="flex column centered margin"
      >
        <Button 
          onClick={this.handleClick}
        >
          Add Bill
        </Button>
        <div>
          {this.formToggle()}
        </div>
      </div>
    );
  }
}

export default AddBill;