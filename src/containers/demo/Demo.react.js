import React, {Component} from 'react';
import {DropDownMenu, DatePicker} from 'material-ui';
import Name from '../basicInfo/Name.react';
import SelectField from '../../components/SelectField.react';
var injectTapEventPlugin = require('react-tap-event-plugin');
injectTapEventPlugin();


export default class Demo extends Component {

  render() {

    let menuItems = [
       { payload: '1', text: 'Never' },
       { payload: '2', text: 'Every Night' },
       { payload: '3', text: 'Weeknights' },
       { payload: '4', text: 'Weekends' },
       { payload: '5', text: 'Weekly' },
    ];

    return (
      <div>
        <SelectField ref="Class" menuItems={menuItems} label={"Lớp"}/>
        <DatePicker ref="BirthDate" floatingLabelText="Ngày sinh" mode="landscape"/>
        <br/>
        <button onClick={this.getData}> show </button>
      </div>
    );

  }

  getData = () => {

  }
}
