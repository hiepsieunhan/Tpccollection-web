import React, { Component, PropTypes } from 'react';
import {Link} from 'react-router';

export default class TextArea extends Component {

  static propTypes = {
    active: PropTypes.string.isRequired
  };

  render() {

    return (
      <div className="menu">
        <ul className="menu-ul">
          <li className={this.props.active === 'edit-info'?'menu-active':''}> <Link to="/edit-info"> SỬA THÔNG TIN </Link></li>
          <li className={this.props.active === 'main'?'menu-active':''}> <Link id="link-to-main-page" to="/main">ĐIỀN THÔNG TIN</Link></li>
          <li className={this.props.active === 'home'?'menu-active':''}> <Link to="/home">TRANG CHỦ</Link> </li>
        </ul>
      </div>
    );
  }

}
