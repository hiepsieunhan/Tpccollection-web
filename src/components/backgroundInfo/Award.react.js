import React, {PropTypes, Component} from 'react';
import SelectField from '../SelectField.react';
import Utils from '../../utils/supportedFuncs';
import { IconButton } from 'material-ui';


export default class Award extends Component {

  static propTypes = {
    onDelete: PropTypes.func.isRequired,
    initData: PropTypes.object
  }

  state = {
    awards: [],
    subjects: []
  }

  render() {

    const data = {
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

    return (
      <ul>
        <li className="icon-delete-container">
          <IconButton iconClassName="material-icons" tooltip="Xóa" onClick={this.props.onDelete}>delete</IconButton>
        </li>
        <li style={{width: '15%'}}>
          <SelectField ref="Level" {...props.level}/>
        </li>
        <li style={{width: '15%'}}>
          <SelectField ref="Year" {...props.year}/>
        </li>
        <li style={{width: '25%'}}>
          <SelectField ref="Subject" {...props.subject}/>
        </li>
        <li style={{width: '25%'}}>
          <SelectField ref="Award" {...props.award}/>
        </li>
      </ul>
    );
  }

  componentDidMount = () => {
    const initData = this.props.initData;
    if (initData) {
      this.refs.Level.setValue(initData.level);
      this.refs.Year.setValue(initData.years);
      this.refs.Subject.setValue(initData.subject);
      this.refs.Award.setValue(initData.award);
    }
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
