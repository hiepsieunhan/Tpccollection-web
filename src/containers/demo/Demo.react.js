﻿import React, {Component} from 'react';
import BasicInfo from '../../components/basicInfo/BasicInfo.react';
import CardContainer from '../../components/CardContainer.react';
import AwardList from '../../components/ListItems.react';
import ContactInfo from '../../components/contactInfo/ContactInfo.react';

export default class Demo extends Component {

  render() {
    return (
      <div style={{width: '60%'}}>
        <ContactInfo ref="ContactInfo"/>
        <button onClick={this.getData}> Show </button>
      </div>
    );
  }

  getData = () => {
    const data = this.refs.ContactInfo.getData();
    console.log(data);
  }
}
