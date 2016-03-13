import React, {
  Component,
  PropTypes
} from 'react';
import Name from './Name.react';
import SelectField from '../SelectField.react';
import SchoolRole from './SchoolRole.react';
import {DatePicker} from 'material-ui';
import Utils from '../../utils/supportedFuncs';


const setUpData = () => {
  let data = {};

  data.years = Utils.getListClassYear();

  data.classes = [
    {payload: 'Chuyên Toán', text: 'Chuyên Toán'},
    {payload: 'Chuyên Lý', text: 'Chuyên Lý'},
    {payload: 'Chuyên Hóa', text: 'Chuyên Hóa'},
    {payload: 'Chuyên Sinh', text: 'Chuyên Sinh'},
    {payload: 'Chuyên Tin', text: 'Chuyên Tin'},
    {payload: 'Chuyên Văn', text: 'Chuyên Văn'},
    {payload: 'Chuyên Anh 1', text: 'Chuyên Anh 1'},
    {payload: 'Chuyên Anh 2', text: 'Chuyên Anh 2'},
    {payload: 'Chuyên Pháp', text: 'Chuyên Pháp'},
    {payload: 'Song Ngữ 1', text: 'Song Ngữ 1'},
    {payload: 'Song Ngữ 2', text: 'Song Ngữ 2'},
    {payload: 'Chuyên Trung', text: 'Chuyên Trung'},
    {payload: 'Chuyên Nga', text: 'Chuyên Nga'},
    {payload: 'Chuyên Sử', text: 'Chuyên Sử'},
    {payload: 'Chuyên Địa', text: 'Chuyên Địa'},
    {payload: 'Chuyên Sử-Địa', text: 'Chuyên Sử-Địa'},
    {payload: 'Tự Nhiên 1', text: 'Tự Nhiên 1'},
    {payload: 'Tự Nhiên 2', text: 'Tự Nhiên 2'},
    {payload: 'Xã Hội', text: 'Xã Hội'},
    {payload: 'B1', text: 'B1'},
    {payload: 'B2', text: 'B2'}
  ];
  return data;
}

export default class BasicInfo extends Component {

  static propTypes = {
    initData: PropTypes.object
  }

  state = {
    isFirstRender: true
  }

  render() {
    const True = true;
    const data = setUpData();
    const initData = this.props.initData;

    return (
      <div>
        <Name initData={initData && initData.name ? initData.name : null} ref="Name"/>
        <ul>
          <li style={{width: '30%', marginRight: '20%', paddingRight: '0%'}}>
            <SelectField initData={initData ? initData.year : null} ref="Year" menuItems={data.years} label="Niên Khóa" />
            <DatePicker fullWidth={True} ref="BirthDate" floatingLabelText="Ngày sinh (mm-dd-yyyy)" mode="landscape"/>
            <SelectField initData={initData ? initData.class : null} ref="Class" menuItems={data.classes} label="Lớp"/>
          </li>
          <li>
            <SchoolRole initData={initData && initData.roles ? initData.roles : null} ref="SchoolRole"/>
          </li>

        </ul>
      </div>
    );
  }

  componentDidMount = () => {
    const initData = this.props.initData;
    if (initData) {
      if (initData.birthDate) this.refs.BirthDate.setDate(this.parseStringToDate(initData.birthDate));
    }
  }

  getData = () => {
    const name = this.refs.Name.getData();
    const year = this.refs.Year.getValue();
    const birthDate = this.parseDateToString(this.refs.BirthDate.getDate());
    const mClass = this.refs.Class.getValue();
    const roles = this.refs.SchoolRole.getData();
    const data = {
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
    return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
  }

  parseStringToDate = (date) => {
    return new Date(date);
  }

}
