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
    this.props.addBill(this.state.newBill)
  }

  handleChange=(event)=>{
    const attributeName = event.target.name;
    const attributeValue = event.target.value;
    const newBill = { ...this.state.newBill };
    newBill[attributeName] = attributeValue;
    
    this.setState({ newBill }, () => {
      console.log(this.state.newBill);
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