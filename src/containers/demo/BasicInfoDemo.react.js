import React, {Component} from 'react';
import BasicInfo from '../../components/basicInfo/BasicInfo.react';
import CardContainer from '../../components/CardContainer.react';

export default class BasicInfoDemo extends Component {

  render() {
    return (
      <div style={{width: '60%'}}>
        <CardContainer title="Thông tin cá nhân">
          <BasicInfo ref="BasicInfo"/>
        </CardContainer>
      </div>
    );
  }

  getData = () => {
  }
}
