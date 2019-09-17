import React, { Component } from 'react';

class MonthSwitcher extends Component {
    state = {  }
    render() { 
        return ( <tr>
            <th colspan="5">
              <div class="ui right floated pagination menu">
                <a class="icon item">
                  <i class="left chevron icon"></i>
                </a>
                <a class="icon item">
                  <i class="right chevron icon"></i>
                </a>
              </div>
            </th>
            <span>Month of (month)(year)</span> 
          </tr> );
    }
}
 
export default MonthSwitcher;