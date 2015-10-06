import React, {PropTypes, Component} from 'react';
import SelectField from '../SelectField.react';

var getListYear = () => {
  let startYear = 1970, endYear = (new Date()).getFullYear();
  let result = [];
  for (var i = startYear; i <= endYear; i++) {
    result.push({
      payload: i,
      text: i
    });
  }
  return result;
}

export default class Award extends Component {

  static propTypes = {
    onDelete: PropTypes.func.isRequired
  }

  state = {
    awards: [],
    subjects: []
  }

  render() {

    const True = true;

    const style = {
      ul: {
        'listStyleType': 'none',
        'padding': 0
      },
      li: {
        'display': 'inline-block',
        'verticalAlign': 'middle',
        marginRight: '2%'
      }
    }

    const data = {
      levels: [
        {payload: 'quocGia', text: 'Quốc gia'},
        {payload: 'quocTe', text: 'Quốc tế'}
      ],
      years: getListYear(),
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

    return (
      <ul style={style.ul}>
        <li style={{...style.li, width: '15%'}}>
          <SelectField ref="Level" menuItems={data.levels} label="Cấp độ" onChange={this.levelOnChange.bind(this, data)}/>
        </li>
        <li style={{...style.li, width: '15%'}}>
          <SelectField ref="Year" menuItems={data.years} label="Năm"/>
        </li>
        <li style={{...style.li, width: '25%'}}>
          <SelectField ref="Subject" menuItems={this.state.subjects} label="Môn thi"/>
        </li>
        <li style={{...style.li, width: '25%'}}>
          <SelectField ref="Award" menuItems={this.state.awards} label="Giải thuởng"/>
        </li>
        <li style={{...style.li, width: '10%'}}>
          <button onClick={this.props.onDelete}> Delete </button>
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
      let level = this.refs.Level.getValue(),
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