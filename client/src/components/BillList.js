import React, {Component} from 'react';
import { getBillsByMonthAndYear } from '../util'

class BillList extends Component {
  state = {
    bills: []
  }

  componentDidMount = () => {
    getBillsByMonthAndYear().then(res => {
      console.log(res.data)
      let bills = res.data;
      this.setState({bills})
    })
  }

  render() {
    return (
      <table className="ui celled padded table">
        <thead>
          <tr>
            <th className="single line">Bill</th>
            <th>Total Amount Due</th>
            <th>Amount Per Person</th>
            <th>Co-Payers</th>
            <th>Due Date</th>
            <th>Payment Status</th>
          </tr>
        </thead>
        
        <tbody>

          {this
            .props
            .bills
            .map(bill => {
              return (
                <tr key ={bill._id}>
                  <td>
                    <h2 className="ui center aligned header">{bill.name}</h2>
                  </td>
                  <td className="single line">
                    ${bill.amount}
                  </td>
                  <td className="right aligned">
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