import React, {PropTypes, Component} from 'react';
import SelectField from '../SelectField.react';
import TextField from '../TextField.react';
import Utils from '../../utils/supportedFuncs';

export default class Degree extends Component {

  static propTypes = {
    onDelete: PropTypes.func.isRequired
  }

  render() {
    const style = {
      ul: {
        listStyleType: 'none',
        padding: 0
      },
      li: {
        display: 'inline-block',
        verticalAlign: 'middle',
        marginRight: '2%'
      }
    }

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

    return (
      <ul style={style.ul}>
        <li style={{...style.li, width: '10%'}}>
          <button onClick={this.props.onDelete}> Delete </button>
        </li>
        <li style={{...style.li, width: '13%'}}>
          <SelectField ref="StartYear" {...props.startYear}/>
        </li>
        <li style={{...style.li, width: '13%'}}>
          <SelectField ref="EndYear" {...props.endYear}/>
        </li>
        <li style={{...style.li, width: '20%'}}>
          <TextField ref="School" {...props.school}/>
        </li>
        <li style={{...style.li, width: '15%'}}>
          <TextField ref="Major" {...props.major}/>
        </li>
        <li style={{...style.li, width: '15%'}}>
          <TextField ref="Degree" {...props.degree}/>
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
