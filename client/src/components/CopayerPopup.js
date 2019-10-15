import React, { Component } from 'react';
import { Button, Popup } from 'semantic-ui-react'


class CopayerPopup extends Component {
    state = {  }

    render() { 
        let copayerList = this.props.copayers.map(copayer=>{
            return (
                <div 
                    style={{cursor: 'pointer'}} 
                    key={copayer._id} 
                    onClick={()=>{
                        this.props.addCopayerToBill(copayer,this.props.bill,this.props.futureAmountPerPerson)
                    }} 
                >
                    {copayer.name}
                </div>
            )
        })
        return ( <Popup content={copayerList} trigger={<div>+</div>} hoverable /> );
    }
}

export default CopayerPopup