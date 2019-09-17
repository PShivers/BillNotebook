import React, { Component } from 'react';

class MonthSwitcher extends Component {

    render() { 
      console.log(this.props)
        return ( <div><tr>
            <th colSpan="5">
              <div className="ui right floated pagination menu">
                <div href='#' className="icon item">
                  <i className="left chevron icon"></i>
                </div>
                <div href="#" className="icon item">
                  <i className="right chevron icon"></i>
                </div>
              </div>
            </th>
            Month of {this.props.currentMonth}
          </tr></div> );
    }
}
 
export default MonthSwitcher;