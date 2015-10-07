import React, {PropTypes, Component} from 'react';
import SelectField from '../SelectField.react';
import TextField from '../TextField.react';
import Utils from '../../utils/supportedFuncs';

export default class Work extends Component {

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
      company: {
        multiLine: true,
        hint: 'Ngân hàng ABC',
        label: 'Nơi làm việc'
      },
      major: {
        multiLine: true,
        hint: 'Kế toán',
        label: 'Chuyên ngành'
      },
      position: {
        multiLine: true,
        hint: 'Nhân viên',
        label: 'Vị trí'
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
          <TextField ref="Company" {...props.company}/>
        </li>
        <li style={{...style.li, width: '15%'}}>
          <TextField ref="Major" {...props.major}/>
        </li>
        <li style={{...style.li, width: '15%'}}>
          <TextField ref="Position" {...props.position}/>
        </li>
      </ul>
    );
  }

  getData = () => {
    const startYear = this.refs.StartYear.getValue(),
        endYear = this.refs.EndYear.getValue(),
        company = this.refs.Company.getValue(),
        position = this.refs.Position.getValue(),
        major = this.refs.Major.getValue();
      return {
        data: {
          startYear: startYear,
          endYear: endYear,
          company: company,
          position: position,
          major: major
        },
        isValid: (startYear && endYear && company && position && major ? true : false)
      }
  }

}
