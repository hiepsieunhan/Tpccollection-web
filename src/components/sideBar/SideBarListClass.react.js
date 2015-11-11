import React, { Component, PropTypes } from 'react';
import { reloadStudents } from '../../actions';

export default class SideBarListClass extends Component {

  static propTypes = {
    year: PropTypes.string.isRequired,
    class_: PropTypes.string.isRequired,
    classesList: PropTypes.object.isRequired,
    dispatch: PropTypes.func,
    shouldShow: PropTypes.bool.isRequired
  }

  state = {
    show: false
  }

  render() {
    const currentClass = this.props.classesList[this.props.class_] || [];

    const studentList = currentClass.sort().map((student, index)=> {
      return (
        <li key={index} className="highlight student"> {student} </li>
      );
    });

    const style = (this.state.show && this.props.shouldShow)? {} : {display: 'none'};

    const list = (
      <ul>
        <li className="class highlight" onClick={this.handleClick}>
          {this.props.class_}
        </li>
        <li style={style}>
         <ul>
            {studentList}
          </ul>
        </li>
      </ul>
    );

    return (
      <span>
        {list}
      </span>
    );
  }

  componentDidUpdate = () => {
    if (!this.props.shouldShow && this.state.show) {
      this.toggle();
    }
  }

  handleClick = () => {
    console.log('Click');
    if (!this.state.show) {
      this.loadStudents();
    }
    this.toggle();
  }

  toggle = () => {
    this.setState({
      show: !this.state.show
    });
  }

  loadStudents = () => {
    const { dispatch } = this.props;
    dispatch(reloadStudents(this.props.year, this.props.class_));
  }
}
