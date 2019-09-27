import React, {Component} from 'react';

class BillList extends Component {

  handleBillNameClick = (id) => {
    console.log(id)
  }

  isBillPaid = (bill) => {
    if(bill.isPaid){
      return <h2 className="ui center aligned header" style={{textDecoration: 'line-through'}} >{bill.name}</h2>
    } else {
      return <h2 className="ui center aligned header" >{bill.name}</h2>
    }
  }



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
              let amountPerPerson = (bill.amount / (bill.copayers.length+1)).toFixed(2)
              return (
                <tr key ={bill._id}>
                  <td onClick={()=>{this.handleBillNameClick(bill._id)}}>
                    {this.isBillPaid(bill)}
                  </td>
                  <td className="single line">
                    ${bill.amount}
                  </td>
                  <td className="center aligned">
                    {bill.copayers.map(copayer=>{
                      return <div>{copayer}</div> 
                    })}
                  </td>
                  <td>${amountPerPerson}</td>
                  <td>{bill.dueDate}</td>
                  {/* <td>
                    <select>
                      <option value="unpaid">Unpaid</option>
                      <option value="paid">Paid</option>
                      <option value="withdrawn">Withdrawn</option>
                    </select>
                  </td> */}

                </tr>
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
              {unpaidBills.reduce((a,c)=>{return a+c})}
            </th>
            <th></th>
            <th></th>
            <th></th>
            {/* <th>Payment Status</th> */}
          </tr>
        </tfoot>
      </table>
    )
  }
}

export default BillList;