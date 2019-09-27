import React from 'react';


const BillTableRow = (props) => {
    
    const bill = props.bill
    return ( <tr key ={bill._id}>
        <td onClick={()=>{props.handleBillNameClick(bill)}}>
          {props.isBillPaid(bill)}
        </td>
        <td className="single line">
          ${bill.amount}
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