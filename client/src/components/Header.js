import React, {Component} from 'react';

class Header extends Component {
  state = {}
  render() {
    return (
      <h2 className="ui center aligned icon header title">
        {/* <i className="dollar sign icon"></i> */}
        <div className="content title">
          BillBook
          {/* <div className="title">All bills, no frills</div> */}
        </div>
      </h2>
    );
  }
}

export default Header;