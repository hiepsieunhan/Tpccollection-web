import React, {Component} from 'react';
import Name from './Name.react';
import SelectField from '../SelectField.react';
import SchoolRole from './SchoolRole.react';
import {DatePicker} from 'material-ui';

const initData = () => {
  let data = {};
  let currentYear = (new Date()).getFullYear();
  let firstYear = 1970;
  data.years = [];
  for (var i = firstYear; i <= currentYear; i++) {
    let year = i + '-' + (i + 3);
    data.years.push({payload: year, text: year});
  }

  data.classes = [
    {payload: 'Toan', text: 'Toan'},
    {payload: 'Ly', text: 'Ly'},
    {payload: 'Hoa', text: 'Hoa'},
    {payload: 'Tin', text: 'Tin'},
    {payload: 'Sinh', text: 'Sinh'}
  ];
  return data;
}

export default class BasicInfo extends Component {

  render() {
    const True = true;
    const data = initData();
    const style = {
      root: {
        padding: '20px'
      },
      ul: {
        'listStyleType': 'none',
        'padding': 0
      },
      li: {
        'display': 'inline-block',
        'width': '50%',
        'verticalAlign': 'middle'
      }
    }

    return (
      <div style={style.root}>
        <Name ref="Name"/>
        <ul style={style.ul}>
          <li style={{...style.li, width: '30%', marginRight: '20%'}}>
            <SelectField ref="Year" menuItems={data.years} label="Niên Khóa" />
            <DatePicker fullWidth={True} ref="BirthDate" floatingLabelText="Ngày sinh" mode="landscape"/>
            <SelectField ref="Class" menuItems={data.classes} label="Lớp"/>
          </li>
          <li style={style.li}>
            <SchoolRole ref="SchoolRole"/>
          </li>

        </ul>
      </div>
    );
  }

  getData = () => {
    let name = this.refs.Name.getData();
    let year = this.refs.Year.getValue();
    let birthDate = this.parseDateToString(this.refs.BirthDate.getDate());
    let mClass = this.refs.Class.getValue();
    let roles = this.refs.SchoolRole.getData();
    let data = {
      data: {
        name: name.data,
        year: year,
        birthDate: birthDate,
        class: mClass,
        roles: roles
      },
      isValid: (year && birthDate && mClass && name.isValid ? true : false)
    }
    return data;
  }

  parseDateToString = (date) => {
    if (!date) return '';
    return date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear();
  }

  parseStringToDate = (date) => {
    return null;
  }

}
