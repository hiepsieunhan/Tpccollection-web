import React, {Component} from 'react';
import Name from './Name.react';
import SelectField from '../SelectField.react';
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

  console.log(data.years);

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
    const data = initData();
    const style = {
      root: {
        width: '50%'
      }
    }
    return (
      <div style={style.root}>
        <Name ref="Name"/>
        <SelectField ref="Year" menuItems={data.years} label="Niên Khóa"/>
        <DatePicker ref="BirthDate" floatingLabelText="Ngày sinh" mode="landscape"/>
        <SelectField ref="Class" menuItems={data.classes} label="Lớp"/>
      </div>
    );
  }

  getData = () => {
    let name = this.refs.Name.getData();
    let year = this.refs.Year.getValue();
    let birthDate = this.parseDateToString(this.refs.BirthDate.getDate());
    let mClass = this.refs.Class.getValue();
    let data = {
      data: {
        name: name.data,
        year: year,
        birthDate: birthDate,
        class: mClass
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