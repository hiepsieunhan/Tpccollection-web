import React, {PropTypes, Component} from 'react';
import SelectField from '../SelectField.react';
import TextField from '../TextField.react';
import Utils from '../../utils/supportedFuncs';
import { IconButton } from 'material-ui';

export default class Work extends Component {

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
          <TextField initData={initData && initData.company ? initData.company : null} ref="Company" {...props.company}/>
        </li>
        <li style={{width: '18%'}}>
          <TextField initData={initData && initData.major ? initData.major : null} ref="Major" {...props.major}/>
        </li>
        <li style={{width: '18%'}}>
          <TextField initData={initData && initData.position ? initData.position : null} ref="Position" {...props.position}/>
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
