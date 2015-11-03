import React, { Component } from 'react';
import { Router } from 'react-router';
import {Link} from 'react-router';

export default class HomePage extends Component {

  render() {
    return (
      <div className="home-page">
        <div className="main-notice">
          <p>
            LỜI TRI ÂN ĐÃ CHÍNH THỨC QUAY TRỞ LẠI!
          </p>
          <p>
            Khi mà tiết trời đã vào thu, gió hiu hiu lạnh, lá cây chuyển vàng và đồng phục hóa màu thiên thanh,
            hẳn ai đã và đang là học sinh Trần Phú đều bồi hồi nhớ tới những người thầy, người cô dìu dắt ta nên người dưới mái trường này.
          </p>
          <p>
             "Lời Tri Ân 2015" - chiếc cầu nối giữa các thế hệ thầy và trò Chuyên Trần Phú -
             sẽ mang đến những tấm thiệp mà chứa đựng trong đó là tất cả tâm tư,
            tình cảm của biết bao người con gửi tới những người cha, người mẹ thứ hai của mình.
            Ngày Nhà Giáo Việt Nam 20-11 sẽ trở nên khó quên và ý nghĩa hơn bao giờ hết.
          </p>
        </div>
        <button className="pretty-button main-submit-info-button" onClick={this.onSubmit}> ĐIỀN THÔNG TIN </button>
      </div>
    );
  }

  onSubmit = () => {
    console.log('CLicked');
    document.getElementById('link-to-main-page').click();
  }

}
