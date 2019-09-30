import React from 'react'
import AddBill from './AddBill'

const Modal = (props) => {
  return ( <div style={{ display: 'flex', justifyContent: 'center', alignItems: "center", position: 'absolute',top: '0', left: "0", backgroundColor: "rgba(0,0,0,.5)", height:"100%", width: '100vw'}} onClick={props.toggleModal}>
    <div style={{color: 'white'}}>
      <AddBill />
    </div>
  </div> );
}
 
export default Modal
