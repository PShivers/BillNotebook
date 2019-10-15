import React from 'react';
import CopayerPopup from './CopayerPopup';



const BillTableRow = (props) => {
    
    const bill = props.bill;
    const amountPerPerson = (bill.amount / (bill.copayers.length+1)).toFixed(2);
    const futureAmountPerPerson = (bill.amount / (bill.copayers.length+2)).toFixed(2);

    const isBillWithdrawn = (bill) => {
        if(bill.isWithdrawn){
          return <div style={{textDecoration: 'line-through'}}>${bill.amount}</div>
        } else {
          return <div>${bill.amount}</div>
        }
      }

    const isBillPaid = (bill) => {
        if(bill.isPaid){
            return <h2 className="ui center aligned header" style={{textDecoration: 'line-through'}} >{bill.name}
            </h2>
        } else {
            return <h2 className="ui center aligned header" >{bill.name}</h2>
        }
    }

    const hasCopayers = (bill) => {
        if (bill.copayers.length > 0){
            return <td>${amountPerPerson}</td>
        } else {
              return <td></td>
        }
    }
    
    return ( 
      <tr key ={bill._id}>
        
        <td className='flex centered'>
            <div 
                onClick={()=>{props.handleBillNameClick(bill)}} 
                style={{cursor: "pointer"}} 
            >
                {isBillPaid(bill)}
            </div>

            <div className="flex centered delete-button" onClick={()=>{props.deleteBill(bill)}} >
              X
            </div>

        </td>

        <td className="single line"  onClick={()=>{props.handleBillAmountClick(bill)}} >
            <div style={{cursor: "pointer"}} >
                {isBillWithdrawn(bill)}
            </div>
        </td>

        <td className="center aligned">

          <CopayerPopup 
            copayers={props.copayers} 
            bill={bill}
            futureAmountPerPerson={futureAmountPerPerson}
            addCopayerToBill={props.addCopayerToBill} 
          />

          {bill.copayers.map(copayer=>{
            if(!copayer.hasPaid){
              return <div onClick={()=>{props.handleCopayerToggle(bill, copayer)}} >{copayer.name}</div>
            } else if(copayer.hasPaid){
              return <div onClick={()=>{props.handleCopayerToggle(bill, copayer)}} style={{textDecoration: "line-through"}} >{copayer.name}</div>
            }
          })
          }

        </td>
          
        {hasCopayers(bill)}

        <td>
            {bill.dueDate}
        </td>

      </tr>
    );
}
 
export default BillTableRow;