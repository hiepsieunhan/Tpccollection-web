﻿import React, {Component} from 'react';
import BasicInfo from '../../components/basicInfo/BasicInfo.react';
import CardContainer from '../../components/CardContainer.react';
import Award from '../../components/award/Award.react';

export default class Demo extends Component {

  render() {
    return (
      <div style={{width: '60%'}}>
        <CardContainer title="Title">
          <Award ref="Award"/>
        </CardContainer>
        <button onClick={this.getData}> Show </button>
      </div>
    );
  }

  getData = () => {
    const data = this.refs.Award.getData();
    console.log(data);
    return data;
  }
}
