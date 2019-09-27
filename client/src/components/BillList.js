import React, {Component} from 'react';
import BillTableRow from './BillTableRow'

class BillList extends Component {

  render() {
    const unpaidBills = [0];
    console.log(unpaidBills)
    return (
      <table className="ui celled padded table">
        <thead>
          <tr>
            <th className="single line">Bill</th>
            <th>Total Amount Due</th>
            <th>Co-Payers</th>
            <th>Amount Per Person</th>
            <th>Due Date</th>
            {/* <th>Payment Status</th> */}
          </tr>
        </thead>
        
        <tbody>

          {this
            .props
            .bills
            .map(bill => {
              return (
                <BillTableRow bill={bill} isBillPaid={this.isBillPaid} handleBillNameClick={this.props.handleBillNameClick} handleBillAmountClick={this.props.handleBillAmountClick} />
              )
            })}
        </tbody>
        <tfoot>
          <tr>
            <th className="single line">Total Due</th>
            <th>
              {this.props.bills.map(bill=>{
                if(!bill.isPaid){ 
                  unpaidBills.push(bill.amount)
                  }
                })
              }
              ${unpaidBills.reduce((a,c)=>{return a+c})}
            </th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </tfoot>
      </table>
    )
  }
}

export default BillList;