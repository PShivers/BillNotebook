import React, {Component} from 'react';

class Header extends Component {
  state = {}
  render() {
    return (
      <h2 className="ui center aligned icon header inverted">
        <i className="dollar sign icon"></i>
        <div className="content">
          Flush
          <div className="sub header">All bills, no frills</div>
        </div>
      </h2>
    );
  }
}

export default Header;