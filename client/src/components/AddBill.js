import React, {Component} from 'react';

class AddBill extends Component {

  state = {
    showForm: false
  }

  handleClick = () => {
    this.setState({
      showForm: !this.state.showForm
    })
  }

  toggle = () => {
    if (this.state.showForm) {
      return (
        <div>
          <form>
            Bill:
            <input type="text"/>
            Amount:
            <input type="text"/>
            Due Date: 
            <input type='date'/>
            <input type="submit"/>
          </form>
        </div>
      )
    }
  }

  render() {

    return (
      <div>
        <button onClick={this.handleClick}>Add Bill</button>
        {this.toggle()}
      </div>
    );
  }
}

export default AddBill;