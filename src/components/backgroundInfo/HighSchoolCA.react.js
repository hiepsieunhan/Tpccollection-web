import React, {PropTypes, Component} from 'react';
import SelectField from '../SelectField.react';
import TextField from '../TextField.react';
import Utils from '../../utils/supportedFuncs';

export default class HighSchoolCA extends Component {

  static propTypes = {
    onDelete: PropTypes.func.isRequired
  }

  render() {
    const True = true;

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

    return (
      <ul style={style.ul}>
        <li style={{...style.li, width: '15%'}}>
          <SelectField ref="StartYear" menuItems={data.years} label="Từ năm" />
        </li>
        <li style={{...style.li, width: '15%'}}>
          <SelectField ref="EndYear" menuItems={data.years} label="Tới năm" />
        </li>
        <li style={{...style.li, width: '50%'}}>
          <TextField ref="Description" required={True} multiLine={True} label="Hoạt động tham gia"/>
        </li>
        <li style={{...style.li, width: '10%'}}>
          <button onClick={this.props.onDelete}> Delete </button>
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
