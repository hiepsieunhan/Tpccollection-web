import React, {PropTypes, Component} from 'react';
import SelectField from '../SelectField.react';
import TextField from '../TextField.react';
import Utils from '../../utils/supportedFuncs';
import { IconButton } from 'material-ui';


export default class HighSchoolCA extends Component {

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
      description: {
        multiLine: true,
        label: 'Hoạt động tham gia'
      }

    }

    const initData = this.props.initData;

    return (
      <ul>
        <li className="icon-delete-container">
          <IconButton iconClassName="material-icons" tooltip="Xóa" onClick={this.props.onDelete}>delete</IconButton>
        </li>
        <li style={{width: '15%'}}>
          <SelectField initData={initData && initData.startYear ? initData.startYear : null} ref="StartYear" {...props.startYear} />
        </li>
        <li style={{width: '15%'}}>
          <SelectField initData={initData && initData.endYear ? initData.endYear : null} ref="EndYear" {...props.endYear} />
        </li>
        <li style={{width: '50%'}}>
          <TextField initData={initData && initData.description ? initData.description : null} ref="Description" {...props.description}/>
        </li>
      </ul>
    );
  }

  getData = () => {
    const startYear = this.refs.StartYear.getValue(),
        endYear = this.refs.EndYear.getValue(),
        description = this.refs.Description.getValue();
      return {
        data: {
          startYear: startYear,
          endYear: endYear,
          description: description
        },
        isValid: (startYear && endYear && description ? true : false)
      }
  }

}
