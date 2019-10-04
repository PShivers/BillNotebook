import React, {Component} from 'react';
import BillTableRow from './BillTableRow';

import {getCopayers,updateCopayer,updateBill} from '../util'

class BillList extends Component {
  state = {
    total: [],
    copayers: []
  }

  componentDidMount(){
    getCopayers().then(res=>{
      const copayers = res.data;
      this.setState({copayers})
    });
  }

  addBillToCopayer = (copayer,bill)=>{
    const updatedCopayer={...copayer};
    const updatedBill = {...bill};

    updatedCopayer.bills = [...copayer.bills, {id:bill._id,hasPaid:false}];
    updatedBill.copayers = [...bill.copayers, {id:copayer._id, hasPaid: false, name:copayer.name}];

    updateBill(updatedBill).then(billRes=>{
      updateCopayer(updatedCopayer).then(copayerRes=>{
        console.log(copayerRes)
        this.props.refresh()
      })
    })
    
  }

  render() {
    let total = 0
    const paidBills = [0];
    const unpaidBills = [0];
    return (
      <table className="ui celled padded table">
        <thead>
          <tr>

            <th className="single line">Bill</th>

            <th>Total Amount Due</th>

            <th>Co-Payers</th>

            <th>Amount Per Person</th>

            <th>Due Date</th>

          </tr>

        </thead>
        
        <tbody>

          {this
            .props
            .bills
            .map(bill => {
              if(!bill.isArchived){
                return (
                <BillTableRow 
                  bill={bill}
                  deleteBill={this.props.deleteBill}
                  copayers={this.state.copayers}
                  isBillPaid={this.isBillPaid}
                  handleBillNameClick={this.props.handleBillNameClick} 
                  handleBillAmountClick={this.props.handleBillAmountClick} 
                  handleCopayerToggle={this.props.handleCopayerToggle}
                  addBillToCopayer={this.addBillToCopayer}
                />
              )}
              
            })}
        </tbody>

        <tfoot>
          <tr>
            <th className="single line">Total</th>
            <th>
              {this.props.bills.map(bill=>{
                if (!bill.isArchived){
                  total += bill.amount
                  }
                })
              }
              ${total}
            </th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </tfoot>
        
        <tfoot>
          <tr>
            <th className="single line" style={{backgroundColor: 'red'}} >Total Due</th>
            <th>
              {this.props.bills.map(bill=>{
                if(!bill.isWithdrawn && !bill.isArchived){ 
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

        <tfoot>
          <tr>
            <th className="single line" style={{backgroundColor: 'green'}} >Total Paid</th>
            <th>
            {this.props.bills.map(bill=>{
                if(bill.isWithdrawn && !bill.isArchived){ 
                  paidBills.push(bill.amount)
                  }
                })
              }
              ${paidBills.reduce((a,c)=>{return a+c})}
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