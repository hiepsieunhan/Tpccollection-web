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
    {payload: 'Toan', text: 'Toan'},
    {payload: 'Ly', text: 'Ly'},
    {payload: 'Hoa', text: 'Hoa'},
    {payload: 'Tin', text: 'Tin'},
    {payload: 'Sinh', text: 'Sinh'}
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
    const year = 1;// (initData && initData.year && this.state.isFirstRender) ? initData.year : null;
    const mClass = 1;//(initData && initData.class && this.state.isFirstRender) ? initData.class : null;

    return (
      <div>
        <Name initData={initData && initData.name ? initData.name : null} ref="Name"/>
        <ul>
          <li style={{width: '30%', marginRight: '20%', paddingRight: '0%'}}>
            <SelectField selectedIndex={year} ref="Year" menuItems={data.years} label="Niên Khóa" />
            <DatePicker fullWidth={True} ref="BirthDate" floatingLabelText="Ngày sinh" mode="landscape"/>
            <SelectField selectedIndex={mClass} ref="Class" menuItems={data.classes} label="Lớp"/>
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
      this.refs.BirthDate.setDate(this.parseStringToDate(initData.birthDate));
    }
    this.setState({
      isFirstRender: false
    });
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
