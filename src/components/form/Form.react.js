import React, { Component, PropTypes } from 'react';
import BasicInfo from '../basicInfo/BasicInfo.react';
import BackgroundInfo from '../backgroundInfo/BackgroundInfo.react';
import ContactInfo from '../contactInfo/ContactInfo.react';
import CardContainer from '../CardContainer.react';
import TextArea from '../TextArea.react';
import Thank from './Thank.react';
import { RaisedButton } from 'material-ui';
import { connect } from 'react-redux';

export default class Form extends Component {

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    data: PropTypes.object,
    showingPage: PropTypes.oneOf(['form', 'thank']),
    isSubmitting: PropTypes.bool,
    initData: PropTypes.object
  }

  render() {

    const style={
      breakElement: {
        height: '50px'
      }
    }

    const breakElement = (<div style={style.breakElement}/>)

    style.form = this.props.showingPage === 'form' ? {} : {display: 'none'};
    style.thank = this.props.showingPage === 'thank' ? {} : {display: 'none'};

    const initData = this.props.initData;

    return (
      <div style={{padding: 0, margin: 0}}>
        <div className="main-container" style={style.form}>
          <CardContainer title="Thông tin cá nhân">
            <BasicInfo initData={initData && initData.basicInfo ? initData.basicInfo : null} ref="BasicInfo"/>
          </CardContainer>
          {breakElement}

          <BackgroundInfo initData={initData &&  initData.backgroundInfo ? initData.backgroundInfo : null} ref="BackgroundInfo"/>
          {breakElement}

          <CardContainer title="Thông tin liên lạc">
            <ContactInfo initData={initData && initData.contactInfo ? initData.contactInfo : null} ref="ContactInfo"/>
          </CardContainer>
          {breakElement}

          <CardContainer title="Ý kiến đóng góp">
            <TextArea initData={initData && initData.proposal ? initData.proposal : ''} ref="Proposal" label={['Nếu anh/chị có mong muốn giúp đỡ/đề nghị/ý kiến đóng góp đối với hội Cựu Học Sinh thì xin ghi lại vào ô dưới đây.',
            'Ví dụ: contact hữu ích cho hội cựu học sinh ( trưởng ban liên lạc của lớp, nhà tài trợ, ... )', 'Chúng em xin cảm ơn!']}/>
          </CardContainer>
          {breakElement}

          <RaisedButton disabled={this.props.isSubmitting} label="Gửi lên" onClick={this.submit} backgroundColor="#43A047" labelColor="#FFF"/>
        </div>
        <div id="thank-page" style={style.thank}>
          <Thank/>
        </div>
      </div>
    );
  }

  getData = () => {
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
    return {
      data: data,
      isValid: isValid
    }
  }

  submit = () => {
    const formData = this.getData();
    if (!formData.isValid)
      alert('Please fill in all the required fields');
    else
      this.props.onSubmit(formData.data);
  }

}

