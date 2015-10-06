import React, {Component} from 'react';
import BasicInfo from '../../components/basicInfo/BasicInfo.react';
import CardContainer from '../../components/CardContainer.react';
import AwardList from '../../components/award/AwardList.react';

export default class Demo extends Component {

  render() {
    return (
      <div style={{width: '60%'}}>
        <CardContainer title="Title">
          <AwardList ref="AwardList"/>
        </CardContainer>
        <button onClick={this.getData}> Show </button>
      </div>
    );
  }

  getData = () => {
    const data = this.refs.AwardList.getData();
    console.log(data);
    return data;
  }
}
