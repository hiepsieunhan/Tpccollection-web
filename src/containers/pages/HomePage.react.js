import React, { Component } from 'react';
import { Router } from 'react-router';
import {Link} from 'react-router';

export default class HomePage extends Component {

  render() {
    return (
      <div className="home-page">
        <div className="home-page-content">
          <div className="main-notice">
            <p style={{textAlign: 'center'}}>
              XÂY DỰNG CƠ SỞ DỮ LIỆU CỦA CÁC CỰU HỌC SINH CHUYÊN TRẦN PHÚ
            </p>
            <p>
              Để góp phần thiết thực chuẩn bị 30 năm kỷ niệm thành lập trường Chuyên Trần Phú (1986-2016),
              Ban Giám Hiệu nhà trường triển khai kế hoạch xây dựng cơ sở dữ liệu thông tin cá nhân của các cựu học sinh.
            </p>
            <p>
              Quản lý phần thu thập thông tin cựu học sinh: cô Nguyễn Thị Ngà – phó hiệu trưởng <br/>
              Phụ trách thực hiện: Hội Cựu Học Sinh Chuyên Trần Phú <a href="https://www.facebook.com/NKTPGLOBALNETWORK" target="_blank"> <u> NKTP GLOBAL </u> </a>
            </p>

          </div>
          <div className="home-page-button-container">
            <button className="pretty-button main-submit-info-button" onClick={this.navigateToSubmit}> ĐIỀN THÔNG TIN </button>
            <button className="pretty-button main-edit-info-button" onClick={this.navigateToEdit}> SỬA THÔNG TIN </button>
          </div>
        </div>
      </div>
    );
  }

  navigateToSubmit = () => {
    console.log('Main CLicked');
    document.getElementById('link-to-main-page').click();
  }

  navigateToEdit = () => {
    console.log('Edit CLicked');
    document.getElementById('link-to-edit-info-page').click();
  }

}
