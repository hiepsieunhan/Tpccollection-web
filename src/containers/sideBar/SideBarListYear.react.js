import React, { Component, PropTypes } from 'react';
import SideBarListClass from './SideBarListClass.react';
import { connect } from 'react-redux';
import { reloadClasses } from '../../actions/sideBar';

export default class SideBarListYear extends Component {

  static propTypes = {
    year: PropTypes.string.isRequired,
    list: PropTypes.object.isRequired,
    dispatch: PropTypes.func
  }

  state = {
    show: false
  }

  render() {

    let currentYear = this.props.list[this.getId()] || [];

    const classList = currentYear.map((class_, index) => {
      return (
        <SideBarListClass key={index} year={this.props.year} class_={class_} shouldShow={this.state.show} dispatch={this.props.dispatch} list={this.props.list}/>
      );
    });

    const style = this.state.show ? {} : {display: 'none'};

    const list = (
      <ul>
        <li className="year highlight" onClick={this.handdleClick}>
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

  getId = () => {
    return this.props.year;
  }

  handdleClick = () => {
    if (!this.state.show && !this.props.list[this.getId()]) {
      this.loadCLasses();
    }
    this.toggle();
  }

  toggle = () => {
    this.setState({
      show: !this.state.show
    });
  }

  loadCLasses = () => {
    const { dispatch } = this.props;
    dispatch(reloadClasses(this.props.year));
  }

}

