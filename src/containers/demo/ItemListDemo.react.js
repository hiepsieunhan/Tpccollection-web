﻿import React, {Component} from 'react';
import ItemList from '../../components/backgroundInfo/ItemList.react';
import CardContainer from '../../components/CardContainer.react';

export default class Demo extends Component {

  render() {
    console.log(ItemList);
    return (
      <div style={{width: '60%'}}>
        <CardContainer title="Thanh tich va qua trinh hoc tap, lam viec">
          <ItemList ref="ItemList" type="HighSchoolCA" />
          <button onClick={this.getData}> Show </button>
        </CardContainer>
      </div>
    );
  }

  getData = () => {
    const data = this.refs.ItemList.getData();
    console.log(data);
    return data;
  }
}
