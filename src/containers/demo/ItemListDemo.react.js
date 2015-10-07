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
            <ItemList ref="HighSchoolCAList" type="HighSchoolCA" />
          </SecondaryCardContainer>
          <SecondaryCardContainer title="Thanh tich hoc tap va thi cu" style={style.secondaryCardContainer}>
            <ItemList ref="AwardList" type="Award" />
          </SecondaryCardContainer>
          <SecondaryCardContainer title="Qua trinh lam viec" style={style.secondaryCardContainer}>
            <ItemList ref="Work" type="Work" />
          </SecondaryCardContainer>
        </CardContainer>

        <button onClick={this.getData}> Show </button>
      </div>
    );
  }

  getData = () => {
    const highSchoolAchievement = this.refs.AwardList.getData(),
      highSchoolCurricularActivity = this.refs.HighSchoolCAList.getData(),
      work = this.refs.Work.getData();
    const data = {
      data: {
        highSchoolAchievement: highSchoolAchievement.data,
        highSchoolCurricularActivity: highSchoolCurricularActivity.data,
        work: work.data
      },
      isValid: (highSchoolAchievement.isValid && highSchoolCurricularActivity.isValid && work.isValid)
    }
    console.log(data);
    return data;
  }
}
