import React, {PropTypes, Component} from 'react';
import SelectField from '../SelectField.react';
import TextField from '../TextField.react';
import Utils from '../../utils/supportedFuncs';
import { IconButton } from 'material-ui';

export default class Degree extends Component {

  static propTypes = {
    onDelete: PropTypes.func.isRequired,
    initData: PropTypes.object
  }

  render() {

    const data = {
      years: Utils.getListYear()
    }

    const props = {
      startYear: {
        menuItems: data.years,
        label: 'Từ năm'
      },
      endYear: {
        menuItems: data.years,
        label: 'Tới năm'
      },
      school: {
        multiLine: true,
        hint: 'Đại học Công Nghệ',
        label: 'Nơi học tập'
      },
      major: {
        multiLine: true,
        hint: 'Công nghệ thông tin',
        label: 'Chuyên ngành'
      },
      degree: {
        multiLine: true,
        hint: 'Cử nhân',
        label: 'Học vị'
      }
    }

    const initData = this.props.initData;

    return (
      <ul>
         <li className="icon-delete-container">
          <IconButton iconClassName="material-icons" tooltip="Xóa" onClick={this.props.onDelete}>delete</IconButton>
        </li>
        <li style={{width: '13%'}}>
          <SelectField initData={initData && initData.startYear ? initData.startYear : null} ref="StartYear" {...props.startYear}/>
        </li>
        <li style={{width: '13%'}}>
          <SelectField initData={initData && initData.endYear ? initData.endYear : null} ref="EndYear" {...props.endYear}/>
        </li>
        <li style={{width: '20%'}}>
          <TextField initData={initData && initData.school ? initData.school : null} ref="School" {...props.school}/>
        </li>
        <li style={{width: '18%'}}>
          <TextField initData={initData && initData.major ? initData.major : null} ref="Major" {...props.major}/>
        </li>
        <li style={{ width: '18%'}}>
          <TextField initData={initData && initData.degree ? initData.degree : null} ref="Degree" {...props.degree}/>
        </li>
      </ul>
    );
  }

  getData = () => {
    const startYear = this.refs.StartYear.getValue(),
        endYear = this.refs.EndYear.getValue(),
        school = this.refs.School.getValue(),
        degree = this.refs.Degree.getValue(),
        major = this.refs.Major.getValue();
      return {
        data: {
          startYear: startYear,
          endYear: endYear,
          major: major,
          school: school,
          degree: degree
        },
        isValid: (startYear && endYear && school && major && degree ? true : false)
      }
  }

}
