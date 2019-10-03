import React, {Component} from 'react';

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
      showForm: !this.state.showForm
    })
    
  }

  handleSubmitClick = (event) => {
    event.preventDefault();
    this.handleClick();
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
      
    });
  }

  formToggle = () => {
    if (this.state.showForm) {
      return (
        <div >
          <form>
            Bill:
            <input type="text" name="name" onChange={this.handleChange} value={this.state.newBill.name}/>
            Amount:
            <input type="number" name="amount" onChange={this.handleChange} value={this.state.newBill.amount}/>
            Due Date: 
            <input type='date' onChange={this.handleChange} name="dueDate"/>
            <input type="Submit" onClick={this.handleSubmitClick}/>
          </form>
        </div>
      )
    }
  }

  render() {

    return (
      <div >
        <button onClick={this.handleClick}>Add Bill</button>
        {this.formToggle()}
      </div>
    );
  }
}

export default AddBill;