import React, {Component} from 'react';
import ItemList from '../../components/backgroundInfo/ItemList.react';
import CardContainer from '../../components/CardContainer.react';
import SecondaryCardContainer from '../../components/SecondaryCardContainer.react';

export default class Demo extends Component {

  render() {
    const style={
      cardContainer: {
        padding: '20px'
      }
    }
    return (
      <div style={{width: '80%'}}>
        <CardContainer title="Thanh tich va qua trinh hoc tap, lam viec" style={style.cardContainer}>
            <ItemList ref="HighSchoolCAList" type="HighSchoolCA" />
            <ItemList ref="AwardList" type="Award" />
            <ItemList ref="WorkList" type="Work" />
            <ItemList ref="DegreeList" type="Degree" />
        </CardContainer>

        <button onClick={this.getData}> Show </button>
      </div>
    );
  }

  getData = () => {
    const awardList = this.refs.AwardList.getData(),
      highSchoolCAList = this.refs.HighSchoolCAList.getData(),
      workList = this.refs.WorkList.getData(),
      degreeList = this.refs.DegreeList.getData();
    const data = {
      data: {
        highSchoolAchievement: awardList.data,
        highSchoolCurricularActivity: highSchoolCAList.data,
        work: workList.data,
        degree: degreeList.data
      },
      isValid: (awardList.isValid && highSchoolCAList.isValid && workList.isValid && degreeList.isValid)
    }
    console.log(data);
    return data;
  }
}
