import React, { Component, PropTypes } from 'react';
import SideBarListClass from './SideBarListClass.react';

export default class SideBarListYear extends Component {

  static propTypes = {
    classList: PropTypes.object.isRequired,
    year: PropTypes.string.isRequired
  }

  state = {
    show: false
  }

  render() {
    const data = this.props.classList;

    const classList = Object.keys(data).map(class_ => {
      return (
        <SideBarListClass studentList={data[class_]} class_={class_} shouldShow={this.state.show}/>
      );
    });

    const style = this.state.show ? {} : {display: 'none'};

    const list = (
      <ul>
        <li className="year highlight" onClick={this.toggle}>
          {this.props.year}
        </li>
        <li style={style}>
          {classList}
        </li>
      </ul>
    );

    return (
      <span>
        {list}
      </span>
    );
  }

  toggle = () => {
    this.setState({
      show: !this.state.show
    });
  }

}
