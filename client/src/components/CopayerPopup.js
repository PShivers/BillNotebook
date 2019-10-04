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
                    onClick={()=>{this.props.addBillToCopayer(copayer,this.props.bill)}} 
                >
                    {copayer.name}
                </div>
            )
        })
        return ( <Popup content={copayerList} trigger={<Button icon='add' />} hoverable /> );
    }
}

export default CopayerPopup