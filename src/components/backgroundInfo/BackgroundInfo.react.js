import React, {Component} from 'react';
import ItemList from './ItemList.react';
import CardContainer from '../CardContainer.react';
import SecondaryCardContainer from '../SecondaryCardContainer.react';

export default class BackgroundInfo extends Component {

  render() {
    return (
      <div>
        <CardContainer title="Thành tích và quá trình học tập, làm việc">
            <ItemList ref="HighSchoolCAList" type="HighSchoolCA" />
            <ItemList ref="AwardList" type="Award" />
            <ItemList ref="DegreeList" type="Degree" />
            <ItemList ref="WorkList" type="Work" />
        </CardContainer>
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
    return data;
  }
}
