import React, {Component} from 'react';
import BasicInfo from '../../components/basicInfo/BasicInfo.react';
import CardContainer from '../../components/CardContainer.react';
import ContactInfo from '../../components/contactInfo/ContactInfo.react';

export default class ContactInfoDemo extends Component {

  render() {
    return (
      <div style={{width: '60%'}}>
        <CardContainer title="Thông tin lien lac">
          <ContactInfo ref="ContactInfo"/>
        </CardContainer>
        <button onClick={this.getData}> Show </button>
      </div>
    );
  }

  getData = () => {
    const data = this.refs.ContactInfo.getData();
    console.log(data);
  }
}
