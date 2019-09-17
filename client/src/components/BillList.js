import React, {Component} from 'react';
import {getBills} from '../util'

class BillList extends Component {
  state = {
    bills: []
  }

  componentDidMount = () => {
    getBills().then(res => {
      let bills = res.data;
      this.setState({bills})
    })
  }

  render() {
    return (
      <table class="ui celled padded table">
        <thead>
          <tr>
            <th class="single line">Bill</th>
            <th>Total Amount Due</th>
            <th>Amount Per Person</th>
            <th>Co-Payers</th>
            <th>Due Date</th>
            <th>Payment Status</th>
          </tr>
        </thead>
        
        <tbody>

          {this
            .state
            .bills
            .map(bill => {
              return (
                <tr key ={bill._id}>
                  <td>
                    <h2 className="ui center aligned header">{bill.name}</h2>
                  </td>
                  <td class="single line">
                    ${bill.amount}
                  </td>
                  <td class="right aligned">
                    {bill.amountPerPerson}
                  </td>
                  <td>{bill.copayers}</td>
                  <td>{bill.dueDate}</td>
                  <td>
                    <select>
                      <option value="unpaid">Unpaid</option>
                      <option value="paid">Paid</option>
                      <option value="withdrawn">Withdrawn</option>
                    </select>
                  </td>

                </tr>
              )
            })}
        </tbody>
      </table>
    )
  }
}

export default BillList;