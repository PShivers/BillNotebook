import React, {Component} from 'react';

class Header extends Component {
  state = {}
  render() {
    return (
      <h2 className="ui center aligned icon header">
        <i className="dollar sign icon"></i>
        <div className="content">
          Simple Bill
          <div className="sub header">Bills without frills</div>
        </div>
      </h2>
    );
  }
}

export default Header;