import React from 'react';
import { updateBill } from '../util';


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

      const hasCopayers = (bill) => {
          if (bill.hasNotPaid.length > 0 || bill.hasPaid.length > 0){
            return <td>${(bill.amount / ((bill.hasNotPaid.length)+(bill.hasPaid.length)+1)).toFixed(2)}</td>
          } else {
              return <td></td>
          }
      }
    
    const bill = props.bill
    return ( <tr key ={bill._id}>
        
        <td >
            <span 
                onClick={()=>{props.handleBillNameClick(bill)}} 
                style={{cursor: "pointer"}} 
            >
                {isBillPaid(bill)}
            </span>

            <div style={{display: "flex", justifyContent: "center"}} onClick={()=>{props.deleteBill(bill)}} >
                <button>Delete Bill</button>
            </div>

        </td>

        <td className="single line"  onClick={()=>{props.handleBillAmountClick(bill)}} >
            <div style={{cursor: "pointer"}} >
                {isBillWithdrawn(bill)}
            </div>
        </td>

        <td className="center aligned">
          {bill.hasNotPaid.map(copayer=>{
            return <div onClick={()=>{props.handleCopayerToggle(bill, copayer)}} key={copayer} >{copayer}</div> 
          })}
          {bill.hasPaid.map(copayer=>{
            return <div onClick={()=>{props.handleCopayerToggle(bill, copayer)}} key={copayer} style={{textDecoration: "line-through"}} >{copayer}</div> 
          })}
        </td>

        {hasCopayers(bill)}
        <td>
            {bill.dueDate}
        </td>

      </tr>
    );
}
 
export default BillTableRow;