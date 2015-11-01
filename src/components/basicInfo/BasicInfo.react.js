import React, {Component} from 'react';
import Name from './Name.react';
import SelectField from '../SelectField.react';
import SchoolRole from './SchoolRole.react';
import {DatePicker} from 'material-ui';
import Utils from '../../utils/supportedFuncs';

const initData = () => {
  let data = {};

  data.years = Utils.getListClassYear();

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

    return (
      <div>
        <Name ref="Name"/>
        <ul>
          <li style={{width: '30%', marginRight: '20%', paddingRight: '0%'}}>
            <SelectField ref="Year" menuItems={data.years} label="Niên Khóa" />
            <DatePicker fullWidth={True} ref="BirthDate" floatingLabelText="Ngày sinh" mode="landscape"/>
            <SelectField ref="Class" menuItems={data.classes} label="Lớp"/>
          </li>
          <li>
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
