import React, {Component} from 'react';
import BasicInfo from '../../components/basicInfo/BasicInfo.react';
import CardContainer from '../../components/CardContainer.react';

export default class Demo extends Component {

  render() {
    return (
      <div style={{width: '60%', margin: 'auto'}}>
        <CardContainer title="Thông tin cá nhân">
          <BasicInfo ref="BasicInfo"/>
          <button onClick={this.getData}> Show </button>
        </CardContainer>
      </div>
    );

  }

  getData = () => {
    const data = this.refs.BasicInfo.getData();
    console.log(data);
    return data;
  }
}
