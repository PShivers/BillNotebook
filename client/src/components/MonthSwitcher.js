import React, { Component } from 'react';

class MonthSwitcher extends Component {

    render() { 
      // console.log(this.props)
        return ( 
        <div className="ui centered">
          <tr >
            <th colSpan="5">
              <div className="ui centered pagination menu">
                <div href='#' className="icon item" onClick={this.props.changeMonth}>
                  <i className="left chevron icon"></i>
                </div>
                <div className="ui segment">Month of {this.props.currentMonth}</div>
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