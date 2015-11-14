import React, { Component, PropTypes } from 'react';
import mui, {List, Checkbox, ListItem} from 'material-ui';

export default class SchoolRole extends Component {

  static propTypes = {
    initData: PropTypes.array
  };

  state = {
    roles: []
  }

  render() {

    const items = [
      {payload: 'lopTruong', text: 'Lớp trưởng'},
      {payload: 'lopPho', text: 'Lớp phó'},
      {payload: 'biThu', text: 'Bí thư'}
    ];

    const listItems = items.map((item, index) => {
      return (
        <ListItem key={index} primaryText={item.text} leftCheckbox={<Checkbox onCheck={this.checkBoxOnCheck.bind(this, item.payload)}/>} />
      );
    });

    return (
        <List subheader="Chức vụ tại trường, lớp">
          {listItems}
        </List>
    );
  }

  componentDidMount = () => {
    const initData = this.props.initData;
    if (initData) {
      this.setState({
        roles: initData
      })
    }
  }

  checkBoxOnCheck = (clickedItem, event, isChecked) => {
    if (!isChecked) {
      this.setState({
        roles: this.state.roles.filter(role => {
          return role !== clickedItem
        })
      });
    } else {
      this.setState({
        roles: [...this.state.roles, clickedItem]
      });
    }
  }

  getData = () => {
    return this.state.roles;
  }
}
