import React, {PropTypes, Component} from 'react';
import SelectField from '../SelectField.react';
import Utils from '../../utils/supportedFuncs';
import { IconButton } from 'material-ui';

const getInitData = () => {
  return {
      levels: [
        {payload: 'quocGia', text: 'Quốc gia'},
        {payload: 'quocTe', text: 'Quốc tế'}
      ],
      years: Utils.getListYear(),
      list: {
        'quocTe': {
          'subjects': [
            {payload: 'toan', text: 'Toan'},
            {payload: 'ly', text: 'Vat Ly'},
            {payload: 'hoa', text: 'Hoa Hoc'},
          ],
          'awards': [
            {payload: 'goldMedal', text: 'Huy chuong Vang'},
            {payload: 'silveMedal', text: 'Huy chuong Bac'}
          ]
        },
        'quocGia': {
          'subjects': [
            {payload: 'van', text: 'Ngu Van'},
            {payload: 'anh', text: 'Tieng Anh'}
          ],
          'awards': [
            {payload: 'firstPrice', text: 'Giai Nhat'},
            {payload: 'secondPrice', text: 'Giai Nhi'}
          ]
        }
      }
  }
}

const getInitSubData = (initData) => {
  const data = getInitData();
  let result = {
    awards: [],
    subjects: []
  }
  if (initData && initData.level)
    result = data.list[initData.level] || result;

  return result;
}


export default class Award extends Component {

  static propTypes = {
    onDelete: PropTypes.func.isRequired,
    initData: PropTypes.object
  }

  state = getInitSubData(this.props.initData)

  render() {

    const data = getInitData();

    const that = this;

    const props = {
      level: {
        menuItems: data.levels,
        label: 'Cấp độ',
        onChange: this.levelOnChange.bind(that, data)
      },
      year: {
        menuItems: data.years,
        label: 'Năm'
      },
      subject: {
        menuItems: that.state.subjects,
        label: 'Môn thi'
      },
      award: {
        menuItems: that.state.awards,
        label: 'Giải thuởng'
      }

    }

    const initData = this.props.initData;

    return (
      <ul>
        <li className="icon-delete-container">
          <IconButton iconClassName="material-icons" tooltip="Xóa" onClick={this.props.onDelete}>delete</IconButton>
        </li>
        <li style={{width: '15%'}}>
          <SelectField initData={initData && initData.level ? initData.level : null} ref="Level" {...props.level}/>
        </li>
        <li style={{width: '15%'}}>
          <SelectField initData={initData && initData.year ? initData.year : null} ref="Year" {...props.year}/>
        </li>
        <li style={{width: '25%'}}>
          <SelectField initData={initData && initData.subject ? initData.subject : null} ref="Subject" {...props.subject}/>
        </li>
        <li style={{width: '25%'}}>
          <SelectField initData={initData && initData.award ? initData.award : null} ref="Award" {...props.award}/>
        </li>
      </ul>
    );
  }

  levelOnChange = (data, value) => {
    this.setState({
      awards: data.list[value].awards,
      subjects: data.list[value].subjects
    });
  }

  getData = () => {
      const level = this.refs.Level.getValue(),
        year = this.refs.Year.getValue(),
        subject = this.refs.Subject.getValue(),
        award = this.refs.Award.getValue();
      return {
        data: {
          level: level,
          year: year,
          subject: subject,
          award: award
        },
        isValid: (level && year && subject && award ? true : false)
      }
  }
}
