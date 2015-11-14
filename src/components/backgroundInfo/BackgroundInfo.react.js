import React, { Component, PropTypes } from 'react';
import ItemList from './ItemList.react';
import CardContainer from '../CardContainer.react';
import SecondaryCardContainer from '../SecondaryCardContainer.react';

export default class BackgroundInfo extends Component {

  static propTypes = {
    initData: PropTypes.object
  }

  render() {

    const initData = this.props.initData;

    return (
      <div>
        <CardContainer title="Thành tích và quá trình học tập, làm việc">
            <ItemList initData={initData && initData.highSchoolCurricularActivity ? initData.highSchoolCurricularActivity : null} ref="HighSchoolCAList" type="HighSchoolCA" />
            <ItemList initData={initData && initData.highSchoolAchievement ? initData.highSchoolAchievement : null} ref="AwardList" type="Award" />
            <ItemList initData={initData && initData.degree ? initData.degree : null} ref="DegreeList" type="Degree" />
            <ItemList initData={initData && initData.work ? initData.work : null} ref="WorkList" type="Work" />
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
        highSchoolCurricularActivity: highSchoolCAList.data,
        highSchoolAchievement: awardList.data,
        degree: degreeList.data,
        work: workList.data
      },
      isValid: (awardList.isValid && highSchoolCAList.isValid && workList.isValid && degreeList.isValid)
    }
    return data;
  }
}
