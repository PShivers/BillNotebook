import React from 'react';


const BillTableRow = (props) => {

    const isBillWithdrawn = (bill) => {
        if(bill.isWithdrawn){
          return <div style={{textDecoration: 'line-through'}}>${bill.amount}</div>
        } else {
          return <div>${bill.amount}</div>
        }
      }

      const isBillPaid = (bill) => {
        if(bill.isPaid){
          return <h2 className="ui center aligned header" style={{textDecoration: 'line-through'}} >{bill.name}</h2>
        } else {
          return <h2 className="ui center aligned header" >{bill.name}</h2>
        }
      }
    
    const bill = props.bill
    return ( <tr key ={bill._id}>
        <td style={{cursor: "pointer"}} onClick={()=>{props.handleBillNameClick(bill)}}>
          {isBillPaid(bill)}
        </td>
        <td className="single line" style={{cursor: "pointer"}} onClick={()=>{props.handleBillAmountClick(bill)}} >
          {isBillWithdrawn(bill)}
        </td>
        <td className="center aligned">
          {bill.copayers.map(copayer=>{
            return <div>{copayer}</div> 
          })}
        </td>
        <td>${(bill.amount / (bill.copayers.length+1)).toFixed(2)}</td>
        <td>{bill.dueDate}</td>
      </tr>
    );
}
 
export default BillTableRow;