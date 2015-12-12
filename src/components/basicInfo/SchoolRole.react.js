import React, { Component, PropTypes } from 'react';
import mui, {List, Checkbox, ListItem} from 'material-ui';

const getItems = () => {
  return [
      {payload: 'Lớp trưởng', text: 'Lớp trưởng'},
      {payload: 'Lớp phó', text: 'Lớp phó'},
      {payload: 'Bí thư/phó bí thư lớp', text: 'Bí thư/phó bí thư lớp'},
      {payload: 'Bí thư/phó bí thư trường', text: 'Bí thư/phó bí thư trường'}
  ];
}

export default class SchoolRole extends Component {

  static propTypes = {
    initData: PropTypes.array
  };

  state = {
    roles: this.props.initData ? this.props.initData : []
  }

  render() {

    const items = getItems();

    const listItems = items.map((item, index) => {
      return (
        <ListItem key={index} primaryText={item.text} leftCheckbox={<Checkbox ref={index} onCheck={this.checkBoxOnCheck.bind(this, item.payload)}/>} />
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
      const items = getItems();
      for (let i = 0; i < items.length; i++) {
        if (initData.indexOf(items[i].payload) != -1) {
          this.refs[i].setChecked(true);
        }
      }
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
