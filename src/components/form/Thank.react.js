import React, { Component, PropTypes } from 'react';

export default class Thank extends Component {

  render() {
    return (
      <div className="div-wrapper">
        <h1> Xin cảm ơn! </h1>
        <p>
          Bạn có thể bấm vào <a href="http://localhost:5000/main"> đây </a> để quay lại trang điền thông tin.
        </p>
      </div>
    );
  }
}
