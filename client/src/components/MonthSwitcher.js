import React, { Component } from 'react';

class MonthSwitcher extends Component {
    state ={
     
    }

    render() { 
      // console.log(this.props)
        return ( 
        <div className="ui center aligned" style={{marginLeft:"38%"}}>
          <tr >
            <th colSpan="5">
              <div className="ui centered pagination menu">
                <div href='#' className="icon item" onClick={this.props.changeMonth}>
                  <i className="left chevron icon"></i>
                </div>
                <div className="ui segment">Month of {this.props.monthName} </div>
                <div href="#" className="icon item" onClick={this.props.changeMonth}>
                  <i className="right chevron icon"></i>
                </div>
              </div>
            </th>
          </tr>
          
          
        </div> );
    }
}
 
export default MonthSwitcher;