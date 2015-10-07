import React, {Component} from 'react';
import ItemList from '../../components/backgroundInfo/ItemList.react';
import CardContainer from '../../components/CardContainer.react';
import SecondaryCardContainer from '../../components/SecondaryCardContainer.react';

export default class Demo extends Component {

  render() {
    const style={
      cardContainer: {
        padding: '20px'
      },
      secondaryCardContainer: {
        padding: '20px'
      }
    }
    return (
      <div style={{width: '60%'}}>
        <CardContainer title="Thanh tich va qua trinh hoc tap, lam viec" style={style.cardContainer}>
          <SecondaryCardContainer title="Hoat dong ngoai khoa" style={style.secondaryCardContainer}>
            <ItemList ref="ItemList" type="HighSchoolCA" />
          </SecondaryCardContainer>
          <SecondaryCardContainer title="Thanh tich hoc tap va thi cu" style={style.secondaryCardContainer}>
            <ItemList ref="ItemList" type="Award" />
          </SecondaryCardContainer>
        </CardContainer>

        <button onClick={this.getData}> Show </button>
      </div>
    );
  }

  getData = () => {
    const data = this.refs.ItemList.getData();
    console.log(data);
    return data;
  }
}
