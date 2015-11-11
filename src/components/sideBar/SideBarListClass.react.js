import React, { Component, PropTypes } from 'react';

export default class SideBarListClass extends Component {

  static propTypes = {
    studentList: PropTypes.array.isRequired,
    class_: PropTypes.string.isRequired,
    shouldShow: PropTypes.bool.isRequired
  }

  state = {
    show: false
  }

  render() {
    const data = this.props.studentList;

    const studentList = data.sort().map((student, index)=> {
      return (
        <li key={index} className="highlight student"> {student} </li>
      );
    });

    const style = (this.state.show && this.props.shouldShow)? {} : {display: 'none'};

    const list = (
      <ul>
        <li className="class highlight" onClick={this.toggle}>
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

  toggle = () => {
    this.setState({
      show: !this.state.show
    });
  }
}
