import React, { Component, PropTypes } from 'react';
import BasicInfo from '../../components/basicInfo/BasicInfo.react';
import BackgroundInfo from '../../components/backgroundInfo/BackgroundInfo.react';
import ContactInfo from '../../components/contactInfo/ContactInfo.react';
import CardContainer from '../../components/CardContainer.react';
import TextArea from '../../components/TextArea.react';
import SideBar from '../../components/sideBar/SideBar.react';
import { RaisedButton } from 'material-ui';
import { connect } from 'react-redux';

import { sendUserForm } from '../../actions';

class MainContainer extends Component {

  static propTypes = {
    dispatch: PropTypes.func
  }

  render() {

    const style={
      breakElement: {
        height: '50px'
      }
    }

    const breakElement = (<div style={style.breakElement}/>)

    return (
      <div style={{padding: 0, margin: 0}}>
        <SideBar/>
        <div className="main-container">
          <CardContainer title="Thông tin cá nhân">
            <BasicInfo ref="BasicInfo"/>
          </CardContainer>
          {breakElement}

          <BackgroundInfo ref="BackgroundInfo"/>
          {breakElement}

          <CardContainer title="Thông tin liên lạc">
            <ContactInfo ref="ContactInfo"/>
          </CardContainer>
          {breakElement}

          <CardContainer title="Ý kiến đóng góp">
            <TextArea ref="Proposal" label={['Nếu anh/chị có mong muốn giúp đỡ/đề nghị/ý kiến đóng góp đối với hội Cựu Học Sinh thì xin ghi lại vào ô dưới đây.',
            'Ví dụ: contact hữu ích cho hội cựu học sinh ( trưởng ban liên lạc của lớp, nhà tài trợ, ... )', 'Chúng em xin cảm ơn!']}/>
          </CardContainer>
          {breakElement}

          <RaisedButton label="Gửi lên" onClick={this.submit} backgroundColor="#43A047" labelColor="#FFF"/>
        </div>
      </div>
    );
  }

  submit = () => {
    const {
      dispatch
    } = this.props;

    const basicInfo = this.refs.BasicInfo.getData(),
      backgroundInfo = this.refs.BackgroundInfo.getData(),
      contactInfo = this.refs.ContactInfo.getData(),
      proposal = this.refs.Proposal.getValue();

    const data = {
      basicInfo: basicInfo.data,
      backgroundInfo: backgroundInfo.data,
      contactInfo: contactInfo.data,
      proposal: proposal
    }

    const isValid = basicInfo.isValid && backgroundInfo.isValid && contactInfo.isValid;

    //console.log(data, isValid);

    dispatch(sendUserForm(data, isValid));
  }

}

function select(state) {
  return {};
}

export default connect(select)(MainContainer);
