import React, { Component } from 'react';
import BasicInfo from '../../components/basicInfo/BasicInfo.react';
import BackgroundInfo from '../../components/backgroundInfo/BackgroundInfo.react';
import ContactInfo from '../../components/contactInfo/ContactInfo.react';
import CardContainer from '../../components/CardContainer.react';
import { RaisedButton } from 'material-ui';


export default class MainContainer extends Component {
  render() {

    const style={
      root:{
        width: '70%',
        paddingBottom: '100px',
        margin: 'auto'

      },
      breakElement: {
        height: '50px'
      }
    }

    const breakElement = (<div style={style.breakElement}/>)

    return (
      <div style={style.root}>
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

        <RaisedButton label="Gửi lên" onClick={this.submit} backgroundColor="#43A047" labelColor="#FFF"/>
      </div>
    );
  }

  submit = () => {
    const basicInfo = this.refs.BasicInfo.getData(),
      backgroundInfo = this.refs.BackgroundInfo.getData(),
      contactInfo = this.refs.ContactInfo.getData();

    const data = {
      'basicInfo': basicInfo.data,
      'backgroundInfo': backgroundInfo.data,
      'contactInfo': contactInfo.data
    }

    const isValid = basicInfo.isValid && backgroundInfo.isValid && contactInfo.isValid;

    console.log(data, isValid);
  }

}
