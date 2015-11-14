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

    return (
      <ul>
        <li className="icon-delete-container">
          <IconButton iconClassName="material-icons" tooltip="Xóa" onClick={this.props.onDelete}>delete</IconButton>
        </li>
        <li style={{width: '15%'}}>
          <SelectField ref="StartYear" {...props.startYear} />
        </li>
        <li style={{width: '15%'}}>
          <SelectField ref="EndYear" {...props.endYear} />
        </li>
        <li style={{width: '50%'}}>
          <TextField ref="Description" {...props.description}/>
        </li>
      </ul>
    );
  }

  componentDidMount = () => {
    const initData = this.props.initData;
    if (initData) {
      this.refs.StartYear.setValue(initData.startYear);
      this.refs.EndYear.setValue(initData.endYear);
      this.refs.Description.setValue(initData.description);
    }
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
