﻿import React, {Component} from 'react';
import BasicInfo from '../../components/basicInfo/BasicInfo.react';

export default class Demo extends Component {

  render() {
    return (
      <div>
        <BasicInfo ref="BasicInfo"/>
        <button onClick={this.getData}> Show </button>
      </div>
    );

  }

  getData = () => {
    const data = this.refs.BasicInfo.getData();
    console.log(data);
    return data;
  }
}
