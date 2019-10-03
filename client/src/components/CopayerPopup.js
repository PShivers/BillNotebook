import React, { Component } from 'react';
import { Button, Popup } from 'semantic-ui-react'


class CopayerPopup extends Component {
    state = {  }

    render() { 
        let copayerList = this.props.copayers.map(copayer=>{
            return <div>{copayer.name}</div>
        })
        return ( <Popup content={copayerList} trigger={<Button icon='add' />} /> );
    }
}

export default CopayerPopup